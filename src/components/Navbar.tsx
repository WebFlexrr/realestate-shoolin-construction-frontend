'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logos/logo.png';
// import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
// import { HiOutlineMailOpen } from 'react-icons/hi';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
	Sheet,
	SheetClose,
	SheetContent,
	// SheetDescription,
	// SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { GoArrowUpRight } from 'react-icons/go';
import { Button } from './ui/button';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Navbar = (): JSX.Element => {
	return (
		<>
			<nav className="fixed top-0 z-20 h-auto w-full">
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
				<section className="flex h-[5rem] w-full justify-center bg-background2">
					<section className="mx-5 flex w-full items-center justify-between bg-background2  py-2  xl:mx-auto xl:max-w-7xl ">
						{/* Logo */}
						<Link href={'/'}>
							<Image
								src={logo}
								width={0}
								height={0}
								alt=""
								className="h-auto w-[100px]"
							/>
						</Link>

						<section className="hidden w-fit items-center gap-10 lg:flex ">
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem className="cursor-pointer">
										<Link href={'/about'} legacyBehavior>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												<span className="text-lg">About Us</span>
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									<NavigationMenuItem className="cursor-pointer">
										<Link href={'/projects'} legacyBehavior>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												<span className="text-lg">Projects</span>
											</NavigationMenuLink>
											{/* <NavigationMenuTrigger
												className={navigationMenuTriggerStyle()}
											>
												<span className="text-lg">Projects</span>
											</NavigationMenuTrigger> */}
										</Link>
										{/* <NavigationMenuContent>
											<ul className="grid w-[600px] gap-3 border-t-[6px]  border-primary p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px] ">
												<li className="h-full w-full select-none  flex-col justify-end rounded-md bg-slate-400 bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md">
													<span className=" text-lg font-medium">
														Complete Project
													</span>
													<ul>
														<li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															Simon Pandal
														</li>
														<li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															Shoolin
														</li>
														<li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															Shoolin
														</li>
														<li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															Shoolin
														</li>
													</ul>
												</li>
												<li className="h-full w-full select-none  flex-col justify-end rounded-md bg-slate-400 bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md">
													<span className=" text-lg font-medium">
														Complete Project
													</span>
													<ul>
														<li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															Simon Pandal
														</li>
														<li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															Shoolin
														</li>
														<li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															Shoolin
														</li>
														<li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															Shoolin
														</li>
													</ul>
												</li>
											</ul>
										</NavigationMenuContent> */}
									</NavigationMenuItem>
									<NavigationMenuItem className="cursor-pointer">
										<Link href={'/contact'} legacyBehavior>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												<span className="text-lg">Contacts</span>
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									<NavigationMenuItem className="cursor-pointer">
										<Link href={'/bookOnline'}>
											<Button className="group text-lg">
												Book Online
												<GoArrowUpRight className=" text-2xl  group-hover:duration-500  group-hover:ease-in-out" />
											</Button>
										</Link>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</section>
						<section className=" lg:hidden">
							<Sheet>
								<SheetTrigger asChild>
									<Button variant={'outline-rounded'}>
										<RxHamburgerMenu className="text-2xl " />
									</Button>
								</SheetTrigger>
								<SheetContent className="">
									<SheetHeader>
										<SheetTitle>
											<Image
												src={logo}
												width={0}
												height={0}
												alt=""
												className="aspect-auto h-auto w-[100px]"
											/>
										</SheetTitle>
									</SheetHeader>

									<section className="flex flex-col  py-6">
										<SheetClose asChild>
											<Link
												href={'/about'}
												className="flex w-full items-center justify-between border-b border-black py-4"
											>
												About Shoolin
												<MdOutlineKeyboardArrowRight className="text-xl text-primary" />
											</Link>
										</SheetClose>
										<SheetClose asChild>
											<Link
												href={'/projects'}
												className="flex w-full items-center justify-between border-b border-black py-4"
											>
												Projects
												<MdOutlineKeyboardArrowRight className="text-xl text-primary" />
											</Link>
										</SheetClose>
										<SheetClose asChild>
											<Link
												href={'/contact'}
												className="flex w-full items-center justify-between border-b border-black py-4"
											>
												Contact
												<MdOutlineKeyboardArrowRight className="text-xl text-primary" />
											</Link>
										</SheetClose>
										<SheetClose asChild>
											<Link
												href={'/bookonline'}
												className="flex w-full items-center justify-between border-b border-black py-4"
											>
												Book Online
												<MdOutlineKeyboardArrowRight className="text-xl text-primary" />
											</Link>
										</SheetClose>
									</section>
								</SheetContent>
							</Sheet>
						</section>
					</section>
				</section>
				{/* <Separator /> */}
			</nav>
		</>
	);
};

export default Navbar;
