import DonateSection from '@/components/DonateSection';
import FocalAreas from '@/components/FocalAreas';
import HeroSection from '@/components/HeroSection/HeroSection';
import { Leadership } from '@/components/Leadership';
import Mission from '@/components/Mission';
import Stats from '@/components/Stats';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';

export default function Home() {
	return (
		<main className='bg-[--color-background] text-[--color-foreground] flex flex-col gap-12 pt-20 text-center'>
			<HeroSection />

			<Stats />

			<Mission />

			<FocalAreas />

			<DonateSection />

			<Leadership />

			<Team />

			<Testimonials />
		</main>
	);
}
