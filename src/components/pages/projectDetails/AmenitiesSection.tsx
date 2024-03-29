import Image from 'next/image';
import React from 'react';

const AmenitiesSection = () => {
	return (
		<section className="flex h-full w-full flex-col justify-start  px-5 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0">
			<section className="h-auto w-full lg:w-[75%] ">
				{/* Amenities */}
				<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
					<section className="w-full">
						<h4 className=" underline">Amenities</h4>
					</section>
					<section className="mt-4 w-full ">
						<section className="grid w-full grid-cols-3 gap-3 gap-y-6 lg:grid-cols-6">
							<div className="flex w-full flex-col items-center justify-center gap-2 text-center">
								<Image
									src={'/icons/elevator.png'}
									width={60}
									height={0}
									alt={''}
								/>
								<span>Elevators</span>
							</div>
							<div className="flex w-full flex-col items-center justify-center gap-2 text-center">
								<Image
									src={'/icons/security-camera.png'}
									width={60}
									height={0}
									alt={''}
								/>
								<span>Security Camera</span>
							</div>
							<div className="flex w-full flex-col items-center justify-center gap-2 text-center">
								<Image src={'/icons/24-7.png'} width={60} height={0} alt={''} />
								<div className="">24/7 Power Backup</div>
							</div>
							<div className="flex w-full flex-col items-center justify-center gap-2 text-center">
								<Image
									src={'/icons/water-tank.png'}
									width={60}
									height={0}
									alt={''}
								/>
								<span>24/7 Water Supply</span>
							</div>
							<div className="flex w-full flex-col items-center  justify-center gap-2 text-center">
								<Image src={'/icons/park.png'} width={60} height={0} alt={''} />
								<span>Garden</span>
							</div>
							<div className="flex w-full flex-col items-center justify-center gap-2 text-center">
								<Image
									src={'/icons/swimming-pool.png'}
									width={60}
									height={0}
									alt={''}
								/>
								<span>Swimming Pool</span>
							</div>
							<div className="flex w-full flex-col items-center justify-center gap-2 text-center">
								<Image
									src={'/icons/generator.png'}
									width={60}
									height={0}
									alt={''}
								/>
								<span>24/7 Electricity</span>
							</div>
							<div className="flex w-full flex-col items-center justify-center gap-2 text-center">
								<Image
									src={'/icons/garage.png'}
									width={60}
									height={0}
									alt={''}
								/>
								<span>4 Wheeler Parking</span>
							</div>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default AmenitiesSection;
