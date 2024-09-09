import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';

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
									src={'/picture/pic4.jpg'}
									width={1000}
									height={0}
									alt={''}
									className=" aspect-[3/3.5] w-full rounded-lg"
								/>
							</section>
							<section className="flex h-auto w-full flex-col justify-center gap-10 lg:w-[60%] lg:pl-20">
								<section className="flex h-auto w-full flex-col">
									<Accordion type="single" collapsible className="w-full">
										<h4>Our Expertise</h4>
										<AccordionItem value="item-1">
											<AccordionTrigger>Landscape Design</AccordionTrigger>
											<AccordionContent>
												<ul className="flex w-full list-decimal flex-col text-base ">
													<li>Color Psychology</li>
													<li>Furniture Arrangement</li>
													<li>Lighting Design</li>
													<li>Texture and Patterns</li>
												</ul>
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-2">
											<AccordionTrigger>Architecture</AccordionTrigger>
											<AccordionContent>
												<ul className="flex w-full list-decimal flex-col text-base ">
													<li>Residential Architecture</li>
													<li>Renovation and Restoration</li>
													<li>Construction Administration</li>
													<li>Sustainable Design</li>
													<li>3D Visualization</li>
												</ul>
											</AccordionContent>
										</AccordionItem>
										<div className="mt-10 lg:mt-6">
											<h4>Supporting Secvices</h4>
										</div>
										<AccordionItem value="item-3">
											<AccordionTrigger>Consultation</AccordionTrigger>
											<AccordionContent>
												<ul className="flex w-full list-decimal flex-col text-base ">
													<li>Space Planning</li>
													<li>Renovation and Restoration</li>
													<li>Budget Planning</li>
													<li>Concept Development</li>
													<li>Material and Color Selection</li>
												</ul>
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-4">
											<AccordionTrigger>Design & Planning</AccordionTrigger>
											<AccordionContent>
												<ul className="flex w-full list-decimal flex-col  text-base ">
													<li>Architectural Drawings</li>
													<li>3D Visualization</li>
													<li>Landscape Design</li>
												</ul>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
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
