import { defineQuery } from 'next-sanity';

export const TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial"]{
  _id,name, rating,message, "imageUrl": image.asset->url
}`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"]`);
