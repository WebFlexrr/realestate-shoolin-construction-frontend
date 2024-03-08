import Projects from '@/components/Projects';
import SectionHeading from '@/components/SectionHeading';
import React from 'react';

const ExtraProjects = () => {
	return (
		<section className="h-auto w-full bg-background2">
			<section className="flex h-auto w-full flex-col px-5 pb-40 pt-20 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="flex h-auto w-full flex-col items-center ">
					<SectionHeading
						mainTitle={'Current Projects'}
						subTitle={'Explore more'}
					/>
					<section className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
						<Projects
							image={'/picture/pic2.jpg'}
							status={'current'}
							link={'/'}
						/>
						<Projects
							image={'/picture/pic2.jpg'}
							status={'current'}
							link={'/'}
						/>
						<Projects
							image={'/picture/pic2.jpg'}
							status={'current'}
							link={'/'}
						/>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ExtraProjects;
