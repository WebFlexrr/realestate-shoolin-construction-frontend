import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { ImageWithAlt } from '../types/sanity.types';

const builder = imageUrlBuilder(client);

export function imageUrlFor(source: ImageWithAlt | SanityImageObject) {
	return builder.image(source);
}
