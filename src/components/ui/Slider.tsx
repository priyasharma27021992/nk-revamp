'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';

export default function Slider<T>({
	cards,
	getCardComponent,
}: {
	cards: T[];
	getCardComponent: (card: T) => ReactNode;
}) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const visibleSlides = 6;
	const totalSlides = cards?.length;
	const extendedImages = [...cards, ...cards.slice(0, visibleSlides)];

	useEffect(() => {
		if (!cards.length) return;

		const id = setInterval(() => {
			setCurrentIndex((prev) => prev + 1);
		}, 5000);

		return () => clearInterval(id);
	}, [cards.length]);

	useEffect(() => {
		if (currentIndex === totalSlides) {
			setTimeout(() => {
				if (!containerRef.current) return;
				containerRef.current.style.transition = 'none';
				setCurrentIndex(0);

				requestAnimationFrame(() => {
					containerRef.current!.style.transition = 'transform 0.6s ease-in';
				});
			}, 5000);
		}
	}, [currentIndex, totalSlides]);

	return (
		<div className='w-full overflow-hidden'>
			<div
				className='flex flex-row gap-12'
				ref={containerRef}
				style={{
					transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
					transition: 'transform 0.6s ease-in',
				}}>
				{extendedImages?.map((card, i) => {
					return (
						<div
							className='max-h-[500px] relative'
							key={i}>
							{getCardComponent(card)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
