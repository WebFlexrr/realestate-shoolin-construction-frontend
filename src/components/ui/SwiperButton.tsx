'use client';
import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperButton = () => {
	const swiper = useSwiper();

	return (
		<div className="absolute top-0 z-10 flex h-full  w-full justify-between text-secondary">
			<button
				title="previous"
				className="h-full"
				onClick={() => {
					swiper.slidePrev();
				}}
			>
				<div className="h-[1px] w-5 bg-primary" />
			</button>
			<button
				title="next"
				onClick={() => {
					swiper.slideNext();
				}}
			>
				<div className="h-[1px] w-5 bg-primary" />
			</button>
		</div>
	);
};

export default SwiperButton;
