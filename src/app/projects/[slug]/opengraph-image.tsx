import { sanityFetch } from '@/sanity/lib/client';
import { PROJECT_DETAILS_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/sanity/types/sanity.types';
import { ImageResponse } from 'next/og';

export const alt = 'Shoolin Construction & builders';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default async function og({ params }: { params: { slug: string } }) {
	// const project = await sanityFetch<Project>({
	// 	query: PROJECT_DETAILS_QUERY(params.slug),
	// });

	console.log('OPGE Graph project call==>', params.slug);

	return new ImageResponse(
		(
			<div className="flex h-full w-full items-center justify-center text-5xl font-semibold">
				<img src={'/logos/logo.png'} width={'50'} height={'50'} alt="logo" />
				{params.slug}
			</div>
		),
		{
			...size,
		}
	);
}
