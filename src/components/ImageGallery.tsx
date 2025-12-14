'use client';

import { createMasonry } from '@/lib/createMasony';
import { useEffect, useState } from 'react';

const ImageGallery = ({ urls, columnCount = 3, columnWidth = 350 }) => {
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		let cancelled = false;

		async function run() {
			const result = await createMasonry(urls, columnCount, columnWidth);
			if (!cancelled) setColumns(result);
		}

		run();

		return () => (cancelled = true);
	}, [urls, columnCount, columnWidth]);
	return (
		<div
			style={{
				display: 'flex',
				gap: '12px',
				alignItems: 'flex-start',
			}}>
			{columns.map((col, i) => (
				<div
					key={i}
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '12px',
						width: columnWidth,
					}}>
					{col.items.map((item, j) => (
						<img
							key={j}
							src={item.url}
							style={{
								width: '100%',
								borderRadius: '8px',
								display: 'block',
							}}
							loading='lazy'
						/>
					))}
				</div>
			))}
		</div>
	);
};

export { ImageGallery };
