import React from 'react';
import {
	Body,
	Container,
	Head,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';

const baseUrl = process.env.NEXT_PUBLIC_URL ?? `http://localhost:3000`;

interface ForOwnEmailProps {
	name: string;
	email: string;
	mobile: number;
	pincode?: number;
	query: string;
}

const ForOwnEmail = ({
	name,
	email,
	mobile,
	pincode,
	query,
}: ForOwnEmailProps): React.JSX.Element => {
	return (
		<Html>
			<Head>
				<title>My email title</title>
			</Head>
			<Preview>
				The sales intelligence platform that helps you uncover qualified leads.
			</Preview>
			<Tailwind
				config={{
					theme: {
						extend: {
							colors: {
								brand: '#2250f4',
								offwhite: '#fafbfb',
							},
							spacing: {
								0: '0px',
								20: '20px',
								45: '45px',
							},
						},
					},
				}}
			>
				<Body className="bg-offwhite font-sans text-base">
					<Container className="p-45 bg-white">
						<Img
							src={`${baseUrl}/logos/logo.png`}
							width="220"
							alt="Webflexrr"
							className="mx-auto my-20"
						/>
						<Section>
							<Text className="text-base">Dear User,</Text>
							<Row>
								<Text className="text-base">
									A new Person send a query at Shoolin Construction &
									Developers🚀.
								</Text>
								<Text className="text-base">Name: {name}</Text>
								<Text className="text-base">Email: {email}</Text>
								<Text className="text-base">mobile: {mobile}</Text>
								{pincode && (
									<Text className="text-base">Pincode: {pincode}</Text>
								)}
								<Text className="text-base">Query:</Text>
								<Text className="text-base">{query}</Text>
							</Row>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ForOwnEmail;
