import { FiArrowUpRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const OurValuesSection = () => {
	return (
		<section className="relative my-20 h-full  w-full bg-background2 py-20">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col px-5 xl:px-0">
				<section>Our values</section>
				<section className="flex w-full flex-col gap-7 lg:flex-row lg:gap-0">
					<section className="h-auto w-full text-start lg:w-[40%]">
						<button className="group flex h-auto w-full items-center justify-between border-b border-black py-6">
							<div className="flex gap-5">
								<span>01.</span>
								<h4>Creative Integrity</h4>
							</div>
							<FiArrowUpRight className=" relative text-4xl opacity-0 transition-all  duration-300 ease-in-out  group-hover:opacity-100" />
						</button>
						<button className="group flex h-auto w-full items-center justify-between border-b border-black py-6">
							<div className="flex gap-5">
								<span>02.</span>
								<h4>Sustainable Innovation</h4>
							</div>
							<FiArrowUpRight className=" relative text-4xl opacity-0 transition-all  duration-300 ease-in-out  group-hover:opacity-100" />
						</button>
						<button className=" group flex h-auto w-full items-center justify-between border-b border-black py-6">
							<div className="flex gap-5">
								<span>03.</span>
								<h4>Client Collaboration</h4>
							</div>
							<FiArrowUpRight className=" relative text-4xl opacity-0 transition-all  duration-300 ease-in-out  group-hover:opacity-100" />
						</button>
						<button className="group flex h-auto w-full items-center justify-between border-b border-black py-6">
							<div className="flex gap-5">
								<span>04.</span>
								<h4>Ethical Excellence</h4>
							</div>
							<FiArrowUpRight className=" relative text-4xl opacity-0 transition-all  duration-300 ease-in-out  group-hover:opacity-100" />
						</button>
					</section>
					<section className="flex h-auto w-full flex-col gap-7 lg:w-[60%] lg:p-16">
						<div className="flex w-full flex-col gap-3">
							<p>
								It&apos;s a guiding principle that shapes everything we do. We
								believe in approaching every project with a commitment to
								originality, authenticity, and artistic expression. Our team of
								architects and designers are dedicated to pushing the boundaries
								of creativity while upholding the highest standards of
								professional ethics and integrity.
							</p>
							<p>
								From concept development to final execution, we strive to create
								spaces that not only inspire and captivate but also reflect our
								unwavering dedication to honesty.
							</p>
						</div>
						<Link href={'/contact'} className="">
							<Button
								variant={'ghost'}
								size={'lg'}
								className="group flex gap-1 hover:bg-primary"
							>
								Contact Us
								<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
							</Button>
						</Link>
					</section>
				</section>
			</section>
		</section>
	);
};

export default OurValuesSection;
