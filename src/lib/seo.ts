// SEO helpers: canonical site URL, per-page metadata builder, and JSON-LD
// structured data for the pottery studio (local SEO) and its classes.

import type { Metadata } from 'next';
import { contact } from './site';

// NOTE: confirm the production domain. Derived from the contact email domain.
export const siteUrl = 'https://theclayclub.com.au';
export const siteName = 'The Clay Club';

type PageSeo = {
  /** Page title (gets " | The Clay Club" appended via the layout template). */
  title?: string;
  description: string;
  /** Absolute path, e.g. "/classes". Used for canonical + og:url. */
  path: string;
};

/** Build per-page metadata with canonical URL, Open Graph, and Twitter card. */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const ogTitle = title ? `${title} | ${siteName}` : siteName;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName,
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
    },
  };
}

/** LocalBusiness structured data — powers Google local/knowledge results. */
export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: siteName,
  description:
    'Hand-building pottery classes and custom ceramics from Bev Silbermann’s garden studio in Rose Bay, Sydney.',
  url: siteUrl,
  telephone: contact.phoneHref.replace('tel:', ''),
  email: contact.email,
  image: `${siteUrl}/images/site/home/hero.jpg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13 Beresford Rd',
    addressLocality: 'Rose Bay',
    addressRegion: 'NSW',
    postalCode: '2029',
    addressCountry: 'AU',
  },
  // Approximate coordinates for the Rose Bay studio address.
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.8712,
    longitude: 151.2681,
  },
  hasMap: contact.mapsUrl,
  areaServed: { '@type': 'City', name: 'Sydney' },
  founder: { '@type': 'Person', name: 'Bev Silbermann' },
  knowsAbout: ['Pottery', 'Ceramics', 'Hand-building', 'Clay art'],
  sameAs: [contact.instagramHref],
} as const;

/** Course structured data for the pottery classes (rich result eligible). */
export const classesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Hand-Building Pottery Classes',
  description:
    'Weekly hand-building pottery classes for all skill levels in a small-group garden studio in Rose Bay, Sydney. Beginners welcome.',
  url: `${siteUrl}/classes`,
  provider: {
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Onsite',
    location: {
      '@type': 'Place',
      name: siteName,
      address: '13 Beresford Rd, Rose Bay NSW 2029',
    },
  },
} as const;
