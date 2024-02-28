import React, { type FC } from 'react';
import { Separator } from './ui/separator';

interface HeroHeadingProps {
	heading: string;
}
const HeroHeading: FC<HeroHeadingProps> = ({ heading }) => {
	return (
		<section className="h-auto w-full  ">
			<div className="mx-auto h-auto w-full max-w-7xl space-y-4  pb-16 pt-10">
				<span className="text-5xl font-light leading-[62.4px]">{heading}</span>
				<Separator />
				<div className="w-full text-sm font-medium ">The Works</div>
			</div>
		</section>
	);
};

export default HeroHeading;
