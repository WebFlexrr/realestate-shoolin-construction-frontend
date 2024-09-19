import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center gap-3">
			<Image
				src={'/logos/logo.png'}
				width={'100'}
				className="w-40"
				height={'0'}
				alt={'Logo'}
			/>
			<h2>404 Not Found</h2>
			<p>Could not find requested resource</p>
			<Link className="mt-10" href="/">
				<Button>Return Home</Button>
			</Link>
		</div>
	);
}
