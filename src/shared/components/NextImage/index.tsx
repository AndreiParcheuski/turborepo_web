import Image from 'next/image';
import { useState } from 'react';

import clsxm from '@/shared/utils/clsxm';

import { NextImageProps } from './types/nextImageProps';

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 * @param src
 * @param width
 * @param height
 * @param alt
 * @param className
 * @param imgClassName
 * @param blurClassName
 * @param rest
 */

const NextImage = ({
  useSkeleton = false,
  src,
  width,
  height,
  alt = 'image',
  className,
  imgClassName,
  blurClassName,
  ...rest
}: NextImageProps) => {
  const [status, setStatus] = useState(useSkeleton ? 'loading' : 'complete');
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
      <Image
        className={clsxm(
          imgClassName,
          status === 'loading' && clsxm('animate-pulse', blurClassName)
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={() => setStatus('complete')}
        layout='responsive'
        {...rest}
      />
    </figure>
  );
};

export default NextImage;
