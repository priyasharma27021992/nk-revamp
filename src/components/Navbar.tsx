'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Programs', href: '/programs' },
	{ name: 'Gallery', href: '/gallery' },
	{ name: 'Contact', href: '/contact' },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-lg border-b border-border'>
			<nav className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
				{/* LOGO */}
				<Link
					href='/'
					className='text-2xl font-bold text-primary tracking-tight'>
					Nanhe Khwab
				</Link>

				{/* Desktop Menu */}
				<ul className='hidden md:flex items-center gap-8 text-foreground font-medium'>
					{navLinks.map((link) => (
						<li key={link.name}>
							<Link
								href={link.href}
								className='hover:text-primary transition-colors'>
								{link.name}
							</Link>
						</li>
					))}
					<li>
						<Link
							href='/donate'
							className='bg-primary text-primary-foreground px-5 py-2 rounded-full shadow-md hover:opacity-90 transition'>
							Donate
						</Link>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden text-foreground'
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</nav>

			{/* Mobile Dropdown Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='md:hidden bg-background border-t border-border shadow-lg'>
						<ul className='flex flex-col items-center py-4 space-y-3'>
							{navLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										onClick={() => setIsOpen(false)}
										className='block text-lg text-foreground hover:text-primary transition'>
										{link.name}
									</Link>
								</li>
							))}
							<li>
								<Link
									href='/donate'
									onClick={() => setIsOpen(false)}
									className='bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-md hover:opacity-90 transition'>
									Donate
								</Link>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
