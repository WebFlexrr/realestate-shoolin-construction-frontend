import DetailsSection from '@/components/pages/projectDetails/DetailsSection';
import HeadingSection from '@/components/pages/projectDetails/HeadingSection';
import PictureSlider from '@/components/pages/projectDetails/PictureSlider';
import React from 'react';

const ProjectDetailsPage = () => {
	return (
		<main className="h-auto w-full pt-[5rem]">
			<HeadingSection />
			<PictureSlider />
			<DetailsSection />
		</main>
	);
};

export default ProjectDetailsPage;
