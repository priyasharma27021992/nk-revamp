import DonateSection from '@/components/sections/DonateSection';
import FocalAreasSection from '@/components/sections/FocalAreasSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MissionSection from '@/components/sections/MissionSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import StatsSection from '@/components/sections/StatsSection';
import { TeamsSection } from '@/components/sections/TeamsSection';

export default function Home() {
	return (
		<section className='bg-[--color-background] text-[--color-foreground] flex flex-col gap-12 w-full py-20 text-center px-4'>
			<HeroSection />

			<StatsSection />

			<MissionSection />

			<FocalAreasSection />

			<WhatWeDoSection />

			<TeamsSection />

			<DonateSection />

			<TestimonialsSection />

			<TrustedBySection />
		</section>
	);
}
