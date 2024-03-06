import React, { type FC } from 'react';
import { Separator } from './ui/separator';

interface HeroHeadingProps {
	heading: string;
	subHeading?: string;
}
const HeroHeading: FC<HeroHeadingProps> = ({ heading, subHeading }) => {
	return (
		<section className="mx-auto h-auto w-full max-w-7xl space-y-4 px-5 py-10 xl:px-0">
			<h1>{heading}</h1>
			<Separator />
			<div className="w-full text-sm font-medium ">{subHeading}</div>
		</section>
	);
};

export default HeroHeading;
