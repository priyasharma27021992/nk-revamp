import { Image } from './ui/Image';
import LinkedInSVG from '../assets/icons/linkedin.svg';
import InstagramSVG from '../assets/icons/instagram.svg';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='fixed bottom-0 w-full left-0 bg-white h-15 lg:h-20'>
			<hr className='border-red-600' />
			<div className='flex flex-col justify-center gap-1 items-center my-0.5 lg:my-2 py-0.5 lg:py-2 animate-[var(--moving-text)] text-sm lg:text-lg'>
				<h2 className='font-extralight text-center text-unwrap overflow-hidden'>
					Nanhe Khwab Charitable Trust is 80G approved, ensuring that all
					donations are fully tax-deductible and compliant with government
					regulations.
				</h2>
				<div className='flex gap-1 lg:gap-2 justify-center items-center'>
					<div className='flex gap-1 lg:gap-3'>
						<Link href='https://www.instagram.com/nanhe_khwab/'>
							<Image
								src={LinkedInSVG}
								className=''
								alt='LinkedIn Icon'
								width={20}
							/>
						</Link>
						<Link href='https://www.instagram.com/nanhe_khwab/'>
							<Image
								src={InstagramSVG}
								className=''
								alt='Instagram Icon'
								width={20}
							/>
						</Link>
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
