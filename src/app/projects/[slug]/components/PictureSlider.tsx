'use client';
import React, { FC } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SwiperGallery from '@/components/ui/SwiperGallery';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface PictureSliderProps {
	thumbnail?: string;
	projectImages?: Array<string>;
}
const PictureSlider: FC<PictureSliderProps> = ({
	thumbnail,
	projectImages,
}) => {
	return (
		<section className=" h-auto w-full ">
			{/* <section className="  flex h-full w-full flex-col px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0"> */}
			<section className="h-auto w-full ">
				<section className=" flex  h-auto w-full flex-col gap-5  lg:flex-row ">
					{/* <section className="h-auto w-full lg:w-[75%]  "> */}
					<Dialog>
						<DialogTrigger className="flex w-full gap-5 ">
							<Carousel
								plugins={[
									Autoplay({
										delay: 3000,
									}),
								]}
								opts={{
									align: 'start',
									loop: true,
								}}
								className="w-full border "
							>
								<CarouselContent className="-ml-1 h-auto w-full  lg:aspect-video lg:w-full ">
									{projectImages?.map((image) => (
										<CarouselItem key={image} className=" aspect-square w-full">
											<Image
												className=" aspect-square h-full w-full  object-contain  "
												width={1000}
												height={0}
												src={projectImages[1]}
												alt={''}
											/>
										</CarouselItem>
									))}
								</CarouselContent>
								{/* <CarouselPrevious />
											<CarouselNext /> */}
							</Carousel>
						</DialogTrigger>

						<DialogContent className="w-full max-w-5xl bg-gray-300 p-10">
							<SwiperGallery
								// data={['/picture/pic1.jpg', '/picture/pic4.jpg']}
								data={projectImages}
							/>
						</DialogContent>
					</Dialog>
				</section>

				<Separator orientation={'vertical'} />
				{/* <section className="sticky top-0 hidden h-auto w-[25%] gap-5 lg:flex">
							<div className="w-full ">
								<Card className=" sticky  top-[7rem]  w-full justify-end bg-background2">
									<CardHeader>
										<CardTitle>ENQUIRE NOW</CardTitle>
									</CardHeader>
									<CardContent>
										<form>
											<div className="grid w-full items-center gap-4">
												<div className="flex flex-col space-y-2">
													<Input id="name" placeholder="Enter Name*" />
													<Input id="name" placeholder="Enter Mobile/Number*" />
													<Input id="name" placeholder="Enter Email*" />
												</div>
											</div>
										</form>
									</CardContent>
									<CardFooter className="flex w-full justify-center">
										<Button className="px-10">Submit</Button>
									</CardFooter>
								</Card>
							</div>
						</section> */}
			</section>
		</section>
		//  </section>
		// </section>
	);
};

export default PictureSlider;
