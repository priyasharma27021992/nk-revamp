'use client';
import { useEffect, useRef } from 'react';

export default function DonateSection() {
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (!formRef.current) return;
		const existingScript = formRef.current.querySelector(
			'script[data-rzp="true"]'
		);
		if (existingScript) return;
		const script = document.createElement('script');
		script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
		script.async = true;
		script.dataset.rzp = 'true';
		script.dataset.payment_button_id = 'pl_RpIrnehKTRmtnf';
		formRef.current.appendChild(script);
	}, []);

	return (
		<section className='text-center bg-[--color-background] rounded-xl max-w-6xl mx-auto w-full'>
			<h2 className='text-md md:text-xl lg:text-3xl font-[--font-heading] text-[--color-foreground]'>
				Help us make some tiny little dreams true
			</h2>
			<ol className='flex flex-col md:flex-row gap-2 justify-around mt-5'>
				<li>
					<p className='text-xl font-bold'>Pay by Razor Pay</p>
					<form ref={formRef}></form>
				</li>
				<li className='flex flex-col justify-center items-center'>
					<p className='text-xl font-bold'>Pay by Nanhe Khwab's QR Code</p>
					<img
						src='/images/qr_code.jpg'
						alt='QR code'
						className='w-40'
					/>
				</li>
				<li className='flex flex-col'>
					<p className='text-xl font-bold'>Pay directly to our NGO Account</p>
					<p>
						Nanhe Khwab's Bank Details(Best for us, no platform fee charges)
					</p>
					<p>Name: Nanhe Khwab let them dream charitable trust Account</p>
					<p>Number:661405601851</p>
					<p> IFSC code: ICIC0006614</p>
				</li>
			</ol>
		</section>
	);
}
