'use client';
import React, { FC, useState } from 'react';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import Image from 'next/image';
import logo from '../../public/logos/logo.png';
import { headers } from 'next/headers';
import toast from 'react-hot-toast';

const formSchema = z.object({
	name: z.string().min(2).max(50),
	mobile: z.string().min(2).max(12),
	email: z.string().email().min(5),
	pinCode: z.string().min(2).max(6),
	query: z.string(),
});

interface EnquiryFormProps {
	projectTitle?: string;
	projectSlug?: string;
}

const EnquiryForm: FC<EnquiryFormProps> = ({ projectTitle, projectSlug }) => {
	const [loading, setLoading] = useState(false);
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			query: '',
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const newValues = {
			...values,
			messageType: 'Enquiry',
			propertyName: projectTitle,
			propertyLink: `http://shoolinconstruction.com/projects/${projectSlug}`,
		};
		// console.log(newValues);

		try {
			setLoading(true);
			await fetch('/api/enquiry', {
				method: 'POST',
				body: JSON.stringify(newValues),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			setLoading(false);
			toast.success('Request Send Successfully');
		} catch {
			toast.error('Error Occurred.');
		}
	};
	return (
		<Card className={` relative  max-h-full min-h-40 w-full`}>
			<CardHeader className={`${loading && 'hidden'}`}>
				<CardTitle className="flex items-center justify-center">
					<Image
						src={logo}
						width={0}
						height={0}
						alt=""
						className="h-auto w-[120px]"
					/>
				</CardTitle>
				<CardDescription className="flex items-center justify-center text-2xl font-medium text-black">
					This is a Enquiry Form
				</CardDescription>
			</CardHeader>
			<CardContent className={`${loading && 'hidden'}`}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="*Enter your name" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="mobile"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="number"
											placeholder="*Enter your Mobile no."
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
								<FormItem>
									<FormControl>
										<Input placeholder="*Enter your Email" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="pinCode"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="*Enter your area Pincode" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="query"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="Enter your Query" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</CardContent>
			<div
				className={`${loading ? 'flex' : 'hidden'} absolute h-full w-full items-center justify-center transition-all duration-100 ease-in-out `}
			>
				<div role="status">
					<svg
						aria-hidden="true"
						className="inline h-8 w-8 animate-spin fill-primary text-gray-200 dark:text-gray-600"
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
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</Card>
	);
};

export default EnquiryForm;
