import { sanityFetch } from '@/sanity/lib/client';
import { PROPERTY_FOR_SALE_QUERY } from '@/sanity/lib/queries';
import { Slug } from '@/sanity/types/sanity.types';
import { Link } from 'lucide-react';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Button } from './ui/button';
import { GoArrowUpRight } from 'react-icons/go';

const BookOnlineButton = async () => {
	const slug = await sanityFetch<Slug>({
		query: PROPERTY_FOR_SALE_QUERY,
	});
	return (
		<Link href={`/projects/${slug}`} className="hidden lg:flex">
			<Button className="group border border-primary text-lg transition-all duration-500 ease-in-out hover:bg-background2">
				Book Online
				<GoArrowUpRight className=" text-2xl  group-hover:duration-500  group-hover:ease-in-out" />
			</Button>
		</Link>
	);
};

export default BookOnlineButton;
