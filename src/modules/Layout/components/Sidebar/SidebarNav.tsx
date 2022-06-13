import { useRouter } from 'next/router';
import { useState } from 'react';

import GetNavItemsParams from '@/shared/types/getNavItemsParams';

import { useGetNavItemsQuery } from '@/store/api/navItems';
import { toggleMenu } from '@/store/slices/sidebar';
import { useAppDispatch } from '@/store/utils/hooks';

import SidebarItem from './SidebarItem';
import NavItem from '../NavItem';

const SidebarNav = () => {
  const router = useRouter();
  const { regionLang } = router.query;
  const { data: navItems } = useGetNavItemsQuery({
    regionLang
  } as GetNavItemsParams);
  const [showMore, toggleShowMore] = useState(false);
  const dispatch = useAppDispatch();

  if (!navItems) {
    return null;
  }

  const {
    side_menu___main_navigation: mainNavigation,
    promotional_item: promotionalItem,
    side_menu___other_sports: sideMenuOtherSports,
    support
  } = navItems.item;

  const handleToggleMenu = () => dispatch(toggleMenu());

  return (
    <>
      <ul className='flex flex-col'>
        {mainNavigation.map((item) => (
          <SidebarItem key={item._id} item={item} />
        ))}
        {sideMenuOtherSports.length > 0 && (
          <div className='relative group'>
            <div
              className={`
                flex
                cursor-pointer
                relative
                h-full
                py-4
                mb-5
                font-Gotham
                font-bold
                text-base
                text-black
                uppercase
                border-b-[1px]
                border-solid
                border-[#cbcbcb]
                after:block
                after:content=['*']
                after:absolute
                after:w-0
                after:border-[4px]
                after:border-x-transparent
                after:right-6
                after:top-6
                ${
                  showMore
                    ? 'after:border-t-transparent after:border-b-black'
                    : 'after:border-b-transparent after:border-t-black'
                }
              `}
              aria-hidden='true'
              onClick={() => toggleShowMore(!showMore)}
            >
              Other Sports
            </div>
            <ul
              className={`
                ${showMore ? 'flex' : 'hidden'}
                flex-col
                animation-growDown
                origin-top-center
              `}
            >
              {sideMenuOtherSports.map((item) => (
                <SidebarItem key={item._id} item={item} />
              ))}
            </ul>
          </div>
        )}
      </ul>
      <ul className='pt-14'>
        <h6 className='text-base font-Gotham font-bold uppercase pb-4'>
          Settings
        </h6>
        {support.map((item) => {
          const { _id: id } = item;

          return (
            <NavItem
              key={id}
              item={item}
              itemClassName='
                list-item
                py-4
                border-solid
                border-t-[1px]
                border-[##0000000D]
              '
              linkClassName='
                leading-3
                text-sm
                font-Gotham
                font-light
                hover:font-normal
                hover:text-main
                whitespace-nowrap
                transition-all
                ease-in-out
                duration-100
              '
              onClick={handleToggleMenu}
            />
          );
        })}
        {promotionalItem && (
          <NavItem
            item={promotionalItem}
            itemClassName='
              flex
              items-center
              pt-6
              transition
              ease-in-out
              delay-150
              hover:-translate-y-1
              hover:translate-x-3
              md:hover:translate-x-2
              hover:scale-105
            '
            linkClassName='
              flex
              uppercase
              text-white
              text-xs
              leading-[13px]
              font-Gotham
              font-bold
              justify-center
              items-center
              bg-main
              rounded-md
              px-16
              py-3
            '
          />
        )}
      </ul>
    </>
  );
};

export default SidebarNav;
