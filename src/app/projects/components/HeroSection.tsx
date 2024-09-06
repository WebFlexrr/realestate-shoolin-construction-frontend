// import Projects from '@/components/Projects';
import Projects from '@/components/Projects';
import SectionHeading from '@/components/SectionHeading';
import { client } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import React from 'react';

interface project {
	title: 'Rupa';
	tags: ['100% no Brokerage', 'Running ', 'finished'];
	price: 23;
	possession_date: '2026-09-17';

	slug: { current: 'rupa'; _type: 'slug' };
	status: 'under_construction';
	bhks: [2, 3, 5];
	_rev: 'ucErVO1Rnu6Lthw0MsJOb1';
	description: 'This is a leading project. This is a construction project, Easy to use property from  Suhbhas nagar byelane';
	floors: 3;
	amenities: {
		elevators: true;
		electricity: true;
		swimmingpool: true;
		camera: true;
		parking: true;
		watersupply: true;
		powerbackup: true;
	};
	_createdAt: '2024-09-06T11:03:39Z';
	_id: '81c485c0-5e1b-477b-bc67-ef380cd6d5b6';

	_type: 'project';
	total_units: 323;
	_updatedAt: '2024-09-06T14:14:01Z';
}
const HeroSection = async (): Promise<React.JSX.Element> => {
	const projects = await client.fetch(PROJECTS_QUERY);
	console.log('Projects====>', projects);

	return (
		<section className="h-auto w-full  ">
			<section className="mx-auto h-auto w-full max-w-7xl space-y-20 px-5 pb-40 xl:px-0">
				<section className="flex w-full flex-col">
					<SectionHeading mainTitle={'Current Projects'} subTitle={'Ongoing'} />
					<section className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
						{projects?.map((item: project) => {
							return item.status === 'under_construction' ||
								item.status === 'completed' ? (
								<Projects
									key={item._id}
									// image={item.thumbnail}
									status={item.status}
									name={item.title}
									description={item.description}
									// address={item.address}
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
						{/* {projectData?.map((item) =>
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
						)} */}

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
