/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
	_type: 'sanity.imagePaletteSwatch';
	background?: string;
	foreground?: string;
	population?: number;
	title?: string;
};

export type SanityImagePalette = {
	_type: 'sanity.imagePalette';
	darkMuted?: SanityImagePaletteSwatch;
	lightVibrant?: SanityImagePaletteSwatch;
	darkVibrant?: SanityImagePaletteSwatch;
	vibrant?: SanityImagePaletteSwatch;
	dominant?: SanityImagePaletteSwatch;
	lightMuted?: SanityImagePaletteSwatch;
	muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
	_type: 'sanity.imageDimensions';
	height?: number;
	width?: number;
	aspectRatio?: number;
};

export type Testimonial = {
	_id: string;
	_type: 'testimonial';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name?: string;
	rating?: 1 | 2 | 3 | 4 | 5;
	message?: string;
	image?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
};

export type Faq = {
	_id: string;
	_type: 'faq';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	question?: string;
	answer?: string;
};

export type Booking = {
	_id: string;
	_type: 'booking';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	question?: string;
	project?: {
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		[internalGroqTypeReferenceTo]?: 'project';
	};
};

export type Project = {
	_id: string;
	_type: 'project';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	seo?: SeoMetaFields;
	location?: string;
	status?: 'under_construction' | 'ready_to_move' | 'completed' | 'not_started';
	price?: number;
	description?: string;
	thumbnail?: ImageWithAlt;
	projectImages?: Array<{
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		alternative?: string;
		_type: 'projectImage';
		_key: string;
	}>;
	bhks?: Array<number>;
	total_units?: number;
	possession_date?: string;
	floors?: number;
	amenities?: amenities;
	unit_layout_plan?: unit_layout_plan;
	brochure?: string;
	mapsLocation?: string;
	construction_progress?: construction_progress;
};

export type ImageWithAlt = {
	asset?: {
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
	};
	hotspot?: SanityImageHotspot;
	crop?: SanityImageCrop;
	alternative?: string;
	_type: 'image';
};

export type Twitter = {
	_type: 'twitter';
	cardType?: string;
	creator?: string;
	site?: string;
	handle?: string;
};

export type AboutPage = {
	_id: string;
	_type: 'aboutPage';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	about?: string;
	ownerMessage?: Array<string>;
	ourValues?: Array<string>;
	ourVision?: Array<string>;
	seo?: SeoMetaFields;
	values?: string;
};

export type HomePage = {
	_id: string;
	_type: 'homePage';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	subTitle?: string;
	about?: string;
	seo?: SeoMetaFields;
};

export type ContactPage = {
	_id: string;
	_type: 'contactPage';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	seo?: SeoMetaFields;
};

export type ProjectsPage = {
	_id: string;
	_type: 'projectsPage';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	seo?: SeoMetaFields;
};

export type MetaTag = {
	_type: 'metaTag';
	metaAttributes?: Array<
		{
			_key: string;
		} & MetaAttribute
	>;
};

export type MetaAttribute = {
	_type: 'metaAttribute';
	attributeKey?: string;
	attributeType?: 'string' | 'image';
	attributeValueImage?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	attributeValueString?: string;
};

export type SeoMetaFields = {
	_type: 'seoMetaFields';
	nofollowAttributes?: boolean;
	metaTitle?: string;
	metaDescription?: string;
	metaImage?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	seoKeywords?: Array<string>;
	openGraph?: OpenGraph;
	additionalMetaTags?: Array<
		{
			_key: string;
		} & MetaTag
	>;
	twitter?: Twitter;
};

export type OpenGraph = {
	_type: 'openGraph';
	url?: string;
	image?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: 'image';
	};
	title?: string;
	description?: string;
	siteName?: string;
};

export type amenities = {
	elevators?: boolean;
	camera?: boolean;
	park?: boolean;
	powerBackup?: boolean;
	waterSupply?: boolean;
	swimmingPool?: boolean;
	electricity?: boolean;
	carParking?: boolean;
	bikeParking?: boolean;
};

export type construction_progress = Array<{
	title?: string;
	date?: string;
	file?: Array<string>;
	_key: string;
}>;

export type unit_layout_plan = Array<{
	floor?:
		| 'ground'
		| '1st'
		| '2nd'
		| '3rd'
		| '4th'
		| '5th'
		| '6th'
		| '7th'
		| '8th'
		| '9th'
		| '10th'
		| '11th'
		| '12th';
	floorImage?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		alternative?: string;
		_type: 'image';
	};
	floorImageInFile?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.fileAsset';
		};
		_type: 'file';
	};
	flats?: Array<{
		flatName?: string;
		bhkType?: '1bhk' | '2bhk' | '3bhk';
		carpetArea?: number;
		builtUpArea?: number;
		standardBuiltUpArea?: number;
		floorImage?: {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			_type: 'image';
		};
		livingDining?: string;
		bedroomArea?: Array<string>;
		bathroomArea?: string;
		kitchen?: string;
		balconyArea?: string;
		_key: string;
	}>;
	_key: string;
}>;

export type SanityFileAsset = {
	_id: string;
	_type: 'sanity.fileAsset';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	source?: SanityAssetSourceData;
};
export type SanityImageCrop = {
	_type: 'sanity.imageCrop';
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
};

export type SanityImageHotspot = {
	_type: 'sanity.imageHotspot';
	x?: number;
	y?: number;
	height?: number;
	width?: number;
};

export type SanityImageAsset = {
	_id: string;
	_type: 'sanity.imageAsset';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	metadata?: SanityImageMetadata;
	source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
	_type: 'sanity.assetSourceData';
	name?: string;
	id?: string;
	url?: string;
};

export type Geopoint = {
	_type: 'geopoint';
	lat?: number;
	lng?: number;
	alt?: number;
};

export type SanityImageMetadata = {
	_type: 'sanity.imageMetadata';
	location?: Geopoint;
	dimensions?: SanityImageDimensions;
	palette?: SanityImagePalette;
	lqip?: string;
	blurHash?: string;
	hasAlpha?: boolean;
	isOpaque?: boolean;
};

export type MediaTag = {
	_id: string;
	_type: 'media.tag';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name?: Slug;
};

export type Slug = {
	_type: 'slug';
	current?: string;
	source?: string;
};

export type PrivacyPolicy = {
	_id: string;
	_type: 'privacyPolicy';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name?: string;
	policy?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: 'span';
			_key: string;
		}>;
		style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
		listItem?: 'bullet' | 'number';
		markDefs?: Array<{
			href?: string;
			_type: 'link';
			_key: string;
		}>;
		level?: number;
		_type: 'block';
		_key: string;
	}>;
};

export type TermsConditions = {
	_id: string;
	_type: 'termsConditions';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name?: string;
	terms?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: 'span';
			_key: string;
		}>;
		style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
		listItem?: 'bullet' | 'number';
		markDefs?: Array<{
			href?: string;
			_type: 'link';
			_key: string;
		}>;
		level?: number;
		_type: 'block';
		_key: string;
	}>;
};

export type AllSanitySchemaTypes =
	| SanityImagePaletteSwatch
	| SanityImagePalette
	| SanityImageDimensions
	| Geopoint
	| Testimonial
	| Faq
	| Booking
	| Project
	| SanityFileAsset
	| TermsConditions
	| PrivacyPolicy
	| ContactPage
	| ProjectsPage
	| AboutPage
	| HomePage
	| MetaTag
	| MetaAttribute
	| SeoMetaFields
	| Twitter
	| OpenGraph
	| SanityImageCrop
	| SanityImageHotspot
	| SanityImageAsset
	| SanityAssetSourceData
	| SanityImageMetadata
	| MediaTag
	| Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
