import Link from 'next/link';

import NextImage from '@/shared/components/NextImage';
import { ButtonMenuItem } from '@/shared/types/buttonMenuItem';
import { getMenuItemUrl } from '@/shared/utils/getMenuItemUrl';

const FooterImageLink = (item: ButtonMenuItem) => {
  const { url, width, height } = item.image[0];

  return (
    <Link className='first-child:p-4' href={getMenuItemUrl('', item)} passHref>
      <a className='ltr:first:pr-4 rtl:last:pr-4'>
        <NextImage
          useSkeleton
          width={width}
          height={height}
          src={url}
          alt={url}
          className='w-32 h-10 relative hover:shadow-lg'
          layout='fill'
          objectFit='fill'
        />
      </a>
    </Link>
  );
};

export default FooterImageLink;
