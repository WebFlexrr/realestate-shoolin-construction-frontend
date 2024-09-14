import React, { FC } from 'react';

interface LocationMapSectionProps {
	location?: string;
	mapsLocation?: string;
}

const LocationMapSection: FC<LocationMapSectionProps> = ({
	location,
	mapsLocation,
}) => {
	const latitude = 22.63431;
	const longitude = 88.4098;
	const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
	return (
		// <section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
		// 	<section className="h-auto w-full lg:w-[75%] ">
		//  Location Map
		<section className="h-auto w-full">
			<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
				<section className="w-full">
					<h4 className=" underline">Location Map</h4>
				</section>
				{/* <section className="mt-4 flex w-full ">
							<section className="h-auto w-full lg:w-1/2">
								<p>{location}</p>
							</section>
						</section> */}
				<section className="mt-5 aspect-video h-full w-full rounded border-2 border-black">
					<iframe
						src={mapsLocation}
						className="h-full w-full rounded"
						// allowfullscreen=""
						loading="lazy"
					></iframe>
				</section>
			</section>
		</section>
		// 	</section>
		// </section>
	);
};

export default LocationMapSection;
