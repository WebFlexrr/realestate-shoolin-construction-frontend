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
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import SectionHeading from './SectionHeading';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Testimonial = (): React.JSX.Element => {
	return (
		<section className="h-auto w-full">
			<section className="mx-auto h-auto w-full max-w-7xl  py-20">
				<section className=" h-auto w-full ">
					<SectionHeading
						subTitle={'Testimonial'}
						mainTitle={'Client Review'}
					/>
					<section className="h-auto w-full ">
						<Carousel className="w-full ">
							<CarouselContent className="-ml-2 md:-ml-4">
								{Array.from({ length: 5 }).map((_, index) => (
									<CarouselItem
										key={index}
										className="md:basis-1/1 pl-1 lg:basis-1/2"
									>
										<div className="flex gap-5">
											<Image
												src={
													'https://assets-global.website-files.com/659508024773365d154788a8/65cf307bcf5bbed241bbffa6_img-4-p-500.jpg'
												}
												width={1000}
												height={0}
												alt={''}
												className="aspect-[4/5] w-[300px] rounded-lg border border-primary-foreground"
											/>
											<Card className=" flex aspect-[4/5] w-[300px] flex-col ">
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
												<CardFooter className="flex justify-between"></CardFooter>
											</Card>

											{/* <TestimonialCards /> */}
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Testimonial;
