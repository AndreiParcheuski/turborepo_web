import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import FooterNavItem from '@/modules/Layout/components/Footer/FooterNavItem';

import GetNavItemsParams from '@/shared/types/getNavItemsParams';
import { scrollToTop } from '@/shared/utils/scrollToTop';

import { useGetNavItemsQuery } from '@/store/api/navItems';

import FooterImageLink from './FooterImageLink';
import FooterList from './FooterList';

import beinLogo from '~/images/bein_logo.png';

const Footer = () => {
  const router = useRouter();
  const { regionLang } = router.query;
  const { data: navItems } = useGetNavItemsQuery({
    regionLang
  } as GetNavItemsParams);

  return (
    <div
      className='
        hidden
        md:flex
        flex-col
        bg-main
        pt-12
        px-16
        pb-3
        grow-0
        shrink-0
        font-SFPro
        md:font-Gotham
      '
    >
      <div className='flex justify-between'>
        <div className='flex items-start'>
          <FooterList title='Support'>
            {(navItems?.item.support || []).map((item) => (
              <FooterNavItem key={item._id} item={item} />
            ))}
          </FooterList>
          <FooterList title='Follow us'>
            {(navItems?.item.follow_us || []).map((item) => (
              <FooterNavItem key={item._id} item={item} />
            ))}
          </FooterList>
        </div>
        <div className='flex flex-col items-end'>
          <Link href={`/${regionLang}`} passHref>
            <a className='flex w-48 lg:w-50'>
              <Image src={beinLogo} alt='footer image' />
            </a>
          </Link>
          <p className='text-base text-white font-bold pt-10 pb-4'>
            DOWNLOAD OUR APPS
          </p>
          <div className='flex'>
            {navItems?.item.download_our_apps.map(({ _id: id, ...props }) => (
              <FooterImageLink key={id} _id={id} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-between pt-3'>
        <div />
        <div
          className='text-xs text-white font-light'
          dangerouslySetInnerHTML={{
            __html: navItems?.item.copyright.text || ''
          }}
        />
        <button
          type='button'
          onClick={scrollToTop}
          className='
            text-xs
            text-white
            font-medium
            hover:font-semibold
            transition
            ease-in-out
            duration-100
          '
        >
          Back to top
        </button>
      </div>
    </div>
  );
};

export default Footer;
