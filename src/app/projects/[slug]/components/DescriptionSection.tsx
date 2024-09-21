import React, { FC } from 'react';

interface DescriptionSectionProps {
	description?: string;
}

const DescriptionSection: FC<DescriptionSectionProps> = ({ description }) => {
	return (
		//  Description
		<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
			<section className="w-full">
				<h4 className=" underline">Description</h4>
			</section>
			<section className="mt-4 w-full space-y-4">
				<p>{description}</p>
			</section>
		</section>
	);
};

export default DescriptionSection;
