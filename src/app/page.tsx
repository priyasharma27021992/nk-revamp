import Carousel from '@/components/Carousel';
import DonateSection from '@/components/DonateSection';
import Mission from '@/components/Mission';
import Stats from '@/components/Stats';

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
			<main className='bg-[--color-background] text-[--color-foreground] flex flex-col gap-12 pt-20 text-center'>
				{/* Carousel section */}
				<section>
					<Carousel images={images} />
				</section>

				<Stats />

				<Mission />

				<DonateSection />
			</main>
		</div>
	);
}
