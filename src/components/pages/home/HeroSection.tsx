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
		<section className="relative h-[100vh] w-full bg-background2 ">
			<div className="absolute left-0 top-0 z-0 h-full w-full">
				<div className="relative z-0 h-full w-full">
					{/* <div className="absolute  h-full w-full bg-black opacity-50" /> */}
					{/* <Image
						src={'/picture/pic1.jpg'}
						width={1000}
						height={0}
						alt=""
						className="h-full w-full"
					/> */}
				</div>
			</div>
			<section className=" relative z-30 mx-auto flex h-full w-full max-w-7xl ">
				<section className="flex h-full w-1/2 flex-col items-center justify-center gap-8 pr-20 pt-40 ">
					<section className="h-auto w-full ">
						<h1>Your home, your style begin your design adventure</h1>
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
								variant={'default'}
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
							className="aspect-[4/3.5] w-[25rem] rounded-lg"
						/>
					</section>
				</section>

				<section className="flex h-full w-1/2 flex-col items-center justify-center gap-4 pt-20 ">
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
						{/* <CarouselPrevious />
						<CarouselNext /> */}
					</Carousel>
					<section className="flex h-auto w-full justify-end">
						Architectural Excellence
					</section>
				</section>

				{/* <section className="flex h-full w-full flex-col items-center justify-center gap-5 text-7xl font-extrabold text-white">
					<span>Modern, Sleek, Sustainable</span>
					<span>High-Rise Living</span>
					<span>In Responsibly Priced</span>
				</section> */}
				{/* <span className=" absolute bottom-10 left-1/2 right-1/2 flex animate-bounce flex-col items-center gap-3 opacity-70 ">
					<SlMouse className="text-[3rem] text-white" />
					{/* <FaArrowDownLong className="text-[1.2rem] text-white" /> */}
				{/* </span>  */}
			</section>
		</section>
	);
};

export default HeroSection;
