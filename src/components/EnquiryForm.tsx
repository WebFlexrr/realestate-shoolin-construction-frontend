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

const formSchema = z.object({
	name: z.string().min(2).max(50),
	mobile: z.string().min(2).max(12),
	email: z.string().email().min(5),
	pinCode: z.string().min(2).max(6),
	message: z.string(),
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
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		// <div className="absolute w-100% bottom-0 left-4 bg-white ">
		<Card>
			<CardHeader>
				<CardTitle>
					<Image
						src={logo}
						width={0}
						height={0}
						alt=""
						className="h-auto w-[100px]"
					/>
				</CardTitle>
				<CardDescription>This is a Enquery Form</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Name</FormLabel> */}
									<FormControl>
										<Input placeholder="*Enter your name" {...field} />
									</FormControl>
									{/* <FormDescription>
											This is your public display name.
										</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="mobile"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Mobile number</FormLabel> */}
									<FormControl>
										<Input
											type="number"
											placeholder="*Enter your Mobile no."
											{...field}
										/>
									</FormControl>
									{/* <FormDescription>
											This is your public display name.
										</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Email</FormLabel> */}
									<FormControl>
										<Input placeholder="*Enter your Email" {...field} />
									</FormControl>
									{/* <FormDescription>
											This is your public display name.
										</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="pinCode"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Email</FormLabel> */}
									<FormControl>
										<Input placeholder="Enter your area Pincode" {...field} />
									</FormControl>
									{/* <FormDescription>
											This is your public display name.
										</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Email</FormLabel> */}
									<FormControl>
										<Input placeholder="Enter your Query" {...field} />
									</FormControl>
									{/* <FormDescription>
											This is your public display name.
										</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</CardContent>
			{/* <CardFooter>

				</CardFooter> */}
		</Card>
		// </div>
	);
};

export default EnquiryForm;
