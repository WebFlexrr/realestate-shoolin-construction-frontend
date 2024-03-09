import React from 'react';

const DescriptionSection = () => {
	return (
		<section className=" flex h-full w-full justify-start px-5 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0">
			<section className="h-auto w-full lg:w-[75%]">
				{/* Description */}
				<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
					<section className="w-full">
						<h4 className=" underline">Description</h4>
					</section>
					<section className="mt-4 w-full space-y-4">
						<p>
							Imagine a place where five elements - earth, air, water, energy
							and space - come to create a peaceful home just for you. That's
							Tattvam for you. Set in Bagmari, it's your key to live a balanced
							and wonderful life. Built by Isha Group,
						</p>
						<p>
							reputed luxury property developers in Kolkata, Tattvam features a
							host of amenities including rooftop cabana, jogging path,
							multipurpose court, infinity pool, kids play area etc. What's
							more, it offers 3-side open, south-facing apartments for your
							comfort.
						</p>
					</section>
				</section>
			</section>
		</section>
	);
};

export default DescriptionSection;
