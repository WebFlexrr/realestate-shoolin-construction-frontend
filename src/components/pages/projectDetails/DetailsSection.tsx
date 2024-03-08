'use client';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiDownload } from 'react-icons/fi';
import Link from 'next/link';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

const DetailsSection = () => {
	return (
		<section className="h-auto w-full">
			<section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="h-auto w-[75%] ">
					{/* Heading Details */}
					<section className="mt-5 h-auto w-full ">
						<Separator />
						<section className="flex w-full py-5 ">
							<section className="flex w-1/4 flex-col items-center justify-center ">
								<h6 className="">2,3,4,5 BHK</h6>
								<p>Apartment type</p>
							</section>
							<section className="flex w-1/4 flex-col items-center justify-center ">
								<h6>177</h6>
								<span>Total Units</span>
							</section>
							<section className="flex w-1/4 flex-col items-center justify-center ">
								<h6>August, 2026</h6>
								<span>Total Units</span>
							</section>
							<section className="flex w-1/4 flex-col items-center justify-center ">
								<h6>18 + 2</h6>
								<span>Floors + Towers</span>
							</section>
						</section>
					</section>

					{/* Description */}
					<section className="h-auto w-full">
						<section className="my-10 h-auto w-full rounded-lg bg-background2 px-16 py-10 ">
							<section className="w-full">
								<h2 className=" underline">Description</h2>
							</section>
							<section className="mt-7 w-full space-y-4">
								<p>
									Imagine a place where five elements - earth, air, water,
									energy and space - come to create a peaceful home just for
									you. That's Tattvam for you. Set in Bagmari, it's your key to
									live a balanced and wonderful life. Built by Isha Group,
								</p>
								<p>
									reputed luxury property developers in Kolkata, Tattvam
									features a host of amenities including rooftop cabana, jogging
									path, multipurpose court, infinity pool, kids play area etc.
									What's more, it offers 3-side open, south-facing apartments
									for your comfort.
								</p>
							</section>
						</section>
					</section>

					{/* Layout & Floor Plans */}
					<section className="h-auto w-full">
						<section className="my-10 h-auto w-full rounded-lg bg-background2 px-16 py-10 ">
							<section className="w-full">
								<h2 className=" underline">Layout & Floor Plans</h2>
							</section>
							<section className="mt-6 flex w-full flex-col gap-5 ">
								<section className="grid w-full grid-cols-3 gap-4 px-10">
									<button className="flex w-full justify-center  py-3">
										<h4 className="font-bold text-cyan-600">Master Plan</h4>
									</button>
									<button className="flex w-full justify-center  py-3">
										<h4 className="font-bold text-cyan-600">Tower Plan</h4>
									</button>
									<button className="flex w-full justify-center border-b-2 border-red-500 py-3">
										<h4 className="font-bold text-cyan-600">UNIT Plan</h4>
									</button>
								</section>
								{/* <Separator className="bg-black" /> */}
								<section className="mx-auto mt-5 grid w-full grid-cols-4 gap-4 px-20">
									<button className="flex w-full justify-center border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">2 HK</h5>
									</button>
									<button className="flex w-full justify-center ">
										<h5 className="font-bold text-cyan-600">3 HK</h5>
									</button>
									<button className="flex w-full justify-center ">
										<h5 className="font-bold text-cyan-600">4 HK</h5>
									</button>
									<button className="flex w-full justify-center ">
										<h5 className="font-bold text-cyan-600">5 HK</h5>
									</button>
								</section>
								<Separator className="bg-black" />
								<section className=" w-full  ">
									<Swiper
										navigation={true}
										modules={[Navigation, Pagination]}
										slidesPerView={4}
										spaceBetween={5}
										className="w-full "
									>
										<SwiperSlide className="px-10">
											<button className="flex w-full justify-center  border-b-2 border-red-500">
												<h5 className="font-bold text-cyan-600">2HK</h5>
											</button>
										</SwiperSlide>
										<SwiperSlide className="px-10">
											<button className="flex w-full justify-center  border-b-2 border-red-500">
												<h5 className="font-bold text-cyan-600">2HK</h5>
											</button>
										</SwiperSlide>
										<SwiperSlide className="px-10">
											<button className="flex w-full justify-center  border-b-2 border-red-500">
												<h5 className="font-bold text-cyan-600">2HK</h5>
											</button>
										</SwiperSlide>
										<SwiperSlide className="px-10">
											<button className="flex w-full justify-center  border-b-2 border-red-500">
												<h5 className="font-bold text-cyan-600">2HK</h5>
											</button>
										</SwiperSlide>
										<SwiperSlide className="px-10">
											<button className="flex w-full justify-center  border-b-2 border-red-500">
												<h5 className="font-bold text-cyan-600">2HK</h5>
											</button>
										</SwiperSlide>
									</Swiper>
								</section>
								{/* <Separator className="bg-black" /> */}
								<section className="mt-10 flex w-full flex-col gap-3">
									<section className=" flex  w-full items-center justify-center border border-black bg-white">
										<Image
											src={'/plans/pic3.jpg'}
											width={1000}
											height={0}
											alt={''}
										/>
									</section>
									<section>
										<Link href={'/'} className="flex items-center gap-3 ">
											<FiDownload /> Download high resolution
										</Link>
									</section>
								</section>
							</section>
						</section>
					</section>

					{/* Location Map */}
					<section className="h-auto w-full">
						<section className="my-10 h-auto w-full rounded-lg bg-background2 px-16 py-10 ">
							<section className="w-full">
								<h2 className=" underline">Location Map</h2>
							</section>
							<section className="mt-7 flex w-full">
								<section className="w-1/2">
									<p>24A, Bagmari Road, West Bengal, 700054</p>
								</section>
							</section>
							<section className="mt-5 aspect-video w-full border border-black">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.628728828988!2d88.40919706961944!3d22.634582636525977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e0d3e85ef57%3A0xeeb4c142fb8ab5db!2sShoolin%20Construction!5e0!3m2!1sen!2sin!4v1709840051825!5m2!1sen!2sin"
									className="h-full w-full"
									// allowfullscreen=""
									loading="lazy"
								></iframe>
							</section>
						</section>
					</section>

					{/* Location Map */}
					<section className="h-auto w-full">
						<section className="my-10 h-auto w-full rounded-lg bg-background2 px-16 py-10 ">
							<section className="w-full">
								<h2 className=" underline">Construction Status</h2>
							</section>
							<section className="mt-5 grid w-full grid-cols-4 gap-x-5 px-16">
								<section className="group relative flex aspect-square w-full flex-col items-center">
									<Dialog>
										<DialogTrigger className="group relative flex aspect-square w-full flex-col items-center">
											{/* <section className="group relative flex aspect-square w-full flex-col items-center"> */}
											<Image
												src={'/picture/pic1.jpg'}
												width={1000}
												height={0}
												alt={''}
												className="aspect-square w-full rounded"
											/>
											<section className="absolute left-0 top-0 h-full w-full rounded bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50" />
											<section className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end text-white opacity-0 transition-all  duration-300 ease-in-out group-hover:opacity-100">
												<div className="flex max-w-7xl flex-col items-center rounded bg-white px-3 text-sm text-black">
													<div>Updated on</div>
													<div>21/02/2023</div>
												</div>
											</section>
											{/* </section> */}
										</DialogTrigger>

										<DialogContent className=" max-w-5xl p-10">
											<section className="relative flex aspect-video h-full w-full items-center  justify-center bg-gray-200 ">
												<Image
													src={'/picture/pic1.jpg'}
													width={1000}
													height={0}
													alt={''}
													className="h-full w-fit rounded"
												/>
											</section>
										</DialogContent>
									</Dialog>
								</section>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default DetailsSection;
