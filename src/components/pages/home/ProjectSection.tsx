import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import SectionHeading from '@/components/SectionHeading';
import Projects from '@/components/Projects';

const ProjectSection = (): JSX.Element => {
	return (
		<section className="h-auto w-full">
			<div className="h-auto w-full bg-[#fcf1d9] ">
				<div className="mx-auto h-auto w-full max-w-7xl pb-40 pt-20">
					<SectionHeading
						mainTitle={'Our Projects'}
						subTitle={'Explore more'}
					/>
					<section className=" grid grid-cols-2 gap-10">
						<Projects
							image={'/picture/pic2.jpg'}
							status={'current'}
							link={'d'}
						/>
						<Projects image={'/picture/pic1.jpg'} status={'done'} link={'d'} />
						<Projects
							image={'/picture/pic3.jpg'}
							status={'curent'}
							link={'d'}
						/>
					</section>
					<section className=" h-auto w-full">
						<button className=" group mx-auto flex items-center gap-3 rounded-full border border-black px-10 py-3">
							<div className="h-2 w-2 rounded-full bg-primary" />
							Explore more project
							<GoArrowUpRight className="text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-4 group-hover:duration-500  group-hover:ease-in-out" />
						</button>
					</section>
				</div>
			</div>
		</section>
	);
};

export default ProjectSection;
