import AmenitiesSection from '@/components/pages/projectDetails/AmenitiesSection';
import ConstructionStatusSection from '@/components/pages/projectDetails/ConstructionStatusSection';
import DescriptionSection from '@/components/pages/projectDetails/DescriptionSection';
import DetailsSection from '@/components/pages/projectDetails/DetailsSection';
import HeadingSection from '@/components/pages/projectDetails/HeadingSection';
import LayoutSection from '@/components/pages/projectDetails/LayoutSection';
import LocationMapSection from '@/components/pages/projectDetails/LocationMapSection';
import PictureSlider from '@/components/pages/projectDetails/PictureSlider';
import React from 'react';

const ProjectDetailsPage = () => {
	return (
		<main className="h-auto w-full pt-[5rem]">
			<HeadingSection />
			<PictureSlider />
			<DetailsSection />
			<DescriptionSection />
			<AmenitiesSection />
			<LayoutSection />
			<LocationMapSection />
			<ConstructionStatusSection />
		</main>
	);
};

export default ProjectDetailsPage;
