import React, { type FC } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

interface SectionHeadingProps {
	mainTitle: string;
	subTitle: string;
	description?: string;
}
const SectionHeading: FC<SectionHeadingProps> = ({
	mainTitle,
	subTitle,
	description,
}) => {
	return (
		<section className="mb-8 flex h-auto w-full">
			<div className=" flex h-auto w-fit flex-col">
				<span className="flex items-center text-lg uppercase ">
					<AiFillCaretRight />
					{subTitle}
				</span>
				<h2>{mainTitle}</h2>
				<p className="mt-1.5 text-lg font-medium">{description}</p>
			</div>
		</section>
	);
};

export default SectionHeading;
