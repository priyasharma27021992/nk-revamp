import React from 'react';

const FocalAreas = () => {
	return (
		<section className='bg-gray-50 py-10'>
			<div className='max-w-6xl mx-auto'>
				<p className='text-lg md:text-2xl lg:text-4xl font-bold underline my-2'>
					Our Focus Areas
				</p>
				<p className='text-gray-800 text-xl'>
					We try to solve the below puzzles in a kid&apos;s life
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-5 my-10'>
					<div className='bg-yellow-200 p-6 rounded-2xl shadow-md rotate-[-2deg]'>
						<h3 className='font-bold text-xl mb-1 lg:mb-4'>
							Kids Leaving School
						</h3>
						<p>
							Some kids leave school for different reasons even though education
							is available.
						</p>
					</div>
					<div className='bg-pink-200 p-6 rounded-2xl shadow-md rotate-[1deg]'>
						<h3 className='font-bold text-xl mb-1 lg:mb-4'>
							Financial Hardships Affecting Education
						</h3>
						<p>
							It&apos;s hard to keep getting a good education because of money
							issues. Some families can&apos;t afford the things needed for
							school.
						</p>
					</div>
					<div className='bg-blue-200 p-6 rounded-2xl shadow-md rotate-[-1deg]'>
						<h3 className='font-bold text-xl mb-1 lg:mb-4'>Career Confusion</h3>
						<p>
							Kids don&apos;t always know what kind of job they want when they
							grow up. They need help figuring it out.
						</p>
					</div>
					<div className='bg-green-200 p-6 rounded-2xl shadow-md rotate-[2deg]'>
						<h3 className='font-bold text-xl mb-1 lg:mb-4'>Learning Needs</h3>
						<p>
							Not all kids have an intellectual bend of mind. Some need extra
							support and time, but they are unable to get access to that
							because of limited resources.
						</p>
					</div>
					<div className='bg-purple-200 p-6 rounded-2xl shadow-md rotate-[-1deg]'>
						<h3 className='font-bold text-xl mb-1 lg:mb-4'> Safe Growth</h3>
						<p>
							Because their parents are usually busy trying to make ends meet,
							kids often don&apos;t get the chance to learn at a good place and
							become better.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FocalAreas;
