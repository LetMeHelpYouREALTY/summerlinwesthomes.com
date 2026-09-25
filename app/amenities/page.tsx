'use client';

import React, { useState } from 'react';
import {
  Flag,
  Mountain,
  ShoppingBag,
  Utensils,
  Car,
  Trees,
  Heart,
  Star,
  MapPin,
  Phone,
  Globe,
  Clock,
  Users,
  Award,
} from 'lucide-react';
import PageHero from '@/components/media/page-hero';
import SectionImage from '@/components/media/section-image';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';
import HeadingCardPhoto from '@/components/media/heading-card-photo';
import type { SiteImageId } from '@/lib/images';

export default function AmenitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const amenities = [
    {
      name: 'TPC Las Vegas Golf Course',
      category: 'golf',
      type: 'Golf Course',
      rating: 4.9,
      address: '9851 Canyon Run Dr, Las Vegas, NV 89144',
      distance: '0.8 miles',
      description:
        'PGA Tour golf course with Red Rock Canyon views, used by many Summerlin West residents',
      features: [
        '18-hole Championship Course',
        'PGA Tour Venue',
        'Pro Shop & Lessons',
        'Restaurant & Bar',
        'Event Space',
      ],
      hours: '6:00 AM - 6:00 PM',
      phone: '(702) 256-2000',
      website: 'https://tpc.com/lasvegas',
      imageId: 'section-golf' as SiteImageId,
    },
    {
      name: 'Red Rock Canyon National Conservation Area',
      category: 'outdoor',
      type: 'National Park',
      rating: 4.8,
      address: '1000 Scenic Loop Dr, Las Vegas, NV 89161',
      distance: '2.3 miles',
      description:
        'Spectacular desert landscape with hiking trails, rock climbing, and scenic drives',
      features: [
        '13-mile Scenic Drive',
        'Hiking Trails',
        'Rock Climbing',
        'Wildlife Viewing',
        'Visitor Center',
      ],
      hours: '6:00 AM - 8:00 PM',
      phone: '(702) 515-5350',
      website: 'https://www.nps.gov/redr',
      imageId: 'section-red-rock' as SiteImageId,
    },
    {
      name: 'Downtown Summerlin',
      category: 'shopping',
      type: 'Shopping Center',
      rating: 4.7,
      address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
      distance: '1.2 miles',
      description:
        'Outdoor shopping destination with retail, dining, and entertainment near ZIP 89135',
      features: [
        '150+ Retail Stores',
        'Fine Dining',
        'Entertainment Venues',
        'Events plaza',
        'Events & Festivals',
      ],
      hours: '10:00 AM - 9:00 PM',
      phone: '(702) 570-8000',
      website: 'https://downtownsummerlin.com',
      imageId: 'section-downtown-summerlin' as SiteImageId,
    },
    {
      name: 'The Ridges Golf Club',
      category: 'golf',
      type: 'Private Golf Club',
      rating: 4.9,
      address: '1000 Ridges Pkwy, Las Vegas, NV 89135',
      distance: '1.5 miles',
      description:
        'Exclusive private golf club with championship course and luxury amenities',
      features: [
        'Private 18-hole Course',
        'Clubhouse & Dining',
        'Tennis Courts',
        'Swimming Pool',
        'Social Events',
      ],
      hours: 'Members Only',
      phone: '(702) 256-2000',
      website: 'https://theridgesgolfclub.com',
      imageId: 'section-golf' as SiteImageId,
    },
    {
      name: 'Summerlin Hospital Medical Center',
      category: 'healthcare',
      type: 'Medical Center',
      rating: 4.6,
      address: '657 N Town Center Dr, Las Vegas, NV 89144',
      distance: '2.1 miles',
      description:
        'Full-service hospital providing comprehensive medical care to the community',
      features: [
        'Emergency Services',
        'Surgical Center',
        'Cardiology',
        'Orthopedics',
        "Women's Health",
      ],
      hours: '24/7 Emergency',
      phone: '(702) 233-7000',
      website: 'https://summerlinhospital.com',
      imageId: 'h3-hospital' as SiteImageId,
    },
    {
      name: 'Red Rock Casino Resort & Spa',
      category: 'entertainment',
      type: 'Casino & Resort',
      rating: 4.5,
      address: '11011 W Charleston Blvd, Las Vegas, NV 89135',
      distance: '3.2 miles',
      description:
        'Full-service casino resort with gaming, dining, and entertainment options',
      features: [
        'Casino Gaming',
        'Multiple Restaurants',
        'Spa & Wellness',
        'Live Entertainment',
        'Hotel Accommodations',
      ],
      hours: '24/7 Gaming',
      phone: '(702) 797-7777',
      website: 'https://redrock.sclv.com',
      imageId: 'h3-casino' as SiteImageId,
    },
    {
      name: 'Summerlin Library',
      category: 'community',
      type: 'Public Library',
      rating: 4.7,
      address: '1771 Inner Circle Dr, Las Vegas, NV 89134',
      distance: '1.8 miles',
      description:
        'Modern public library serving the Summerlin West community with extensive resources',
      features: [
        'Book Collections',
        'Digital Resources',
        'Study Rooms',
        'Community programs',
        'Community Events',
      ],
      hours: '10:00 AM - 8:00 PM',
      phone: '(702) 507-6300',
      website: 'https://lvccld.org',
      imageId: 'h3-library' as SiteImageId,
    },
    {
      name: 'The Summit Club',
      category: 'dining',
      type: 'Fine Dining',
      rating: 4.8,
      address: '2000 Summit Club Dr, Las Vegas, NV 89135',
      distance: '2.4 miles',
      description:
        'Exclusive fine dining experience with panoramic views and gourmet cuisine',
      features: [
        'Gourmet Cuisine',
        'Wine Cellar',
        'Private Dining',
        'Mountain Views',
        'Membership Required',
      ],
      hours: '5:00 PM - 10:00 PM',
      phone: '(702) 256-2000',
      website: 'https://thesummitclub.com',
      imageId: 'h3-pool-patio' as SiteImageId,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Amenities', icon: Star },
    { id: 'golf', name: 'Golf Courses', icon: Flag },
    { id: 'outdoor', name: 'Outdoor Recreation', icon: Mountain },
    { id: 'shopping', name: 'Shopping & Dining', icon: ShoppingBag },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'entertainment', name: 'Entertainment', icon: Users },
    { id: 'community', name: 'Community', icon: Trees },
  ];

  const filteredAmenities = amenities.filter((amenity) => {
    if (selectedCategory === 'all') return true;
    return amenity.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero
        imageId="hero-amenities"
        title="Las Vegas Homes Near Summerlin West Amenities"
        subtitle="Golf courses, shopping, dining, and outdoor recreation around Summerlin West"
      >
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="rounded-full bg-white/20 px-4 py-2">Golf courses</span>
          <span className="rounded-full bg-white/20 px-4 py-2">Shopping & dining</span>
          <span className="rounded-full bg-white/20 px-4 py-2">Outdoor recreation</span>
        </div>
      </PageHero>

      {/* Category Filter */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="mb-4 text-2xl font-bold">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 rounded-lg px-4 py-2 transition-all ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Summerlin Homes for Sale — Lifestyle Amenities Nearby
            </h2>
            <SectionImage
              imageId="section-downtown-summerlin"
              caption="Golf, trails, shopping, and daily errands sit minutes from many 89135 streets."
              className="mx-auto mb-6 max-w-4xl"
            />
            <p className="mx-auto max-w-2xl text-gray-600">
              Everything you need for an exceptional lifestyle is just minutes
              away
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredAmenities.map((amenity) => (
              <div
                key={amenity.name}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <HeadingCardPhoto
                  imageId={amenity.imageId}
                  title={amenity.name}
                  subtitle={`${amenity.type} · ${amenity.distance}`}
                />

                <div className="p-6">
                  <p className="mb-4 text-gray-700">{amenity.description}</p>

                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-gray-900">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {amenity.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{amenity.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{amenity.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <a
                        href={`tel:${amenity.phone}`}
                        className="flex items-center space-x-1 rounded-lg bg-green-600 px-3 py-2 text-sm text-white transition-colors hover:bg-green-700"
                      >
                        <Phone className="h-3 w-3" />
                        <span>Call</span>
                      </a>
                      <a
                        href={amenity.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        <Globe className="h-3 w-3" />
                        <span>Website</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold">
              Summerlin West golf, trails, and Downtown Summerlin
            </h2>
            <div className="mb-10 grid gap-6 md:grid-cols-3">
              <SectionImage imageId="section-golf" caption="Golf in Summerlin West" />
              <SectionImage imageId="section-red-rock" caption="Red Rock Canyon access" />
              <SectionImage imageId="section-downtown-summerlin" caption="Downtown Summerlin dining and retail" />
            </div>
            <HeadingPhotoGrid
              items={[
                {
                  imageId: 'section-golf',
                  heading: 'Golf in Summerlin West',
                  text: 'TPC Las Vegas and village courses sit minutes from many Summerlin West streets. Confirm club access and guest policies before you tour.',
                },
                {
                  imageId: 'h3-trail',
                  heading: 'Outdoor recreation',
                  text: 'Red Rock Canyon trails, scenic drives, and desert parks sit west of the 215 Beltway.',
                },
                {
                  imageId: 'section-downtown-summerlin',
                  heading: 'Shopping and dining',
                  text: 'Downtown Summerlin retail and dining is the daily errand hub for ZIP 89135.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <ImageCta
        imageId="hero-amenities"
        title="Tour Summerlin West golf, trails, and Downtown Summerlin"
        subtitle="Call (702) 842-0410 to schedule showings near the amenities that match your day-to-day."
        primary={{ href: '/listings', label: 'Browse listings' }}
      />
    </div>
  );
}
