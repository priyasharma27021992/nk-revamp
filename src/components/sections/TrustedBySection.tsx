import { Image } from '../ui/Image';

const companies = [
	{ name: 'Publicis Sapient', src: '/images/trusted-by/sapient.png' },
	{ name: 'UdChalo', src: '/images/trusted-by/udChalo.png' },
	{ name: 'Xebia', src: '/images/trusted-by/xebia.png' },
];

const TrustedBySection = () => {
	return (
		<section>
			<p className='text-lg md:text-2xl lg:text-4xl font-bold underline my-2'>
				Supported By
			</p>

			<div className='grid grid-cols-3 gap-1 w-full max-w-[600px] m-auto'>
				{companies?.map((company) => (
					<div
						key={company.name}
						className='bg-[var(--color-brand-orange)] w-[100px] h-[100px] md:w-[150px] md:h-[150px] border rounded-3xl mx-auto'>
						<div className='flex justify-center items-center h-full'>
							<Image
								src={company.src}
								alt={company.name}
								width={100}
								height={100}
								className='object-contain w-[60px] md:w-[100px] '
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TrustedBySection;
