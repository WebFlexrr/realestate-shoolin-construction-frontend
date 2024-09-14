import { defineQuery } from 'next-sanity';

export const TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial"]{
  _id,name, rating,message, "imageUrl": image.asset->url
}`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"]`);

export const FAQ_QUERY = defineQuery(`*[_type == "faq"]`);

export const PROJECT_DETAILS_QUERY = (slug: string) => {
	const PROJECT_QUERY = defineQuery(
		`*[_type == "project" && slug.current == "${slug}"][0]{
		_id, _type, _createdAt, _updatedAt, _rev, title, slug, location, tags, status, price, description, 
		thumbnail, projectImages, bhks, total_units, possession_date, floors, amenities, unit_layout_plan,
		mapsLocation, "brochure": brochure.asset->url, construction_progress[]{date,"file":file[].asset->url}}`
	);
	return PROJECT_QUERY;
};
