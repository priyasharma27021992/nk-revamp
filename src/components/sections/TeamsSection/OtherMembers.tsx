import { Image } from '../../ui/Image';

const OtherMembers = () => {
	return (
		<section>
			<div className='max-w-6xl mx-auto my-2'>
				<div className='bg-gray-100/70 w-full font-bold text-md md:text-xl my-8'>
					Team
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full'>
					<div className='flex justify-center items-center flex-col'>
						<div className='rounded-2xl'>
							<p className='italic font-bold text-lg bg-white/70 w-full'>
								Manju Devi, Teacher
							</p>
							<Image
								src='/images/team/manju.jpg'
								alt='Manju Teacher'
								width={200}
								height={200}
								className='object-cover object-center w-[250px] h-[290px]'
							/>
						</div>
					</div>
					<div className='flex justify-center items-center flex-col'>
						<div className='rounded-2xl'>
							<p className='italic font-bold text-lg bg-white/70 w-full'>
								Pratima Saini, Teacher
							</p>
							<Image
								src='/images/team/Pratima.jpg'
								alt='Manju Teacher'
								width={200}
								height={200}
								className='object-cover object-center w-[250px] h-[290px]'
							/>
						</div>
					</div>
					<div className='flex justify-center items-center flex-col'>
						<div className='rounded-2xl'>
							<p className='italic font-bold text-lg bg-white/70 w-full'>
								Prashant Sharma, Advisor
							</p>
							<Image
								src='/images/team/PrashantMishra.jpg'
								alt='Manju Teacher'
								width={200}
								height={200}
								className='object-cover object-center w-[250px] h-[290px]'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OtherMembers;
