import { FiArrowUpRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import { FC } from 'react';

interface OurValuesSectionProps {
	ourValues?: Array<string>;
	ourVision?: Array<string>;
}

const OurValuesSection: FC<OurValuesSectionProps> = ({
	ourValues,
	ourVision,
}) => {
	return (
		<section className="relative my-20 h-full  w-full bg-background2 py-20">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col px-5 xl:px-0">
				<section>Our values & Vision</section>
				<section className="flex w-full flex-col gap-7 lg:flex-row lg:gap-0">
					<section className="h-auto w-full text-start lg:w-[40%]">
						{ourValues?.map((values, index) => (
							<button
								key={index}
								className="group flex h-auto w-full items-center justify-between border-b border-black py-6"
							>
								<div className="flex gap-5">
									<span>{(index + 1).toString().padStart(2, '0')} .</span>
									<h4>{values}</h4>
								</div>
								<FiArrowUpRight className=" relative text-4xl opacity-0 transition-all  duration-300 ease-in-out  group-hover:opacity-100" />
							</button>
						))}
						{/* <button className="group flex h-auto w-full items-center justify-between border-b border-black py-6">
							<div className="flex gap-5">
								<span>01.</span>
								<h4>Creative Integrity</h4>
							</div>
							<FiArrowUpRight className=" relative text-4xl opacity-0 transition-all  duration-300 ease-in-out  group-hover:opacity-100" />
						</button>
						<button className="group flex h-auto w-full items-center justify-between border-b border-black py-6">
							<div className="flex gap-5">
								<span>02.</span>
								<h4>Sustainable Innovation</h4>
							</div>
							<FiArrowUpRight className=" relative text-4xl opacity-0 transition-all  duration-300 ease-in-out  group-hover:opacity-100" />
						</button>
						<button className=" group flex h-auto w-full items-center justify-between border-b border-black py-6">
							<div className="flex gap-5">
								<span>03.</span>
								<h4>Client Collaboration</h4>
							</div>
							<FiArrowUpRight className=" relative text-4xl opacity-0 transition-all  duration-300 ease-in-out  group-hover:opacity-100" />
						</button>
						<button className="group flex h-auto w-full items-center justify-between border-b border-black py-6">
							<div className="flex gap-5">
								<span>04.</span>
								<h4>Ethical Excellence</h4>
							</div>
							<FiArrowUpRight className=" relative text-4xl opacity-0 transition-all  duration-300 ease-in-out  group-hover:opacity-100" />
						</button> */}
					</section>
					<section className="flex h-auto w-full flex-col gap-7 lg:w-[60%] lg:p-16">
						<div className="flex w-full flex-col gap-4">
							{ourVision?.map((vision, index) => (
								<p key={index} className="text-lg leading-7">
									{vision}
								</p>
							))}

							{/* <p className="text-lg leading-7">
								From concept development to final execution, we strive to create
								spaces that not only inspire and captivate but also reflect our
								unwavering dedication to honesty.
							</p> */}
						</div>
						<Link href={'/contact'} className="">
							<Button
								variant={'outline-rounded'}
								size={'lg'}
								className="group "
							>
								Contact Us
								<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
							</Button>
						</Link>
					</section>
				</section>
			</section>
		</section>
	);
};

export default OurValuesSection;
