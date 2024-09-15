import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const CompanyDetailsSection = () => {
	return (
		<section className="h-auto w-full">
			<section className="relative mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-20 xl:px-0">
				<section className="flex flex-col gap-5 lg:flex-row lg:gap-0 ">
					<section className="h-auto w-full  lg:w-[45%] lg:pr-10">
						<Image
							src={'/picture/shop-pic.jpg'}
							width={'1000'}
							height={'0'}
							alt={''}
							className="aspect-[3/3.2] w-full rounded-lg object-cover"
						/>
					</section>

					<section className="flex h-auto w-full flex-col justify-center gap-10  border-black lg:w-[55%] lg:border-l lg:px-10 ">
						<section className="flex h-full w-full flex-col gap-16 sm:flex-row lg:gap-0  ">
							<section className="flex h-auto w-full flex-col gap-6 text-start sm:w-[60%] sm:pr-10 ">
								<section className="flex h-auto w-full flex-col gap-2 ">
									<div className=" text-xl">Office</div>
									<p>
										Shop 13, Rail Gate Colony, Dum Dum Cantonment, Subhash
										Nagar, Dum Dum, Kolkata, West Bengal 700065
									</p>
								</section>
								<section className="flex h-auto w-full flex-col gap-2 text-sm ">
									<span>Monday to Friday - 9AM to 5PM</span>
									<span>Saturday & Sunday only 10AM to 12PM.</span>
								</section>
								<section className="flex w-full flex-row gap-6 sm:flex-col">
									<section className="flex h-auto w-full flex-col">
										<span className=" text-xs">Give Us a Call</span>
										<Link href={'tel:+91-8017194170'} className=" text-base">
											+91 - 8017194170
										</Link>
									</section>
									<section className="flex h-auto w-full flex-col">
										<span className=" text-xs">Email Us</span>
										<Link
											href={'mailto:contact@shoolinconstruction.com'}
											className=" text-base"
										>
											contact@shoolinconstruction.com
										</Link>
									</section>
								</section>
							</section>
						</section>
						<section className="w-full">
							<section className="flex w-fit items-center gap-5">
								<span className=" text-lg">Follow on us</span>
								<section className="flex items-center gap-2">
									<Link
										href={
											'https://www.facebook.com/profile.php?id=61565175867835'
										}
										className="group flex items-center justify-center rounded-full border border-neutral-400 p-2 subpixel-antialiased  transition-all duration-500 ease-in-out hover:border-black hover:bg-neutral-400 hover:bg-primary"
									>
										<FaFacebookF className="  group-hover:text-black" />
									</Link>
									<Link
										href={'https://www.instagram.com/shoolinconstruction'}
										className="group flex items-center justify-center rounded-full border border-neutral-400 p-2 subpixel-antialiased  transition-all duration-500 ease-in-out hover:border-black hover:bg-neutral-400 hover:bg-primary "
									>
										<FaInstagram className="  group-hover:text-black" />
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

export default CompanyDetailsSection;
