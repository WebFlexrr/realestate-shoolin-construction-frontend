import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import SectionHeading from '@/components/SectionHeading';
import Projects from '@/components/Projects';
import Link from 'next/link';

const ProjectSection = (): JSX.Element => {
	return (
		<section className="h-auto w-full bg-background2">
			<div className="flex h-auto w-full flex-col px-5 pb-40 pt-20 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0">
				<SectionHeading mainTitle={'Our Projects'} subTitle={'Explore more'} />
				<section className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10">
					<Projects image={'/picture/pic2.jpg'} status={'current'} link={'d'} />
					<Projects image={'/picture/pic1.jpg'} status={'done'} link={'d'} />
					<Projects image={'/picture/pic3.jpg'} status={'curent'} link={'d'} />
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
