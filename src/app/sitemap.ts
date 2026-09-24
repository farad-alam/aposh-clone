import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aposh.org';
  const now = new Date();

  const staticRoutes = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/pages/project`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/pages/notice`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/pages/career`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/pages/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/pages/contact`, priority: 0.6, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/pages/service`, priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  // Dynamic notice/career detail pages
  const noticeIds = [1, 2, 3, 4, 5, 6, 7];
  const careerIds = [101, 102, 103];
  const dynamicRoutes = [...noticeIds, ...careerIds].map((id) => ({
    url: `${baseUrl}/pages/notice_view/${id}`,
    priority: 0.5,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    ...route,
    lastModified: now,
  }));
}
