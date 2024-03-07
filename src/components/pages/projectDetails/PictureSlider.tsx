import React from 'react';

import {
	Dialog,
	DialogContent,
	// DialogDescription,
	// DialogHeader,
	// DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import SwiperGalary from '@/components/ui/SwiperGalary';

const PictureSlider = () => {
	// const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<section className=" h-auto w-full border border-black">
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent className=" max-w-5xl p-10">
					{/* <DialogHeader className=" max-w-5xl">
						<DialogTitle>Are you absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</DialogDescription>
					</DialogHeader> */}
					<SwiperGalary />
				</DialogContent>
			</Dialog>
		</section>
	);
};

export default PictureSlider;
