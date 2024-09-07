import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SwiperGallery from '@/components/ui/SwiperGallery';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const PictureSlider = () => {
	return (
		<section className=" h-auto w-full ">
			<section className="  flex h-full w-full flex-col px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="h-auto w-full ">
					<section className="mt-10 flex  h-auto w-full flex-col gap-5  lg:flex-row ">
						<section className="h-auto w-full lg:w-[75%]  ">
							<Dialog>
								<section className="flex w-full gap-5 ">
									<DialogTrigger className="h-auto w-full lg:w-[75%]">
										<Image
											className=" aspect-square h-full w-full lg:aspect-video "
											width={1000}
											height={0}
											src={'/picture/pic1.jpg'}
											alt={''}
										/>
									</DialogTrigger>
									<section className="hidden h-full w-[25%] flex-col gap-5 lg:flex">
										<DialogTrigger className="aspect-square w-full">
											<Image
												className=" aspect-square w-full "
												width={1000}
												height={0}
												src={'/picture/pic1.jpg'}
												alt={''}
											/>
										</DialogTrigger>
										<DialogTrigger className="aspect-[4/3] w-full">
											<Image
												className="  aspect-[4/3] w-full "
												width={1000}
												height={0}
												src={'/picture/pic3.jpg'}
												alt={''}
											/>
										</DialogTrigger>
									</section>
								</section>

								<DialogContent className=" max-w-5xl p-10">
									<SwiperGallery />
								</DialogContent>
							</Dialog>
						</section>

						<section className="hidden h-auto w-[25%] gap-5 lg:flex">
							<Separator orientation={'vertical'} />
							<div className="w-full ">
								<Card className=" bg-background2">
									<CardHeader>
										<CardTitle>ENQUIRE NOW</CardTitle>
									</CardHeader>
									<CardContent>
										<form>
											<div className="grid w-full items-center gap-4">
												<div className="flex flex-col space-y-2">
													<Input id="name" placeholder="Enter Name*" />
													<Input id="name" placeholder="Enter Mobile/Number*" />
													<Input id="name" placeholder="Enter Email*" />
												</div>
											</div>
										</form>
									</CardContent>
									<CardFooter className="flex w-full justify-center">
										{/* <Button variant="outline">Cancel</Button> */}
										<Button className="px-10">Submit</Button>
									</CardFooter>
								</Card>
							</div>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default PictureSlider;
