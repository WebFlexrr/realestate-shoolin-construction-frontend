// import Projects from '@/components/Projects';
import SectionHeading from '@/components/SectionHeading';

import React from 'react';

const ExtraProjects = async () => {
	// const projectData = await getAllProjects();
	return (
		<section className="h-auto w-full bg-background2">
			<section className="flex h-auto w-full flex-col px-5 pb-40 pt-20 sm:px-16 xl:mx-auto xl:max-w-7xl xl:px-0">
				<section className="flex h-auto w-full flex-col items-center ">
					<SectionHeading
						mainTitle={'Current Projects'}
						subTitle={'Explore more'}
					/>
					<section className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
						{/* {projectData?.map((item) => {
							return item.status === 'under-construction' ||
								item.status === 'completed' ? (
								<Projects
									key={item._id}
									image={item.thumbnail}
									status={item.status}
									name={item.name}
									description={item.description}
									address={item.address}
								/>
							) : (
								<></>
							);
						})} */}
					</section>
				</section>
			</section>
		</section>
	);
};

export default ExtraProjects;
