import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const OurServicesSection = () => {
	return (
		<section className="h-auto w-full ">
			<section className=" relative mx-auto flex h-full w-full max-w-7xl flex-col px-5 xl:px-0">
				<section className="mb-7 mt-20 h-auto w-full gap-6 lg:mb-20">
					<SectionHeading subTitle={'WHAT WE DO'} mainTitle={'Our Services'} />
					<section className="h-auto w-full">
						<section className="flex flex-col gap-5 lg:flex-row lg:gap-0">
							<section className="h-auto w-full lg:w-[40%] ">
								<Image
									src={'/picture/pic7.jpg'}
									width={1000}
									height={0}
									alt={'side view of Gitanjali Apartment'}
									className=" aspect-[3/3.5] w-full rounded-lg"
								/>
							</section>
							<section className="flex h-auto w-full flex-col justify-center gap-10 lg:w-[60%] lg:pl-20">
								<section className="flex h-auto w-full flex-col">
									<h4>We Expertise in</h4>
									<div className="my-5 w-full space-y-5 text-xl font-medium">
										<div>Landscape Design</div>
										<Separator />
										<div>Architecture</div>
										<Separator />
										<div>Consultation</div>
										<Separator />
										<div>Property Selling </div>
									</div>
								</section>
								<section className="flex h-auto w-full flex-col"></section>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default OurServicesSection;
