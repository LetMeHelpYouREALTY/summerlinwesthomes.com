'use client';

import React, { useState } from 'react';
import CalendlyInlineSection from '@/components/calendly-inline-section';
import PageHero from '@/components/media/page-hero';
import SectionImage from '@/components/media/section-image';
import ImageCta from '@/components/media/image-cta';
import HeadingPhotoGrid from '@/components/media/heading-photo-grid';

export default function SellYourHomePage() {
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
    estimatedValue: '',
    timeline: 'within-3-months',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your CRM
    console.log('Sell request:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        imageId="hero-sell"
        title="Homes for Sale in Las Vegas — List Your Summerlin West Home"
        subtitle="Position your listing against current Summerlin West inventory with a pricing and marketing plan from Dr. Jan Duffy."
      />
      <div className="container mx-auto px-4 py-12">
        {/* RealScout Home Value Widget Section */}
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Las Vegas Homes: Know Your Value Before You List
            </h2>
            <SectionImage
              imageId="h3-cma-review"
              caption="Ask for a village-level CMA before you set a Summerlin West list price."
              className="mb-6"
            />
            <p className="text-lg text-gray-600">
              Discover what your Summerlin West property is worth before you
              sell
            </p>
          </div>

          {/* RealScout Home Value Widget */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>',
              }}
            />
          </div>

          {/* RealScout Advanced Search Widget */}
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Compare Homes for Sale in Summerlin While You Prep
            </h3>
            <SectionImage
              imageId="h3-sold-home"
              caption="Compare live Summerlin West inventory while you prep your listing."
              className="mb-6"
            />
            <p className="mb-8 text-lg text-gray-600">
              Explore the market while you learn about selling your home
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
              Las Vegas Homes for Sale — Quick Search
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

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Why Choose Us */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Why Choose Summerlin West Homes?
                </h2>
                <HeadingPhotoGrid
                  columns={2}
                  items={[
                    {
                      imageId: 'h3-kitchen',
                      heading: 'Pricing from live comps',
                      text: 'Ask for a village-level CMA. Do not use website averages to set a list price.',
                    },
                    {
                      imageId: 'h3-entry',
                      heading: 'Prep before you list',
                      text: 'Stage, photograph, and time the launch around current Summerlin West inventory.',
                    },
                    {
                      imageId: 'h3-closing-table',
                      heading: 'Offer review',
                      text: 'Walk terms, timing, and contingencies with Dr. Jan Duffy at (702) 842-0410.',
                    },
                    {
                      imageId: 'h3-village-street',
                      heading: 'Local village knowledge',
                      text: 'The Ridges, The Paseos, The Crossing, and nearby villages each price differently.',
                    },
                  ]}
                />
              </div>

              {/* Our Selling Process */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Our 5-Step Selling Process
                </h2>
                <HeadingPhotoGrid
                  items={[
                    {
                      imageId: 'h3-cma-review',
                      heading: '1. Consultation',
                      text: 'Schedule a no-obligation call to discuss timeline, HOA terms, and listing goals.',
                    },
                    {
                      imageId: 'hero-market',
                      heading: '2. Market analysis',
                      text: 'Get a CMA tied to live MLS comps for your village — not a website average.',
                    },
                    {
                      imageId: 'h3-staging',
                      heading: '3. Property prep',
                      text: 'Staging, repairs, and photography before the listing goes live.',
                    },
                    {
                      imageId: 'h3-kitchen',
                      heading: '4. Marketing',
                      text: 'Professional photos and listing copy go live only after the home is ready to show.',
                    },
                    {
                      imageId: 'h3-showing',
                      heading: '5. Showings and offers',
                      text: 'Walk terms, timing, and contingencies with Dr. Jan Duffy at (702) 842-0410.',
                    },
                  ]}
                />
              </div>

              {/* Market Insights */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Summerlin West Market Insights
                </h3>
                <HeadingPhotoGrid
                  columns={2}
                  items={[
                    {
                      imageId: 'h3-sold-home',
                      heading: 'Price from live comps',
                      text: 'Ask for a CMA. Website averages are not current MLS statistics.',
                    },
                    {
                      imageId: 'h3-cma-review',
                      heading: 'Village-level review',
                      text: 'The Ridges, The Paseos, and The Crossing each price differently. Call (702) 842-0410.',
                    },
                  ]}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Get Your Free Home Evaluation
                </h2>
                <p className="mb-6 text-gray-600">
                  Tell us about your property and we&apos;ll provide a detailed
                  market analysis and recommended selling strategy.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Property Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Property Details
                    </h3>

                    <div>
                      <label
                        htmlFor="address"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="10777 West Twain Avenue # 333"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor="city"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          readOnly
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="state"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          readOnly
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
                          required
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="89135"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
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
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        >
                          <option value="single-family">
                            Single Family Home
                          </option>
                          <option value="townhouse">Townhouse</option>
                          <option value="condo">Condominium</option>
                          <option value="luxury">Luxury Estate</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="estimatedValue"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Estimated Value
                        </label>
                        <input
                          type="text"
                          id="estimatedValue"
                          name="estimatedValue"
                          value={formData.estimatedValue}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="$2,000,000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
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
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="4"
                          min="1"
                          max="10"
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
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="3"
                          min="1"
                          max="10"
                          step="0.5"
                        />
                      </div>
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
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="2500"
                          min="500"
                          max="20000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Contact Information
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
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
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                          placeholder="(702) 842-0410"
                        />
                      </div>
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
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="john.doe@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        When do you want to sell?
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                      >
                        <option value="immediately">Immediately</option>
                        <option value="within-3-months">Within 3 months</option>
                        <option value="within-6-months">Within 6 months</option>
                        <option value="within-year">Within 1 year</option>
                        <option value="just-exploring">
                          Just exploring options
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Additional Details (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="Tell us about your selling goals, timeline, or any special circumstances..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-amber-600 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Get My Free Home Evaluation
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting this form, you agree to receive communications
                    from Summerlin West Homes. We respect your privacy and will
                    never share your information.
                  </p>
                </form>
              </div>

              <ImageCta
                imageId="hero-sell"
                title="Ready to list your Summerlin West home?"
                subtitle="Call (702) 842-0410 or book a seller consultation. GBP does not list a public email."
                primary={{ href: 'tel:+17028420410', label: 'Call (702) 842-0410' }}
              />
            </div>
          </div>
        </div>
      </div>
      <CalendlyInlineSection
        title="Book a Seller Consultation"
        description="Plan pricing, marketing, and timing for your Summerlin West home sale."
      />
    </div>
  );
}
