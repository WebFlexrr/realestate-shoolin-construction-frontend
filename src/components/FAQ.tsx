import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

const FAQ = (): React.JSX.Element => {
	return (
		<section className="h-auto w-full ">
			<section className="mx-auto h-auto w-full max-w-7xl px-5 pb-32 pt-20 xl:px-0">
				<section className=" h-auto w-full ">
					<SectionHeading
						subTitle={"FAQ's"}
						mainTitle={'Frequently Asked Questions'}
					/>
					<section className="h-auto w-full">
						<section className="flex flex-col gap-10 lg:flex-row lg:gap-0">
							<section className="h-auto w-full  lg:w-[40%]">
								<Image
									src={'/picture/pic4.jpg'}
									width={1000}
									height={0}
									alt={''}
									className=" aspect-square w-full rounded-lg lg:aspect-[3/3.8]"
								/>
							</section>
							<section className="flex h-auto w-full flex-col justify-center gap-10  lg:w-[60%] lg:pl-20">
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value="item-1">
										<AccordionTrigger>
											1. What service does your company offer?
										</AccordionTrigger>
										<AccordionContent>
											<p>
												Our company offers a comprehensive range of
												architectural services, including residential design,
												commercial architecture, interior architecture, urban
												planning, sustainable design, renovation, and
												restoration.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-2">
										<AccordionTrigger>
											2. How long does a typical projects take to complete?
										</AccordionTrigger>
										<AccordionContent>
											<p>
												Project timelines vary depending on the complexity of
												the project and other factors such as approvals and
												permits. We provide estimated timelines during the
												initial consultation phase.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-3">
										<AccordionTrigger>
											3. Do you work with specific types of client or projects?
										</AccordionTrigger>
										<AccordionContent>
											<p>
												We work with a diverse range of clients across various
												industries, including homeowners, developers,
												businesses, institutions, and government agencies. Our
												expertise extends to projects of all types and scales,
												from residential homes and commercial buildings to civic
												and cultural landmarks.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-4">
										<AccordionTrigger>
											4. Can I see examples of your past work?
										</AccordionTrigger>
										<AccordionContent>
											<p>
												Yes, we invite you to explore our portfolio of past
												projects, which showcases a diverse range of designs and
												styles across different sectors. Our portfolio provides
												a glimpse into our expertise, creativity, and commitment
												to excellence.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-5">
										<AccordionTrigger>
											5. What sets your company apart from others in the
											industry?
										</AccordionTrigger>
										<AccordionContent>
											<p>
												What sets us apart is our unwavering commitment to
												innovation, collaboration, and client satisfaction. We
												combine creative design solutions with technical
												expertise and a client-centric approach.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-6">
										<AccordionTrigger>
											6. How can I get started with your services?
										</AccordionTrigger>
										<AccordionContent>
											<p>
												Getting started with our services is easy. Simply reach
												out to us via phone, email, or our website contact form
												to schedule an initial consultation. During this
												consultation, we&apos;ll discuss your project goals,
												requirements, and timeline, and outline the next steps
												to get started on turning your vision into reality.
											</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default FAQ;
