import Image from 'next/image';

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className="flex h-screen w-full items-center justify-center">
			<Image
				src={'/logos/logo.png'}
				width={'1500'}
				className="w-64 animate-pulse"
				height={'0'}
				alt={'Logo'}
			/>
		</div>
	);
}
