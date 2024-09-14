'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
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
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
	name: z.string().min(2).max(50),
	mobile: z.string().min(2).max(12),
	email: z.string().email().min(5),
	pinCode: z.string().min(2).max(6),
	query: z.string(),
});

const EnquiryPanel = () => {
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
		<Card className=" sticky top-[8rem] h-fit w-full  max-w-[500px]  justify-end bg-slate-200 shadow-xl">
			<Form {...form}>
				<CardHeader>
					<CardTitle className="font-semibold">Put Your Enquiry</CardTitle>
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
				<CardFooter className="flex w-full justify-center">
					<Button className="px-10" type="submit">
						Submit
					</Button>
					{/* <Button className="px-10">Submit</Button> */}
					<span className="text-sm">
						The Site visit booking feature is for New Bookings only and the
						final Site Visit Booking confirmation shall be done by our agents
						through a return call.
					</span>
				</CardFooter>
			</Form>
		</Card>
	);
};

export default EnquiryPanel;
