import { imageUrlFor } from '@/sanity/lib/imageUrlFor';
import { Slug } from '@/sanity/types/sanity.types';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { type FC } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

interface ProjectProps {
	slug?: Slug;
	image?: SanityImageObject;
	status?: string;
	name?: string;
	description?: string;
	address?: string;
}
const Projects: FC<ProjectProps> = ({
	image,
	name,
	description,
	slug,
	address,
}) => {
	console.log('This is  good image inside Projects', description);
	return (
		<div className="relative h-auto w-full rounded ">
			<section className="relative z-10 aspect-[16/9] h-auto w-full transition-all duration-500 ease-in-out hover:scale-105 md:aspect-square lg:aspect-[16/10]">
				<Image
					src={image ? imageUrlFor(image).url() : ''}
					width={1000}
					height={0}
					alt={''}
					className="h-full w-full rounded-md "
				/>

				<section className=" group absolute top-0 flex h-full w-full items-center justify-center">
					<div className="absolute  top-0 hidden h-full w-full bg-slate-100 opacity-35 transition-all group-hover:block group-hover:duration-500  group-hover:ease-in-out"></div>
					<Link
						href={`/projects/${slug?.current}`}
						className="mx-auto hidden items-center  gap-3 rounded-full border border-black bg-slate-50 px-4 py-2 text-xs opacity-90 transition-all group-hover:flex group-hover:duration-500  group-hover:ease-in-out"
					>
						<div className="font-sm h-2 w-2 rounded-full bg-black" />
						Project Details
					</Link>
				</section>
			</section>
			<section className=" h-auto w-full px-3 py-5 ">
				<div className="flex h-auto w-full flex-col gap-3 text-black">
					<span className=" text-3xl font-medium">{name}</span>
					{/* <div className="h-auto w-full">
						<p className="w-full  ">
							{description?.split(' ').splice(0, 40).join(' ').concat(' ...')}
						</p>
					</div> */}
					<div className="flex w-full  justify-start gap-2">
						<FaLocationDot className="mt-1" />

						<p>{address}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Projects;
