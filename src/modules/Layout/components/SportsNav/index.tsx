import { useRouter } from 'next/router';

import { DisplayDevices } from '@/shared/types/displayDevices';
import GetNavItemsParams from '@/shared/types/getNavItemsParams';

import { useGetNavItemsQuery } from '@/store/api/navItems';

import NavItem from '../NavItem';

const SportsNav = () => {
  const router = useRouter();
  const { regionLang } = router.query;
  const { data: navItems } = useGetNavItemsQuery({
    regionLang
  } as GetNavItemsParams);

  if (!navItems) {
    return null;
  }

  const {
    main_navigation: mainNavigation,
    other_sports: otherSports,
    pinned_items: pinnedItems,
    promotional_item: promotionalItem
  } = navItems.item;

  return (
    <nav
      className='
        flex
        overflow-scroll
        scrollbar-hide
        bg-main
        lg:overflow-visible
      '
    >
      <ul
        className='
          flex
          mx-auto
          px-3
          lg:container
        '
      >
        {mainNavigation.map((item, index) => {
          const { _id: id, display_on: displayOn } = item;

          return (
            <NavItem
              key={id}
              item={item}
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
                ltr:mr-6
                rtl:ml-6
                ${
                  otherSports.length > 0 && index === mainNavigation.length - 1
                    ? 'ltr:lg:mr-0 rtl:lg:ml-0'
                    : 'ltr:lg:mr-6 ltr:xl:mr-8 rtl:lg:ml-6 rtl:xl:ml-8'
                }
              `}
              linkClassName={`
                flex
                p-2
                border-b-2
                font-Gotham
                text-xs
                text-white
                hover:border-white
                lg:font-bold
              `}
              inactiveLinkClassName='
                border-main
                font-book
              '
              activeLinkClassName='
                border-white
                font-bold
              '
            />
          );
        })}
        {otherSports.length > 0 && (
          <div className='relative group'>
            <div
              className="
                hidden
                justify-center
                items-center
                cursor-default
                relative
                h-full
                ltr:pl-8
                ltr:pr-10
                rtl:pr-8
                rtl:pl-10
                font-Gotham
                font-bold
                text-xs
                text-white
                border-b-2
                border-transparent
                after:hidden
                after:content=['*']
                after:absolute
                after:w-0
                after:border-[4px]
                after:border-x-transparent
                after:border-b-transparent
                after:border-t-white
                ltr:after:right-6
                rtl:after:left-6
                after:bottom-2.5
                group-hover:bg-[#0c0c0cb3]
                group-hover:after:border-t-transparent
                group-hover:after:border-b-white
                group-hover:after:bottom-3.5
                lg:flex
                lg:after:block
                ltr:lg:after:right-4
                rtl:lg:after:left-4
                ltr:xl:pl-10
                ltr:xl:pr-12
                rtl:xl:pr-10
                rtl:xl:pl-12
                ltr:xl:after:right-6
                rtl:xl:after:left-6
              "
            >
              More
            </div>
            <ul
              className='
                flex
                lg:absolute
                lg:bg-[#0c0c0cb3]
                lg:hidden
                lg:group-hover:grid
                lg:grid-cols-[repeat(4,_1fr)]
                lg:py-5
                lg:px-4
              '
            >
              {otherSports.map((item) => {
                const { _id: id } = item;

                return (
                  <NavItem
                    key={id}
                    item={item}
                    itemClassName='
                      ltr:mr-6
                      ltr:last:mr-0
                      ltr:lg:mr-0
                      rtl:ml-6
                      rtl:last:ml-0
                      rtl:lg:ml-0
                      lg:hover:bg-[#0c0c0cb3]
                    '
                    linkClassName={`
                      flex
                      p-2
                      border-b-2
                      font-Gotham
                      text-xs
                      text-white
                      hover:border-white
                      whitespace-nowrap
                      lg:font-Fira
                      lg:font-medium
                      lg:border-0
                      lg:py-3
                      lg:px-4
                    `}
                    inactiveLinkClassName='
                      border-main
                      font-book
                    '
                    activeLinkClassName='
                      border-white
                      font-bold
                    '
                  />
                );
              })}
            </ul>
          </div>
        )}
        {pinnedItems.map((item) => {
          const {
            menu_item: { _id: id, display_on: displayOn }
          } = item;

          return (
            <NavItem
              key={id}
              item={item}
              itemClassName={`
                ${
                  displayOn.includes(DisplayDevices.mobile)
                    ? 'list-item'
                    : 'hidden'
                }
                ${
                  displayOn.includes(DisplayDevices.web)
                    ? 'lg:list-item'
                    : 'lg:hidden'
                }
                ltr:mr-6
                ltr:md:mr-2
                ltr:lg:mr-6
                ltr:xl:mr-8
                ltr:last:mr-0
                rtl:ml-6
                rtl:md:ml-2
                rtl:lg:ml-6
                rtl:xl:ml-8
                rtl:last:ml-0
              `}
              linkClassName={`
                flex
                p-2
                border-b-2
                font-Gotham
                text-xs
                text-white
                hover:border-white
                md:font-bold
              `}
              inactiveLinkClassName='
                border-main
                font-book
              '
              activeLinkClassName='
                border-white
                font-bold
              '
            />
          );
        })}
        {promotionalItem && (
          <NavItem
            item={promotionalItem}
            itemClassName='
              hidden
              ltr:ml-auto
              rtl:mr-auto
              items-center
              lg:flex
            '
            linkClassName='
              flex
              uppercase
              text-white
              text-[8px]
              leading-[10px]
              font-Gotham
              font-medium
              justify-center
              items-center
              border
              border-white
              rounded-sm
              p-1
            '
          />
        )}
      </ul>
    </nav>
  );
};

export default SportsNav;
