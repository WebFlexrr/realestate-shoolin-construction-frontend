import Projects from '@/components/Projects';
import SectionHeading from '@/components/SectionHeading';
import React from 'react';

const HeroSection = (): React.JSX.Element => {
	return (
		<section className="h-auto w-full  ">
			<div className="mx-auto h-auto w-full max-w-7xl space-y-20">
				<section className="flex w-full flex-col">
					<SectionHeading mainTitle={'Current Projects'} subTitle={'Ongoing'} />
					<section className=" grid grid-cols-2 gap-10">
						<Projects
							image={'/picture/pic2.jpg'}
							status={'current'}
							link={'d'}
						/>
						<Projects image={'/picture/pic1.jpg'} status={'done'} link={'d'} />
						<Projects
							image={'/picture/pic3.jpg'}
							status={'curent'}
							link={'d'}
						/>
					</section>
				</section>
				<section className="flex w-full flex-col">
					<SectionHeading mainTitle={'Complete Projects'} subTitle={'Done'} />
					<section className=" grid grid-cols-2 gap-10">
						<Projects
							image={'/picture/pic2.jpg'}
							status={'current'}
							link={'d'}
						/>
						<Projects image={'/picture/pic1.jpg'} status={'done'} link={'d'} />
						<Projects
							image={'/picture/pic3.jpg'}
							status={'curent'}
							link={'d'}
						/>
					</section>
				</section>
			</div>
		</section>
	);
};

export default HeroSection;
