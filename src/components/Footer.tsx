import { Image } from './ui/Image';
import LinkedInSVG from '../assets/icons/linkedin.svg';
import InstagramSVG from '../assets/icons/instagram.svg';

const Footer = () => {
	return (
		<footer className='fixed bottom-0 w-full left-0 bg-white'>
			<div className='flex flex-col justify-center items-center my-2 border-t py-2'>
				<h2 className='text-xl font-semibold'>
					Nanhe Khwab Charitable Trust is 80G approved, ensuring that all
					donations are fully tax-deductible and compliant with government
					regulations.
				</h2>
				<div className='flex gap-2 justify-center items-center'>
					<div className='flex gap-3'>
						<Image
							src={LinkedInSVG}
							className=''
							alt='LinkedIn Icon'
							width={30}
						/>
						<Image
							src={InstagramSVG}
							className=''
							alt='Instagram Icon'
							width={30}
						/>
					</div>
					<div>
						<p>Site is made by Miss Sharma</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
