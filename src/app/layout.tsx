import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { GoogleTagManager } from '@next/third-parties/google';

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
