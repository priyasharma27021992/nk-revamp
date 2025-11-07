import { cn } from '@/lib/utils';
import NextImage from 'next/image';

interface ImageProps {
	src?: string;
	fill?: boolean;
	width?: number;
	height?: number;
	alt?: string;
	className?: string;
}
export const Image = ({
	src,
	fill,
	width,
	height,
	alt,
	className,
}: ImageProps) => {
	if (!src) return;
	if (fill)
		return (
			<NextImage
				src={src}
				alt={alt ?? ''}
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				className={cn('object-cover', className)}
			/>
		);
	return (
		<NextImage
			src={src}
			alt={alt ?? ''}
			width={width}
			height={height}
			sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			className={cn('object-cover', className)}
		/>
	);
};
