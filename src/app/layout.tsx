import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title:
		'Shoolin Construction | Provides Commercial & Residential Real estate Property-Buy-Sell-Rent Company',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	creator: 'Webflexrr.com',
	publisher: 'Webflexrr.com',
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}`),
	category: 'real-estate',
	// formatDetection: {
	// 	email: false,
	// 	address: false,
	// 	telephone: false,
	// },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element {
	const jsonLd = {
		'@context': 'https://schema.org/',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: 'https://www.shoolinconstruction.com/',
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'About Us',
				item: 'https://www.shoolinconstruction.com/about',
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: 'Our Current Projects',
				item: 'https://www.shoolinconstruction.com/projects',
			},
			{
				'@type': 'ListItem',
				position: 4,
				name: 'FAQ',
				item: 'https://www.shoolinconstruction.com/faq',
			},
			{
				'@type': 'ListItem',
				position: 5,
				name: 'Contact Us',
				item: 'https://www.shoolinconstruction.com/contact',
			},
		],
	};
	return (
		<html lang="en">
			<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER!} />
			<body>
				{/* Add JSON-LD to your page */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				{/* ... */}
				<Navbar />
				{children}
				<Toaster />
				{/* <EnquiryForm /> */}
				<Footer />
			</body>
		</html>
	);
}
