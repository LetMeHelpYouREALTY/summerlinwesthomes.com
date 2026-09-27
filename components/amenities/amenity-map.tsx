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

type PlaceNearbyResult = {
  displayName?: string | { text?: string };
  formattedAddress?: string;
  rating?: number | null;
  location?: google.maps.LatLng | google.maps.LatLngLiteral;
  googleMapsURI?: string;
};

type PlacesLibrary = {
  Place: {
    searchNearby: (request: {
      fields: string[];
      locationRestriction: {
        circle: {
          center: google.maps.LatLngLiteral;
          radius: number;
        };
      };
      includedPrimaryTypes: string[];
      maxResultCount?: number;
    }) => Promise<{ places: PlaceNearbyResult[] }>;
  };
};

type MarkerLibrary = {
  AdvancedMarkerElement: new (opts: {
    map: google.maps.Map;
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    title?: string;
  }) => MapMarker;
};

function mapsLoaded(): boolean {
  return typeof window !== 'undefined' && Boolean(window.google?.maps);
}

function placeDisplayName(displayName: PlaceNearbyResult['displayName']): string {
  if (typeof displayName === 'string') return displayName;
  if (displayName?.text) return displayName.text;
  return 'Place';
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

function loadMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('No window'));
  }
  if (mapsLoaded()) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-amenity-maps-loader]',
    );
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () =>
        reject(new Error('Maps script error')),
      );
      return;
    }

    const script = document.createElement('script');
    script.dataset.amenityMapsLoader = 'true';
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&loading=async`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Maps script failed to load'));
    document.head.appendChild(script);
  });
}

function directionsHref(lat: number, lng: number, address?: string): string {
  const dest = address
    ? encodeURIComponent(address)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
}

function infoWindowHtml(
  name: string,
  address: string,
  rating?: number,
  mapsUri?: string,
): string {
  const ratingLine =
    rating != null && rating > 0
      ? `<p class="text-sm text-gray-600">Rating: ${rating.toFixed(1)}</p>`
      : '';
  const dir = mapsUri ?? directionsHref(0, 0, address);
  return `<div class="p-1 max-w-[240px]">
    <p class="font-semibold text-gray-900">${name}</p>
    ${ratingLine}
    <p class="text-sm text-gray-700 mt-1">${address}</p>
    <a href="${dir}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-amber-700 underline mt-2 inline-block">Directions</a>
  </div>`;
}

export default function AmenityMap({
  compact = false,
  showStaticList = true,
  className,
}: AmenityMapProps) {
  const mapHeight = compact ? 'min-h-[320px] h-[50vh] max-h-[420px]' : 'min-h-[400px] h-[55vh] max-h-[560px]';
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const communityMarkerRef = useRef<MapMarker | null>(null);
  const placeMarkersRef = useRef<MapMarker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<MapMode>('idle');
  const [category, setCategory] = useState<AmenityCategoryId>('golf');
  const [loadError, setLoadError] = useState<string | null>(null);

  const filterGroupId = useId();

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

  const initMap = useCallback(async () => {
    const apiKey = mapsApiKey();
    if (!apiKey || !mapDivRef.current) {
      setMode('fallback');
      return;
    }

    setMode('loading');
    setLoadError(null);

    try {
      await loadMapsScript(apiKey);
      const { Map } = await google.maps.importLibrary('maps');
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

      const communityInfo = infoWindowHtml(
        COMMUNITY.name,
        COMMUNITY.center.fullAddress,
        undefined,
        directionsHref(
          COMMUNITY.center.lat,
          COMMUNITY.center.lng,
          COMMUNITY.center.fullAddress,
        ),
      );
      communityMarkerRef.current.addListener('click', () => {
        infoWindowRef.current?.setContent(communityInfo);
        infoWindowRef.current?.open({
          map,
          anchor: communityMarkerRef.current as google.maps.Marker,
        });
      });

      setMode('interactive');
    } catch {
      setLoadError('Map unavailable');
      setMode('fallback');
    }
  }, [compact]);

  useEffect(() => {
    if (!visible || mode !== 'idle') return;
    void initMap();
  }, [visible, mode, initMap]);

  const searchCategory = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const map = mapRef.current;
      const apiKey = mapsApiKey();
      if (!map || !apiKey || mode !== 'interactive') return;

      const config = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!config) return;

      clearPlaceMarkers();
      infoWindowRef.current?.close();

      try {
        const { Place } = (await google.maps.importLibrary(
          'places',
        ) as unknown) as PlacesLibrary;
        const { places } = await Place.searchNearby({
          fields: [
            'displayName',
            'location',
            'formattedAddress',
            'rating',
            'googleMapsURI',
          ],
          locationRestriction: {
            circle: {
              center: {
                lat: COMMUNITY.center.lat,
                lng: COMMUNITY.center.lng,
              },
              radius: COMMUNITY.searchRadiusMeters,
            },
          },
          includedPrimaryTypes: config.primaryTypes,
          maxResultCount: 15,
        });

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
            const html = infoWindowHtml(
              name,
              address,
              place.rating ?? undefined,
              place.googleMapsURI ??
                directionsHref(latLng.lat, latLng.lng, address),
            );
            infoWindowRef.current?.setContent(html);
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
        /* Keep community marker; static list still available */
      }
    },
    [clearPlaceMarkers, mode],
  );

  useEffect(() => {
    if (mode === 'interactive') {
      void searchCategory(category);
    }
  }, [category, mode, searchCategory]);

  const staticList = curatedForCategory(category);

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
        {mode === 'fallback' || (mode === 'idle' && !mapsApiKey()) ? (
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
        {loadError && mode === 'fallback' && (
          <p className="sr-only">{loadError}</p>
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
            Featured places — {AMENITY_CATEGORIES.find((c) => c.id === category)?.label}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {(staticList.length > 0 ? staticList : CURATED_AMENITIES.slice(0, 4)).map(
              (place) => (
                <li
                  key={place.name}
                  className="rounded-lg border border-gray-200 bg-white p-4 text-sm"
                >
                  <p className="font-semibold text-gray-900">{place.name}</p>
                  <p className="mt-1 text-gray-600">{place.address}</p>
                  {place.note ? (
                    <p className="mt-1 text-gray-500">{place.note}</p>
                  ) : null}
                  <a
                    href={directionsHref(0, 0, place.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 font-medium text-amber-700 hover:underline"
                  >
                    <Navigation className="h-3.5 w-3.5" aria-hidden />
                    Directions
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
