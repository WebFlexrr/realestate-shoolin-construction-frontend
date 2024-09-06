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

interface testimonial {
	_id: string;
	name: string;
	rating: number;
	message: string;
	imageUrl: string;
}
const Testimonial = ({
	testimonials,
}: {
	testimonials: testimonial[];
}): React.JSX.Element => {
	console.log(testimonials);
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
								{/* {Array.from({ length: 5 }).map((_, index) => ( */}
								{testimonials.map((testimonial) => (
									<CarouselItem
										key={testimonial._id}
										className="basis-1/1 w-full  xl:basis-1/2"
									>
										<div className="flex w-full flex-col gap-5 sm:flex-row">
											<Image
												src={testimonial.imageUrl}
												width={1000}
												height={0}
												alt={''}
												className=" aspect-[4/5] w-full rounded-lg border border-primary-foreground lg:w-1/2 xl:w-[300px]"
											/>
											<Card className=" flex h-auto w-full flex-col rounded-lg sm:aspect-[4/5] lg:w-1/2 xl:w-[300px] ">
												<CardHeader>
													<CardTitle>{testimonial.name}</CardTitle>
													<section className="flex w-full text-yellow-400 ">
														{Array.from({ length: testimonial.rating }).map(
															(_, index) => (
																<FaStar key={index} />
															)
														)}
													</section>
												</CardHeader>
												<CardContent className="">
													<CardDescription>
														{testimonial.message}
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
