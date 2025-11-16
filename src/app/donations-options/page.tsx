const DonationOptions = () => {
	const options = {
		stationery: {
			items: {
				pencils: {},
				pens: {},
				notebooks: {},
			},
		},
		food: {
			items: {
				burgers: {},
				chocolates: {},
				samosas: {},
			},
		},
		clothes: {
			items: {
				tShirts: {},
				dresses: {},
				sweaters: {},
			},
		},
	};

	return (
		<main>
			<h2>Donation Options</h2>
			<div className='grid grid-cols-3'></div>
		</main>
	);
};
