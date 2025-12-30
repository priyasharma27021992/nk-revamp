'use client';

import { useEffect } from 'react';

const EmbedSocialWidget = () => {
	useEffect(() => {
		(function (d, s, id) {
			const js = d.createElement(s);
			js.id = id;
			js.src = 'https://embedsocial.com/cdn/ht.js';
			d.getElementsByTagName('head')[0].appendChild(js);
		})(document, 'script', 'EmbedSocialHashtagScript');
	}, []);

	return (
		<div
			className='embedsocial-hashtag'
			data-ref='be6e570494b6eb6176c55bfbb26f377d148d730b'>
			<a
				className='feed-powered-by-es'
				href='https://embedsocial.com/products/embedfeed/'
				target='_blank'
				title='Powered by EmbedSocial'>
				Powered by EmbedSocial<span>→</span>
			</a>
		</div>
	);
};

export default EmbedSocialWidget;
