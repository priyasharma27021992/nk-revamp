import Carousel from '@/components/Carousel';
import DonateSection from '@/components/DonateSection';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';

const images = [
	'/images/carousel/1.jpg',
	'/images/carousel/2.jpg',
	'/images/carousel/3.jpg',
	'/images/carousel/4.jpg',
	'/images/carousel/5.jpg',
	'/images/carousel/6.jpg',
];

export default function Home() {
	return (
		<div>
			<main className='bg-[--color-background] text-[--color-foreground]'>
				{/* Carousel section */}
				<section>
					<Carousel images={images} />
				</section>

				{/* Hero Section */}
				<Hero />

				<Mission />

				<DonateSection />
			</main>
		</div>
	);
}
