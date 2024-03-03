import Footer from '@/components/Footer';
import HeroHeading from '@/components/HeroHeading';
import HeroSection from '@/components/pages/about/HeroSection';
import React from 'react';

const page = (): React.JSX.Element => {
	return (
		<main className="mt-[5rem] h-auto w-full">
			<HeroHeading heading={'About Us'} />
			<HeroSection />
			{/* <FAQ/> */}
			<Footer />
		</main>
	);
};

export default page;
