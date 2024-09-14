'use client';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Calendar as CalendarIcon } from 'lucide-react';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { GoArrowUpRight } from 'react-icons/go';
import { Calendar } from '@/components/ui/calendar';

const formSchema = z.object({
	name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Name must be string',
		})
		.min(2, {
			message: 'Name must be at least 2 characters.',
		})
		.max(50),
	email: z
		.string({
			required_error: 'email is required',
			invalid_type_error: 'email must be string',
		})
		.email({ message: 'Invalid email address' }),
	phoneNumber: z
		.number({
			required_error: 'mobile number is required',
			invalid_type_error: 'mobile number must be a number',
		})
		.int(),
	date: z.date({
		required_error: 'Please select a date and time',
		invalid_type_error: "That's not a date!",
	}),
});

type FromData = z.infer<typeof formSchema>;

const ScheduleSiteVisitSection = () => {
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const form = useForm<FromData>({
		resolver: zodResolver(formSchema),
	});

	const handleSubmit = async (value: FromData) => {
		console.log(value);
	};
	return (
		// <section className="flex h-full w-full flex-col justify-start px-5 sm:px-16 md:flex-row  xl:mx-auto xl:max-w-7xl xl:px-0">
		// 	<section className="h-auto w-full lg:w-[75%] ">
		//  Schedule a site visit
		<section className="h-auto w-full">
			<section className="mt-10 h-auto w-full rounded-lg bg-background2 p-8 lg:px-16 lg:py-10 ">
				<section className="flex w-full justify-center">
					<h2 className=" underline">Schedule Site Visit</h2>
				</section>
				<section className="mt-7 flex w-full ">
					<Form {...form}>
						<form
							onSubmit={() => form.handleSubmit(handleSubmit)}
							className="flex flex-wrap"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="my-5 flex w-full flex-col sm:w-1/2  sm:pr-5 ">
										<FormLabel>Name</FormLabel>
										<FormControl>
											<input
												className="  border-b border-black bg-background2 py-2 outline-0 "
												placeholder=" Name"
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
									<FormItem className="my-5 flex w-full flex-col  sm:w-1/2  sm:pl-5  ">
										<FormLabel>Email Address</FormLabel>
										<FormControl>
											<input
												className="  border-b border-black bg-background2 py-2 outline-0 "
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
									<FormItem className="my-5 flex w-full flex-col  sm:w-1/2 sm:pr-5  ">
										<FormLabel>Phone Number</FormLabel>
										<FormControl>
											<input
												className="  border-b border-black bg-background2 py-2 outline-0 "
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
								name="date"
								render={({ field }) => (
									<FormItem className="my-5 flex w-full flex-col  sm:w-1/2  sm:pl-5  ">
										<FormLabel>Date</FormLabel>
										<FormControl>
											<Popover>
												<PopoverTrigger asChild>
													<button className="flex items-center border-b border-black bg-background2 py-2 outline-0 ">
														<CalendarIcon className="mr-2 h-4 w-4" />
														<span>Pick a date</span>
													</button>
												</PopoverTrigger>
												<PopoverContent className="w-auto p-0">
													<Calendar
														mode="single"
														selected={date}
														onSelect={setDate}
														initialFocus
														{...field}
													/>
												</PopoverContent>
											</Popover>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<section className="mt-8 flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:justify-end ">
								<Button
									type={'submit'}
									variant={'outline-rounded'}
									size={'lg'}
									className="group my-5 flex  w-full   sm:w-1/2  sm:pr-5  "
								>
									Submit
									<GoArrowUpRight className=" text-2xl transition-all  group-hover:-translate-y-2 group-hover:translate-x-3 group-hover:duration-500  group-hover:ease-in-out" />
								</Button>
							</section>
						</form>
					</Form>
				</section>
			</section>
		</section>
		// 	</section>
		// </section>
	);
};

export default ScheduleSiteVisitSection;
