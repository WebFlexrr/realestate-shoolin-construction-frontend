import Image from 'next/image';
import React from 'react';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { CiMobile3 } from 'react-icons/ci';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { GoArrowUpRight } from 'react-icons/go';

const Footer = (): React.JSX.Element => {
	return (
		<section className="mt-24 h-auto w-full">
			<section className="h-auto w-full bg-black  text-white ">
				<section className="mx-auto  h-auto w-full max-w-7xl py-20 ">
					<section className="  grid h-auto w-full grid-cols-2 gap-y-20">
						<section className="flex w-full flex-col gap-2">
							<Image
								src={'/logos/logo2.png'}
								width={150}
								height={'0'}
								className=" drop-shadow"
								alt={''}
							/>
							<span className="text-sm text-neutral-400">
								@2024 shoolin Construction
							</span>
						</section>
						<section className=" grid h-auto w-full grid-cols-3">
							<section className=" flex h-auto w-full justify-start">
								<div className="w-fit">
									<span className=" text-lg">What We Do</span>
									<div className="mt-2 flex w-full flex-col">
										<ul className="flex flex-col gap-2 text-sm text-neutral-400">
											<li>Stratigic Planning</li>
											<li>Sell & Buy Properties</li>
											<li>Consultation</li>
										</ul>
									</div>
								</div>
							</section>
							<section className=" flex h-auto w-full justify-start">
								<div className="w-fit">
									<span className=" text-lg">Pages</span>
									<div className="mt-2 flex w-full flex-col">
										<ul className="flex flex-col gap-2 text-sm text-neutral-400">
											<li>About us</li>
											<li>Projects</li>
											<li>Media</li>
											<li>FAQ</li>
											<li>Contact us</li>
										</ul>
									</div>
								</div>
							</section>
							<section className=" flex h-auto w-full justify-start">
								<div className="w-fit">
									<span className=" text-lg">Resources</span>
									<div className="mt-2 flex w-full flex-col">
										<ul className="flex flex-col gap-2 text-sm text-neutral-400">
											<li>Privacy Policy</li>
											<li>Terms & Conditions</li>
										</ul>
									</div>
								</div>
							</section>
						</section>
						<section className="grid h-auto w-full grid-cols-3">
							<section className="flex h-auto w-full justify-center ">
								<div className="flex w-fit flex-col gap-2 text-gray-300">
									<span className="flex items-center gap-3 font-bold text-white">
										<HiOutlineOfficeBuilding className="text-lg" /> Office
									</span>
									<span className="mt-2 w-full  text-sm text-neutral-400">
										4517 Washington Ave. Manchester, Kentucky 39495
									</span>
								</div>
							</section>
							<section className="flex h-auto w-full justify-center  ">
								<div className="flex w-fit flex-col gap-2">
									<span className="flex items-center gap-3 font-bold text-white">
										<IoMailOutline className="text-lg" /> Mail
									</span>
									<span className="mt-2 w-full text-sm  text-neutral-400">
										shoolin@gmail.com
									</span>
								</div>
							</section>
							<section className="flex h-auto w-full justify-center ">
								<div className="flex w-fit flex-col justify-start gap-2">
									<span className="flex items-center gap-3 font-bold text-white">
										<CiMobile3 className="text-lg" /> Mobile
									</span>
									<span className="mt-2 text-sm text-neutral-400 ">
										+91 - 8017194170
									</span>
								</div>
							</section>
						</section>
						<section className="flex w-full font-medium">
							<div className="flex w-fit flex-col ">
								<div>Subscribe for more updates!</div>
								<div>
									Stay updated with our latest design insights by entering your
									email below.
								</div>
								<div className=" mt-3 flex w-full border-b border-neutral-400 py-3 text-neutral-400 ">
									<IoMailOutline className="text-xl" />
									<input
										type="text"
										title="subscribe"
										className=" mx-3 w-full bg-transparent focus:no-underline focus:outline-none"
										placeholder={'Enter your email here'}
									/>
									<button title="submit">
										<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
									</button>
								</div>
							</div>
						</section>
					</section>
				</section>
				<section className="h-auto w-full border-t border-gray-300 py-2 ">
					<section className="mx-auto  flex h-auto w-full max-w-7xl items-center justify-between py-2 text-sm  text-neutral-400">
						<section className="w-fit">
							Design by Webflexrr Digital Services
						</section>
						<section className="flex gap-2 ">
							<div className="group flex items-center justify-center rounded-full border border-neutral-400 p-2 subpixel-antialiased hover:bg-neutral-400">
								<BsTwitterX className="  group-hover:text-black" />
							</div>
							<div className="group flex items-center justify-center rounded-full border border-neutral-400 p-2 subpixel-antialiased hover:bg-neutral-400">
								<FaFacebookF className="  group-hover:text-black" />
							</div>
							<div className="group group flex items-center justify-center rounded-full border border-neutral-400 p-2 subpixel-antialiased hover:bg-neutral-400 ">
								<FaInstagram className="  group-hover:text-black" />
							</div>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Footer;
