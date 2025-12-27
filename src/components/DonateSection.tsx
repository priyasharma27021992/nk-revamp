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
				Would you like to donate?
			</h2>
			<ol>
				<li>
					<div>
						<p>Pay by Razor Pay</p>
						<form ref={formRef}></form>
					</div>
				</li>
				<li>
					<p>Pay by Nanhe Khwab's QR Code</p>
				</li>
				<li>
					<p>Pay directly to our NGO Account</p>
				</li>
			</ol>
		</section>
	);
}
