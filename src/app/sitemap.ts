import { sanityFetch } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/sanity/types/sanity.types';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const projects = await sanityFetch<Project[]>({ query: PROJECTS_QUERY });
	return [
		{
			url: 'https://shoolinconstruction.com/',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://shoolinconstruction.com/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://shoolinconstruction.com/contact',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://shoolinconstruction.com/projects',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		...projects.map((project) => ({
			url: `https://shoolinconstruction.com/projects/${project.slug?.current}`,
			lastModified: new Date(),
			priority: 0.5,
		})),
	];
}
