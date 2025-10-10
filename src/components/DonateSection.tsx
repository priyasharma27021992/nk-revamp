'use client';
import { useEffect } from 'react';

export default function DonateSection() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
		script.async = true;
		script.setAttribute('data-payment_button_id', 'pl_MwoUBrSlW4Su8v'); // replace with your Razorpay ID
		document.getElementById('razorpay-button-container')?.appendChild(script);
	}, []);

	return (
		<section className='py-[--spacing-22] text-center bg-[--color-background] rounded-xl'>
			<h2 className='text-3xl font-[--font-heading] mb-[--spacing-18] text-[--color-foreground]'>
				Support Our Kids
			</h2>
			<form>
				<div id='razorpay-button-container'></div>
			</form>
		</section>
	);
}
