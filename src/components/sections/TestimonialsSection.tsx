'use client';
import React, { ReactNode } from 'react';
import Slider from '../ui/Slider';
import { Image } from '../ui/Image';

export const TESTIMONIALS = [
	{
		key: 1,
		name: 'Himanshu Chaturvedi',
		job: '(Manager @RBS)',
		src: '/images/testimonials/Himanshu.jpg',
		review: `I met Priya while sharing a
                     uber cab ride once while she was on a call discussing about NGO stuff and I
                    immediately told her that I would like to be a part of it. It is 4 years since
                    that day and I have been a part of every initiative they take. It is been awesome to be a part her
                    mission of changing generations.`,
	},
	{
		key: 2,
		name: 'Shiva Kumar',
		job: '(Developer at Sapient)',
		src: '/images/testimonials/Shiva.jpg',
		review: `I know Priya from past few years. I'm so glad to have her in my contact list, it is because of her
                    I could help kids who are in need without worrying about miss-use of funds.
                                                In these days it is really hard to
                                                trust someone or some NGO but as I personally know her and her NGO, I have
                                                been contributing anonymously (I guess not anymore) especially for
                                                Christmas. It gives me immense pleasure when I look at kids receiving
                                                gifts. I really appreciate all Priya for her kind heart who has been helping
                                                kids from so long. I think she literally adopted all of them and the
                                                affection she shows towards the kids are tremendous. Hats off to
                                                her and her NGO who is continuously supporting the children with true heart.
                                                I'm glad to be a small, tiny part of her great work.`,
	},
	{
		key: 3,
		name: 'Neenu Suresh',
		job: '(PM @Pulse iD)',
		src: '/images/testimonials/Neenu.jpg',
		review: `I have been contributing to
                                            Priya's NGO for a while now. It gives me immense pleasure to see the kids'
                                            smiling faces everytime. The NGO is doing their best to make sure that they
                                            do
                                            whatever is possible to educate
                                            the less fortunate children of our society. To whoever is reading this, no
                                            contribution is less and it is the thought that counts. Hoping for a good
                                            future
                                            to the venture and its beneficiaries.`,
	},
	{
		key: 4,
		name: 'Christeena Victor',
		job: '(CA)',
		src: '/images/testimonials/Christeena.jpg',
		review: `I met Komal almost 2 years
                                            back and her sister Priya back then. I have seen people who have dreams of
                                            opening an NGO or work for some social cause, but many a time it remains as
                                            a
                                            dream. When I look at them I
                                            know the importance of ' persistence ' and 'will' that one requires for
                                            achieving a dream. What makes it more admirable is that it's not for their
                                            benefit but for those beautiful and special kids. And can vouch
                                            that I have experienced a magical feeling when I see these kids smile.
                                            Helping
                                            kids with education which is one of the most important things these days as
                                            they are exposed to a competitive world. And Nanhe khwab
                                            has taken that big step. Not just a cliche, but I mean what I am telling - '
                                            These sisters have truly inspired me`,
	},
	{
		key: 5,
		name: 'Pragya Sharma',
		job: '(Founder of unpurl.com)',
		src: '/images/testimonials/Pragya.jpg',
		review: `I have heard stories about 'Nanhe Khwab' right from its inception. Priya was so excited when she first
                                            got it registered and told me about it. We all hear people saying that Education
                                            is a great tool to change the world. But here is someone who is actually pursuing this cause with
                                            complete dedication and an honest heart. And often it's not just about teaching kids
                                            but building a connection with them. The kind of camaraderie
                                            Priya shares with her students is quite heartwarming.`,
	},
	{
		key: 6,
		name: 'Purva Madaan',
		job: '(Senior Manager at EY)',
		src: '/images/testimonials/Purva.jpg',
		review: `Nanhe Khwab” has given
                                            me
                                            a platform to do ‘my bit’ in helping underprivileged children get better
                                            education. It gives me an indescribable happiness to be able to contribute
                                            something for a child’s bright future.
                                            A big THANK YOU to PRIYA for making me a part of this campaign.`,
	},
];

interface CardProps {
	key: number;
	name?: string;
	job?: string;
	review?: string;
	src?: string;
}

const getCardComponent = (card: CardProps): ReactNode => {
	return (
		<div
			className='shadow-amber-600 p-2 border-2 border-primary rounded-2xl'
			key={card.name}>
			<h2 className='text-black font-bold'>{card.name}</h2>
			<h3 className='text-black italic'>{card.job}</h3>
			<p className='h-[220px] w-[350px] my-2 overflow-scroll text-gray-700'>
				{card.review}
			</p>
			<div className='relative aspect-square max-h-[150px] mx-auto'>
				<Image
					src={card.src}
					alt={card.name}
					fill
					className='w-full rounded-full'
				/>
			</div>
		</div>
	);
};

const TestimonialsSection = () => {
	return (
		<section>
			<div className='my-2'>
				<p className='text-lg md:text-2xl lg:text-4xl font-bold underline my-2'>
					What some of our DONORS Say?
				</p>
				<Slider
					cards={TESTIMONIALS}
					getCardComponent={getCardComponent}
				/>
			</div>
		</section>
	);
};

export default TestimonialsSection;
