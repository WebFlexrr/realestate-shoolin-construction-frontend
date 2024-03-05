import HeroHeading from '@/components/HeroHeading';
import Footer from '@/components/Footer';
import React from 'react';
import HeroSection from '@/components/pages/projects/HeroSection';

const Projects = (): React.JSX.Element => {
	return (
		<main className="mt-[5rem] h-auto w-full">
			<HeroHeading heading={'Media'} />
			<HeroSection />
			<Footer />
		</main>
	);
};

export default Projects;
