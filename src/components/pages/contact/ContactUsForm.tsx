'use client';
import Image from 'next/image';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const formSchema = z.object({
	firstName: z
		.string({
			required_error: 'First name is required',
			invalid_type_error: 'First name must be string',
		})
		.min(2, {
			message: 'First name must be at least 2 characters.',
		})
		.max(50),
	lastName: z
		.string({
			required_error: 'Last name is required',
			invalid_type_error: 'Last name must be string',
		})
		.min(2, {
			message: 'Last name must be at least 2 characters.',
		}),
	email: z
		.string({
			required_error: 'email is required',
			invalid_type_error: 'email must be string',
		})
		.email({ message: 'Invalid email address' }),
	phoneNumber: z
		.number({
			required_error: 'phone number is required',
			invalid_type_error: 'phone number must be a number',
		})
		.int(),
	message: z.string({
		required_error: 'message is required',
	}),
	terms: z.boolean({
		required_error: 'terms & privacy policy is required',
	}),
});

type FromData = z.infer<typeof formSchema>;

const ContactUsForm = () => {
	const form = useForm<FromData>({
		resolver: zodResolver(formSchema),
	});

	const handleSubmit = async (value: FromData) => {
		console.log(value);
	};

	return (
		<section className="h-auto w-full ">
			<section className=" relative mx-auto flex h-full w-full max-w-7xl flex-col px-5 lg:py-20 xl:px-0">
				<section className="flex h-auto w-full flex-col-reverse gap-5 lg:flex-row lg:gap-0">
					<section className="flex h-auto w-full items-center  lg:w-[55%] lg:pr-16 ">
						<Form {...form}>
							<form
								onSubmit={() => form.handleSubmit(handleSubmit)}
								className="flex flex-wrap"
							>
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem className="my-5 flex w-full flex-col sm:w-1/2  sm:pr-5 ">
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<input
													className="  border-b border-black py-2 outline-0 "
													placeholder="Enter your first name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem className="my-5 flex w-full flex-col  sm:w-1/2 sm:pl-5 ">
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<input
													className="   border-b border-black py-2 outline-0 "
													placeholder="Enter your last name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="my-5 flex w-full flex-col  sm:w-1/2  sm:pr-5  ">
											<FormLabel>Email Address</FormLabel>
											<FormControl>
												<input
													className="  border-b border-black py-2 outline-0 "
													placeholder="Enter your email address"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phoneNumber"
									render={({ field }) => (
										<FormItem className="my-5 flex w-full flex-col  sm:w-1/2 sm:pl-5  ">
											<FormLabel>Phone Number</FormLabel>
											<FormControl>
												<input
													className="  border-b border-black py-2 outline-0 "
													placeholder="Enter your phone number"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem className="my-5 flex w-full  flex-col  ">
											<FormLabel>Message</FormLabel>
											<FormControl>
												<textarea
													className="  border-b border-black py-2 outline-0 "
													placeholder="Type Message...."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<section className="mt-8 flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
									<div className="flex w-full gap-3 sm:w-1/2">
										<Checkbox id="terms" />
										<Label htmlFor="terms">
											I agree to <Link href={''}>Terms</Link> &{' '}
											<Link href={''}>privacy policy</Link>
										</Label>
									</div>

									<Button
										type={'submit'}
										variant={'outline-rounded'}
										size={'lg'}
										className="group"
									>
										Submit
										<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
									</Button>
								</section>
							</form>
						</Form>
					</section>
					<section className="h-auto w-full lg:w-[45%] ">
						<Image
							src={'/picture/pic4.jpg'}
							width={1000}
							height={0}
							className="aspect-square w-full rounded-lg"
							alt={''}
						/>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ContactUsForm;
