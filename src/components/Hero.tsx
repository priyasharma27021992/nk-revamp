export default function Hero() {
	return (
		<section className='py-[--spacing-26] text-center bg-[--color-background] text-[--color-foreground]'>
			<h1 className='text-5xl font-[--font-heading] mb-6'>
				Every Child Deserves a Dream
			</h1>
			<p className='text-lg font-[--font-body] text-[--color-foreground]/80 max-w-2xl mx-auto mb-6'>
				Nanhe Khwab supports 150+ children across India with education,
				mentorship, and resources.
			</p>
			<a
				href='/donate'
				className='bg-[--color-accent] hover:bg-[--color-accent]/90 text-white px-6 py-3 rounded-xl transition'>
				Donate Now
			</a>
		</section>
	);
}
