import Image from 'next/image';
import React from 'react';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { CiMobile3 } from 'react-icons/ci';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const Footer = (): React.JSX.Element => {
	return (
		<section className=" h-auto w-full">
			<section className="h-auto w-full bg-black  text-white ">
				<section className="mx-auto h-auto w-full max-w-7xl px-10 py-20 ">
					<section className="grid h-auto w-full grid-cols-1 gap-y-20 lg:grid-cols-2">
						<section className="flex w-full flex-col gap-2 ">
							<Image
								src={'/logos/logo2.png'}
								width={150}
								height={'0'}
								className=" drop-shadow"
								alt={''}
							/>
							<span className=" text-neutral-400">
								@2024 shoolin Construction
							</span>
						</section>

						<section className=" grid h-auto w-full grid-cols-2 lg:grid-cols-2">
							{/* <section className=" flex h-auto w-full justify-start">
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
							</section> */}
							<section className=" flex h-auto w-full justify-start">
								<div className="w-fit">
									<span className=" text-lg">Pages</span>
									<div className="mt-2 flex w-full flex-col">
										<ul className="flex flex-col gap-2  text-neutral-400">
											<li className="transition-all duration-500 ease-in-out hover:text-primary">
												<Link href={'/about'} className="flex items-center">
													<ChevronRight />
													About us
												</Link>
											</li>
											<li className="transition-all duration-500 ease-in-out hover:text-primary">
												<Link href={'/projects'} className="flex items-center">
													<ChevronRight />
													Projects
												</Link>
											</li>
											<li className="transition-all duration-500 ease-in-out hover:text-primary">
												<Link href={'/projects'} className="flex items-center">
													<ChevronRight />
													Media
												</Link>
											</li>
											<li className="transition-all duration-500 ease-in-out hover:text-primary">
												<Link href={'/faq'} className="flex items-center">
													<ChevronRight />
													FAQ
												</Link>
											</li>
											<li className="transition-all duration-500 ease-in-out hover:text-primary">
												<Link href={'/contact'} className="flex items-center">
													{' '}
													<ChevronRight />
													Contact us
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</section>
							<section className=" flex h-auto w-full justify-start">
								<div className="w-fit">
									<span className=" text-lg">Resources</span>
									<div className="mt-2 flex w-full flex-col">
										<ul className="flex flex-col gap-2 text-neutral-400">
											<li className="transition-all duration-500 ease-in-out hover:text-primary">
												<Link
													href={'/privacy-policy'}
													className="flex items-center"
												>
													<ChevronRight />
													Privacy Policy
												</Link>
											</li>
											<li className="transition-all duration-500 ease-in-out hover:text-primary">
												<Link href={'/terms'} className="flex items-center">
													<ChevronRight />
													Terms & Conditions
												</Link>
											</li>
											<li className="transition-all duration-500 ease-in-out hover:text-primary">
												<Link
													href={'/sitemap.xml'}
													className="flex items-center"
												>
													<ChevronRight />
													Sitemap
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</section>
						</section>
						<section className=" grid h-auto w-full grid-cols-2 gap-5 xl:grid-cols-3">
							<section className="flex h-auto w-full justify-start  lg:justify-center ">
								<div className="flex w-fit flex-col gap-2 text-gray-300">
									<span className="flex items-center gap-3 font-bold text-white">
										<HiOutlineOfficeBuilding className="text-lg" /> Office
									</span>
									<span className="mt-2 w-full text-neutral-400">
										132, Subhash Nagar Road, Dum Dum Cantonment, KOLKATA, India,
										700065
									</span>
								</div>
							</section>
							<section className="flex h-auto w-full justify-start xl:justify-center ">
								<div className="flex w-fit flex-col  gap-2">
									<span className="flex items-center gap-3 font-bold text-white">
										<CiMobile3 className="text-lg" /> Mobile
									</span>
									<Link
										href={'tel:+91-8017194170'}
										className="mt-2 w-full   text-neutral-400 transition-all duration-500 ease-in-out hover:text-primary"
									>
										+91 - 8017194170
									</Link>
								</div>
							</section>
							<section className="flex h-auto w-full justify-start  lg:justify-center  ">
								<div className="flex w-fit flex-col gap-2">
									<span className="flex items-center gap-3 font-bold text-white">
										<IoMailOutline className="text-lg" /> Mail
									</span>
									<Link
										href={'mailto:contact@shoolinconstruction.com'}
										className="mt-2 w-full  text-neutral-400 transition-all duration-500 ease-in-out hover:text-primary"
									>
										contact@shoolinconstruction.com
									</Link>
								</div>
							</section>
						</section>
					</section>
				</section>
				<section className="h-auto w-full border-t border-gray-300  ">
					<section className="mx-auto  flex h-auto w-full max-w-7xl flex-col-reverse items-center justify-between gap-3 px-10 py-2 text-sm text-neutral-400  md:flex-row">
						<section className="w-fit">
							Design by{' '}
							<Link
								href={'https://www.webflexrr.com'}
								className="mt-2 w-full  text-neutral-400 transition-all duration-500 ease-in-out hover:text-primary"
							>
								Webflexrr Digital Services
							</Link>
						</section>
						<section className="flex gap-2 ">
							<Link
								href={'https://www.facebook.com/profile.php?id=61565175867835'}
								className="group flex items-center justify-center rounded-full border border-neutral-400 p-2 subpixel-antialiased transition-all duration-500 ease-in-out hover:bg-primary"
							>
								<FaFacebookF className=" transition-all duration-500 ease-in-out group-hover:text-black" />
							</Link>
							<Link
								href={'https://www.instagram.com/shoolinconstruction'}
								className="group  flex items-center justify-center rounded-full border border-neutral-400 p-2 subpixel-antialiased transition-all duration-500 ease-in-out hover:bg-primary "
							>
								<FaInstagram className=" transition-all duration-500 ease-in-out group-hover:text-black" />
							</Link>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Footer;
