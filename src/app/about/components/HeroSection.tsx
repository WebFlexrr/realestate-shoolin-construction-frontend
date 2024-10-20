import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { FC } from 'react';

interface HeroSectionProps {
	about?: string;
}
const HeroSection: FC<HeroSectionProps> = ({ about }) => {
	return (
		<section className="h-auto w-full ">
			<section className=" relative mx-auto flex h-full w-full max-w-7xl flex-col px-5 xl:px-0">
				<section className="grid h-auto w-full grid-cols-1 justify-between gap-5 md:grid-cols-2 lg:flex-row lg:gap-x-7 lg:gap-y-14 ">
					<section className=" order-1  flex w-full flex-col gap-3">
						<h2>Who We are?</h2>
						<div className="h-1 w-20 bg-primary"></div>
					</section>
					<section className=" order-3 w-full  md:order-2">
						<p className="text-base leading-7 tracking-wider">
							{about}
							{/* Shoolin Construction is a Construction Company. Sunil Das is the
							founder of the company. Our mission is to provide houses at an
							affordable prices. We assure the best for the price. Backed by a
							talented team of professionals. We are able to provide there
							superior service and construction jobs to our valued clients. */}
						</p>
					</section>
					<section className=" order-2 h-auto w-full ">
						<Image
							src={'/picture/pic6.jpg'}
							width={1000}
							height={0}
							className=" aspect-[4/2.5] h-auto w-full rounded-lg"
							alt={'Front view of Gitanjali Apartment'}
						/>
						<section className="my-3 flex w-full flex-wrap gap-3 md:my-6">
							<Button variant={'outline-rounded'} size={'sm'}>
								Inspire
							</Button>
							<Button variant={'outline-rounded'} size={'sm'}>
								Precision
							</Button>
							<Button variant={'outline-rounded'} size={'sm'}>
								Harmony
							</Button>
							<Button variant={'outline-rounded'} size={'sm'}>
								Mastery
							</Button>
						</section>
					</section>
					<section className="order-4 h-auto w-full">
						<Image
							src={'/picture/pic10.jpeg'}
							width={1000}
							height={0}
							className=" aspect-[4/3] h-auto w-full rounded-lg"
							alt={'side view of Pashupati Apartment '}
						/>
					</section>
				</section>
				<section className="mt-10 flex h-auto w-full flex-col gap-6"></section>
			</section>
		</section>
	);
};

export default HeroSection;
