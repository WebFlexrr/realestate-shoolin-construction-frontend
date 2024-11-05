import React, { type FC } from 'react';
import { Separator } from './ui/separator';

interface HeroHeadingProps {
	heading: string;
	subHeading?: string;
	description?: string;
	semiH1Heading?: string;
}
const HeroHeading: FC<HeroHeadingProps> = ({
	heading,
	subHeading,
	description,
	semiH1Heading,
}) => {
	return (
		<section className="mx-auto h-auto w-full max-w-7xl space-y-4 px-5 py-10 xl:px-0">
			<span className="font-inter-Tight text-4xl font-normal leading-[48px] lg:text-5xl lg:leading-[64px]">
				{heading}
			</span>
			<Separator />
			<div className="w-full text-sm font-medium ">{subHeading}</div>

			{semiH1Heading && (
				<h1 className="flex w-full items-center text-4xl">{semiH1Heading}</h1>
			)}

			<p className="mt-1.5 text-base sm:text-lg ">{description}</p>
		</section>
	);
};

export default HeroHeading;
