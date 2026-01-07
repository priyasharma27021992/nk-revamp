import BookCard from './ui/BookCard';
import { FlipCard } from './ui/FlipCard';

const Founders = [
	{
		name: 'Priya Sharma',
		profession: 'Software Developer',
		src: '/images/leadership/priya.jpg',
		description: `A coder by profession, a social worker by passion. For the past ten years, I’ve
                    dedicated my time and energy to improving the lives of underprivileged children.
                    My journey began when I met Vikas, a young boy working at a grocery store in my
                    neighborhood. I started teaching him at home, and today, after ten years, he has
                    completed his 12th grade and is now employed at a good company, living a life of
                    dignity. From that moment, my commitment to this cause has never wavered. In my
                    free time, I love exploring the world, whether solo, with my partner, or with my
                    dog, always on the lookout for the next adventure.`,
		socialLinks: { instagram: '', facebook: '', linkedIn: '' },
	},
	{
		name: 'Komal Sharma',
		profession: 'CA',
		src: '/images/leadership/komal.jpg',
		description: `Inspired by my elder sister, I was drawn to the idea of establishing our own NGO
                        to contribute to the betterment of society. My sister and I collaborate to
                        brainstorm innovative ways to create opportunities for underprivileged children.
                        She dedicates her time to volunteering in Gurgaon, while I do the same in
                        Mumbai. When I'm not working or volunteering, you'll often find me either
                        surrounded by the serenity of mountains or hitting the gym, staying active and
                        engaged in various pursuits.`,
		socialLinks: { instagram: '', facebook: '', linkedIn: '' },
	},
];

export const Leadership = () => {
	return (
		<section className=''>
			<div className='max-w-6xl mx-auto flex flex-col gap-4'>
				<div className='flex flex-col gap-2 bg-white/70 p-4 rounded'>
					<p className='text-lg md:text-2xl lg:text-4xl font-bold underline my-2'>
						Nanhe Khwab foundations
					</p>
					<p className='text-md md:text-xl'>
						Nanhe Khwab was founded in 2013 by the Sharma sisters, who, despite
						their regular professional commitments, have passionately dedicated
						themselves to improving the lives of underprivileged children.
						Later, their friend Ameen learned about their mission and
						wholeheartedly joined them in this inspiring journey.
					</p>
				</div>
				<div className='bg-gray-100/70 w-full font-bold text-md md:text-xl'>
					Founders
				</div>
				<div className='flex flex-col md:flex-row my-1 md:my-4'>
					{Founders.map((founder) => (
						<BookCard
							key={founder.name}
							image={{ src: founder.src, alt: founder.name }}
							text={founder.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
