import HeroHeading from '@/components/HeroHeading';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { sanityFetch } from '@/sanity/lib/client';
import { FAQ_QUERY } from '@/sanity/lib/queries';
import { Faq } from '@/sanity/types/sanity.types';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'FAQ - Shoolin Construction',
	description: 'Generated by create next app',
	alternates: {
		canonical: '/faq',
	},
};

const FaqPage = async (): Promise<React.JSX.Element> => {
	const faqs = await sanityFetch<Faq[]>({ query: FAQ_QUERY });

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => {
			return {
				'@type': 'Question',
				name: faq.question,
				acceptedAnswer: {
					'@type': 'Answer',
					text: faq.answer,
				},
			};
		}),
	};

	return (
		<main className="mt-[7rem] h-auto w-full">
			{/* Add JSON-LD to your page */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* ... */}
			<HeroHeading
				heading={'FAQ'}
				// subHeading="Frequently Ask Question"
				description="Frequently Ask Question"
			/>
			<section className="h-auto w-full  ">
				<section className="mx-auto h-auto w-full max-w-7xl space-y-20 px-5 pb-40 xl:px-0">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq._id} value={`item-${index + 1}`}>
								<AccordionTrigger className="text-xl antialiased">
									{index + 1} . {faq.question}
								</AccordionTrigger>
								<AccordionContent className="antialiased">
									<p>{faq.answer}</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</section>
			</section>
		</main>
	);
};

export default FaqPage;
