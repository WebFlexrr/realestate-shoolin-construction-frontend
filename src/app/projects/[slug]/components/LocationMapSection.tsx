import React, { FC } from 'react';

interface LocationMapSectionProps {
	mapsLocation?: string;
}

const LocationMapSection: FC<LocationMapSectionProps> = ({ mapsLocation }) => {
	return (
		//  Location Map{}
		<section className="h-auto w-full">
			{mapsLocation && (
				<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
					<section className="w-full">
						<h4 className=" underline">Location Map</h4>
					</section>

					<section className="mt-5 aspect-video h-full w-full rounded border-2 border-black">
						<iframe
							src={mapsLocation}
							title="Property Location"
							className="h-full w-full rounded"
							// allowfullscreen=""
							// loading="lazy"
						></iframe>
					</section>
				</section>
			)}
		</section>
	);
};

export default LocationMapSection;
