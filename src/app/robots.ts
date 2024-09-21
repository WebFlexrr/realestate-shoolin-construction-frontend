import { sanityFetch } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/sanity/types/sanity.types';
import type { MetadataRoute } from 'next';

export default async function robots(): Promise<MetadataRoute.Robots> {
	const projects = await sanityFetch<Project[]>({ query: PROJECTS_QUERY });
	return {
		rules: {
			userAgent: '*',
			allow: [
				'/',
				'/about',
				'/contact',
				'/projects',
				...projects.map((project) => `/projects/${project.slug?.current}`),
			],
			// disallow: '/private',
		},
		sitemap: 'https://shoolinconstruction.com/sitemap.xml',
	};
}
