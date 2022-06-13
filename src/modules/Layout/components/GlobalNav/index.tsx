import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { DisplayDevices } from '@/shared/types/displayDevices';
import GetNavItemsParams from '@/shared/types/getNavItemsParams';

import { useGetNavItemsQuery } from '@/store/api/navItems';

import NavItem from '../NavItem';
import Sidebar from '../Sidebar';
import SidebarIcon from '../Sidebar/SidebarIcon';

import beinLogo from '~/images/bein_logo.png';

const GlobalNav = () => {
  const router = useRouter();
  const { regionLang } = router.query;
  const { data: navItems } = useGetNavItemsQuery({
    regionLang
  } as GetNavItemsParams);

  return (
    <nav
      className='
        bg-white
        sticky
        top-0
        z-10
      '
    >
      <div
        className='
          container
          mx-auto
          flex
          pt-5
          pb-3.5
          px-5
          items-center
          justify-between
          md:py-2
        '
      >
        <div className='block md:hidden' />
        <div className='flex justify-start'>
          <Link href={`/${regionLang}`} passHref>
            <a
              href='#/'
              className='
                flex
                w-32
                ltr:md:mr-8
                rtl:md:ml-8
                ltr:lg:mr-11
                rtl:lg:ml-11
                lg:w-36
                ltr:xl:mr-12
                rtl:xl:ml-12
              '
            >
              <Image src={beinLogo} alt='global nav image' />
            </a>
          </Link>
          <ul
            className={`
              flex
              py-4
              px-2.5
              left-0
              right-0
              bottom-0
              fixed
              bg-white
              justify-between
              md:static
              md:p-0
            `}
          >
            {navItems?.item.global_navigation.map((item) => {
              const { _id: id, display_on: displayOn } = item;

              return (
                <NavItem
                  key={id}
                  item={item}
                  withIcon
                  itemClassName={`
                    ${
                      displayOn.includes(DisplayDevices.mobile)
                        ? 'list-item'
                        : 'hidden'
                    }
                    ${
                      displayOn.includes(DisplayDevices.web)
                        ? 'md:list-item'
                        : 'md:hidden'
                    }
                    ltr:md:mr-8
                    ltr:lg:mr-10
                    ltr:xl:mr-16
                    ltr:last:mr-0
                    rtl:md:ml-8
                    rtl:lg:ml-10
                    rtl:xl:ml-16
                    rtl:last:ml-0
                  `}
                  linkClassName='
                    w-12
                    leading-3
                    font-medium
                    font-SFPro
                    text-[10px]
                    text-center
                    whitespace-nowrap
                    text-main
                    md:text-xs
                    md:w-auto
                    md:font-Gotham
                    md:font-black
                    md:uppercase
                  '
                />
              );
            })}
          </ul>
        </div>
        <SidebarIcon />
        <Sidebar />
      </div>
    </nav>
  );
};

export default GlobalNav;
