import AmenitiesSection from '@/app/projects/[slug]/components/AmenitiesSection';
import ConstructionStatusSection from '@/app/projects/[slug]/components/ConstructionStatusSection';
import DescriptionSection from '@/app/projects/[slug]/components/DescriptionSection';
import DetailsSection from '@/app/projects/[slug]/components/DetailsSection';
import HeadingSection from '@/app/projects/[slug]/components/HeadingSection';
import LayoutSection from '@/app/projects/[slug]/components/LayoutSection';
import LocationMapSection from '@/app/projects/[slug]/components/LocationMapSection';
import PictureSlider from '@/app/projects/[slug]/components/PictureSlider';
import ScheduleSiteVisitSection from '@/app/projects/[slug]/components/ScheduleSiteVisitSection';
import React from 'react';
import { PROJECT_DETAILS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/client';
import { Project } from '@/sanity/types/sanity.types';
import { imageUrlFor } from '@/sanity/lib/imageUrlFor';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { Metadata } from 'next';
import LoansBannerSection from './components/LoansBannerSection';
import EnquiryPanel from './components/EnquiryPanel';
import EnquiryForm from '@/components/EnquiryForm';
import PopUpNotification from '@/components/PopUpNotification';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const project = await sanityFetch<Project>({
		query: PROJECT_DETAILS_QUERY(params.slug),
	});

	return {
		title: project.seo?.metaTitle,
		description: project.seo?.metaDescription,
		keywords: project.seo?.seoKeywords,
		openGraph: {
			title: project.seo?.openGraph?.title,
			description: project.seo?.openGraph?.description,
			url: project.seo?.openGraph?.url,
			siteName: project.seo?.openGraph?.siteName,
			images: project.seo?.openGraph?.image
				? imageUrlFor(project.seo?.openGraph?.image as SanityImageObject)
						.width(1200)
						.height(630)
						.url()
				: '',
		},
		alternates: {
			canonical: `/projects/${project.slug?.current}`,
		},
		twitter: {
			siteId: project.seo?.twitter?.site,
			creator: project.seo?.twitter?.creator,
			creatorId: project.seo?.twitter?.handle,
		},
	};
}

const ProjectDetailsPage = async ({ params }: { params: { slug: string } }) => {
	const project = await sanityFetch<Project>({
		query: PROJECT_DETAILS_QUERY(params.slug),
	});

	// console.log('params Project or Slug--------->', params.slug);
	// console.log('File Url--------->', project);

	return (
		<main className="relative h-auto w-full  pt-[7rem]">
			<HeadingSection
				title={project.title}
				location={project.location}
				price={project.price}
				// tags={project.tags}
				slug={project.slug?.current}
			/>

			<section className="  my-10 flex  w-full flex-col  px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="h-auto  w-full gap-10  lg:w-[75%] ">
					<PictureSlider
						projectImages={
							project.projectImages
								? project.projectImages.map((image) => {
										return {
											imageUrl:
												image && imageUrlFor(image as SanityImageObject).url(),
											alt: image.alternative,
										};
									})
								: []
						}
					/>

					<DetailsSection
						bhks={project.bhks}
						total_units={project.total_units}
						possession_date={project.possession_date}
						floors={project.floors}
					/>
					<DescriptionSection description={project.description} />
					<AmenitiesSection amenities={project.amenities} />
					<LayoutSection unit_layout_plan={project.unit_layout_plan} />
					{/* <CurrentBookingStatusSection /> */}
					<LocationMapSection mapsLocation={project.mapsLocation} />
					<ScheduleSiteVisitSection
						projectTitle={project.title}
						projectSlug={project.slug?.current}
					/>
					<LoansBannerSection />
					<ConstructionStatusSection
						construction_progress={project.construction_progress}
					/>
				</section>
				<section className=" hidden h-auto w-[25%] pl-5 lg:flex">
					<EnquiryPanel
						projectTitle={project.title}
						projectSlug={project.slug?.current}
					/>
				</section>
			</section>
			{/* POPup Notification Area  */}

			<PopUpNotification title={project.title} slug={project.slug?.current} />
		</main>
	);
};

export default ProjectDetailsPage;
