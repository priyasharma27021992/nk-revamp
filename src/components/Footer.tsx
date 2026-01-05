import { Image } from './ui/Image';
import LinkedInSVG from '../assets/icons/linkedin.svg';
import InstagramSVG from '../assets/icons/instagram.svg';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<section className='w-full bg-amber-600/80 border-t border-t-red-100 flex flex-col justify-center items-center gap-2 py-2'>
				<div className='flex flex-row justify-around gap-1 items-center px-4 py-2 text-sm lg:text-lg'>
					<div className='flex flex-col flex-1 text-sm gap-2'>
						<p className='font-extralight text-unwrap overflow-hidden'>
							Nanhe Khwab Charitable Trust is a registered trust under Bombay
							Public Trusts Act, 1950. We are a 12A registered society with
							section 80(G) status of income tax act. Nanhe Khwab Charitable
							Trust is 80G approved, ensuring that all donations are fully
							tax-deductible and compliant with government regulations.
						</p>
						<p>
							<strong>contact@nanhekhwab@gmail.com</strong>
						</p>
					</div>
					<div className='flex gap-1 lg:gap-2 justify-end items-center flex-1'>
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
					</div>
				</div>
				<div>
					NANHE KHWAB LET THEM DREAM • ALL RIGHTS RESERVED • CONCEPTUALISED &
					DESIGNED BY PRIYA SHARMA
				</div>
			</section>
		</footer>
	);
};

export default Footer;
