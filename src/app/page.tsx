import FAQ from '@/components/FAQ';
import AboutSection from '@/app/(home)/AboutSection';
import HeroSection from '@/app/(home)/HeroSection';
import ProjectSection from '@/app/(home)/ProjectSection';
import { sanityFetch } from '@/sanity/lib/client';
import { HOME_PAGE_SEO_QUERY } from '@/sanity/lib/queries';
import { Metadata } from 'next';
import { Homepage } from '@/sanity/types/sanity.types';
import { imageUrlFor } from '@/sanity/lib/imageUrlFor';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export async function generateMetadata(): Promise<Metadata> {
	const homePage = await sanityFetch<Homepage>({
		query: HOME_PAGE_SEO_QUERY,
	});

	return {
		title: homePage.seo?.metaTitle,
		description: homePage.seo?.metaDescription,
		keywords: homePage.seo?.seoKeywords,
		openGraph: {
			title: homePage.seo?.openGraph?.title,
			description: homePage.seo?.openGraph?.description,
			url: homePage.seo?.openGraph?.url,
			siteName: homePage.seo?.openGraph?.siteName,
			images: homePage.seo?.openGraph?.image
				? imageUrlFor(homePage.seo?.openGraph?.image as SanityImageObject)
						.width(1200)
						.height(630)
						.url()
				: '',
		},
		twitter: {
			siteId: homePage.seo?.twitter?.site,
			creator: homePage.seo?.twitter?.creator,
			creatorId: homePage.seo?.twitter?.handle,
		},
	};
}

export default async function Home() {
	// const testimonials = await sanityFetch<Testimonial[]>({
	// 	query: TESTIMONIALS_QUERY,
	// });

	return (
		<main className=" h-auto w-full">
			<HeroSection />
			<ProjectSection />
			<AboutSection />
			{/* <Testimonials testimonials={testimonials} /> */}
			<FAQ />
		</main>
	);
}
