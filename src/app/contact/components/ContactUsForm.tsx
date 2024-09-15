'use client';
import React, { useState } from 'react';
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
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import axios from 'axios';
import toast from 'react-hot-toast';

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
	mobile: z.string({
		required_error: 'phone number is required',
	}),
	query: z.string({
		required_error: 'message is required',
	}),
	terms: z
		.boolean({
			required_error: 'terms & privacy policy is required',
		})
		.default(false),
});

type FromData = z.infer<typeof formSchema>;

const ContactUsForm = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm<FromData>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (values: FromData) => {
		const { firstName, lastName, email, mobile, query, terms } = values;

		const newValues = {
			name: `${firstName} ${lastName}`,
			email,
			mobile,
			query,
			messageType: 'Enquiry',
		};
		console.log(newValues);

		if (!terms) {
			toast.error('Oh! Something Wrong, pls select Term & Policy Checkout');
			return;
		}

		setLoading(true);
		await toast.promise(
			fetch('/api/enquiry', {
				method: 'POST',
				body: JSON.stringify(newValues),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}),
			{
				loading: 'Wait for Sending...',
				success: (data) => {
					setLoading(false);
					return <b>Request Send Successfully</b>;
				},
				error: (data) => {
					setLoading(false);
					return <b>Error Occurred.</b>;
				},
			}
		);
	};

	return (
		<section className="h-auto w-full ">
			<section className=" relative mx-auto flex h-full w-full max-w-7xl flex-col px-5 lg:py-20 xl:px-0">
				<section className="flex h-auto w-full flex-col-reverse gap-5 lg:flex-row lg:gap-0">
					<section className="flex h-auto w-full items-center  lg:w-[55%] lg:pr-16 ">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
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
													type="email"
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
									name="mobile"
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
									name="query"
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
									{/* <div className="flex w-full gap-3 sm:w-1/2"> */}
									<FormField
										control={form.control}
										name="terms"
										render={({ field }) => (
											<FormItem className="flex  w-full items-center justify-start gap-3  sm:w-1/2">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>
													I agree to{' '}
													<Link
														href={''}
														className="transition-all duration-300 ease-in-out hover:text-primary"
													>
														Terms
													</Link>{' '}
													&{' '}
													<Link
														href={''}
														className="transition-all duration-300 ease-in-out hover:text-primary"
													>
														privacy policy
													</Link>
												</FormLabel>
											</FormItem>
										)}
									/>

									<Button
										type={'submit'}
										variant={'outline-rounded'}
										size={'lg'}
										className="group"
										disabled={loading}
									>
										{loading ? (
											<>
												<svg
													aria-hidden="true"
													className="h-8 w-8 animate-spin fill-primary text-gray-200 dark:text-gray-600"
													viewBox="0 0 100 101"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
														fill="currentColor"
													/>
													<path
														d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
														fill="currentFill"
													/>
												</svg>
											</>
										) : (
											<>
												Submit
												<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
											</>
										)}
									</Button>
								</section>
							</form>
						</Form>
					</section>
					<section className="h-auto w-full lg:w-[45%] ">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.1586890709679!2d88.4084697788754!3d22.63368297871605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e0d3e85ef57%3A0xeeb4c142fb8ab5db!2sShoolin%20construction!5e0!3m2!1sen!2sin!4v1726435368166!5m2!1sen!2sin"
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="aspect-square w-full rounded-lg"
						/>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ContactUsForm;
