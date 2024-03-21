'use client';
import { Separator } from '@/components/ui/separator';

import React from 'react';

const DetailsSection = () => {
	return (
		<section className="h-auto w-full">
			<section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="h-auto w-full lg:w-[75%] ">
					{/* Heading Details */}
					<section className="mt-5 h-auto w-full ">
						<Separator />
						<section className=" grid w-full grid-cols-2 gap-y-5 py-5 lg:grid-cols-4 ">
							<section className="flex w-full flex-col items-center justify-center  ">
								<h6 className="">2,3,4,5 BHK</h6>
								<p>Apartment type</p>
							</section>
							<section className="flex w-full flex-col items-center justify-center  ">
								<h6>177</h6>
								<span>Total Units</span>
							</section>
							<section className="flex w-full flex-col items-center justify-center   ">
								<h6>August, 2026</h6>
								<span>Possession Date</span>
							</section>
							<section className="flex w-full flex-col items-center justify-center   ">
								<h6>18 + 2</h6>
								<span>Floors + Towers</span>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default DetailsSection;
