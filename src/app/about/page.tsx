import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroHeading from '@/components/HeroHeading';
import HeroSection from '@/app/about/components/HeroSection';
import OurServicesSection from '@/app/about/components/OurServicesSection';
import OurTeamSection from '@/app/about/components/OurTeamSection';
import OurValuesSection from '@/app/about/components/OurValuesSection';
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
