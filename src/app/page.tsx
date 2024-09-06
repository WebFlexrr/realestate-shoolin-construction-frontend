import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Testimonial from '@/components/Testimonial';
import AboutSection from '@/app/(home)/AboutSection';
import HeroSection from '@/app/(home)/HeroSection';
import ProjectSection from '@/app/(home)/ProjectSection';
import { client } from '@/sanity/lib/client';
import { TESTIMONIALS_QUERY } from '@/sanity/lib/queries';

export default async function Home() {
	const testimonials = await client.fetch(TESTIMONIALS_QUERY);

	return (
		<main className=" h-auto w-full">
			<HeroSection />
			<ProjectSection />
			<AboutSection />
			<Testimonial testimonials={testimonials} />
			<FAQ />
			<Footer />
		</main>
	);
}
