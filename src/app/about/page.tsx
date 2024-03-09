import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroHeading from '@/components/HeroHeading';
import HeroSection from '@/components/pages/about/HeroSection';
import OurServicesSection from '@/components/pages/about/OurServicesSection';
import OurTeamSection from '@/components/pages/about/OurTeamSection';
import OurValuesSection from '@/components/pages/about/OurValuesSection';
import React from 'react';

const AboutPage = (): React.JSX.Element => {
	return (
		<main className="z-0 mt-[5rem] h-auto w-full">
			<HeroHeading heading={'About Us'} />
			<HeroSection />
			<OurServicesSection />
			<OurValuesSection />
			<OurTeamSection />
			<FAQ />

			<Footer />
		</main>
	);
};

export default AboutPage;
