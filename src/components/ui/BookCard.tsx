import React from 'react';
import { Image } from '../ui/Image';

const BookCard = () => {
	return (
		<>
			{/* Desktop */}
			<div className='hidden w-[650px] h-[300px]  md:flex justify-center [perspective:1200px] mx-8 my-4'>
				<div className='w-1/2 [transform-origin:right_center] backface-hidden [transform:rotateY(10deg)_translateZ(90px)]'>
					<Image
						src='/images/leadership/priya.jpg'
						width={300}
						height={300}
						className='object-contain h-full w-full'
					/>
				</div>
				<div className='w-1/2 h-full [transform-origin:left_center] bg-white backface-hidden [transform:rotateY(-25deg)_translateZ(90px)]'>
					<p className='text-sm'>
						A coder by profession, a social worker by passion. For the past ten
						years, I’ve dedicated my time and energy to improving the lives of
						underprivileged children. My journey began when I met Vikas, a young
						boy working at a grocery store in my neighborhood. I started
						teaching him at home, and today, after ten years, he has completed
						his 12th grade and is now employed at a good company, living a life
						of dignity. From that moment, my commitment to this cause has never
						wavered. In my free time, I love exploring the world, whether solo,
						with my partner, or with my dog, always on the lookout for the next
						adventure.
					</p>
				</div>
			</div>
			{/* mobile */}
			<div className='flex md:hidden flex-col items-center [perspective:1200px] mx-8 my-4'>
				<div className='-rotate-x-38 aspect-auto [transform-origin:bottom_center] backface-hidden border-2 border-amber-100'>
					<Image
						src='/images/leadership/priya.jpg'
						width={200}
						height={100}
						className='h-full object-cover'
					/>
				</div>
				<div className='rotate-x-38 [transform-origin:top_center] bg-gray-100 backface-hidden border-2 border-amber-100'>
					<p className='text-sm overflow-scroll'>
						A coder by profession, a social worker by passion. For the past ten
						years, I’ve dedicated my time and energy to improving the lives of
						underprivileged children. My journey began when I met Vikas, a young
						boy working at a grocery store in my neighborhood. I started
						teaching him at home, and today, after ten years, he has completed
						his 12th grade and is now employed at a good company, living a life
						of dignity. From that moment, my commitment to this cause has never
						wavered. In my free time, I love exploring the world, whether solo,
						with my partner, or with my dog, always on the lookout for the next
						adventure.
					</p>
				</div>
			</div>
		</>
	);
};

export default BookCard;
