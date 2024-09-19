import FAQ from '@/components/FAQ';
import AboutSection from '@/app/(home)/AboutSection';
import HeroSection from '@/app/(home)/HeroSection';
import ProjectSection from '@/app/(home)/ProjectSection';
import { sanityFetch } from '@/sanity/lib/client';
import { TESTIMONIALS_QUERY } from '@/sanity/lib/queries';
import { Testimonial } from '@/app/(home)/Testimonial';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default:
			'Shoolin Construction | Provides Commercial & Residential Real estate Property-Buy-Sell-Rent Company',
		template:
			'%s - Provides Commercial & Residential Real estate Property-Buy-Sell-Rent Company',
	},
	description:
		'Provides Residential Real estate Property-Buy-Sell-Developer Company',
	generator: 'Next.js',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	keywords: ['Next.js', 'React', 'JavaScript'],
	twitter: {
		card: 'summary_large_image',
	},
};

export default async function Home() {
	const testimonials = await sanityFetch<Testimonial[]>({
		query: TESTIMONIALS_QUERY,
	});

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
