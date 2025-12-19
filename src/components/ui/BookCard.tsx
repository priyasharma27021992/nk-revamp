import React from 'react';
import { Image } from '../ui/Image';

const BookCard = () => {
	return (
		<div className='flex w-[850px] h-[330px] perspective-1000'>
			{/* left Page */}
			<div
				className='w-1/2 h-full backface-hidden [transform-style:preserve-3d] [transform:rotateY(40deg)_translateZ(90px)]
                      [transform-origin:right_center]'>
				<Image
					src='/images/leadership/priya.jpg'
					alt='Left Image'
					width={400}
					height={400}
				/>
			</div>
			{/* Right Page */}
			<div
				className='w-full h-full -rotate-y-28 [transform-style:preserve-3d] [transform:rotateY(40deg)_translateZ(90px)]
                  [transform-origin:left_center]
                   backface-hidden bg-white'>
				<p>
					A coder by profession, a social worker by passion. For the past ten
					years, I’ve dedicated my time and energy to improving the lives of
					underprivileged children. My journey began when I met Vikas, a young
					boy working at a grocery store in my neighborhood. I started teaching
					him at home, and today, after ten years, he has completed his 12th
					grade and is now employed at a good company, living a life of dignity.
					From that moment, my commitment to this cause has never wavered. In my
					free time, I love exploring the world, whether solo, with my partner,
					or with my dog, always on the lookout for the next adventure.
				</p>
			</div>
		</div>
	);
};

export default BookCard;
