import { render } from '@react-email/components';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import ForOwnEmail from './emails/ForOwnEmail';

interface Body {
	name: string;
	mobile: number;
	email: string;
	pincode: number;
	query: string;
}
export async function POST(
	request: NextRequest
): Promise<NextResponse<unknown>> {
	const body: Body = await request.json();
	const { name, email, mobile, pincode, query } = body;
	console.log(body);

	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.hostinger.com',
			port: 465,
			secure: true, // true for port 465, false for other ports
			auth: {
				user: 'business@shoolinconstruction.com',
				pass: 'Shoolin@54321',
			},
		});

		const emailHtml = await render(
			ForOwnEmail({
				name,
				email,
				mobile,
				pincode,
				query,
			})
		);

		// send mail with defined transport object
		const forOwn = await transporter.sendMail({
			from: 'business@shoolinconstruction.com <business@shoolinconstruction.com>', // sender address
			to: 'contact@shoolinconstruction.com', // list of receivers
			subject: 'A new Enquiry happened from Website', // Subject line

			html: emailHtml, // html body
		});

		console.log('Message sent: %s', forOwn);
		// Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
		return NextResponse.json(forOwn, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
}
