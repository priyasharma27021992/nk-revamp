import DonateSection from '@/components/DonateSection';
import EmbedSocialWidget from '@/components/EmbedSocialWidget';
import FocalAreas from '@/components/FocalAreas';
import HeroSection from '@/components/HeroSection/HeroSection';
import { Leadership } from '@/components/Leadership';
import Mission from '@/components/Mission';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Stats from '@/components/Stats';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import { TrustedBy } from '@/components/TrustedBy';

export default function Home() {
	return (
		<main className='bg-[--color-background] text-[--color-foreground] flex flex-col gap-12 w-full pt-20 text-center pb-40 px-4'>
			<HeroSection />

			<Stats />

			<Mission />

			<FocalAreas />

			<WhatWeDo />

			<DonateSection />

			<div className='bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2),rgba(255,255,255,0.9)),url(/images/carousel/5.jpg)] bg-cover bg-center bg-no-repeat'>
				<Leadership />
				<Team />
			</div>

			<EmbedSocialWidget />

			<Testimonials />

			<TrustedBy />
		</main>
	);
}
