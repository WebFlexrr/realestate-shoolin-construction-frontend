import React from 'react';

const LocationMapSection = () => {
	return (
		<section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
			<section className="h-auto w-[75%] ">
				{/* Location Map */}
				<section className="h-auto w-full">
					<section className="mt-10 h-auto w-full rounded-lg bg-background2 px-16 py-10 ">
						<section className="w-full">
							<h2 className=" underline">Location Map</h2>
						</section>
						<section className="mt-6 flex w-full">
							<section className="w-1/2">
								<p>24A, Bagmari Road, West Bengal, 700054</p>
							</section>
						</section>
						<section className="mt-5 aspect-video w-full border border-black">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.628728828988!2d88.40919706961944!3d22.634582636525977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e0d3e85ef57%3A0xeeb4c142fb8ab5db!2sShoolin%20Construction!5e0!3m2!1sen!2sin!4v1709840051825!5m2!1sen!2sin"
								className="h-full w-full"
								// allowfullscreen=""
								loading="lazy"
							></iframe>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default LocationMapSection;
