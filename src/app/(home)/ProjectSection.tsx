import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/client';
import { Project } from '@/sanity/types/sanity.types';
import Projects from '@/components/ProjectCard';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

const ProjectSection = async (): Promise<React.JSX.Element> => {
	const projects = await sanityFetch<Project[]>({ query: PROJECTS_QUERY });

	return (
		<section className="h-auto w-full bg-background">
			<div className="flex h-auto w-full flex-col px-5 pb-40 pt-20 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0">
				<SectionHeading
					mainTitle={'Current Projects'}
					subTitle={'Explore more'}
					description={
						'Shoolin Construction gives your dream new flats in Dum Dum. Check out our premium, well-designed residential options in substantial areas. Your home, which is both trendy and magnificent, is waiting for you!'
					}
				/>

				<section className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
					{projects.map((project) => {
						return (
							(project.status === 'under_construction' ||
								project.status === 'not_started') && (
								<Projects
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
				<section className=" h-auto w-full">
					<Link
						href={'/projects'}
						className="hover: group mx-auto mt-10 flex w-fit items-center gap-3 rounded-full border border-black px-10 py-3 duration-500 ease-in-out hover:bg-black  hover:text-white"
					>
						<div className="h-2 w-2 rounded-full bg-primary " />
						Explore more project
						<GoArrowUpRight className="text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-4 group-hover:duration-500  group-hover:ease-in-out" />
					</Link>
				</section>
			</div>
		</section>
	);
};

export default ProjectSection;
