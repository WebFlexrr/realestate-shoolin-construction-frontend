import Image from 'next/image';
import Link from 'next/link';
import React, { type FC } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

interface ProjectProps {
	image: string;
	status: string;
	link: string;
}
const Projects: FC<ProjectProps> = ({ image, status, link }) => {
	return (
		<div className="relative h-auto w-full rounded ">
			<section className="relative z-10 aspect-video h-auto w-full transition-all duration-500 ease-in-out hover:scale-105">
				<Image
					src={image}
					width={1000}
					height={0}
					alt={''}
					className="h-full  w-full rounded-xl "
				/>

				<div className="absolute left-3 top-4 z-20 h-fit w-fit content-center rounded-lg border-2 border-black bg-yellow-400 px-3 py-1 text-sm">
					{status}
				</div>
				<section className=" group absolute top-0 flex h-full w-full items-center justify-center">
					{/* <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-slate-400">
						<Link href={link}>
							<GoArrowUpRight className=" text-2xl" />
						</Link>
					</div> */}
					<div className="absolute  top-0 hidden h-full w-full bg-slate-100 opacity-35 transition-all group-hover:block group-hover:duration-500  group-hover:ease-in-out"></div>
					<Link
						href={link}
						className="mx-auto hidden items-center  gap-3 rounded-full border border-black bg-slate-50 px-4 py-2 text-xs opacity-90 transition-all group-hover:flex group-hover:duration-500  group-hover:ease-in-out"
					>
						<div className="font-sm h-2 w-2 rounded-full bg-black" />
						Load Project
					</Link>
				</section>
			</section>
			<section className=" h-auto w-full py-5">
				<div className="flex h-auto w-full flex-col text-black">
					<span className=" text-2xl">Simon Pandal</span>
					{/* <div className="h-auto w-full">
						<p>
							Experience a symphony of open spaces, natural light, and
							minimalist aesthetics that reflect the essence of 21st-century
							design.
						</p>
					</div> */}
					<span className=" flex items-center gap-2 text-sm">
						<FaLocationDot />
						Dum Dum/station
					</span>
				</div>
			</section>
		</div>
	);
};

export default Projects;
