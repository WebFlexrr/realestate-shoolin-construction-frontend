import Footer from '@/components/Footer';
import AmenitiesSection from '@/app/projects/[slug]/components/AmenitiesSection';
import ConstructionStatusSection from '@/app/projects/[slug]/components/ConstructionStatusSection';
import DescriptionSection from '@/app/projects/[slug]/components/DescriptionSection';
import DetailsSection from '@/app/projects/[slug]/components/DetailsSection';
import ExtraProjects from '@/app/projects/[slug]/components/ExtraProjects';
import HeadingSection from '@/app/projects/[slug]/components/HeadingSection';
import LayoutSection from '@/app/projects/[slug]/components/LayoutSection';
import LocationMapSection from '@/app/projects/[slug]/components/LocationMapSection';
import PictureSlider from '@/app/projects/[slug]/components/PictureSlider';
import ScheduleSiteVisitSection from '@/app/projects/[slug]/components/ScheduleSiteVisitSection';
import React from 'react';

const ProjectDetailsPage = () => {
	return (
		<main className="relative  h-auto w-full pt-[5rem]">
			<HeadingSection />
			<PictureSlider />
			<DetailsSection />
			<DescriptionSection />
			<AmenitiesSection />
			<LayoutSection />
			<LocationMapSection />
			<ScheduleSiteVisitSection />
			<ConstructionStatusSection />
			<ExtraProjects />
			<Footer />
		</main>
	);
};

export default ProjectDetailsPage;
