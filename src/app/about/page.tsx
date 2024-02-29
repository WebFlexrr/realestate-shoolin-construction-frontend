import HeroHeading from '@/components/HeroHeading';
import React from 'react';

const page = (): React.JSX.Element => {
	return (
		<main className="mt-[5rem] h-auto w-full">
			<HeroHeading heading={'About Us'} />
		</main>
	);
};

export default page;
