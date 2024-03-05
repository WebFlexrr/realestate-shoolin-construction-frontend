import Image from 'next/image';
import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
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
import SectionHeading from '@/components/SectionHeading';
import FAQ from '@/components/FAQ';
import { FiArrowUpRight } from 'react-icons/fi';

const HeroSection = () => {
	return (
		<section className="h-auto w-full ">
			<section className=" relative z-30 mx-auto flex h-full w-full max-w-7xl flex-col ">
				<section className="flex h-auto w-full justify-between ">
					<section className=" flex w-[45%]">
						<h2>Embark on a journey with our architectural firm</h2>
					</section>
					<section className="w-[54%]">
						<p>
							As architects and designers, we believe in the power of creativity
							to transform spaces and enrich lives. Over the years, we've had
							the privilege of working on a diverse array of projects, each
							presenting its own unique set of challenges and opportunities.
						</p>
					</section>
				</section>
				<section className="mt-10 flex h-auto w-full gap-6">
					<section className="h-auto w-[45%]">
						<Image
							src={'/picture/pic2.jpg'}
							width={1000}
							height={0}
							className=" aspect-[4/3] h-auto w-full rounded-lg"
							alt={''}
						/>
					</section>
					<section className="h-auto w-[55%]">
						<Image
							src={'/picture/pic2.jpg'}
							width={1000}
							height={0}
							className=" aspect-[4/3] h-auto w-full rounded-lg"
							alt={''}
						/>
					</section>
				</section>
				<section className="mb-20 mt-40 flex h-auto w-full gap-6">
					<section className=" h-auto w-full ">
						<SectionHeading
							subTitle={'WHAT WE DO'}
							mainTitle={'Our Services'}
						/>
						<section className="h-auto w-full">
							<section className="flex">
								<section className="h-auto w-[40%] ">
									<Image
										src={'/picture/pic4.jpg'}
										width={1000}
										height={0}
										alt={''}
										className=" aspect-[3/3.5] w-full rounded-lg"
									/>
								</section>
								<section className="flex h-auto w-[60%] flex-col justify-center gap-10 pl-20">
									<section className="flex h-auto w-full flex-col">
										<h4>Our Expertise</h4>
										<Accordion type="single" collapsible className="w-full">
											<AccordionItem value="item-1">
												<AccordionTrigger>Landscape Design</AccordionTrigger>
												<AccordionContent>
													Yes. It adheres to the WAI-ARIA design pattern.
												</AccordionContent>
											</AccordionItem>
											<AccordionItem value="item-2">
												<AccordionTrigger>Architecture</AccordionTrigger>
												<AccordionContent>
													Yes. It comes with default styles that matches the
													other components&apos; aesthetic.
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</section>
									<section className="flex h-auto w-full flex-col">
										<h4>Supporting Secvices</h4>
										<Accordion type="single" collapsible className="w-full">
											<AccordionItem value="item-1">
												<AccordionTrigger>Consultation</AccordionTrigger>
												<AccordionContent>
													Yes. It adheres to the WAI-ARIA design pattern.
												</AccordionContent>
											</AccordionItem>
											<AccordionItem value="item-2">
												<AccordionTrigger>Design & Planning </AccordionTrigger>
												<AccordionContent>
													Yes. It comes with default styles that matches the
													other components&apos; aesthetic.
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</section>
								</section>
							</section>
						</section>
					</section>
				</section>
			</section>
			<section className="relative z-30  h-full w-full bg-background2   py-20">
				<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col">
					<SectionHeading subTitle={'Members'} mainTitle={'Meet Our Team'} />
					<section className="flex h-auto w-full ">
						<section className="h-auto w-1/2 ">
							<Carousel className="h-auto w-full">
								<CarouselContent className="-ml-2 md:-ml-4">
									{Array.from({ length: 4 }).map((_, index) => (
										<CarouselItem
											key={index}
											className="md:basis-1/1  lg:basis-1/2"
										>
											<div className="flex flex-col gap-5">
												<Card className=" flex  w-[300px] flex-col ">
													<CardHeader>
														<Image
															src={
																'https://assets-global.website-files.com/659508024773365d154788a8/65cf307bcf5bbed241bbffa6_img-4-p-500.jpg'
															}
															width={1000}
															height={0}
															alt={''}
															className="aspect-[4/4.5] w-[300px] rounded-lg border border-primary-foreground"
														/>
													</CardHeader>
													<CardContent className="">
														<CardTitle>Tejodeep Mitra Roy</CardTitle>
														<CardDescription className="mt-2">
															Manager
														</CardDescription>
													</CardContent>
												</Card>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						</section>
						<section className="h-auto w-1/2  pl-20 ">
							<section className="h-auto w-full">
								<section className="mt-20 h-auto w-full pr-4">
									<h4>
										United by passion, our team is dedicated to shaping spaces
										that inspire and enrich lives.
									</h4>
								</section>
								<section>
									<section className="mt-16 h-auto w-full">
										<p>
											Our team is our greatest asset. Comprised of talented
											architects, designers, engineers, and support staff, we
											are united by a shared passion for design excellence and a
											commitment to exceeding client expectations.
										</p>
									</section>
									<section className="mt-5 flex w-fit flex-col border-t border-black">
										<span>Darlene Robertson</span>
										<span>CEO & Founder</span>
									</section>
								</section>
							</section>
						</section>
					</section>
				</section>
			</section>
			<section className="relative z-30  h-full w-full border border-black bg-background py-20">
				<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col">
					<section>Our values</section>
					<section className="flex w-full">
						<section className="h-auto w-[40%] ">
							<button className="group flex h-auto w-full items-center justify-between border-b border-black py-7">
								<div className="flex gap-5">
									<span>01.</span>
									<h4>Creative Integrity</h4>
								</div>
								<FiArrowUpRight className=" invisible text-4xl transition-all duration-500 ease-in-out  group-hover:visible" />
							</button>
							<button className="flex h-auto w-full items-center justify-between border-b border-black py-7">
								<div className="flex gap-5">
									<span>02.</span>
									<h4>Sustainable Innovation</h4>
								</div>
								<FiArrowUpRight className=" text-4xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
							</button>
							<button className="flex h-auto w-full items-center justify-between border-b border-black py-7">
								<div className="flex gap-5">
									<span>03.</span>
									<h4>Client Collaboration</h4>
								</div>
								<FiArrowUpRight className=" text-4xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
							</button>
							<button className="flex h-auto w-full items-center justify-between border-b border-black py-7">
								<div className="flex gap-5">
									<span>04.</span>
									<h4>Ethical Excellence</h4>
								</div>
								<FiArrowUpRight className=" text-4xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
							</button>
						</section>
						<section className="h-auto w-[60%] border border-black"></section>
					</section>
				</section>
			</section>
			<FAQ />
		</section>
	);
};

export default HeroSection;
