import Image from 'next/image';
import React from 'react';

const AboutSection = (): JSX.Element => {
	return (
		<section className="h-auto w-full ">
			<div className="h-auto w-full  bg-[white] px-20 py-20">
				<section className="mx-auto w-full max-w-7xl space-y-10">
					<section className="h-auto w-full">
						<div className="mx-auto w-fit ">
							<h2>&quot;We are expertise in making dream houses&quot;</h2>
						</div>
					</section>
					<section>
						<div className="mx-auto w-full max-w-7xl text-center leading-5">
							<p>
								Welcome to Shoolin Construction Developers! Discover your dream
								home with our user-friendly interface and extensive property
								listings. Whether buying, selling, or renting, our platform
								offers tailored solutions to match your needs. Explore top-notch
								properties and seamless navigation for a hassle-free real estate
								experience. Start your journey today!
							</p>
						</div>
					</section>
					<section>
						<div className="grid w-full grid-cols-3 gap-x-5">
							<section className=" flex h-auto w-full flex-col items-center rounded border border-black bg-white py-10 text-lg font-semibold shadow-2xl">
								<section className="mb-2">
									<Image
										src={'/icons/happy-face.png'}
										width={50}
										height={50}
										alt={'happyface'}
									/>
								</section>
								<section>50+</section>
								<section>Happy customers</section>
							</section>
							<section className=" flex h-auto w-full flex-col items-center rounded border border-black bg-white py-10 text-lg font-semibold shadow-2xl">
								<section className="mb-2">
									<Image
										src={'/icons/architect.png'}
										width={50}
										height={50}
										alt={'architect'}
									/>
								</section>
								<section>30+</section>
								<section>Successfull Projects</section>
							</section>
							<section className=" flex h-auto w-full flex-col items-center rounded border border-black bg-white py-10 text-lg font-semibold shadow-2xl">
								<section className="mb-2">
									<Image
										src={'/icons/24-hours-support.png'}
										width={50}
										height={50}
										alt={'24-hours-support'}
									/>
								</section>
								<section>24/7</section>
								<section>Helpline Support</section>
							</section>
						</div>
					</section>
				</section>
			</div>
		</section>
	);
};

export default AboutSection;
