import React from 'react';
import { ArrowRight, ArrowBigDown } from 'lucide-react';

const programs = [
	{
		title: 'Neev',
		subtitle: 'We build the roots in this program',
		description:
			'Two schools, Pragati and Unnati, where our teachers prepare children academically and socially for mainstream school admission.',
	},
	{
		title: 'Padhaav',
		subtitle: 'Kids enter the next level which is admission to formal Schools',
		description:
			'We select some kids every year who are ready to go to formal cbse/haryana board affialiated syllabus. We mostly sponsor children’s school fees but sometimes also uniforms, books, and other essentials if required',
	},
	{
		title: 'Tapasya',
		subtitle:
			'Here we support kids mentally a lot as they enter teenage and need councelling or tuitions',
		description:
			'We councel kids and try to make sure that they complete 12th and solve any issues mentally or finacially, we keep paying the school fees and essentials too for most kids.',
	},
	{
		title: 'Ujjwal',
		subtitle: 'This is the last program after the kid passes 12th standard',
		description:
			'Here we help in college admissions or choosing higher education options',
	},
];

const WhatWeDo = () => {
	return (
		<section className='max-w-6xl mx-auto'>
			<h2 className='text-4xl font-bold underline'>
				How Nanhe Khwab tranforms lives?
			</h2>
			<div className='flex flex-col md:flex-row items-center gap-6 mt-5'>
				{programs?.map((program, i) => (
					<div
						key={program.title}
						className='flex items-center gap-6'>
						<div className='bg-white p-2 rounded-xl shadow-lg border min-w-[250px] min-h-[250px]'>
							<h2 className='text-xl font-semibold text-gray-800 mb-3'>
								{program.title}
							</h2>
							<p className='text-gray-600 text-sm md:text-lg'>
								{program.description}
							</p>
						</div>
						{i !== programs.length - 1 && (
							<>
								<ArrowRight
									className='text-gray-400 shrink-0 hidden md:block'
									size={40}
								/>
								<ArrowBigDown
									className='text-gray-400 shrink-0 block md:hidden'
									size={40}
								/>
							</>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default WhatWeDo;
