import { siteUrl } from '@/lib/seo';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/classes', priority: 0.9 },
    { path: '/products', priority: 0.8 },
    { path: '/contact', priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }));
}
