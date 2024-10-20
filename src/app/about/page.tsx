import FAQ from '@/components/FAQ';
import HeroHeading from '@/components/HeroHeading';
import HeroSection from '@/app/about/components/HeroSection';
import OurServicesSection from '@/app/about/components/OurServicesSection';
import OurTeamSection from '@/app/about/components/OurTeamSection';
import OurValuesSection from '@/app/about/components/OurValuesSection';
import React from 'react';
import { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/client';

import { ABOUT_PAGE_SEO_QUERY } from '@/sanity/lib/queries';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { imageUrlFor } from '@/sanity/lib/imageUrlFor';
import { AboutPage as AboutPageTypes } from '@/sanity/types/sanity.types';

export async function generateMetadata(): Promise<Metadata> {
	const aboutPage = await sanityFetch<AboutPageTypes>({
		query: ABOUT_PAGE_SEO_QUERY,
	});

	return {
		title: `About Us - ${aboutPage.seo?.metaTitle}`,
		description: aboutPage.seo?.metaDescription,
		keywords: aboutPage.seo?.seoKeywords,
		openGraph: {
			title: aboutPage.seo?.openGraph?.title,
			description: aboutPage.seo?.openGraph?.description,
			url: aboutPage.seo?.openGraph?.url,
			siteName: aboutPage.seo?.openGraph?.siteName,
			images: aboutPage.seo?.openGraph?.image
				? imageUrlFor(aboutPage.seo?.openGraph?.image as SanityImageObject)
						.width(1200)
						.height(630)
						.url()
				: '',
		},
		alternates: {
			canonical: '/about',
		},
		twitter: {
			siteId: aboutPage.seo?.twitter?.site,
			creator: aboutPage.seo?.twitter?.creator,
			creatorId: aboutPage.seo?.twitter?.handle,
		},
	};
}

const AboutPage = async (): Promise<React.JSX.Element> => {
	const aboutPage = await sanityFetch<AboutPageTypes>({
		query: ABOUT_PAGE_SEO_QUERY,
	});
	return (
		<main className="z-0 mt-[5rem] h-auto w-full">
			<HeroHeading heading={'About Us'} />
			<HeroSection about={aboutPage.about} />
			<OurServicesSection />
			<OurValuesSection />
			<OurTeamSection />
			<FAQ />
		</main>
	);
};

export default AboutPage;
