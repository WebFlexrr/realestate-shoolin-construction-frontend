import HeroHeading from '@/components/HeroHeading';
import React from 'react';

const page = (): React.JSX.Element => {
	return (
		<main className="h-auto w-full">
			<HeroHeading heading={'About Us'} />
		</main>
	);
};

export default page;
