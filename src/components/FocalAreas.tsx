import React from 'react';

const FocalAreas = () => {
	return (
		<section className='bg-gray-50 py-10'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-xl font-bold text-gray-800 mb-4'>
					Our Focus Areas
				</h2>
				<p className='text-gray-600'>
					Together, these pieces complete a child growth journey.
				</p>
				<div className='grid grid-cols-5 my-10'>
					<div className='bg-yellow-200 p-6 rounded-2xl shadow-md rotate-[-2deg]'>
						<h3 className='font-bold text-xl'>Kids Leaving School</h3>
						<p>
							Some kids leave school for different reasons even though education
							is available.
						</p>
					</div>
					<div className='bg-pink-200 p-6 rounded-2xl shadow-md rotate-[1deg]'>
						<h3 className='font-bold text-xl'>
							Financial Hardships Affecting Education
						</h3>
						<p>
							It's hard to keep getting a good education because of money
							issues. Some families can't afford the things needed for school.
						</p>
					</div>
					<div className='bg-blue-200 p-6 rounded-2xl shadow-md rotate-[-1deg]'>
						<h3 className='font-bold text-xl'>Career Confusion</h3>
						<p>
							Kids don't always know what kind of job they want when they grow
							up. They need help figuring it out.
						</p>
					</div>
					<div className='bg-green-200 p-6 rounded-2xl shadow-md rotate-[2deg]'>
						<h3 className='font-bold text-xl'>Learning Needs</h3>
						<p>
							Not all kids have an intellectual bend of mind. Some need extra
							support and time, but they are unable to get access to that
							because of limited resources.
						</p>
					</div>
					<div className='bg-purple-200 p-6 rounded-2xl shadow-md rotate-[-1deg]'>
						<h3 className='font-bold text-xl'> Safe Growth</h3>
						<p>
							Because their parents are usually busy trying to make ends meet,
							kids often don't get the chance to learn at a good place and
							become better.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FocalAreas;
