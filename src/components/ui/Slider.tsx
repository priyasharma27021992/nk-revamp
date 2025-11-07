export default function Slider({ cards, CardComponent }) {
	return (
		<div className='w-full'>
			<div className='flex flex-row gap-10'>
				{cards?.map((card) => {
					return (
						<div
							className='max-h-[500px] relative'
							key={card.name}>
							<CardComponent {...card} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
