import cn from 'classnames';
import Image from '@/components/ui/image';
import { StaticImageData } from 'next/image';

interface AvatarProps {
  image: StaticImageData;
  alt: string;
  className?: string;
  size?: SizeNames;
  shape?: ShapeNames;
  width?: number;
  height?: number;
}

type ShapeNames = 'rounded' | 'circle';
type SizeNames = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

const sizes: Record<SizeNames, string[]> = {
  xl: ['h-24 w-24 sm:h-28 sm:w-28 md:h-28 md:w-28 3xl:h-28 3xl:w-28'],
  lg: ['h-20 w-20 lg:h-24 lg:w-24'],
  md: ['h-10 w-10'],
  sm: ['h-8 w-8'],
  xs: ['h-6 w-6'],
};

const shapes: Record<ShapeNames, string[]> = {
  rounded: ['h-16 w-16 rounded-lg bg-white/20 p-2 backdrop-blur-[40px]'],
  circle: ['rounded-full'],
};

function Avatar({
  image,
  alt,
  className,
  size = 'md',
  shape = 'circle',
  width,
  height,
}: AvatarProps) {
  const sizeClassNames = sizes[size];
  return (
    <figure
      className={cn(
        'relative shrink-0 overflow-hidden',
        className,
        shapes[shape],
        shape === 'circle' && sizeClassNames
      )}
    >
      {shape === 'circle' ? (
        size === 'xs' || 'sm' ? (
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            priority
            className="rounded-full"
          />
        ) : (
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            priority
            placeholder="blur"
            className="rounded-full"
          />
        )
      ) : (
        <Image src={image} alt={alt} className="rounded-[6px]" width={width} />
      )}
    </figure>
  );
}

export default Avatar;
