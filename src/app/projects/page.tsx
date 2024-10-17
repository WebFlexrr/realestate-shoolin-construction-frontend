import HeroHeading from '@/components/HeroHeading';
import React from 'react';
import { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import { sanityFetch } from '@/sanity/lib/client';
import { PROJECTS_PAGE_SEO_QUERY, PROJECTS_QUERY } from '@/sanity/lib/queries';
import {
	Project,
	ProjectsPage as ProjectsPageType,
} from '@/sanity/types/sanity.types';
import ProjectCard from '@/components/ProjectCard';
import { imageUrlFor } from '@/sanity/lib/imageUrlFor';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export async function generateMetadata(): Promise<Metadata> {
	const projectsPage = await sanityFetch<ProjectsPageType>({
		query: PROJECTS_PAGE_SEO_QUERY,
	});

	// console.log(projectsPage);
	return {
		title: `Projects - ${projectsPage.seo?.metaTitle}`,
		description: projectsPage.seo?.metaDescription,
		keywords: projectsPage.seo?.seoKeywords,
		openGraph: {
			title: projectsPage.seo?.openGraph?.title,
			description: projectsPage.seo?.openGraph?.description,
			url: projectsPage.seo?.openGraph?.url,
			siteName: projectsPage.seo?.openGraph?.siteName,
			images: projectsPage.seo?.openGraph?.image
				? imageUrlFor(projectsPage.seo?.openGraph?.image as SanityImageObject)
						.width(1200)
						.height(630)
						.url()
				: '',
		},
		alternates: {
			canonical: '/projects',
		},
		twitter: {
			siteId: projectsPage.seo?.twitter?.site,
			creator: projectsPage.seo?.twitter?.creator,
			creatorId: projectsPage.seo?.twitter?.handle,
		},
	};
}

const ProjectPage = async (): Promise<React.JSX.Element> => {
	const projects = await sanityFetch<Project[]>({
		query: PROJECTS_QUERY,
	});

	return (
		<main className="mt-[7rem] h-auto w-full">
			<HeroHeading heading={'Our Projects'} subHeading={'Projects'} />
			<section className="h-auto w-full  ">
				<section className="mx-auto h-auto w-full max-w-7xl space-y-20 px-5 pb-40 xl:px-0">
					<section className="flex w-full flex-col">
						<SectionHeading
							mainTitle={'Current Projects'}
							subTitle={'Ongoing'}
						/>
						<section className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
							{projects.map((project) => {
								return (
									(project.status === 'under_construction' ||
										project.status === 'not_started') && (
										<ProjectCard
											key={project._id}
											slug={project.slug}
											thumbnail={project.thumbnail}
											status={project.status}
											name={project.title}
											address={project.location}
										/>
									)
								);
							})}
						</section>
					</section>
					<section className="flex w-full flex-col">
						<SectionHeading mainTitle={'Complete Projects'} subTitle={'Done'} />
						<section className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
							{projects.map(
								(project) =>
									(project.status === 'completed' ||
										project.status === 'ready_to_move') && (
										<ProjectCard
											key={project._id}
											slug={project.slug}
											thumbnail={project.thumbnail}
											status={project.status}
											name={project.title}
											address={project.location}
										/>
									)
							)}
						</section>
					</section>
				</section>
			</section>
		</main>
	);
};

export default ProjectPage;
