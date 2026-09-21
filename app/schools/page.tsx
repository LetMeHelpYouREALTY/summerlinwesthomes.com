'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  MapPin,
  Star,
  Users,
  Award,
  Phone,
  Globe,
  BookOpen,
  Shield,
  TrendingUp,
} from 'lucide-react';
import PageHero from '@/components/media/page-hero';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';
import HeadingCardPhoto from '@/components/media/heading-card-photo';
import type { SiteImageId } from '@/lib/images';

export default function SchoolsPage() {
  const [selectedSchoolType, setSelectedSchoolType] = useState('all');

  const schools = [
    {
      name: 'Palo Verde High School',
      type: 'Public High School',
      grade: '9-12',
      imageId: 'h3-school' as SiteImageId,
      address: '333 S Pavilion Center Dr, Las Vegas, NV 89144',
      distance: '2.1 miles',
      enrollment: '2,847',
      features: [
        'Advanced Placement Programs',
        'International Baccalaureate',
        'STEM Academy',
        'Arts & Music Programs',
        'Athletics programs',
      ],
      achievements: [
        'Confirm current programs on the campus website',
        'Verify CCSD zoning during due diligence',
        'Tour commute windows before you write an offer',
      ],
      phone: '(702) 799-1450',
      website: 'https://www.paloverde.ccsd.net',
      description:
        'Public high school serving parts of west Las Vegas. Confirm current CCSD zoning for any address you tour.',
    },
    {
      name: 'Sig Rogich Middle School',
      type: 'Public Middle School',
      grade: '6-8',
      imageId: 'hero-schools' as SiteImageId,
      address: '1050 N Hualapai Way, Las Vegas, NV 89144',
      distance: '1.8 miles',
      enrollment: '1,234',
      features: [
        'Gifted & Talented Program',
        'STEM Focus',
        'Band & Orchestra',
        'Sports Programs',
        'Technology Integration',
      ],
      achievements: [
        'Confirm current programs on the campus website',
        'Verify CCSD zoning during due diligence',
        'Tour commute windows before you write an offer',
      ],
      phone: '(702) 799-1220',
      website: 'https://www.sigrogich.ccsd.net',
      description:
        'Public middle school in west Las Vegas. Confirm current CCSD zoning for any address you tour.',
    },
    {
      name: 'Walter V. Long Elementary',
      type: 'Public Elementary',
      grade: 'K-5',
      imageId: 'h3-school' as SiteImageId,
      address: '5850 N Tenaya Way, Las Vegas, NV 89149',
      distance: '0.9 miles',
      enrollment: '756',
      features: [
        'Early Childhood Education',
        'Reading programs',
        'Math & Science Focus',
        'Arts Integration',
        'Parent Involvement',
      ],
      achievements: [
        'Confirm current programs on the campus website',
        'Verify CCSD zoning during due diligence',
        'Tour commute windows before you write an offer',
      ],
      phone: '(702) 799-1220',
      website: 'https://www.waltervlong.ccsd.net',
      description:
        'Public elementary campus in northwest Las Vegas. Confirm current CCSD zoning for any address you tour.',
    },
    {
      name: 'Faith Lutheran Middle & High School',
      type: 'Private Christian School',
      grade: '6-12',
      imageId: 'hero-schools' as SiteImageId,
      address: '2015 S Hualapai Way, Las Vegas, NV 89117',
      distance: '3.2 miles',
      enrollment: '1,200',
      features: [
        'Christian Education',
        'College Preparatory',
        'Advanced Placement',
        'Fine Arts Programs',
        'Athletics programs',
      ],
      achievements: [
        'Confirm current programs on the campus website',
        'Ask about admissions and tuition directly',
        'Tour commute windows before you write an offer',
      ],
      phone: '(702) 804-4400',
      website: 'https://www.faithlutheranlv.org',
      description:
        'Private campus west of the Strip corridor. Confirm admissions, tuition, and commute independently.',
    },
    {
      name: 'The Meadows School',
      type: 'Private College Prep',
      grade: 'PK-12',
      imageId: 'h3-school' as SiteImageId,
      address: '8601 Scholar Ln, Las Vegas, NV 89128',
      distance: '4.1 miles',
      enrollment: '800',
      features: [
        'College Preparatory',
        'International Baccalaureate',
        'Small Class Sizes',
        'Arts & Athletics',
        'Global Education',
      ],
      achievements: [
        'Confirm current programs on the campus website',
        'Ask about admissions and tuition directly',
        'Tour commute windows before you write an offer',
      ],
      phone: '(702) 254-1610',
      website: 'https://www.themeadowsschool.org',
      description:
        'Private PK-12 campus in Las Vegas. Confirm admissions, tuition, and commute independently.',
    },
  ];

  const schoolTypes = [
    'all',
    'public',
    'private',
    'elementary',
    'middle',
    'high',
  ];

  const filteredSchools = schools.filter((school) => {
    if (selectedSchoolType === 'all') return true;
    if (selectedSchoolType === 'public') return school.type.includes('Public');
    if (selectedSchoolType === 'private')
      return school.type.includes('Private');
    if (selectedSchoolType === 'elementary')
      return school.grade.includes('K-5');
    if (selectedSchoolType === 'middle') return school.grade.includes('6-8');
    if (selectedSchoolType === 'high') return school.grade.includes('9-12');
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero
        imageId="hero-schools"
        title="Schools Serving Summerlin West Las Vegas"
        subtitle="Compare school names, grade spans, and commute times. Confirm current zoning during due diligence."
      >
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="rounded-full bg-white/20 px-4 py-2">Public campuses</span>
          <span className="rounded-full bg-white/20 px-4 py-2">Private options</span>
          <span className="rounded-full bg-white/20 px-4 py-2">Verify zoning</span>
        </div>
      </PageHero>

      {/* School District Information */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold">
              Homes for Sale in Summerlin & CCSD Zoning Basics
            </h2>
            <HeadingPhotoGrid
              items={[
                {
                  imageId: 'h3-school',
                  heading: 'CCSD zoning',
                  text: 'Confirm current Clark County School District boundaries during due diligence. Zoning can change.',
                },
                {
                  imageId: 'hero-schools',
                  heading: 'Program notes',
                  text: 'Ask each campus for current programs, calendars, and enrollment details. Do not rely on third-party ratings.',
                },
                {
                  imageId: 'h3-village-park',
                  heading: 'Program variety',
                  text: 'Ask about Advanced Placement, STEM, arts, and athletics on the campus website before you tour.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* School Filter */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Filter Schools by Type
            </label>
            <select
              value={selectedSchoolType}
              onChange={(e) => setSelectedSchoolType(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              aria-label="Filter schools by type"
            >
              <option value="all">All Schools</option>
              <option value="public">Public Schools</option>
              <option value="private">Private Schools</option>
              <option value="elementary">Elementary Schools</option>
              <option value="middle">Middle Schools</option>
              <option value="high">High Schools</option>
            </select>
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              {filteredSchools.length} Schools Near Homes for Sale in Summerlin
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Use campus names and addresses as a starting point, then confirm
              current Clark County School District zoning for the home you tour.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredSchools.map((school) => (
              <div
                key={school.name}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <HeadingCardPhoto
                  imageId={school.imageId}
                  title={school.name}
                  subtitle={`${school.type} · Grades ${school.grade}`}
                />

                <div className="p-6">
                  <div className="mb-4 flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{school.address}</span>
                  </div>
                  <div className="mb-4 flex items-center space-x-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">
                      {school.enrollment} students
                    </span>
                  </div>

                  <p className="mb-4 text-gray-700">{school.description}</p>

                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-gray-900">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {school.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-gray-900">
                      Due diligence:
                    </h4>
                    <ul className="space-y-1">
                      {school.achievements
                        .slice(0, 2)
                        .map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2 text-sm text-gray-600"
                          >
                            <Award className="h-3 w-3 text-yellow-500" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <a
                        href={`tel:${school.phone}`}
                        className="flex items-center space-x-1 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                      >
                        <Phone className="h-3 w-3" />
                        <span>Call</span>
                      </a>
                      <a
                        href={school.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        <Globe className="h-3 w-3" />
                        <span>Website</span>
                      </a>
                    </div>
                    <span className="text-sm text-gray-500">
                      {school.distance}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageCta
        imageId="hero-schools"
        title="Confirm school zoning before you tour"
        subtitle="Call Dr. Jan Duffy for commute times and current zoning notes while you shop Summerlin West listings."
        primary={{ href: '/properties/search', label: 'Search homes for sale' }}
      />
    </div>
  );
}
