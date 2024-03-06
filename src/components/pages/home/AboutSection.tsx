import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const AboutSection = (): JSX.Element => {
	return (
		<section className="h-auto w-full ">
			<section className="h-auto w-full px-5 py-20 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0 ">
				<section className="flex h-auto w-full flex-col gap-10 lg:flex-row  ">
					<section className="flex h-auto w-full flex-col gap-10 lg:w-[70%] lg:pr-20 ">
						<section className="h-auto w-full">
							<div className=" w-fit ">
								<h2>
									&quot;From concept to creation how our dedication shapes
									architectural marvels&quot;
								</h2>
							</div>
						</section>
						<section className="flex h-auto w-full ">
							<section className="flex h-auto w-[40%] flex-col justify-between">
								<section className="flex w-full flex-col">
									<div className="font-poppins text-sm">Founded</div>
									<div className="font-poppins text-2xl">2019</div>
								</section>
								<section className="flex w-full flex-col">
									<div className="font-poppins  text-sm">
										Projects Completed
									</div>
									<div className="font-poppins text-2xl">30+</div>
								</section>
							</section>
							<section className="mx-auto w-[60%] text-center leading-5">
								<p>
									Welcome to Shoolin Construction Developers! Discover your
									dream home with our user-friendly interface and extensive
									property listings. Whether buying, selling, or renting, our
									platform offers tailored solutions to match your needs.
									Explore top-notch properties and seamless navigation for a
									hassle-free real estate experience. Start your journey today!
								</p>
							</section>
						</section>
						<section className="flex w-full items-center justify-center">
							<Link href={'/about'}>
								<Button
									variant={'outline-rounded'}
									size={'lg'}
									className="group "
								>
									About us
									<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
								</Button>
							</Link>
						</section>
					</section>
					<section className="flex h-auto w-full md:w-1/2 lg:w-[30%] ">
						<Image
							src={'/picture/pic8.jpg'}
							width={1000}
							height={0}
							className=" aspect-square h-auto w-full rounded-lg md:aspect-[4/5]"
							alt={''}
						/>
					</section>
				</section>
				{/* <section>
						<div className="grid w-full grid-cols-3 gap-x-5">
						<section className=" flex h-auto w-full flex-col items-center rounded border border-black bg-white py-10 text-lg font-semibold shadow-2xl">
						<section className="mb-2">
						<Image
										src={'/icons/happy-face.png'}
										width={50}
										height={50}
										alt={'happyface'}
									/>
								</section>
								<section>50+</section>
								<section>Happy customers</section>
							</section>
							<section className=" flex h-auto w-full flex-col items-center rounded border border-black bg-white py-10 text-lg font-semibold shadow-2xl">
								<section className="mb-2">
									<Image
										src={'/icons/architect.png'}
										width={50}
										height={50}
										alt={'architect'}
									/>
								</section>
								<section>30+</section>
								<section>Successfull Projects</section>
							</section>
							<section className=" flex h-auto w-full flex-col items-center rounded border border-black bg-white py-10 text-lg font-semibold shadow-2xl">
								<section className="mb-2">
									<Image
										src={'/icons/24-hours-support.png'}
										width={50}
										height={50}
										alt={'24-hours-support'}
									/>
								</section>
								<section>24/7</section>
								<section>Helpline Support</section>
							</section>
						</div>
					</section> */}
			</section>
		</section>
	);
};

export default AboutSection;
