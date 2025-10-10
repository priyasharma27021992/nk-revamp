import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const poppins = Poppins({
	variable: '--font-heading',
	subsets: ['latin'],
	weight: '100',
});

const inter = Inter({
	variable: '--font-body',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Nanhe Khwab',
	description: 'Empowering children through education and care',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`font-[--font-body] ${poppins.variable} ${inter.variable} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
