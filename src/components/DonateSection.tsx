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
		<section className='text-center bg-[--color-background] rounded-xl max-w-6xl mx-auto w-full'>
			<h2 className='text-md md:text-xl lg:text-3xl font-[--font-heading] text-[--color-foreground]'>
				Support Our Kids
			</h2>
			{/* <form>
				<div id='razorpay-button-container'></div>
			</form> */}
		</section>
	);
}
