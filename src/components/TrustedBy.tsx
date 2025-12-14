import { Image } from './ui/Image';

const companies = [
	{ name: 'Publicis Sapient', src: '/images/trusted-by/sapient.png' },
	{ name: 'UdChalo', src: '/images/trusted-by/udChalo.png' },
	{ name: 'Xebia', src: '/images/trusted-by/xebia.png' },
];

const TrustedBy = () => {
	return (
		<section>
			<h2 className='text-4xl my-1 font-bold'>Trusted By</h2>

			<div className='grid grid-cols-1 md:grid-cols-3 w-full max-w-[600px] mx-auto'>
				{companies?.map((company) => (
					<div
						key={company.name}
						className='shadow-lg relative aspect-square w-[150px] mx-auto'>
						<Image
							src={company.src}
							alt={company.name}
							className='object-contain absolute rounded-[50px]'
							fill
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export { TrustedBy };
