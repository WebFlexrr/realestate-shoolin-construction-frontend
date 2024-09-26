import { sanityFetch } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/sanity/types/sanity.types';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const projects = await sanityFetch<Project[]>({ query: PROJECTS_QUERY });
	return [
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/projects`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/faq`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		...projects.map((project) => ({
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/projects/${project.slug?.current}`,
			lastModified: new Date(),
			priority: 0.5,
		})),
	];
}
