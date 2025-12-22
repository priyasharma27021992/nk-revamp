import React from 'react';
import { Image } from '../ui/Image';

interface BookCardProps {
	image: {
		src: string;
		alt: string;
	};
	text: string;
}

const BookCard = ({ image, text }: BookCardProps) => {
	if (!image.src || !text) {
		return null;
	}
	return (
		<>
			{/* Desktop */}
			<div className='hidden w-[700px] h-[350px]  md:flex justify-center perspective-[1200px] mx-8 my-4'>
				<div className='w-1/2 origin-right backface-hidden [transform:rotateY(10deg)_translateZ(90px)]'>
					<Image
						src={image.src}
						width={300}
						height={300}
						className='object-cover h-full w-full'
					/>
				</div>
				<div className='w-1/2 h-full origin-left bg-white backface-hidden [transform:rotateY(-20deg)_translateZ(90px)]'>
					<p className='text-sm'>{text}</p>
				</div>
			</div>
			{/* mobile */}
			<div className='flex md:hidden flex-col items-center [perspective:1200px] mx-2 my-1'>
				<div className='-rotate-x-38 aspect-auto origin_bottom backface-hidden border-2 border-amber-100'>
					<Image
						src={image.src}
						width={200}
						height={100}
						className='h-full object-cover'
					/>
				</div>
				<div className='rotate-x-38 origin_top bg-gray-100 backface-hidden border-2 border-amber-100'>
					<p className='text-sm overflow-scroll'>{text}</p>
				</div>
			</div>
		</>
	);
};

export default BookCard;
