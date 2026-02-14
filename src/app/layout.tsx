// import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
	variable: '--font-heading',
	subsets: ['latin'],
	weight: '100',
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
				className={`min-h-screen flex flex-col ${poppins.variable} antialiased`}>
				<Navbar />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
