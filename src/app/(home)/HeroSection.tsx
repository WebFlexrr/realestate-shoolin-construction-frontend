'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
// import { SlMouse } from 'react-icons/sl';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

const HeroSection = (): React.JSX.Element => {
	return (
		<section className="relative h-auto w-full bg-background2 pb-10 pt-[2rem] lg:h-auto ">
			<section className="  flex h-full w-full flex-col px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="flex h-full flex-col items-center justify-center gap-8 pt-32 md:w-1/2 lg:pr-20 lg:pt-40 ">
					<section className="h-auto w-full ">
						<h1 className="  text-6xl font-medium ">
							{/* Your home, your style begin your design adventure */}
							Your Dream home,In affordable prices
						</h1>
					</section>
					<section>
						<p>
							A fusion of modern aesthetics and classical precision, capturing
							the essence of architectural excellence.
						</p>
					</section>
					<section className="w-full">
						<Link href={'/projects'}>
							<Button
								variant={'default-rounded'}
								size={'lg'}
								className=" group  text-lg"
							>
								Find your Property
								<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
							</Button>
						</Link>
					</section>
					<section className="mt-20 flex w-full items-start justify-start">
						<Image
							src={'/picture/pic1.jpg'}
							width={1000}
							height={0}
							alt=""
							className="aspect-[4/3.5] w-full rounded-lg md:w-[25rem]"
						/>
					</section>
				</section>

				<section className="flex h-full w-full flex-col items-center justify-center gap-4 pt-10 md:w-1/2 md:pt-40 ">
					<Carousel
						plugins={[
							Autoplay({
								delay: 5000,
							}),
						]}
						className=" border-text aspect-square rounded-lg "
					>
						<CarouselContent>
							<CarouselItem>
								<Image
									src={'/picture/pic7.jpg'}
									width={1000}
									height={0}
									alt=""
									className=" border-text aspect-square rounded-lg border"
								/>
							</CarouselItem>
							<CarouselItem>
								<Image
									src={'/picture/pic6.jpg'}
									width={1000}
									height={0}
									alt=""
									className=" border-text aspect-square rounded-lg border"
								/>
							</CarouselItem>
							<CarouselItem>
								<Image
									src={'/picture/pic5.jpg'}
									width={1000}
									height={0}
									alt=""
									className=" border-text aspect-square rounded-lg border"
								/>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
					<section className="flex h-auto w-full justify-end">
						Architectural Excellence
					</section>
				</section>
			</section>
		</section>
	);
};

export default HeroSection;
