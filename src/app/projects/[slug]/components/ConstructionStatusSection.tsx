'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SwiperGallery from '@/components/ui/SwiperGallery';
import { imageUrlFor } from '@/sanity/lib/imageUrlFor';
import { construction_progress } from '@/sanity/types/sanity.types';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import React, { FC } from 'react';

interface ConstructionStatusSectionProps {
	construction_progress?: construction_progress;
}

const ConstructionStatusSection: FC<ConstructionStatusSectionProps> = ({
	construction_progress,
}) => {
	return (
		// <section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
		// 	<section className="h-auto w-full lg:w-[75%] ">
		//  Construction Status
		<section className=" h-auto w-full ">
			{construction_progress && (
				<section className=" h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
					<section className="w-full">
						<h4 className=" underline">Construction Status</h4>
					</section>
					<section className="mt-4  grid w-full grid-cols-2 gap-5 lg:grid-cols-4 lg:px-16">
						{construction_progress?.map((progress) => (
							<Dialog key={progress._key}>
								<DialogTrigger>
									<section className="group relative flex aspect-square w-full flex-col items-center">
										<Image
											// src={'/picture/pic1.jpg'}
											src={
												progress.file?.find(
													(file) => file.split('.')[3] === 'jpg'
												) || ''
											}
											width={1000}
											height={0}
											alt={''}
											className="aspect-square w-full rounded"
										/>
										<section className="absolute left-0 top-0 h-full w-full rounded bg-black  opacity-50 transition-all duration-300 ease-in-out" />
										<section className="absolute left-0 top-0  flex h-full w-full flex-col items-center justify-end text-white  transition-all  duration-300 ease-in-out ">
											<div className="mb-3 flex max-w-7xl flex-col items-center rounded bg-white px-3 text-sm text-black">
												<div>Updated on</div>
												<div>{progress.date}</div>
											</div>
										</section>
									</section>
								</DialogTrigger>
								<DialogContent className=" max-w-5xl p-10">
									<SwiperGallery data={progress.file} />
								</DialogContent>
							</Dialog>
						))}
					</section>
				</section>
			)}
		</section>
		// 	</section>
		// </section>
	);
};

export default ConstructionStatusSection;
