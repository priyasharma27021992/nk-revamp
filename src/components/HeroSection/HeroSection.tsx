import React from 'react';
import Carousel from '../Carousel';

const images = [
	'/images/carousel/1.jpg',
	'/images/carousel/2.jpg',
	'/images/carousel/3.jpg',
	'/images/carousel/4.jpg',
	'/images/carousel/5.jpg',
	'/images/carousel/6.jpg',
];

const HeroSection = () => {
	return (
		<section className='-mx-4'>
			<Carousel images={images} />
		</section>
	);
};

export default HeroSection;
