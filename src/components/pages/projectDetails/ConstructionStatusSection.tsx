import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';

const ConstructionStatusSection = () => {
	return (
		<section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
			<section className="h-auto w-[75%] ">
				{/* Construction Status */}
				<section className="h-auto w-full">
					<section className="my-10 h-auto w-full rounded-lg bg-background2 px-16 py-10 ">
						<section className="w-full">
							<h2 className=" underline">Construction Status</h2>
						</section>
						<section className="mt-6 grid w-full grid-cols-4 gap-x-5 px-16">
							<section className="group relative flex aspect-square w-full flex-col items-center">
								<Dialog>
									<DialogTrigger className="group relative flex aspect-square w-full flex-col items-center">
										{/* <section className="group relative flex aspect-square w-full flex-col items-center"> */}
										<Image
											src={'/picture/pic1.jpg'}
											width={1000}
											height={0}
											alt={''}
											className="aspect-square w-full rounded"
										/>
										<section className="absolute left-0 top-0 h-full w-full rounded bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50" />
										<section className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end text-white opacity-0 transition-all  duration-300 ease-in-out group-hover:opacity-100">
											<div className="flex max-w-7xl flex-col items-center rounded bg-white px-3 text-sm text-black">
												<div>Updated on</div>
												<div>21/02/2023</div>
											</div>
										</section>
										{/* </section> */}
									</DialogTrigger>

									<DialogContent className=" max-w-5xl p-10">
										<section className="relative flex aspect-video h-full w-full items-center  justify-center bg-gray-200 ">
											<Image
												src={'/picture/pic1.jpg'}
												width={1000}
												height={0}
												alt={''}
												className="h-full w-fit rounded"
											/>
										</section>
									</DialogContent>
								</Dialog>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ConstructionStatusSection;
