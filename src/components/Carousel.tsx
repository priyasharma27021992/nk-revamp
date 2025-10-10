'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type CarouselProps = {
	images: string[];
};

export default function Carousel({ images }: CarouselProps) {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			navigation
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000 }}
			loop
			className='w-full max-w-screen mx-auto'>
			{images.map((src, index) => (
				<SwiperSlide key={index}>
					<div className='relative w-full h-[400px] sm:h-[500px] md:h-[600px]'>
						<Image
							src={src}
							alt={`Carousel image ${index + 1}`}
							fill
							priority={index === 0}
							className='object-cover rounded-xl shadow-lg'
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
