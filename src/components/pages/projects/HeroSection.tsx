import Projects from '@/components/Projects';
import SectionHeading from '@/components/SectionHeading';
import { getAllProjects } from '@/lib/apiCalls';
import React from 'react';

const HeroSection = async (): Promise<React.JSX.Element> => {
	const projectData = await getAllProjects();

	console.log(projectData);
	return (
		<section className="h-auto w-full  ">
			<section className="mx-auto h-auto w-full max-w-7xl space-y-20 px-5 pb-40 xl:px-0">
				<section className="flex w-full flex-col">
					<SectionHeading mainTitle={'Current Projects'} subTitle={'Ongoing'} />
					<section className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
						{projectData?.map((item) => {
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
						})}
					</section>
				</section>
				<section className="flex w-full flex-col">
					<SectionHeading mainTitle={'Complete Projects'} subTitle={'Done'} />
					<section className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
						{projectData?.map((item) =>
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
							)
						)}

						{/* <Projects
							image={'/picture/pic2.jpg'}
							status={'current'}
							link={'/projects/32131'}
						/>
						<Projects image={'/picture/pic1.jpg'} status={'done'} link={'d'} />
						<Projects
							image={'/picture/pic3.jpg'}
							status={'curent'}
							link={'/projects/32131'}
						/> */}
					</section>
				</section>
			</section>
		</section>
	);
};

export default HeroSection;
