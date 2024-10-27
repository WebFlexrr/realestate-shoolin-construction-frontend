import React, { type FC } from 'react';
import { Separator } from './ui/separator';

interface HeroHeadingProps {
	heading: string;
	subHeading?: string;
	description?: string;
}
const HeroHeading: FC<HeroHeadingProps> = ({
	heading,
	subHeading,
	description,
}) => {
	return (
		<section className="mx-auto h-auto w-full max-w-7xl space-y-4 px-5 py-10 xl:px-0">
			<span className="font-inter-Tight text-4xl font-normal leading-[48px] lg:text-5xl lg:leading-[64px]">
				{heading}
			</span>
			<Separator />
			<div className="w-full text-sm font-medium ">{subHeading}</div>
			<p className="mt-1.5 text-lg font-medium">{description}</p>
		</section>
	);
};

export default HeroHeading;
