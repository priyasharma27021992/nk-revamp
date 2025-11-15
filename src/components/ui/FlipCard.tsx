'use client';

import { useState } from 'react';
import { Button } from './button';
import { Image } from './Image';
import { cn } from '@/lib/utils';

interface CardDataProps {
	data: {
		name: string;
		description: string;
		src: string;
	};
}

export const FlipCard = ({ data }: CardDataProps) => {
	const [flip, setFlip] = useState(false);
	const toggleFlip = () => {
		setFlip((prev) => !prev);
	};
	return (
		<div className='perspective-[1000px]'>
			<h2 className='italic font-bold'>{data.name}</h2>
			<Button
				className={cn(
					'shadow-sm relative aspect-square h-[300px] cursor-pointer whitespace-normal transform-3d transition-transform duration-700 rounded-2xl ease-in-out',
					flip ? 'rotate-y-180' : ''
				)}
				onClick={toggleFlip}>
				{!flip ? (
					<Image
						src={data.src}
						alt={data.name}
						fill
						className='absolute rounded-2xl'
					/>
				) : (
					<div className='absolute inset-0 p-4 text-center rotate-y-180 text-[14px] text-gray-800 bg-white rounded-2xl overflow-auto'>
						{data.description}
					</div>
				)}
			</Button>
		</div>
	);
};
