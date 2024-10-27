import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { FC } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

interface HeroSectionProps {
	title?: string;
	subTitle?: string;
}

const HeroSection: FC<HeroSectionProps> = async ({
	title,
	subTitle,
}): Promise<React.JSX.Element> => {
	return (
		<section className="relative h-auto w-full bg-background2 pb-10 pt-[1rem] md:pt-[2rem] lg:h-auto ">
			<section className="  flex h-full w-full flex-col px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="flex h-full flex-col items-center justify-center gap-8 pt-32 md:w-1/2 lg:pr-10 lg:pt-40 ">
					<section className="h-auto w-full  ">
						<h1 className=" text-5xl   font-medium md:text-6xl ">
							{/* Your home, your style begin your design adventure */}
							{/* Your Dream home,In affordable prices */}
							{title}
						</h1>
					</section>
					<section>
						<p className="text-lg">
							{/* A fusion of modern aesthetics and classical precision, capturing
							the essence of architectural excellence. */}
							{subTitle}
						</p>
					</section>
					<section className="w-full">
						<Link href={'/projects'}>
							<Button
								variant={'default-rounded'}
								size={'lg'}
								className=" group  text-lg"
							>
								Find your best home
								<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
							</Button>
						</Link>
					</section>
					<section className="mt-20 flex w-full items-start justify-start">
						<Image
							src={'/picture/pic7.jpg'}
							width={1000}
							height={0}
							alt="2nd Building Picture for Hero "
							className=" w-full rounded-lg md:w-[25rem]"
							priority={true}
						/>
					</section>
				</section>

				<section className="flex h-full w-full flex-col items-center justify-center gap-4 pt-10 md:w-1/2 md:pt-40 ">
					<Image
						src={'/picture/pic1.jpg'}
						width={1000}
						height={0}
						alt="Main Hero Section Picture"
						className="   rounded-lg border"
						priority={true}
					/>
					<section className="flex h-auto w-full justify-end">
						Architectural Excellence
					</section>
				</section>
			</section>
		</section>
	);
};

export default HeroSection;
