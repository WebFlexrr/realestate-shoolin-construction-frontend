'use client';
import { Separator } from '@/components/ui/separator';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';
import { unit_layout_plan } from '@/sanity/types/sanity.types';
import { imageUrlFor } from '@/sanity/lib/imageUrlFor';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

interface LayoutSectionProps {
	unit_layout_plan?: unit_layout_plan;
}
const LayoutSection: FC<LayoutSectionProps> = ({ unit_layout_plan }) => {
	return (
		// <section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
		// 	<section className="h-auto w-full lg:w-[75%] ">
		//  Layout & Floor Plans
		<section className="h-auto w-full">
			<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
				<section className="w-full">
					<h4 className=" underline">Layout & Floor Plans</h4>
				</section>
				<section className=" mt-10 grid w-full grid-cols-2 gap-5  ">
					{/* <Tabs defaultValue="Master Plan" className="w-full  "> */}
					{/* <TabsList className="w-full bg-background2">
									<TabsTrigger value="Master Plan" className="w-full ">
										<h5 className="font-bold text-cyan-600">Master Plan</h5>
									</TabsTrigger>
									<TabsTrigger value="Unit Plan" className="w-full">
										<h5 className="font-bold text-cyan-600">Unit Plan</h5>
									</TabsTrigger>
								</TabsList> */}
					{/* <TabsContent value="Master Plan">
									{master_layout_plan && (
										<section className="mt-10 flex w-full flex-col gap-3">
											<section className=" flex  w-full items-center justify-center border border-black bg-white">
												<Image
													src={master_layout_plan}
													width={1000}
													height={0}
													alt={''}
												/>
											</section>
											<section>
												<Link
													href={master_layout_plan}
													className="flex items-center gap-3 "
												>
													<FiDownload /> Download high resolution
												</Link>
											</section>
										</section>
									)}
								</TabsContent> */}
					{/* <TabsContent value="Unit Plan">
									<Tabs defaultValue="0" className="w-full">
										<TabsList
											defaultValue={'ground'}
											className="w-full  gap-5  bg-background2"
										>
											{/* <Swiper
											navigation={true}
											modules={[Navigation, Pagination]}
											slidesPerView={3}
											spaceBetween={5}
											className="mx-auto mt-5 w-full  "
										> 
											{unit_layout_plan?.map((layout, index) => (
												<TabsTrigger
													key={layout._key}
													value={`${index}`}
													className="w-full"
												>
													{/* <SwiperSlide className="border border-black px-10"> 
													<button className="flex w-full justify-center ">
														<h5 className="font-bold text-cyan-600">
															{layout.floor} Floor
														</h5>
													</button>
													{/* </SwiperSlide> 
												</TabsTrigger>
											))}
											{/* </Swiper> 
										</TabsList>

										{unit_layout_plan?.map((layout, index) => (
											<TabsContent
												key={layout._key}
												value={`${index}`}
												className="w-full"
											>
												{layout.floorImage && (
													<section className="mt-10 flex w-full flex-col ">
														<section className=" flex  w-full items-center justify-center border border-black bg-white">
															<Image
																src={imageUrlFor(
																	layout.floorImage as SanityImageObject
																).url()}
																width={1000}
																height={0}
																alt={''}
															/>
														</section>
													</section>
												)}
											</TabsContent>
										))}
									</Tabs>
								</TabsContent> */}
					{/* </Tabs> */}
					{unit_layout_plan?.map((layout, index) => (
						<section key={index} className="mt-10 flex w-full flex-col ">
							<section className=" flex  w-full items-center justify-center border border-black bg-white">
								<Image
									src={imageUrlFor(
										layout.floorImage as SanityImageObject
									).url()}
									width={1000}
									height={0}
									alt={''}
								/>
							</section>
							<section>
								<Link
									download
									href={imageUrlFor(
										layout.floorImage as SanityImageObject
									).url()}
									className="flex items-center gap-3 "
								>
									<FiDownload /> Download high resolution
								</Link>
							</section>
						</section>
					))}
				</section>
			</section>
		</section>
		// 	</section>
		// </section>
	);
};

export default LayoutSection;
