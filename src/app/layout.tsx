import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { localBusinessJsonLd, siteName, siteUrl } from '@/lib/seo';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import localFont from 'next/font/local';

// Akzidenz-Grotesk → Archivo (headlines)
const display = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

// Body: Garet (self-hosted). Ships two weights — Book (400) and Heavy (800).
const body = localFont({
  src: [
    { path: './fonts/Garet-Book.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Garet-Heavy.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Clay Club — Pottery Classes in Rose Bay, Sydney',
    template: '%s | The Clay Club',
  },
  description:
    'Hand-building pottery classes and custom ceramics from Bev Silbermann’s garden studio in Rose Bay, Sydney.',
  keywords: [
    'pottery classes Sydney',
    'pottery classes Rose Bay',
    'hand building pottery',
    'ceramics classes Sydney',
    'pottery studio Rose Bay',
    'clay classes',
    'The Clay Club',
  ],
  applicationName: siteName,
  authors: [{ name: 'Bev Silbermann' }],
  creator: 'Bev Silbermann',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    siteName,
    title: 'The Clay Club — Pottery Classes in Rose Bay, Sydney',
    description:
      'Hand-building pottery classes and custom ceramics from Bev Silbermann’s garden studio in Rose Bay, Sydney.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Clay Club — Pottery Classes in Rose Bay, Sydney',
    description:
      'Hand-building pottery classes and custom ceramics from Bev Silbermann’s garden studio in Rose Bay, Sydney.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${display.variable} ${body.variable} font-body antialiased`}
      >
        <JsonLd data={localBusinessJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
