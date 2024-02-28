import React, { type FC } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

interface SectionHeadingProps {
	mainTitle: string;
	subTitle: string;
}
const SectionHeading: FC<SectionHeadingProps> = ({ mainTitle, subTitle }) => {
	return (
		<section className="mb-10 flex h-auto w-full">
			<div className=" flex h-auto w-fit flex-col">
				<span className="flex items-center text-lg uppercase ">
					<AiFillCaretRight />
					{subTitle}
				</span>
				<h2>{mainTitle}</h2>
			</div>
		</section>
	);
};

export default SectionHeading;
