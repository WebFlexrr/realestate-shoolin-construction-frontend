import { PTComponents } from '@/components/PortableText';
import { PortableText } from 'next-sanity';
import React, { FC } from 'react';

interface DescriptionSectionProps {
	description?: string;
}

const DescriptionSection: FC<DescriptionSectionProps> = ({ description }) => {
	return (
		// <section className=" flex h-full w-full justify-start px-5 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0">
		// 	<section className="h-auto w-full lg:w-[75%]">
		//  Description
		<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
			<section className="w-full">
				<h4 className=" underline">Description</h4>
			</section>
			<section className="mt-4 w-full space-y-4">{description}</section>
		</section>
		// 	</section>
		// </section>
	);
};

export default DescriptionSection;
