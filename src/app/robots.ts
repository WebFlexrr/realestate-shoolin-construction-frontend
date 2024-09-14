import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/about', '/contact', '/projects'],
			disallow: '/private/',
		},
		sitemap: 'https://shoolinconstruction.com/sitemap.xml',
	};
}
