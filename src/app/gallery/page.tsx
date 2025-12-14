import { Image } from '@/components/ui/Image';
import './gallery.css';
import { ImageGallery } from '@/components/ImageGallery';

const Gallery = () => {
	return (
		<main>
			<section
				// id='photos'
				className='pt-20'>
				<div className=''>
					{/* <h1 className='w-screen my-2'>Moments from Nanhe Khwab</h1> */}
					{/* {Array(20)
						.fill(0)
						.map((_, i) => {
							return (
								<Image
									src={`/images/gallery/IMG_${i + 1}.JPG`}
									alt={`Image ${i}`}
									key={i}
									width={100}
									height={100}
								/>
							);
						})} */}
					<div className=''>
						<ImageGallery
							urls={Array(5)
								.fill(0)
								.map((_, i) => `/images/gallery/check/${i + 1}.png`)}
						/>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Gallery;
