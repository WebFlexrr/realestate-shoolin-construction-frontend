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
		<section className="mt-5 h-auto w-full ">
			<Separator />
			<section className=" grid w-full grid-cols-2 gap-y-5 py-5 lg:grid-cols-4 ">
				<section className="flex w-full flex-col items-center justify-center  ">
					<h6 className="">
						{bhks?.map((value, index) => <span key={index}>{value},</span>)}
						BHK
					</h6>
					<p>Apartment type</p>
				</section>
				<section className="flex w-full flex-col items-center justify-center  ">
					<h6>{total_units}</h6>
					<span>Total Units</span>
				</section>
				<section className="flex w-full flex-col items-center justify-center   ">
					<h6>{possession_date}</h6>
					<span>Possession Date</span>
				</section>
				<section className="flex w-full flex-col items-center justify-center   ">
					<h6>Ground + {floors}</h6>
					<span>Floors </span>
				</section>
			</section>
		</section>
	);
};

export default DetailsSection;
