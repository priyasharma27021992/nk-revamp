import React from 'react';

const programs = [
	{
		title: 'Support Schools',
		description:
			'Two schools, Pragati and Unnati, where our teachers prepare children academically and socially for mainstream school admission.',
	},
	{
		title: 'Sponsored Kids',
		description:
			'We sponsor children’s school fees, uniforms, books, and other essentials, enabling them to continue their education.',
	},
	{
		title: 'College Students',
		description:
			'We support higher education for students who show exceptional dedication and potential.',
	},
	{
		title: 'Mobile School',
		description:
			'Bringing education to children in underserved communities through our mobile learning initiative.',
	},
];

const Program = () => {
	return (
		<main>
			<h1>Our Programs and Yearly Activties</h1>
			<section className='max-w-6xl'>
				<div className='grid grid-cols-1 md:grid-cols-3'>
					{programs?.map((program, i) => (
						<div
							key={i}
							className='bg-white p-6 rounded-xl shadow-lg'>
							<h2 className='text-xl font-semibold text-gray-800 mb-3'>
								{program.title}
							</h2>
							<p className='text-gray-600'>{program.description}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default Program;
