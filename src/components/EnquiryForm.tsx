'use client';
import React from 'react';
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

const formSchema = z.object({
	name: z.string().min(2).max(50),
	mobile: z.string().min(2).max(12),
	email: z.string().email().min(5),
	pinCode: z.string().min(2).max(6),
	query: z.string(),
});

const EnquiryForm = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

		try {
			const responsive = await fetch('/api/enquiry', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		// <div className="absolute w-100% bottom-0 left-4 bg-white ">
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-center">
					<Image
						src={logo}
						width={0}
						height={0}
						alt=""
						className="h-auto w-[100px]"
					/>
				</CardTitle>
				<CardDescription className="flex items-center justify-center">
					This is a Enquery Form
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
										<Input placeholder="Enter your area Pincode" {...field} />
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
		</Card>
		// </div>
	);
};

export default EnquiryForm;
