'use client';
import { Separator } from '@/components/ui/separator';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';

const LayoutSection = () => {
	return (
		<section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
			<section className="h-auto w-full lg:w-[75%] ">
				{/* Layout & Floor Plans */}
				<section className="h-auto w-full">
					<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
						<section className="w-full">
							<h4 className=" underline">Layout & Floor Plans</h4>
						</section>
						<section className=" flex w-full flex-col gap-5  ">
							<section className="mt-4 grid w-full grid-cols-3 gap-4  px-10">
								<button className="flex w-full justify-center  py-3">
									<h5 className="font-bold text-cyan-600">Master Plan</h5>
								</button>
								<button className="flex w-full justify-center border-b-2 border-red-500 py-3">
									<h5 className="font-bold text-cyan-600">Unit Plan</h5>
								</button>
								<button className="flex w-full justify-center  py-3">
									<h5 className="font-bold text-cyan-600">UNIT Plan</h5>
								</button>
							</section>
							{/* <Separator className="bg-black" /> */}
							{/* <section className="mx-auto mt-5 grid w-full grid-cols-4 gap-4 px-20">
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
							</section> */}
							<Swiper
								navigation={true}
								modules={[Navigation, Pagination]}
								slidesPerView={3}
								spaceBetween={5}
								className="mx-auto mt-5 w-full  "
							>
								<SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">1 st Floor</h5>
									</button>
								</SwiperSlide>
								<SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">2 nd Floor</h5>
									</button>
								</SwiperSlide>
								<SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">3 rd Floor</h5>
									</button>
								</SwiperSlide>
								<SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">4 th Floor</h5>
									</button>
								</SwiperSlide>
								<SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">5 th Floor</h5>
									</button>
								</SwiperSlide>
							</Swiper>
							<Separator className="bg-black" />

							<Swiper
								navigation={true}
								modules={[Navigation, Pagination]}
								slidesPerView={4}
								spaceBetween={5}
								className="w-full "
							>
								<SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">1 BHK</h5>
									</button>
								</SwiperSlide>
								<SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">2 HK</h5>
									</button>
								</SwiperSlide>
								<SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">3 HK</h5>
									</button>
								</SwiperSlide>
								{/* <SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">2HK</h5>
									</button>
								</SwiperSlide>
								<SwiperSlide className="px-10">
									<button className="flex w-full justify-center  border-b-2 border-red-500">
										<h5 className="font-bold text-cyan-600">2HK</h5>
									</button>
								</SwiperSlide> */}
							</Swiper>

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
			</section>
		</section>
	);
};

export default LayoutSection;
