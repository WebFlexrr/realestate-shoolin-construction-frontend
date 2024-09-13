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

const OurTeamSection = () => {
	return (
		<section className="relative h-full w-full  bg-background lg:py-20 ">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col px-5 xl:px-0">
				<SectionHeading subTitle={'Members'} mainTitle={'Meet Our Team'} />
				<section className="flex h-auto w-full flex-col  gap-10 lg:flex-row  xl:gap-0 ">
					<div className="flex h-auto w-full justify-between gap-3  border-black  lg:w-1/3">
						<Card className="flex w-full flex-col  border-none  lg:w-[460px]">
							<CardHeader className="px-0 pb-5 pt-0">
								<Image
									src={
										'https://assets-global.website-files.com/659508024773365d154788a8/65cf307bcf5bbed241bbffa6_img-4-p-500.jpg'
									}
									width={1000}
									height={0}
									alt={''}
									className="aspect-[4/5] w-full rounded-lg border border-primary-foreground lg:w-[300px]"
								/>
							</CardHeader>
							<CardContent className="p-0">
								<CardTitle>Tejodeep Mitra Roy</CardTitle>
								<CardDescription className="mt-2">Manager</CardDescription>
							</CardContent>
						</Card>
					</div>

					<section className="h-auto w-full  lg:w-full lg:pl-10 xl:pl-20 ">
						<section className="h-auto w-full">
							<section className="h-auto w-full pr-4 lg:mt-20">
								<h4>
									United by passion, our team is dedicated to shaping spaces
									that inspire and enrich lives.
								</h4>
							</section>
							<section>
								<section className=" mt-5 h-auto w-full lg:mt-16">
									<p>
										Our team is our greatest asset. Comprised of talented
										architects, designers, engineers, and support staff, we are
										united by a shared passion for design excellence and a
										commitment to exceeding client expectations.
									</p>
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
