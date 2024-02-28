import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Testimonial from '@/components/Testimonial';
import AboutSection from '@/components/pages/home/AboutSection';
import HeroSection from '@/components/pages/home/HeroSection';
import ProjectSection from '@/components/pages/home/ProjectSection';

export default function Home(): JSX.Element {
	return (
		<main className="h-auto w-full">
			<HeroSection />
			<ProjectSection />
			<AboutSection />
			<Testimonial />
			<FAQ />
			<Footer />
		</main>
	);
}
