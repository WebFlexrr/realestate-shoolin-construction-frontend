import HeroHeading from '@/components/HeroHeading';
import { PTComponents } from '@/components/PortableText';
import { sanityFetch } from '@/sanity/lib/client';
import { TERMS_CONDITIONS_QUERY } from '@/sanity/lib/queries';
import { TermsConditions } from '@/sanity/types/sanity.types';
import { Metadata } from 'next';
import { PortableText } from 'next-sanity';

export const metadata: Metadata = {
	title: 'Terms & Conditions - Shoolin Construction',
	description:
		'A fusion of modern aesthetics and classical precision, capturing the essence of architectural excellence.',
	alternates: {
		canonical: '/terms-condition',
	},
};

const TermsPage = async (): Promise<React.JSX.Element> => {
	const terms = await sanityFetch<TermsConditions>({
		query: TERMS_CONDITIONS_QUERY,
	});
	return (
		<main className="mt-[7rem] h-auto w-full">
			<HeroHeading heading={'Terms & Conditions'} />
			<section className="h-auto w-full  ">
				<section className="mx-auto h-auto w-full max-w-7xl space-y-20 px-5 pb-40 xl:px-0">
					<PortableText value={terms?.terms as any} components={PTComponents} />
				</section>
			</section>
		</main>
	);
};

export default TermsPage;
