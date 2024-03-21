export const getAllProjects = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/projects/getAllProjects`,
		{
			next: { revalidate: 3600 },
		}
	);
	const { data } = await res.json();
	const response: Project[] = data;

	return response;
};
