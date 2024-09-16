'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { FC } from 'react';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import { unit_layout_plan } from '@/sanity/types/sanity.types';
import { imageUrlFor } from '@/sanity/lib/imageUrlFor';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Download, Minimize, Minus, Plus, Search } from 'lucide-react';
import {
	TransformComponent,
	TransformWrapper,
	useControls,
} from 'react-zoom-pan-pinch';

const Controls = () => {
	const { zoomIn, zoomOut, resetTransform } = useControls();

	return (
		<div className="flex gap-2 ">
			<Button size={'icon'} onClick={() => zoomIn()}>
				<Plus />
			</Button>
			<Button size={'icon'} onClick={() => zoomOut()}>
				{' '}
				<Minus />
			</Button>
			<Button size={'icon'} onClick={() => resetTransform()}>
				{' '}
				<Minimize />
			</Button>
		</div>
	);
};

interface LayoutSectionProps {
	unit_layout_plan?: unit_layout_plan;
}
const LayoutSection: FC<LayoutSectionProps> = ({ unit_layout_plan }) => {
	return (
		//  Layout & Floor Plans

		<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
			<section className="w-full">
				<h4 className=" underline">Layout & Floor Plans</h4>
			</section>
			<section className=" mt-4  grid w-full grid-cols-1 gap-5 lg:grid-cols-2  ">
				{unit_layout_plan?.map((layout, index) => (
					<section key={index} className="flex w-full flex-col gap-2  ">
						<div className="group relative">
							<Image
								src={imageUrlFor(layout.floorImage as SanityImageObject).url()}
								width={2000}
								height={0}
								alt={''}
								className=" flex aspect-[4/4]  w-full items-center justify-center rounded-lg border border-black bg-white"
							/>
							<div className="absolute left-0 top-0 z-10 hidden h-full w-full items-center justify-center rounded-lg  transition-all duration-500 ease-in-out group-hover:flex">
								<section className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-3">
									<div className=" uppercase">
										{layout.floor ? `${layout.floor} Floor` : ''}
									</div>
									<div className="flex gap-3">
										<Dialog>
											<DialogTrigger>
												<div className=" group flex rounded-full border bg-background  p-3 hover:bg-primary ">
													<Search size={20} />
												</div>
											</DialogTrigger>
											<DialogContent className="w-full max-w-3xl bg-gray-300 p-7">
												<TransformWrapper smooth>
													{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
														<>
															<TransformComponent>
																<Image
																	src={imageUrlFor(
																		layout.floorImage as SanityImageObject
																	).url()}
																	width={1000}
																	height={0}
																	alt={''}
																	className=" flex  aspect-square w-full items-center justify-center rounded-lg border "
																/>
															</TransformComponent>
															<Controls />
														</>
													)}
												</TransformWrapper>
											</DialogContent>
										</Dialog>
										<Link
											href={imageUrlFor(layout.floorImage as SanityImageObject)
												.url()
												.concat('?dl=')}
											className=" group flex rounded-full border bg-background  p-3 hover:bg-primary "
										>
											<Download size={20} />
										</Link>
									</div>
								</section>
							</div>
							<div className="absolute left-0 top-0 hidden h-full w-full rounded-lg  bg-primary opacity-75 transition-all duration-500 ease-in-out group-hover:flex "></div>
						</div>
					</section>
				))}
			</section>
		</section>
	);
};

export default LayoutSection;
