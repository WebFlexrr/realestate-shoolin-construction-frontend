'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z.object({
	name: z.string().min(2).max(50),
	mobile: z.string().min(10).max(12),
	email: z.string().email().min(5),
	pinCode: z.string().min(2).max(6),
	query: z.string(),
});

interface EnquiryPanelProps {
	projectTitle?: string;
	projectSlug?: string;
}

const EnquiryPanel: FC<EnquiryPanelProps> = ({ projectTitle, projectSlug }) => {
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
		const newValues = {
			...values,
			messageType: 'Enquiry',
			propertyName: projectTitle,
			propertyLink: `http://shoolinconstruction.com/projects/${projectSlug}`,
		};
		console.log(newValues);

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
				success: <b>Request Send Successfully</b>,
				error: <b>Error Occurred.</b>,
			}
		);
	};
	return (
		<Card className=" sticky top-[8rem] h-fit w-full  max-w-[500px]  justify-end bg-slate-200 shadow-xl">
			<Form {...form}>
				<CardHeader>
					<CardTitle className="font-semibold">Yes, I am interested!</CardTitle>
					<CardDescription className="flex flex-col gap-2">
						Send me more information about the project through email/ SMS.
						<span>* fields are mandatory</span>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="grid w-full items-center gap-2"
					>
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
					</form>
				</CardContent>
				<CardFooter className="flex w-full flex-col justify-center">
					<Button className="px-10" type="submit">
						Submit
					</Button>
				</CardFooter>
			</Form>
		</Card>
	);
};

export default EnquiryPanel;
