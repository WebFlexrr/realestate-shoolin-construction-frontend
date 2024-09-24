import HeroHeading from '@/components/HeroHeading';
import { PTComponents } from '@/components/PortableText';
import { sanityFetch } from '@/sanity/lib/client';
import { PRIVACY_POLICY_QUERY } from '@/sanity/lib/queries';
import { PrivacyPolicy } from '@/sanity/types/sanity.types';
import { Metadata } from 'next';
import {
	PortableText,
	PortableTextBlock,
	PortableTextProps,
} from 'next-sanity';

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: 'Generated by create next app',
};

const PrivacyPage = async (): Promise<React.JSX.Element> => {
	const policy = await sanityFetch<PrivacyPolicy>({
		query: PRIVACY_POLICY_QUERY,
	});

	console.log('This is policy', policy);
	return (
		<main className="mt-[7rem] h-auto w-full">
			<HeroHeading heading={'Privacy Policy'} />
			<section className="h-auto w-full  ">
				<section className="mx-auto h-auto w-full max-w-7xl space-y-20 px-5 pb-40 xl:px-0">
					<PortableText
						value={policy?.policy as any}
						components={PTComponents}
					/>
				</section>
			</section>
		</main>
	);
};

export default PrivacyPage;
