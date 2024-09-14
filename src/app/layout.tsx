import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
	title: {
		default:
			'Shoolin Construction | Provides Commercial & Residential Real estate Property-Buy-Sell-Rent Company',
		template:
			'%s - Provides Commercial & Residential Real estate Property-Buy-Sell-Rent Company',
	},
	description:
		'Provides Residential Real estate Property-Buy-Sell-Developer Company',
	generator: 'Next.js',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	keywords: ['Next.js', 'React', 'JavaScript'],
	twitter: {
		card: 'summary_large_image',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Toaster />
				{/* <EnquiryForm /> */}
			</body>
		</html>
	);
}
