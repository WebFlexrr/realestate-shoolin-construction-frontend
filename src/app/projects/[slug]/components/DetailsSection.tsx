'use client';
import { Separator } from '@/components/ui/separator';

import React, { FC } from 'react';

interface DetailsSectionProps {
	bhks?: Array<number>;
	total_units?: number;
	possession_date?: string;
	floors?: number;
}

const DetailsSection: FC<DetailsSectionProps> = ({
	bhks,
	total_units,
	possession_date,
	floors,
}) => {
	return (
		<section className="h-auto w-full">
			<section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="h-auto w-full lg:w-[75%] ">
					{/* Heading Details */}
					<section className="mt-5 h-auto w-full ">
						<Separator />
						<section className=" grid w-full grid-cols-2 gap-y-5 py-5 lg:grid-cols-4 ">
							<section className="flex w-full flex-col items-center justify-center  ">
								<h6 className="">
									{/* {bhks?.map((value, index) => <span key={index}>{value}</span>)} */}
									{bhks?.map((value, index) => (
										<span key={index}>{value},</span>
									))}{' '}
									BHK
								</h6>
								<p>Apartment type</p>
							</section>
							<section className="flex w-full flex-col items-center justify-center  ">
								{/* <h6>{total_units}</h6> */}
								<h6>{total_units}</h6>
								<span>Total Units</span>
							</section>
							<section className="flex w-full flex-col items-center justify-center   ">
								{/* <h6>August, 2026</h6> */}
								<h6>{possession_date}</h6>
								<span>Possession Date</span>
							</section>
							<section className="flex w-full flex-col items-center justify-center   ">
								<h6>{floors}</h6>
								<span>Floors </span>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default DetailsSection;
