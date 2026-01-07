import { cn } from '@/lib/utils';

export default function Mission() {
	return (
		<section
			className={cn(
				'w-full',
				'bg-[url(/images/guiding.jpg)] bg-no-repeat bg-right bg-white/80 bg-blend-screen'
			)}>
			{/* Mission */}
			<div className='max-w-4xl mx-auto'>
				<p className='text-lg md:text-2xl lg:text-4xl font-bold underline my-2'>
					Our Guiding Mission
				</p>
				<p className='text-lg font-[--font-body] text-[--color-foreground]/80 leading-relaxed'>
					Every child deserves the chance to dream, learn, and grow. We truly
					believe that while many NGOs are doing impact-making work, such as
					providing food, medical aid, and extra classes and we respect them.
					<span className='font-semibold text-[--color-accent]'>
						We started Nanhe Khwab Charitable Trust to give the underprivileged
						kids a chance to change their future(and their onward generations)
						using Education as their Superpower.
					</span>
					Education, in our view, holds the key to solving many global
					challenges. Our approach goes beyond short-term interventions – we are
					committed to ensuring that education lasts at least until the 12th
					grade and, when possible, even beyond into college, providing children
					with enhanced employment prospects for a brighter future.
				</p>
			</div>
		</section>
	);
}
