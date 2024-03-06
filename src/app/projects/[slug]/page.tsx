import HeroSection from '@/components/pages/projectDetails/HeadingSection';
import PictureSlider from '@/components/pages/projectDetails/PictureSlider';
import React from 'react';

const page = () => {
	return (
		<section className="mt-[5rem] h-auto w-full">
			<HeroSection />
			<PictureSlider />
		</section>
	);
};

export default page;
