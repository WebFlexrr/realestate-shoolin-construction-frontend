import Image from 'next/image';
import React from 'react';

const AmenitiesSection = () => {
	return (
		<section className="flex h-full w-full flex-col justify-start  px-5 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0">
			<section className="h-auto w-[75%] ">
				{/* Amenities */}
				<section className="h-auto w-full ">
					<section className="mt-10 h-auto w-full rounded-lg bg-background2 px-16 py-10 ">
						<section className="w-full">
							<h2 className=" underline">Amenities</h2>
						</section>
						<section className="mt-7 w-full space-y-4">
							<section className="grid w-full grid-cols-6 gap-3 gap-y-6">
								<div className="flex w-full flex-col items-center justify-center gap-2">
									<Image
										src={'/icons/elevator.png'}
										width={60}
										height={0}
										alt={''}
									/>
									<span>Elevators</span>
								</div>
								<div className="flex w-full flex-col items-center justify-center gap-2">
									<Image
										src={'/icons/elevator.png'}
										width={60}
										height={0}
										alt={''}
									/>
									<span>Elevators</span>
								</div>
								<div className="flex w-full flex-col items-center justify-center gap-2">
									<Image
										src={'/icons/elevator.png'}
										width={60}
										height={0}
										alt={''}
									/>
									<span>Elevators</span>
								</div>
								<div className="flex w-full flex-col items-center justify-center gap-2">
									<Image
										src={'/icons/elevator.png'}
										width={60}
										height={0}
										alt={''}
									/>
									<span>Elevators</span>
								</div>
								<div className="flex w-full flex-col items-center justify-center gap-2">
									<Image
										src={'/icons/elevator.png'}
										width={60}
										height={0}
										alt={''}
									/>
									<span>Elevators</span>
								</div>
								<div className="flex w-full flex-col items-center justify-center gap-2">
									<Image
										src={'/icons/elevator.png'}
										width={60}
										height={0}
										alt={''}
									/>
									<span>Elevators</span>
								</div>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default AmenitiesSection;
