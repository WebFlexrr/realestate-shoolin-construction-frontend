import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';

export const metadata: Metadata = {
	// title: {
	// 	default:
	// 		'Shoolin Construction | Provides Commercial & Residential Real estate Property-Buy-Sell-Rent Company',
	// 	template:
	// 		'%s - Provides Commercial & Residential Real estate Property-Buy-Sell-Rent Company',
	// },
	// description:
	// 	'Provides Residential Real estate Property-Buy-Sell-Developer Company',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	keywords: ['Next.js', 'React', 'JavaScript'],
	creator: 'Webflexrr.com',
	publisher: 'Webflexrr.com',
	metadataBase: new URL('https://www.shoolinconstruction.com/'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'de-DE': '/de-DE',
		},
	},
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
