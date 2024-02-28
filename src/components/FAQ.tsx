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
		<section className="h-auto w-full bg-[#fcf1d9]">
			<section className="mx-auto h-auto w-full max-w-7xl  py-20">
				<section className=" h-auto w-full ">
					<SectionHeading
						subTitle={'FAQ'}
						mainTitle={'Frequently Asked Questions'}
					/>
					<section className="h-auto w-full">
						<section className="flex">
							<section className="h-auto w-[40%] ">
								<Image
									src={'/picture/pic4.jpg'}
									width={1000}
									height={0}
									alt={''}
									className=" aspect-[3/4] w-full rounded-lg"
								/>
							</section>
							<section className="flex h-auto w-[60%] flex-col justify-center gap-10 pl-20">
								<section className="flex h-auto w-full flex-col">
									<h4>Our Expertise</h4>
									<Accordion type="single" collapsible className="w-full">
										<AccordionItem value="item-1">
											<AccordionTrigger>
												1. What service does your company offer?
											</AccordionTrigger>
											<AccordionContent>
												Yes. It adheres to the WAI-ARIA design pattern.
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-2">
											<AccordionTrigger>
												2. How long does a typical projects take to complete?
											</AccordionTrigger>
											<AccordionContent>
												Yes. It comes with default styles that matches the other
												components&apos; aesthetic.
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</section>
								<section className="flex h-auto w-full flex-col">
									<h4>Our Expertise</h4>
									<Accordion type="single" collapsible className="w-full">
										<AccordionItem value="item-1">
											<AccordionTrigger>
												What service does your company offer?
											</AccordionTrigger>
											<AccordionContent>
												Yes. It adheres to the WAI-ARIA design pattern.
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-2">
											<AccordionTrigger>
												How long does a typical projects take to complete?
											</AccordionTrigger>
											<AccordionContent>
												Yes. It comes with default styles that matches the other
												components&apos; aesthetic.
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-3">
											<AccordionTrigger>
												Do you work with specific types of client or project?
											</AccordionTrigger>
											<AccordionContent>
												Yes. It&apos;s animated by default, but you can disable
												it if you prefer.
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-4">
											<AccordionTrigger>
												What service does your company offer?
											</AccordionTrigger>
											<AccordionContent>
												Yes. It&apos;s animated by default, but you can disable
												it if you prefer.
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</section>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default FAQ;
