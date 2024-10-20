import { defineQuery } from 'next-sanity';

export const TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial"]{
  _id,name, rating,message, "imageUrl": image.asset->url
}`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"]`);

export const FAQ_QUERY = defineQuery(`*[_type == "faq"]`);

export const PROJECT_DETAILS_QUERY = (slug: string) => {
	const PROJECT_QUERY = defineQuery(
		`*[_type == "project" && slug.current == "${slug}"][0]{
		_id, _type, _createdAt, _updatedAt, _rev, title, seo, slug, location, tags, status, price, description, 
		thumbnail, projectImages, bhks, total_units, possession_date, floors, amenities, unit_layout_plan[]{
          floorImage,floor,"floorImageInFile":floorImageInFile.asset->url},
		mapsLocation, "brochure": brochure.asset->url, construction_progress[]{date,"file":file[].asset->url}}`
	);
	return PROJECT_QUERY;
};

export const HOME_PAGE_SEO_QUERY =
	defineQuery(`*[_type == "homePage"][0]{ _createdAt,
_type,_id,seo,title,_updatedAt,subTitle,about
}`);

export const ABOUT_PAGE_SEO_QUERY =
	defineQuery(`*[_type == "aboutPage"][0]{ _createdAt,
_type,_id,seo,title,_updatedAt,subTitle,about,ownerMessage, ourValues,ourVision
}`);
export const PROJECTS_PAGE_SEO_QUERY =
	defineQuery(`*[_type == "projectsPage"][0]{ _createdAt,
_type,_id,seo,title,_updatedAt,subTitle
}`);
export const CONTACT_PAGE_SEO_QUERY =
	defineQuery(`*[_type == "contactPage"][0]{ _createdAt,
_type,_id,seo,title,_updatedAt,subTitle
}`);

export const PRIVACY_POLICY_QUERY = defineQuery(
	`*[_type == "privacyPolicy"][0]`
);

export const TERMS_CONDITIONS_QUERY = defineQuery(
	`*[_type == "termsConditions"][0]`
);

export const PROPERTY_FOR_SALE_QUERY = defineQuery(
	`*[_type == "booking"][0]{"slug":project->slug}`
);
