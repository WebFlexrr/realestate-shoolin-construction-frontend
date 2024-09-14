import Image from 'next/image';
import React from 'react';

const LoansBannerSection = () => {
	return (
		// Location Map
		<section className="h-auto w-full">
			<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
				<section className="flex w-full  justify-center">
					<h4 className=" underline">Home Loans Available</h4>
				</section>

				<section className="mt-5  flex h-full w-full justify-center ">
					<div className="flex aspect-video w-36 items-center justify-center bg-white p-7">
						<Image
							src={'/assets/sbi-logo.png'}
							width={'500'}
							height={'0'}
							alt="SBI logo"
							className="  "
						/>
					</div>
				</section>
			</section>
		</section>
	);
};

export default LoansBannerSection;
