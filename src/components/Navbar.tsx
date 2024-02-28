'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logos/logo.png';
// import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
// import { HiOutlineMailOpen } from 'react-icons/hi';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { GoArrowUpRight } from 'react-icons/go';
import { Button } from './ui/button';
import Link from 'next/link';
import { Separator } from './ui/separator';

const Navbar = (): JSX.Element => {
	return (
		<>
			<nav className="sticky z-40 h-auto w-full">
				{/* <section className="flex h-7 w-full items-center gap-10 bg-[#4C4C6D] text-white">
					<div className="mx-auto flex w-full  max-w-[90rem] items-center justify-end gap-10">
						<div className="flex items-center gap-2 text-sm">
							<HiMiniDevicePhoneMobile />
							8017194170
						</div>
						<div className="flex items-center gap-2 text-sm">
							<HiOutlineMailOpen />
							shoolin@gmail.com
						</div>
					</div>
				</section> */}
				<section className="flex h-auto w-full justify-center  bg-white">
					<section className=" mx-32 flex w-full max-w-7xl items-center justify-between bg-white py-2 ">
						{/* Logo */}
						<Link href={'/'}>
							<Image
								src={logo}
								width={0}
								height={0}
								alt=""
								className="h-auto w-[90px]"
							/>
						</Link>

						<section className="flex w-fit items-center gap-10">
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<Link href="/" legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Home
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<Link href="/about" legacyBehavior passHref>
											<NavigationMenuTrigger>About</NavigationMenuTrigger>
										</Link>
										<NavigationMenuContent>
											<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
												<li className="row-span-3">
													<NavigationMenuLink asChild>
														<a
															className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
															href="/"
														>
															{/* <Icons.logo className="h-6 w-6" /> */}
															<div className="mb-2 mt-4 text-lg font-medium">
																shadcn/ui
															</div>
															<p className="text-sm leading-tight text-muted-foreground">
																Beautifully designed components that you can
																copy and paste into your apps. Accessible.
																Customizable. Open Source.
															</p>
														</a>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<Link href="/projects" legacyBehavior passHref>
											<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
										</Link>
										<NavigationMenuContent>
											<ul className="grid w-[400px] gap-3 border-t-[6px] border-primary p-4 md:w-[500px]  md:grid-cols-2 lg:w-[600px]">
												<li>
													<span>Complete Project</span>
													<ul>
														<li>Shoolin </li>
														<li>Shoolin </li>
														<li>Shoolin </li>
													</ul>
												</li>
												<li>
													<span>Complete Project</span>
													<ul>
														<li>Shoolin </li>
														<li>Shoolin </li>
														<li>Shoolin </li>
													</ul>
												</li>

												{/* <ListItem
														key={component.title}
														title={component.title}
														href={component.href}
													>
														{component.description}
													</ListItem> */}
												{/* 												
												<li className="row-span-3">
													<NavigationMenuLink asChild>
														<a
															className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
															href="/"
														>
															
															<div className="mb-2 mt-4 text-lg font-medium">
																shadcn/ui
															</div>
															<p className="text-sm leading-tight text-muted-foreground">
																Beautifully designed components that you can
																copy and paste into your apps. Accessible.
																Customizable. Open Source.
															</p>
														</a>
													</NavigationMenuLink>
												</li> */}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<Link href="/media" legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Media
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<Link href="/contact" legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Contacts
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
							{/* Register Button  */}
							<div>
								<Button variant={'default'} size={'default'} className="group">
									Book Online{' '}
									<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
								</Button>
							</div>
						</section>
					</section>
				</section>
				<Separator />
			</nav>
		</>
	);
};

export default Navbar;
