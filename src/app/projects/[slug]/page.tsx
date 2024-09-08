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
import { PROJECT_DETAILS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { Project } from '@/sanity/types/sanity.types';
import { imageUrlFor } from '@/sanity/lib/imageUrlFor';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import CurrentBookingStatusSection from './components/CurrentBookingStatusSection';

const ProjectDetailsPage = async ({ params }: { params: { slug: string } }) => {
	const project = await client.fetch<Project>(
		PROJECT_DETAILS_QUERY(params.slug)
	);

	console.log('params Project or Slug--------->', project);
	console.log('File Url--------->', project.brochure);

	return (
		<main className="relative h-auto w-full pt-[5rem]">
			<HeadingSection
				title={project.title}
				location={project.location}
				price={project.price}
				tags={project.tags}
				brochure={project.brochure}
			/>
			<PictureSlider
				thumbnail={imageUrlFor(project?.thumbnail as SanityImageObject).url()}
			/>
			<DetailsSection
				bhks={project.bhks}
				total_units={project.total_units}
				possession_date={project.possession_date}
				floors={project.floors}
			/>
			<DescriptionSection description={project.description} />
			<AmenitiesSection amenities={project.amenities} />
			<LayoutSection
				master_layout_plan={imageUrlFor(
					project?.master_layout_plan as SanityImageObject
				).url()}
				unit_layout_plan={project.unit_layout_plan}
			/>
			<CurrentBookingStatusSection />
			<LocationMapSection />
			<ScheduleSiteVisitSection />
			<ConstructionStatusSection />
			<ExtraProjects />
			<Footer />
		</main>
	);
};

export default ProjectDetailsPage;
