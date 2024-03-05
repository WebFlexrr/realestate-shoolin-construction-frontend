'use client';
import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import SectionHeading from './SectionHeading';
import { FaStar } from 'react-icons/fa';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const Testimonial = (): React.JSX.Element => {
	return (
		<section className="h-auto w-full">
			<section className="mx-auto h-auto w-full max-w-7xl px-5 py-20 sm:px-16 xl:px-0">
				<section className=" h-auto w-full ">
					<SectionHeading
						subTitle={'Testimonial'}
						mainTitle={'Client Review'}
					/>
					<section className="h-auto w-full ">
						<Carousel
							plugins={[
								Autoplay({
									delay: 5000,
								}),
							]}
							className="w-full  "
						>
							<CarouselContent>
								{Array.from({ length: 5 }).map((_, index) => (
									<CarouselItem
										key={index}
										className="basis-1/1 w-full  xl:basis-1/2"
									>
										<div className="flex w-full flex-col gap-5 sm:flex-row">
											<Image
												src={
													'https://assets-global.website-files.com/659508024773365d154788a8/65cf307bcf5bbed241bbffa6_img-4-p-500.jpg'
												}
												width={1000}
												height={0}
												alt={''}
												className=" aspect-[4/5] w-full rounded-lg border border-primary-foreground lg:w-1/2 xl:w-[300px]"
											/>
											<Card className=" flex h-auto w-full flex-col rounded-lg sm:aspect-[4/5] lg:w-1/2 xl:w-[300px] ">
												<CardHeader>
													<CardTitle>Tejodeep Mitra Roy</CardTitle>
													<section className="flex w-full text-yellow-400 ">
														<FaStar />
														<FaStar />
														<FaStar />
														<FaStar />
														<FaStar />
													</section>
												</CardHeader>
												<CardContent className="">
													<CardDescription>
														The modern amenities and other facilities offered by
														the Project are really attractive in addition to
														affordable price and lower maintenance charges
														compared to other projects in Kolkata. We feel
														elated to be a part of this project.
													</CardDescription>
												</CardContent>
											</Card>

											{/* <TestimonialCards /> */}
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="hidden xl:flex" />
							<CarouselNext className="hidden xl:flex" />
						</Carousel>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Testimonial;
