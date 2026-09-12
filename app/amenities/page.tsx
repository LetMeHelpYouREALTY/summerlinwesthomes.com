'use client';

import React, { useState } from 'react';
import {
  Flag,
  Mountain,
  ShoppingBag,
  Heart,
  Star,
  MapPin,
  Phone,
  Globe,
  Clock,
  Users,
  Award,
  Trees,
} from 'lucide-react';
import { headingImages } from '@/lib/section-images';
import {
  CardMediaHeading,
  MediaThumbHeading,
  OverlayHeadingSection,
  PageHero,
  SectionHeading,
} from '@/components/media/heading-media';

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
        'World-class PGA Tour golf course with stunning Red Rock Canyon views',
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
      image: headingImages.amenities.tpcGolf,
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
      image: headingImages.amenities.redRock,
    },
    {
      name: 'Downtown Summerlin',
      category: 'shopping',
      type: 'Shopping Center',
      rating: 4.7,
      address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
      distance: '1.2 miles',
      description:
        'Premier outdoor shopping destination with retail, dining, and entertainment',
      features: [
        '150+ Retail Stores',
        'Fine Dining',
        'Entertainment Venues',
        'Family Activities',
        'Events & Festivals',
      ],
      hours: '10:00 AM - 9:00 PM',
      phone: '(702) 570-8000',
      website: 'https://downtownsummerlin.com',
      image: headingImages.amenities.downtownSummerlin,
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
      image: headingImages.amenities.ridgesGolf,
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
      image: headingImages.amenities.hospital,
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
      image: headingImages.amenities.casino,
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
        "Children's Programs",
        'Community Events',
      ],
      hours: '10:00 AM - 8:00 PM',
      phone: '(702) 507-6300',
      website: 'https://lvccld.org',
      image: headingImages.amenities.library,
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
      image: headingImages.amenities.summitClub,
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
    <div className="min-h-screen bg-gray-50">
      <PageHero
        image={headingImages.h1.amenities}
        title="Las Vegas Homes Near Summerlin West Amenities"
        subtitle="Discover world-class golf courses, shopping, dining, and outdoor recreation in Summerlin West"
      >
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-white/20 px-4 py-2">
              Golf Courses
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Shopping & Dining
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Outdoor Recreation
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              Healthcare
            </span>
          </div>
      </PageHero>

      {/* Category Filter */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <SectionHeading
              image={headingImages.h2.amenities}
              title="Filter by Category"
              titleClassName="text-2xl font-bold"
            />
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
            <SectionHeading
              image={headingImages.h2.listings}
              title="Summerlin Homes for Sale — Lifestyle Amenities Nearby"
              subtitle="Everything you need for an exceptional lifestyle is just minutes away"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredAmenities.map((amenity) => (
              <div
                key={amenity.name}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <CardMediaHeading
                  image={amenity.image}
                  title={amenity.name}
                >
                    <div className="mt-2 flex items-center space-x-1">
                      <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                      <span className="text-lg font-semibold">
                        {amenity.rating}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <Award className="h-4 w-4" />
                      <span>{amenity.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{amenity.distance}</span>
                    </div>
                </CardMediaHeading>

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
            <SectionHeading
              image={headingImages.h2.cta}
              title="Why Choose Summerlin West for Your Lifestyle?"
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <MediaThumbHeading
                  image={headingImages.h3.golf}
                  title="Golf Paradise"
                  titleClassName="mb-2 text-xl font-bold"
                />
                <p className="text-gray-600">
                  Access to world-class golf courses including TPC Las Vegas and
                  The Ridges
                </p>
              </div>
              <div className="text-center">
                <MediaThumbHeading
                  image={headingImages.h3.outdoor}
                  title="Outdoor Recreation"
                  titleClassName="mb-2 text-xl font-bold"
                />
                <p className="text-gray-600">
                  Red Rock Canyon access for hiking, climbing, and scenic drives
                </p>
              </div>
              <div className="text-center">
                <MediaThumbHeading
                  image={headingImages.h3.shopping}
                  title="Shopping & Dining"
                  titleClassName="mb-2 text-xl font-bold"
                />
                <p className="text-gray-600">
                  Downtown Summerlin offers premium retail and fine dining
                  options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <OverlayHeadingSection
        image={headingImages.h2.cta}
        title="Ready to Experience Summerlin West Living?"
        subtitle="Let us show you how these amenities enhance your quality of life in Summerlin West"
      >
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-all hover:shadow-xl">
              Schedule a Tour
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-green-600">
              Download Amenities Guide
            </button>
          </div>
      </OverlayHeadingSection>
    </div>
  );
}
