'use client';
import React, { FC, useCallback, useEffect, useState } from 'react';
import EnquiryForm from './EnquiryForm';

interface PopUpNotificationProps {
	title?: string;
	slug?: string;
}

const PopUpNotification: FC<PopUpNotificationProps> = ({ title, slug }) => {
	const [showPopUp, setShowPopUp] = useState<boolean>(false);

	const popUpTimer = useCallback(() => {}, []);

	useEffect(() => {
		setTimeout(() => {
			setShowPopUp(true);
		}, 2000);
	}, [popUpTimer]);
	return (
		<div
			className={`${showPopUp ? 'fixed' : 'hidden'} left-0 top-0 z-30  h-screen w-full`}
		>
			<div
				onClick={() => setShowPopUp(false)}
				className="relative flex h-full w-full items-center justify-center"
			>
				<div className="absolute h-full  w-full bg-black opacity-50"></div>
				<div className="z-40 w-full max-w-96 ">
					<EnquiryForm projectTitle={title} projectSlug={slug} />
				</div>
			</div>
		</div>
	);
};

export default PopUpNotification;
