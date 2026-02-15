'use client';
import { useEffect, useRef } from 'react';

export default function DonateSection() {
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (!formRef.current) return;
		const existingScript = formRef.current.querySelector(
			'script[data-rzp="true"]',
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
		<section className='text-center rounded-xl max-w-6xl mx-auto w-full'>
			<p className='text-lg md:text-2xl lg:text-4xl font-bold underline my-2'>
				Help us make some tiny little dreams true
			</p>
			<ol className='grid grid-cold-1 md:grid-cols-3 mt-5 gap-2'>
				<li className='border-2 border-[var(--color-brand-orange)] rounded-2xl py-5'>
					<p className='text-xl pb-4'>Pay by Razor Pay</p>
					<form ref={formRef}></form>
				</li>
				<li className='flex flex-col items-center border-2 border-[var(--color-brand-orange)] rounded-2xl py-5'>
					<p className='text-xl'>Pay by Nanhe Khwab's QR Code</p>
					<img
						src='/images/qr_code.jpg'
						alt='QR code'
						className='w-40'
					/>
				</li>
				<li className='flex flex-col border-2 border-[var(--color-brand-orange)] rounded-2xl py-5'>
					<p className='text-xl pb-4'>Pay directly to our NGO Account</p>
					<em className='py-2'>Best for us, no platform fee charges</em>
					<p>
						<strong>Name:</strong> Nanhe Khwab let them dream charitable trust
						Account
					</p>
					<p>
						<strong>Number:</strong> 661405601851
					</p>
					<p>
						<strong>IFSC code:</strong> ICIC0006614
					</p>
				</li>
			</ol>
		</section>
	);
}
