'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logos/logo.png';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { HiOutlineMailOpen } from 'react-icons/hi';
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
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { GoArrowUpRight } from 'react-icons/go';
import { Button } from './ui/button';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { sanityFetch } from '@/sanity/lib/client';
import { Slug } from '@/sanity/types/sanity.types';
import { useRouter } from 'next/navigation';
import { PROPERTY_FOR_SALE_QUERY } from '@/sanity/lib/queries';

const Navbar = (): JSX.Element => {
	const router = useRouter();

	const onPropertySaleRedirect = async () => {
		const slug = await sanityFetch<Slug>({
			query: PROPERTY_FOR_SALE_QUERY,
		});

		router.push(`/projects/${slug}`);
	};

	return (
		<nav className="fixed top-0 z-20 h-auto w-full">
			<section className=" flex h-7 w-full items-center gap-10 bg-[#4C4C6D] text-white">
				<section className="mx-5 flex w-full items-center justify-end  py-2  xl:mx-auto xl:max-w-7xl ">
					<div className="mx-auto flex w-full  max-w-[90rem] items-center justify-end gap-10">
						<div className="hidden items-center gap-2 lg:flex">
							<Link
								aria-label="This is Facebook Logo for visit our Facebook Page"
								href={'https://www.facebook.com/profile.php?id=61565175867835'}
								className="group flex items-center justify-center rounded-full border border-neutral-400 p-1 subpixel-antialiased transition-all duration-500 ease-in-out hover:bg-primary"
							>
								<FaFacebookF className=" text-xs transition-all duration-500 ease-in-out group-hover:text-black" />
							</Link>
							<Link
								aria-label="This is Instagram Logo for visit our Instagram Page"
								href={'https://www.instagram.com/shoolinconstruction'}
								className="group flex items-center justify-center rounded-full border border-neutral-400 p-1 subpixel-antialiased transition-all duration-500 ease-in-out hover:bg-primary"
							>
								<FaInstagram className=" text-xs transition-all duration-500 ease-in-out group-hover:text-black" />
							</Link>
						</div>
						<Link
							href={'tel:+91-8017194170'}
							className="flex items-center gap-2 text-sm font-semibold tracking-normal transition-all duration-500 ease-in-out hover:text-primary"
						>
							<HiMiniDevicePhoneMobile />
							+91-8017194170
						</Link>
						<Link
							href={'mailto:contact@shoolinconstruction.com'}
							className="flex items-center gap-2 text-sm font-semibold tracking-normal transition-all duration-500 ease-in-out hover:text-primary"
						>
							<HiOutlineMailOpen />
							contact@shoolinconstruction.com
						</Link>
					</div>
				</section>
			</section>
			<section className="flex h-[5rem] w-full justify-center bg-background2">
				<section className="mx-5 flex w-full items-center justify-between bg-background2  py-2  xl:mx-auto xl:max-w-7xl ">
					{/* Logo */}
					<Link href={'/'} aria-label="Company logo for Back to Home page">
						<Image
							src={logo}
							width={1000}
							height={0}
							alt="Company Logo"
							className="w-36  md:w-44"
						/>
					</Link>

					<section className="flex w-fit flex-col gap-2">
						<section className="hidden w-fit items-center gap-10 lg:flex ">
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem className="cursor-pointer ">
										{/* <Link
											href={'/about'}
											legacyBehavior
											className="hover:text-white"
										> */}
										<NavigationMenuLink
											href={'/about'}
											className={navigationMenuTriggerStyle()}
										>
											<span className="text-lg">About Us</span>
										</NavigationMenuLink>
										{/* </Link> */}
									</NavigationMenuItem>
									<NavigationMenuItem className="cursor-pointer">
										{/* <Link href={'/projects'} legacyBehavior> */}
										<NavigationMenuLink
											href={'/projects'}
											className={navigationMenuTriggerStyle()}
										>
											<span className="text-lg">Projects</span>
										</NavigationMenuLink>
										{/* </Link> */}
									</NavigationMenuItem>
									<NavigationMenuItem className="cursor-pointer">
										{/* <Link href={'/contact'} legacyBehavior> */}
										<NavigationMenuLink
											href={'/contact'}
											className={navigationMenuTriggerStyle()}
										>
											<span className="text-lg">Contacts</span>
										</NavigationMenuLink>
										{/* </Link> */}
									</NavigationMenuItem>
									<NavigationMenuItem className="cursor-pointer">
										{/* <Link href={'/projects'}> */}
										<Button
											onClick={() => onPropertySaleRedirect()}
											className="group border border-primary text-lg transition-all duration-500 ease-in-out hover:bg-background2"
										>
											Book Online
											<GoArrowUpRight className=" text-2xl  group-hover:duration-500  group-hover:ease-in-out" />
										</Button>
										{/* </Link> */}
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</section>
					</section>
					<section className=" lg:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button id="text" aria-label="Menu" variant={'outline-rounded'}>
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
		</nav>
	);
};

export default Navbar;
