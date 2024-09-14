import { amenities } from '@/sanity/types/sanity.types';
import Image from 'next/image';
import React, { FC } from 'react';

interface AmenitiesSectionProps {
	amenities?: amenities;
}

const AmenitiesSection: FC<AmenitiesSectionProps> = ({ amenities }) => {
	return (
		// <section className="flex h-full w-full flex-col justify-start  px-5 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0">
		// 	<section className="h-auto w-full lg:w-[75%] ">
		//  Amenities
		<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
			<section className="w-full">
				<h4 className=" underline">Amenities</h4>
			</section>
			<section className="mt-4 w-full ">
				<section className="grid w-full grid-cols-3 gap-3 gap-y-5 lg:grid-cols-4">
					{amenities?.elevators && (
						<div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-black p-3 text-center font-semibold transition-all  duration-500 ease-in-out hover:bg-primary">
							<Image
								src={'/icons/elevator.png'}
								width={60}
								height={0}
								alt={'Elevators'}
							/>
							<span>Elevators</span>
						</div>
					)}
					{amenities?.camera && (
						<div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-black p-3 text-center font-semibold  transition-all duration-500 ease-in-out hover:bg-primary">
							<Image
								src={'/icons/security-camera.png'}
								width={60}
								height={0}
								alt={'Security Camera'}
							/>
							<span>Security Camera</span>
						</div>
					)}
					{amenities?.powerBackup && (
						<div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-black p-3 text-center font-semibold  transition-all duration-500 ease-in-out hover:bg-primary">
							<Image
								src={'/icons/24-7.png'}
								width={60}
								height={0}
								alt={'24/7 Power Backup'}
							/>
							<div className="">24/7 Power Backup</div>
						</div>
					)}
					{amenities?.waterSupply && (
						<div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-black p-3  text-center font-semibold  transition-all duration-500 ease-in-out  hover:bg-primary">
							<Image
								src={'/icons/water-tank.png'}
								width={60}
								height={0}
								alt={'24/7 Water Supply'}
							/>
							<span>24/7 Water Supply</span>
						</div>
					)}
					{amenities?.park && (
						<div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-black  p-3 text-center font-semibold  transition-all duration-500 ease-in-out hover:bg-primary">
							<Image
								src={'/icons/park.png'}
								width={60}
								height={0}
								alt={'Garden'}
							/>
							<span>Garden</span>
						</div>
					)}
					{amenities?.swimmingPool && (
						<div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-black p-3 text-center font-semibold  transition-all duration-500 ease-in-out hover:bg-primary">
							<Image
								src={'/icons/swimming-pool.png'}
								width={60}
								height={0}
								alt={'Swimming Pool'}
							/>
							<span>Swimming Pool</span>
						</div>
					)}

					{amenities?.carParking && (
						<div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-black p-3 text-center font-semibold  transition-all duration-500 ease-in-out hover:bg-primary">
							<Image
								src={'/icons/garage.png'}
								width={60}
								height={0}
								alt={'Garage'}
							/>
							<span>4 Wheeler Garage Available</span>
						</div>
					)}
					{amenities?.bikeParking && (
						<div className="flex w-full flex-col items-center justify-evenly gap-2 rounded-lg border border-black p-3 text-center font-semibold  transition-all duration-500 ease-in-out hover:bg-primary">
							<Image
								src={'/icons/bike.png'}
								width={80}
								height={0}
								alt={'Bike'}
							/>
							<span>2 Wheeler Parking Facility</span>
						</div>
					)}
				</section>
			</section>
		</section>
		// 	</section>
		// </section>
	);
};

export default AmenitiesSection;
