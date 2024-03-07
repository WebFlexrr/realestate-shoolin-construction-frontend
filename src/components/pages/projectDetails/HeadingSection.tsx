import { Button } from '@/components/ui/button';
import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

const HeadingSection = () => {
	return (
		<section className="h-auto w-full">
			<section className="  flex h-full w-full flex-col px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="mt-5 flex h-auto w-full justify-between ">
					<section className="flex w-fit flex-col gap-1">
						<div className="w-full">
							<h1>SANCTORUM</h1>
						</div>
						<div className="flex items-center">
							<FaMapLocationDot /> Pagladanga Road, Kolkata
						</div>
						<div>Price : 87 Lacs onwards</div>
						<div>All inclusive price</div>
					</section>
					<section className="flex w-fit flex-col gap-5">
						<Button
							variant={'secondary'}
							size={'lg'}
							className="w-full space-x-3"
						>
							<span className="text-sm font-semibold">Enquire Now</span>
						</Button>
						<Button variant={'destructive'} size={'lg'} className="space-x-3">
							<FaFilePdf />
							<span className="text-sm font-semibold">Download E-brochure</span>
						</Button>
					</section>
				</section>
			</section>
		</section>
	);
};

export default HeadingSection;
