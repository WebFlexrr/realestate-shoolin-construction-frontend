import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

interface AboutSectionProps {
	about?: string;
}

const AboutSection: FC<AboutSectionProps> = ({ about }): JSX.Element => {
	return (
		<section className="h-auto w-full bg-background2">
			<section className="h-auto w-full px-5 py-20 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0 ">
				<section className="flex h-auto w-full flex-col gap-10 lg:flex-row  ">
					<section className="flex h-auto w-full flex-col gap-10 lg:w-[70%] lg:pr-20 ">
						<section className="h-auto w-full">
							<div className=" w-fit ">
								<h2 className="text-5xl">Who We Are?</h2>
								{/* <h4 className="">Shoolin Construction is construction Company</h4> */}
							</div>
						</section>
						<section className="flex h-auto w-full">
							<section className="flex h-auto w-[40%] flex-col  justify-between">
								<section className="flex w-full flex-col">
									<div className="font-poppins ">Founded</div>
									<div className="font-poppins text-3xl">2019</div>
								</section>
								<section className="flex w-full flex-col">
									<div className="font-poppins ">Projects Completed</div>
									<div className="font-poppins text-3xl">10+</div>
								</section>
							</section>
							<section className="mx-auto w-[60%] pl-5 text-center  ">
								<p className="text-base leading-7 tracking-wider">{about}</p>
							</section>
						</section>
						<section className="flex w-full items-center justify-center">
							<Link href={'/about'}>
								<Button
									variant={'outline-rounded'}
									size={'lg'}
									className="group "
								>
									About us
									<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
								</Button>
							</Link>
						</section>
					</section>
					<section className="flex h-auto w-full md:w-1/2 lg:w-[30%] ">
						<Image
							src={'/picture/pic11.jpeg'}
							width={1000}
							height={0}
							className=" aspect-square h-auto w-full rounded-lg md:aspect-[4/5]"
							alt={''}
						/>
					</section>
				</section>
			</section>
		</section>
	);
};

export default AboutSection;
