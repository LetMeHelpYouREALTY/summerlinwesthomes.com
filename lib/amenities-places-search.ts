import type { AmenityCategoryId } from '@/lib/amenities-data';
import { AMENITY_CATEGORIES } from '@/lib/amenities-data';
import { COMMUNITY } from '@/lib/community';

const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
): Promise<google.maps.places.Place[]> {
  const config = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
  if (!config) {
    return Promise.reject(new Error('unknown category'));
  }

  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary(
        'places',
      )) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: [
          'displayName',
          'location',
          'formattedAddress',
          'googleMapsURI',
        ],
        locationRestriction: {
          center,
          radius: COMMUNITY.searchRadiusMeters,
        },
        includedPrimaryTypes: config.primaryTypes,
        maxResultCount: 10,
        rankPreference: 'POPULARITY' as google.maps.places.SearchNearbyRequest['rankPreference'],
      });
      return places;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
