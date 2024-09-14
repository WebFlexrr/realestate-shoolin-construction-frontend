import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AboutSection from '@/app/(home)/AboutSection';
import HeroSection from '@/app/(home)/HeroSection';
import ProjectSection from '@/app/(home)/ProjectSection';
import { sanityFetch } from '@/sanity/lib/client';
import { TESTIMONIALS_QUERY } from '@/sanity/lib/queries';
import Testimonials, { Testimonial } from '@/app/(home)/Testimonial';

export default async function Home() {
	const testimonials = await sanityFetch<Testimonial[]>({
		query: TESTIMONIALS_QUERY,
	});

	return (
		<main className=" h-auto w-full">
			<HeroSection />
			<ProjectSection />
			<AboutSection />
			<Testimonials testimonials={testimonials} />
			<FAQ />
			<Footer />
		</main>
	);
}
