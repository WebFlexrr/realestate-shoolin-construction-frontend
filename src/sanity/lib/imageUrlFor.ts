import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);

export function imageUrlFor(source: SanityImageObject) {
	return builder.image(source);
}
