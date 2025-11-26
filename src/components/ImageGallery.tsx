'use client';

import { useEffect, useState } from 'react';

const ImageGallery = ({ img }) => {
	const [imageDets, setImageDets] = useState();

	function loadImage(url) {
		return new Promise((resolve, reject) => {
			const img = new Image();

			img.onload = () => {
				resolve({
					width: img.naturalWidth,
					height: img.naturalHeight,
					aspectRatio: img.naturalWidth / img.naturalHeight,
				});
			};

			img.onerror = reject;

			img.src = url;
		});
	}

	useEffect(() => {
		const getImage = async () => {
			const info = await loadImage(img);
			setImageDets(info);
		};
		getImage();
	}, [img]);

	console.log(imageDets, 'image Details');

	return <div></div>;
};

export { ImageGallery };
