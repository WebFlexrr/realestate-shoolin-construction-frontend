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

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'GeneralContractor',
	name: 'Shoolin Constructions',
	image: '',
	'@id': '',
	url: 'https://www.shoolinconstruction.com/',
	telephone: '+91-8017194170',
	address: {
		'@type': 'PostalAddress',
		streetAddress:
			'132, Subhash Nagar Road,Dum Dum Cantonment, near Subhash Nagar Stadium & Water Tanks',
		addressLocality: 'Kolkata',
		postalCode: '700065',
		addressCountry: 'IN',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element {
	return (
		<html lang="en">
			<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER!} />
			<body>
				<Navbar />
				{children}
				<Toaster />
				{/* <EnquiryForm /> */}
				<Footer />
			</body>
		</html>
	);
}
