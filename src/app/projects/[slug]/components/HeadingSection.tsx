import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

interface HeadingSection {
	title?: string;
	location?: string;
	price?: number;
	tags?: string[];
	brochure?: string;
}

const HeadingSection: FC<HeadingSection> = ({
	title,
	location,
	price,
	tags,
	brochure,
}) => {
	console.log(title, location);
	return (
		<section className="h-auto w-full">
			<section className="  flex h-full w-full flex-col px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="mt-5 flex h-auto w-full flex-col justify-between lg:flex-row ">
					<section className="flex h-auto w-full flex-col lg:max-w-[75%] lg:flex-row lg:justify-between ">
						<section className="flex w-full flex-col gap-1 lg:w-fit ">
							<div className="w-full">
								<h1>{title}</h1>
							</div>
							<div className="flex items-center gap-2">
								<FaMapLocationDot /> {location}
							</div>
							<div>Price : {price} Lacs onwards</div>
							<div>All inclusive price</div>
						</section>
						<section className="mt-4 flex h-full w-full items-center justify-center gap-3 lg:mt-0 lg:max-w-60 lg:flex-col lg:gap-4 ">
							<section className="w-fit  lg:w-full">
								<span className="text-lg font-normal leading-[36px] lg:text-2xl">
									Tags:
								</span>
							</section>
							<section className="flex w-full flex-wrap gap-3 text-xs lg:text-base">
								{tags?.map((tag, index) => (
									<div
										key={index}
										className="w-fit rounded-full border-2  border-black  bg-primary px-3 py-1"
									>
										{tag}
									</div>
								))}
							</section>
						</section>
					</section>
					<section className="flex h-auto w-[25%] justify-end">
						<section className="fixed bottom-0 left-0 z-30 flex h-16 w-full md:z-0 lg:relative lg:h-auto lg:w-fit lg:flex-col  lg:gap-5">
							<Button
								variant={'secondary'}
								size={'lg'}
								className=" h-full w-1/2 space-x-3 rounded-none lg:h-10 lg:w-full lg:rounded"
							>
								<span className=" text-lg font-bold leading-5 tracking-widest">
									Enquire Now
								</span>
							</Button>
							{brochure && (
								<Link target="_blank" href={brochure}>
									<Button
										variant={'destructive'}
										size={'lg'}
										className=" h-full w-1/2 space-x-3 rounded-none lg:h-10  lg:w-full lg:rounded"
									>
										<FaFilePdf className="text-xl" />
										<span className="text-base font-semibold">
											Download E-brochure
										</span>
									</Button>
								</Link>
							)}
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default HeadingSection;
