import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';
import { FC } from 'react';

interface OurTeamSectionProps {
	ownerMessage?: Array<string>;
}

const OurTeamSection: FC<OurTeamSectionProps> = ({ ownerMessage }) => {
	return (
		<section className="relative h-full w-full  bg-background lg:py-20 ">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col px-5 xl:px-0">
				<SectionHeading subTitle={'Owner'} mainTitle={'Meet Our Owner'} />
				<section className="flex h-auto w-full flex-col  gap-10 lg:flex-row  xl:gap-0 ">
					<section className="flex  h-auto w-full justify-start gap-3 lg:w-[35%]">
						<div className=" w-full space-y-5  ">
							<div className="w-full">
								<Image
									src={'/assets/sunil-das-image.jpg'}
									width={1000}
									height={0}
									alt={`Sunil Das's Profile Image`}
									className="aspect-[4/5] w-full rounded-lg border border-primary-foreground "
								/>
							</div>
							<div className=" ">
								<CardTitle>Sunil Das</CardTitle>
								<CardDescription className="mt-2">
									CEO & Founder
								</CardDescription>
							</div>
						</div>
					</section>

					<section className="h-auto  w-full  lg:w-[65%] lg:pl-10 xl:pl-20 ">
						<section className="h-auto w-full">
							<section className="h-auto w-full pr-4 lg:mt-20">
								<h4>
									United by passion, our team is dedicated to shaping spaces
									that inspire and enrich lives.
								</h4>
							</section>
							<section>
								<section className=" mt-5 h-auto w-full space-y-5 lg:mt-16">
									{/* <PortableText
										components={PTComponents}
										value={ownerMessage}
									/> */}
									{ownerMessage?.map((text, index) => (
										<p key={index} className="text-lg leading-7">
											{text}
										</p>
									))}
								</section>
								<section className="mt-5 flex w-fit flex-col border-t border-black">
									<span>Sunil Das</span>
									<span>CEO & Founder</span>
								</section>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default OurTeamSection;
