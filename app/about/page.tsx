import type { Metadata } from 'next';
import AboutSection from '@/components/home-spa/about-section';

export const metadata: Metadata = {
  title: 'About Summerlin West Luxury Real Estate | Local Expertise',
  description:
    'Learn about Summerlin West luxury real estate expertise, villages, Las Vegas MLS search support, and how we help buyers and sellers in western Summerlin.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Summerlin West Luxury Real Estate',
    description:
      'Local expertise for Summerlin West homes, estates, and Las Vegas MLS-powered search.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-4 pb-16">
        <AboutSection />
      </div>
    </main>
  );
}
