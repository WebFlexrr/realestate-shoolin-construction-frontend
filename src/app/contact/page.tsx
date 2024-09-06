import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroHeading from '@/components/HeroHeading';

import CompanyDetailsSection from '@/app/contact/components/CompanyDetailsSection';
import ContactUsForm from '@/app/contact/components/ContactUsForm';
import React from 'react';

const ContactPage = (): React.JSX.Element => {
	return (
		<main className="mt-[5rem] h-auto w-full">
			<HeroHeading heading={'Get in Touch'} subHeading={'Contact'} />
			<CompanyDetailsSection />
			<ContactUsForm />
			<FAQ />
			<Footer />
		</main>
	);
};

export default ContactPage;
