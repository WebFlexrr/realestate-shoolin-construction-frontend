import Image from 'next/image';
import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const CompanyDetailsSection = () => {
	return (
		<section className="h-auto w-full">
			<section className="relative z-30 mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-20 xl:px-0">
				<section className="flex flex-col gap-5 lg:flex-row lg:gap-0 ">
					<section className="h-auto w-full  lg:w-[45%] lg:pr-10">
						<Image
							src={'/picture/pic4.jpg'}
							width={'1000'}
							height={'0'}
							alt={''}
							className="aspect-[3/3.2] w-full rounded-lg"
						/>
					</section>

					<section className="flex h-auto w-full flex-col justify-center gap-10  border-black lg:w-[55%] lg:border-l lg:px-10 ">
						<section className="flex h-full w-full flex-col gap-16 sm:flex-row lg:gap-0  ">
							<section className="flex h-auto w-full flex-col gap-6 text-start sm:w-[60%] sm:pr-10 ">
								<section className="flex h-auto w-full flex-col gap-2 ">
									<div className=" text-xl">Appointment</div>
									<p>
										Book your appointment with us to kickstart your design
										journey.
									</p>
								</section>
								<section className="flex h-auto w-full flex-col gap-2 text-sm ">
									<span>Monday to Friday - 9AM to 5PM</span>
									<span>Saturday & Sunday only 10AM to 12PM.</span>
								</section>
								<section className="flex w-full flex-row gap-6 sm:flex-col">
									<section className="flex h-auto w-full flex-col">
										<span className=" text-xs">Give Us a Call</span>
										<span className=" text-base">9674128921</span>
									</section>
									<section className="flex h-auto w-full flex-col">
										<span className=" text-xs">Email Us</span>
										<span className=" text-base">support@email.com</span>
									</section>
								</section>
							</section>
							<section className="w-full sm:w-[40%] lg:pl-10">
								<section className=" mb-2 text-xl">Offices</section>
								<section className="flex w-full flex-col gap-6 text-base">
									<section className="flex h-auto w-full flex-col gap-2 ">
										<span>New Jersey</span>
										<span className="text-sm">
											2972 Westheimer Rd. Santa Ana, Illinois 85486
										</span>
									</section>
									<section className="flex h-auto w-full flex-col gap-2">
										<span>New Jersey</span>
										<span className="text-sm">
											2972 Westheimer Rd. Santa Ana, Illinois 85486
										</span>
									</section>
									<section className="flex h-auto w-full flex-col gap-2">
										<span>New Jersey</span>
										<span className="text-sm">
											2972 Westheimer Rd. Santa Ana, Illinois 85486
										</span>
									</section>
								</section>
							</section>
						</section>
						<section className="w-full">
							<section className="flex w-fit items-center gap-5">
								<span className=" text-lg">Follow on us</span>
								<section className="flex items-center gap-2">
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
			</section>
		</section>
	);
};

export default CompanyDetailsSection;
