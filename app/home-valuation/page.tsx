'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Home,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Users,
} from 'lucide-react';
import CalendlyInlineSection from '@/components/calendly-inline-section';
import PageHero from '@/components/media/page-hero';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';

export default function HomeValuationPage() {
  const [formData, setFormData] = useState({
    address: '',
    city: 'Las Vegas',
    state: 'NV',
    zipCode: '',
    propertyType: 'single-family',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    yearBuilt: '',
    name: '',
    email: '',
    phone: '',
    timeline: 'within-6-months',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your CRM
    console.log('Valuation request:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <PageHero
        imageId="hero-valuation"
        title="Las Vegas Homes — Summerlin West Value & Pricing"
        subtitle="Professional valuation context before you list or buy. Live estimates plus a CMA from Dr. Jan Duffy."
      />

      {/* RealScout Home Value Widget Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Summerlin Homes for Sale — Instant Value Estimate
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Get an accurate, data-driven estimate of your home&apos;s current
              market value using our advanced RealScout technology
            </p>
          </div>

          {/* RealScout Home Value Widget */}
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>',
              }}
            />
          </div>
        </div>

        {/* RealScout Advanced Search Widget */}
        <div className="mt-12 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Real Estate Listings in Las Vegas — Advanced Search
          </h3>
          <p className="mb-8 text-lg text-gray-600">
            Search for properties while you check your home&apos;s value
          </p>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>',
              }}
            />
          </div>
        </div>

        {/* RealScout Simple Search Widget */}
        <div className="mt-12 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Homes for Sale in Summerlin — Quick Search
          </h3>
          <p className="mb-8 text-lg text-gray-600">
            Start your search with our simple and intuitive search tool
          </p>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>',
              }}
            />
          </div>

          {/* Functional Search Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Search by Price Range
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
            >
              Search by Bedrooms
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700"
            >
              Search by Location
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="rounded-lg bg-orange-600 px-6 py-3 text-white transition-colors hover:bg-orange-700"
            >
              Search by Property Type
            </button>
          </div>
        </div>
      </div>

      {/* Manual Valuation Form Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Need a Detailed Professional Valuation?
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below for a comprehensive market analysis and
                personalized consultation
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Property Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="10777 West Twain Avenue # 333"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="zipCode"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="89135"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="single-family">Single Family</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="luxury">Luxury Home</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="bedrooms"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="4"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bathrooms"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      step="0.5"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="3.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="squareFeet"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Square Feet
                    </label>
                    <input
                      type="number"
                      id="squareFeet"
                      name="squareFeet"
                      value={formData.squareFeet}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="3,200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="yearBuilt"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Year Built
                    </label>
                    <input
                      type="number"
                      id="yearBuilt"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleChange}
                      min="1900"
                      max={new Date().getFullYear()}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="2020"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="(702) 842-0410"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="border-t pt-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    Additional Information
                  </h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Timeline to Sell
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="within-6-months">Within 6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="1-2-years">1-2 years</option>
                        <option value="just-curious">Just curious</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your property, any special features, or specific questions you have..."
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <button
                    type="submit"
                    className="w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Get Professional Valuation
                  </button>
                  <p className="mt-4 text-center text-sm text-gray-500">
                    By submitting this form, you agree to receive communications
                    from Summerlin West Homes
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Why Choose Summerlin West Homes for Your Valuation?
              </h2>
              <p className="text-lg text-gray-600">
                Expert local knowledge combined with cutting-edge technology for
                accurate market insights
              </p>
            </div>

            <HeadingPhotoGrid
              items={[
                {
                  imageId: 'h3-office',
                  heading: 'Market expertise',
                  text: 'Village-level pricing notes for Summerlin West, tied to live MLS — not a website average.',
                },
                {
                  imageId: 'hero-market',
                  heading: 'Current listing context',
                  text: 'Pair this form with a CMA from Dr. Jan Duffy before you price a sale or offer.',
                },
                {
                  imageId: 'h3-entry',
                  heading: 'On-site walkthrough',
                  text: 'Call (702) 842-0410 to schedule a property walkthrough and valuation review.',
                },
              ]}
            />
          </div>
        </div>
      </div>

      <ImageCta
        imageId="hero-valuation"
        title="Ready to review your Summerlin West home value?"
        subtitle="Submit the form above or call (702) 842-0410. Schedule a valuation review on Calendly — GBP does not list a public email."
        primary={{ href: 'tel:+17028420410', label: 'Call (702) 842-0410' }}
      />
      <CalendlyInlineSection
        title="Schedule a Valuation Review"
        description="Walk through your valuation report and next steps with Dr. Jan Duffy."
      />
    </div>
  );
}
