import { Image } from './ui/Image';

export default function Team() {
	return (
		<section>
			<div className='max-w-6xl mx-auto my-2'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full'>
					<div className='flex justify-center items-center flex-col'>
						<h2 className='italic font-bold text-xl'>
							Teacher at Pragati School
						</h2>
						<h3>Manju Devi</h3>
						<div className='relative w-[300px] aspect-square bg-primary flex justify-center items-center rounded-2xl'>
							<Image
								src='/images/team/manju.jpg'
								alt='Manju Teacher'
								fill
								className='object-contain rounded-2xl'
							/>
						</div>
					</div>
					<div className='flex justify-center items-center flex-col'>
						<h2 className='italic font-bold text-xl'>
							Teacher at Unnati School
						</h2>
						<h3>Pratima Saini</h3>
						<div className='relative w-[300px] aspect-square bg-primary rounded-2xl'>
							<Image
								src='/images/team/Pratima.jpg'
								alt='Pratima Teacher'
								fill
								className='object-contain rounded-2xl'
							/>
						</div>
					</div>
					<div className='flex justify-center items-center flex-col'>
						<h2 className='italic font-bold text-xl'>Growth Advisor</h2>
						<h3>Prashant Sharma</h3>
						<div className='relative w-[300px] aspect-square bg-primary rounded-2xl'>
							<Image
								src='/images/team/PrashantMishra.jpg'
								alt='Advisor at NK'
								fill
								className='object-contain rounded-2xl'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
