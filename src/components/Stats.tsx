const Stats = () => {
	return (
		<section className='w-full'>
			<p className='text-lg md:text-2xl lg:text-4xl font-bold underline'>
				Our Impact
			</p>

			<div className='grid grid-cols-1 sm:grid-cols-3 w-full gap-8 max-w-6xl mx-auto my-4'>
				{/* Card 1 */}
				<div className='bg-[var(--color-brand-orange)] rounded-3xl p-8 text-center shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300'>
					<div className='text-6xl text-white mb-2'>📅</div>
					<p className='text-4xl font-extrabold text-white'>2014</p>
					<p className='text-[--color-foreground]/80 mt-2 font-[--font-body]'>
						Operational Since
					</p>
				</div>

				{/* Card 2 */}
				<div className='bg-[var(--color-brand-orange)] rounded-3xl p-8 text-center shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300'>
					<div className='text-6xl text-white mb-2'>👶</div>
					<p className='text-4xl font-extrabold text-white'>500+</p>
					<p className='text-[--color-foreground]/80 mt-2 font-[--font-body]'>
						Children Impacted
					</p>
				</div>

				{/* Card 3 */}
				<div className='bg-[var(--color-brand-orange)] rounded-3xl p-8 text-center shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300'>
					<div className='text-6xl text-white mb-2'>❤️</div>
					<p className='text-4xl font-extrabold text-white'>2,000+</p>
					<p className='text-[--color-foreground]/80 mt-2 font-[--font-body]'>
						Donations Received
					</p>
				</div>
			</div>
		</section>
	);
};

export default Stats;
