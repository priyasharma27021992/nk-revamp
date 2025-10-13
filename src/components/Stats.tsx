const Stats = () => {
	return (
		<section className='w-full'>
			<h2 className='text-3xl font-[--font-heading] mb-10 text-[--color-foreground]'>
				Our Impact
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-3 w-full gap-8 max-w-6xl mx-auto'>
				{/* Card 1 */}
				<div className='bg-[var(--color-brand-orange)] rounded-3xl p-8 text-center shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300'>
					<div className='text-6xl text-white mb-2'>📅</div>
					<h3 className='text-4xl font-extrabold text-white'>200+</h3>
					<p className='text-[--color-foreground]/80 mt-2 font-[--font-body]'>
						Operational Since
					</p>
				</div>

				{/* Card 2 */}
				<div className='bg-[var(--color-brand-orange)] rounded-3xl p-8 text-center shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300'>
					<div className='text-6xl text-white mb-2'>👶</div>
					<h3 className='text-4xl font-extrabold text-white'>1,000+</h3>
					<p className='text-[--color-foreground]/80 mt-2 font-[--font-body]'>
						Children Impacted
					</p>
				</div>

				{/* Card 3 */}
				<div className='bg-[var(--color-brand-orange)] rounded-3xl p-8 text-center shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300'>
					<div className='text-6xl text-white mb-2'>❤️</div>
					<h3 className='text-4xl font-extrabold text-white'>5,000+</h3>
					<p className='text-[--color-foreground]/80 mt-2 font-[--font-body]'>
						Donations Received
					</p>
				</div>
			</div>
		</section>
	);
};

export default Stats;
