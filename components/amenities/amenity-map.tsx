'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { COMMUNITY, communityMapEmbedSrc } from '@/lib/community';
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
  CURATED_AMENITIES,
  curatedForCategory,
} from '@/lib/amenities-data';
import { searchCategory } from '@/lib/amenities-places-search';
import {
  loadGoogleMaps,
  mapsAuthFailed,
} from '@/lib/google-maps-loader';
import { cn } from '@/lib/utils';

type AmenityMapProps = {
  /** Shorter height on homepage / secondary placements */
  compact?: boolean;
  /** Show curated list under fallback embed */
  showStaticList?: boolean;
  className?: string;
};

type MapMode = 'idle' | 'loading' | 'interactive' | 'fallback';

type MapMarker = {
  addListener: (event: string, handler: () => void) => void;
  setMap?: (map: google.maps.Map | null) => void;
  map?: google.maps.Map | null;
};

type MarkerLibrary = {
  AdvancedMarkerElement: new (opts: {
    map: google.maps.Map;
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    title?: string;
  }) => MapMarker;
};

function placeDisplayName(displayName: string | null | undefined): string {
  return displayName?.trim() || 'Place';
}

function toLatLngLiteral(
  loc: google.maps.LatLng | google.maps.LatLngLiteral,
): google.maps.LatLngLiteral {
  if (typeof (loc as google.maps.LatLng).lat === 'function') {
    const ll = loc as google.maps.LatLng;
    return { lat: ll.lat(), lng: ll.lng() };
  }
  return loc as google.maps.LatLngLiteral;
}

function mapsApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined;
}

function mapsMapId(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined;
}

function directionsHref(lat: number, lng: number, address?: string): string {
  const dest = address
    ? encodeURIComponent(address)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
}

function buildInfoWindowContent(
  name: string,
  address: string,
  mapsUri?: string,
  lat?: number,
  lng?: number,
): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'p-1 max-w-[240px]';

  const title = document.createElement('p');
  title.className = 'font-semibold text-gray-900';
  title.textContent = name;
  wrap.appendChild(title);

  if (address) {
    const addr = document.createElement('p');
    addr.className = 'text-sm text-gray-700 mt-1';
    addr.textContent = address;
    wrap.appendChild(addr);
  }

  const link = document.createElement('a');
  link.className =
    'text-sm font-medium text-amber-700 underline mt-2 inline-block';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.href =
    mapsUri ?? directionsHref(lat ?? COMMUNITY.center.lat, lng ?? COMMUNITY.center.lng, address);
  link.textContent = 'Directions';
  wrap.appendChild(link);

  return wrap;
}

export default function AmenityMap({
  compact = false,
  showStaticList = true,
  className,
}: AmenityMapProps) {
  const mapHeight = compact
    ? 'min-h-[320px] h-[50vh] max-h-[420px]'
    : 'min-h-[400px] h-[55vh] max-h-[560px]';
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const communityMarkerRef = useRef<MapMarker | null>(null);
  const placeMarkersRef = useRef<MapMarker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<MapMode>('idle');
  const [category, setCategory] = useState<AmenityCategoryId>('golf');
  const [placesListFallback, setPlacesListFallback] = useState(false);

  const filterGroupId = useId();

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((marker) => {
      if ('setMap' in marker && typeof marker.setMap === 'function') {
        marker.setMap(null);
      } else {
        marker.map = null;
      }
    });
    placeMarkersRef.current = [];
  }, []);

  const enterFallback = useCallback(() => {
    clearPlaceMarkers();
    mapRef.current = null;
    communityMarkerRef.current = null;
    infoWindowRef.current?.close();
    infoWindowRef.current = null;
    setMode('fallback');
  }, [clearPlaceMarkers]);

  useEffect(() => {
    const onAuthFailure = () => enterFallback();
    window.addEventListener('gmaps:auth-failure', onAuthFailure);
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
  }, [enterFallback]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const initMap = useCallback(async () => {
    if (mapsAuthFailed) {
      enterFallback();
      return;
    }

    const apiKey = mapsApiKey();
    if (!apiKey || !mapDivRef.current) {
      enterFallback();
      return;
    }

    setMode('loading');

    try {
      await loadGoogleMaps(apiKey);
      const { Map } = (await google.maps.importLibrary(
        'maps',
      )) as google.maps.MapsLibrary;
      const mapId = mapsMapId();

      const map = new Map(mapDivRef.current, {
        center: { lat: COMMUNITY.center.lat, lng: COMMUNITY.center.lng },
        zoom: COMMUNITY.mapDefaultZoom,
        mapId: mapId ?? undefined,
        mapTypeControl: false,
        streetViewControl: !compact,
        fullscreenControl: true,
      });
      mapRef.current = map;
      infoWindowRef.current = new google.maps.InfoWindow();

      const position = {
        lat: COMMUNITY.center.lat,
        lng: COMMUNITY.center.lng,
      };

      if (mapId) {
        const markerLib = (await google.maps.importLibrary(
          'marker',
        )) as MarkerLibrary;
        communityMarkerRef.current = new markerLib.AdvancedMarkerElement({
          map,
          position,
          title: COMMUNITY.name,
        });
      } else {
        communityMarkerRef.current = new google.maps.Marker({
          map,
          position,
          title: COMMUNITY.name,
        });
      }

      communityMarkerRef.current.addListener('click', () => {
        infoWindowRef.current?.setContent(
          buildInfoWindowContent(
            COMMUNITY.name,
            COMMUNITY.center.fullAddress,
            directionsHref(
              COMMUNITY.center.lat,
              COMMUNITY.center.lng,
              COMMUNITY.center.fullAddress,
            ),
          ),
        );
        infoWindowRef.current?.open({
          map,
          anchor: communityMarkerRef.current as google.maps.Marker,
        });
      });

      setMode('interactive');
    } catch {
      enterFallback();
    }
  }, [compact, enterFallback]);

  useEffect(() => {
    if (!visible || mode !== 'idle') return;
    void initMap();
  }, [visible, mode, initMap]);

  const runCategorySearch = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const map = mapRef.current;
      if (!map || mode !== 'interactive') return;

      const config = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!config) return;

      clearPlaceMarkers();
      infoWindowRef.current?.close();
      setPlacesListFallback(false);

      try {
        const places = await searchCategory(
          { lat: COMMUNITY.center.lat, lng: COMMUNITY.center.lng },
          categoryId,
        );

        const bounds = new google.maps.LatLngBounds();
        bounds.extend({
          lat: COMMUNITY.center.lat,
          lng: COMMUNITY.center.lng,
        });

        const mapId = mapsMapId();
        let AdvancedMarkerElement: MarkerLibrary['AdvancedMarkerElement'] | null =
          null;
        if (mapId) {
          const markerLib = (await google.maps.importLibrary(
            'marker',
          )) as MarkerLibrary;
          AdvancedMarkerElement = markerLib.AdvancedMarkerElement;
        }

        for (const place of places) {
          const loc = place.location;
          if (!loc) continue;
          const name = placeDisplayName(place.displayName);
          const address = place.formattedAddress ?? '';
          const latLng = toLatLngLiteral(loc);
          bounds.extend(latLng);

          let marker: MapMarker;
          if (AdvancedMarkerElement) {
            marker = new AdvancedMarkerElement({
              map,
              position: latLng,
              title: name,
            });
          } else {
            marker = new google.maps.Marker({
              map,
              position: latLng,
              title: name,
            });
          }

          marker.addListener('click', () => {
            infoWindowRef.current?.setContent(
              buildInfoWindowContent(
                name,
                address,
                place.googleMapsURI ?? undefined,
                latLng.lat,
                latLng.lng,
              ),
            );
            infoWindowRef.current?.open({
              map,
              anchor: marker as google.maps.Marker,
            });
          });
          placeMarkersRef.current.push(marker);
        }

        if (places.length > 0) {
          map.fitBounds(bounds);
        }
      } catch {
        setPlacesListFallback(true);
      }
    },
    [clearPlaceMarkers, mode],
  );

  useEffect(() => {
    if (mode === 'interactive') {
      void runCategorySearch(category);
    }
  }, [category, mode, runCategorySearch]);

  const staticList = curatedForCategory(category);
  const listItems =
    staticList.length > 0 ? staticList : CURATED_AMENITIES.slice(0, 4);

  const showEmbed =
    mode === 'fallback' || (mode === 'idle' && !mapsApiKey()) || mapsAuthFailed;

  return (
    <div ref={containerRef} className={cn('w-full', className)}>
      <div
        role="group"
        aria-labelledby={`${filterGroupId}-label`}
        className="mb-4 flex flex-wrap gap-2"
      >
        <span id={`${filterGroupId}-label`} className="sr-only">
          Filter nearby places by category
        </span>
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = category === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={selected}
              aria-label={cat.ariaLabel}
              onClick={() => setCategory(cat.id)}
              className={cn(
                'rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600',
                selected
                  ? 'bg-[#0b1231] text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        className={cn(
          'relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-inner',
          mapHeight,
        )}
        aria-label={`Map of amenities near ${COMMUNITY.name}`}
      >
        {showEmbed ? (
          <iframe
            title={`Map centered on ${COMMUNITY.center.label}, ${COMMUNITY.name}`}
            src={communityMapEmbedSrc()}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div ref={mapDivRef} className="absolute inset-0 h-full w-full" />
        )}
        {mode === 'loading' && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-100/80 text-sm text-gray-600"
            aria-live="polite"
          >
            Loading map…
          </div>
        )}
      </div>

      <p className="mt-2 flex items-start gap-2 text-sm text-gray-600">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />
        <span>
          Center pin: <strong>{COMMUNITY.name}</strong> ({COMMUNITY.center.label}
          ). Switch categories to explore dining, golf, healthcare, and more.
        </span>
      </p>

      {showStaticList && (
        <div className="mt-6">
          <h3 className="mb-3 text-lg font-semibold text-gray-900">
            Featured places near {COMMUNITY.name} —{' '}
            {AMENITY_CATEGORIES.find((c) => c.id === category)?.label}
          </h3>
          {placesListFallback && (
            <p className="mb-3 text-sm text-gray-600" role="status">
              Live nearby results are unavailable right now. Featured places for
              this category are listed below.
            </p>
          )}
          <ul className="grid gap-3 sm:grid-cols-2">
            {listItems.map((place) => (
              <li
                key={`${place.category}-${place.name}`}
                className="rounded-lg border border-gray-200 bg-white p-4 text-sm"
              >
                <p className="font-semibold text-gray-900">{place.name}</p>
                {place.address ? (
                  <p className="mt-1 text-gray-600">{place.address}</p>
                ) : null}
                {place.note ? (
                  <p className="mt-1 text-gray-500">{place.note}</p>
                ) : null}
                {place.address ? (
                  <a
                    href={directionsHref(0, 0, place.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 font-medium text-amber-700 hover:underline"
                  >
                    <Navigation className="h-3.5 w-3.5" aria-hidden />
                    Directions
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
