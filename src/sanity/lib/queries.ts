import { defineQuery } from 'next-sanity';

export const TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial"]{
  _id,name, rating,message, "imageUrl": image.asset->url
}`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"]`);

export const FAQ_QUERY = defineQuery(`*[_type == "faq"]`);

export const PROJECT_DETAILS_QUERY = (slug: string) => {
	const PROJECT_QUERY = defineQuery(
		`*[_type == "project" && slug.current == "${slug}"][0]{
		_id, _type, _createdAt, _updatedAt, _rev, title, slug, location, tags, status, description, price,
		images, bhks, total_units, possession_date,thumbnail, floors, amenities, master_layout_plan, unit_layout_plan,
		"brochure": brochure.asset->url, geoLocation, construction_progress
		}`
	);
	return PROJECT_QUERY;
};
