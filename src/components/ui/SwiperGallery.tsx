'use client';
import Image from 'next/image';
import React, { FC, useState } from 'react';
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
import ReactPlayer from 'react-player';

interface SwiperGalleryProps {
	data?: Array<string>;
}
const SwiperGallery: FC<SwiperGalleryProps> = ({ data }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
	const [isPlaying, setIsPlaying] = useState<null | number>(null);
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
					// type: 'fraction',
				}}
				onSlideChange={() => {
					setIsPlaying(null);
				}}
				watchSlidesProgress={true}
				thumbs={{ swiper: thumbsSwiper }}
				className="relative aspect-video w-full pb-5  text-white"
			>
				{data?.map((file, index) =>
					file.split('.')[3] === 'mp4' ? (
						<SwiperSlide
							key={index}
							className="flex h-full w-full  bg-gray-200 "
						>
							<div className="flex h-full w-full items-center justify-center border border-black bg-gray-200">
								<ReactPlayer
									key={index}
									url={file}
									controls
									autoPlay
									onPlay={() => {
										setIsPlaying(index);
									}}
									playing={isPlaying === index}
									style={{
										width: '100%',
										height: '100%',
										border: '2px solid black',
										position: 'relative',
										top: '0',
										left: '0',
										objectFit: 'contain',
									}}
								/>
							</div>
						</SwiperSlide>
					) : (
						<SwiperSlide
							key={index}
							className="flex h-full items-center  justify-center bg-gray-200 "
						>
							<div className="flex h-full items-center justify-center bg-gray-200">
								<Image
									className="  h-full w-fit "
									width={1000}
									height={0}
									src={file}
									alt={''}
								/>
							</div>
						</SwiperSlide>
					)
				)}

				{/* <SwiperSlide className="flex h-full items-center  justify-center bg-gray-200 ">
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
				</SwiperSlide> */}
				{/* <SwiperButton /> */}
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
				{data?.map((file, index) =>
					file.split('.')[3] === 'mp4' ? (
						<SwiperSlide key={index} className=" opacity-40">
							<video
								src={file}
								key={index}
								className="aspect-square w-full"
							></video>
						</SwiperSlide>
					) : (
						<SwiperSlide key={index} className=" opacity-40">
							<Image
								className="mx-auto aspect-square h-auto  object-cover "
								width={2000}
								height={0}
								src={file}
								alt={''}
							/>
						</SwiperSlide>
					)
				)}
				{/* <SwiperSlide className=" opacity-40">
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
				</SwiperSlide> */}
			</Swiper>
		</>
	);
};

export default SwiperGallery;
