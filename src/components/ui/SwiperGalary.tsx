'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	FreeMode,
	Thumbs,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperButton from './SwiperButton';

const SwiperGalary = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
	return (
		<>
			<Swiper
				modules={[FreeMode, Navigation, Thumbs, Pagination, Scrollbar, A11y]}
				slidesPerView={1}
				navigation={true}
				loop={true}
				pagination={{
					clickable: true,
					dynamicBullets: true,
					type: 'fraction',
				}}
				thumbs={{ swiper: thumbsSwiper }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log('slide change')}
				className="relative aspect-video w-full  text-white"
			>
				<SwiperSlide className="flex h-full items-center  justify-center bg-gray-200 ">
					<div className="flex h-full items-center justify-center bg-gray-200">
						<Image
							className="  h-full w-fit "
							width={1000}
							height={0}
							src={'/picture/pic1.jpg'}
							alt={''}
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="flex h-full items-center  justify-center bg-gray-200 ">
					<div className="flex h-full items-center justify-center bg-gray-200">
						<Image
							className="  h-full w-fit "
							width={1000}
							height={0}
							src={'/picture/pic4.jpg'}
							alt={''}
						/>
					</div>
				</SwiperSlide>
				<SwiperButton />
			</Swiper>
			<Swiper
				onSwiper={(swiper) => {
					setThumbsSwiper(swiper);
				}}
				loop={true}
				spaceBetween={10}
				slidesPerView={10}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper relative w-full px-2"
			>
				<SwiperSlide className=" opacity-40">
					<Image
						className="mx-auto aspect-square h-auto  object-cover "
						width={1000}
						height={0}
						src={'/picture/pic1.jpg'}
						alt={''}
					/>
				</SwiperSlide>
				<SwiperSlide className=" ">
					<Image
						className="mx-auto aspect-square h-auto  object-cover "
						width={1000}
						height={0}
						src={'/picture/pic4.jpg'}
						alt={''}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default SwiperGalary;
