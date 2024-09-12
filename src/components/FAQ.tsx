import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { FAQ_QUERY } from '@/sanity/lib/queries';
import { client, sanityFetch } from '@/sanity/lib/client';
import { Faq } from '@/sanity/types/sanity.types';

const FAQ = async (): Promise<React.JSX.Element> => {
	const faqs = await sanityFetch<Faq[]>({ query: FAQ_QUERY });
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
									{faqs.map((faq, index) => (
										<AccordionItem key={faq._id} value={`item-${index + 1}`}>
											<AccordionTrigger>
												{index + 1}. {faq.question}
											</AccordionTrigger>
											<AccordionContent>
												<p>{faq.answer}</p>
											</AccordionContent>
										</AccordionItem>
									))}
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
