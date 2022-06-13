import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { MenuItemType } from '@/shared//types/menuItemType';
import NextImage from '@/shared/components/NextImage';
import { getMenuItemUrl } from '@/shared/utils/getMenuItemUrl';

import { NavItemProps } from './types/navItemProps';

const NavItem = ({
  item,
  withIcon,
  itemClassName,
  linkClassName,
  inactiveLinkClassName,
  activeLinkClassName,
  onClick
}: NavItemProps) => {
  const router = useRouter();
  const { regionLang } = router.query;

  const menuItemUrl = getMenuItemUrl('', item);

  const isActive =
    item._type !== MenuItemType.external &&
    ((!router.query.page && !menuItemUrl) ||
      (typeof router.query.page === 'object' &&
        menuItemUrl === encodeURI(`/${router.query.page.join('/')}`)));

  const displayName = useMemo(() => {
    let itemName = '';

    if (item._type === MenuItemType.relative) {
      itemName = item.menu_item.display_name;
    } else if (item._type === MenuItemType.social) {
      itemName = item.social_network_name;
    } else {
      itemName = item.display_name;
    }

    return itemName;
  }, [item]);

  return (
    <li aria-hidden='true' className={itemClassName} onClick={onClick}>
      <Link href={getMenuItemUrl(`/${regionLang}`, item)} passHref>
        {item._type === MenuItemType.internal &&
        item.item_logo &&
        item.item_logo_active &&
        withIcon ? (
          <a className='flex'>
            <div
              className='
                flex
                flex-col
                items-center
                justify-center
                md:flex-row
              '
            >
              <div
                className={`
                  w-5
                  mb-1.5
                  md:mb-0
                  ltr:md:mr-3
                  rtl:md:ml-3
                `}
              >
                <NextImage
                  useSkeleton
                  width='20px'
                  height='20px'
                  layout='responsive'
                  src={
                    isActive ? item.item_logo_active.url : item.item_logo.url
                  }
                  alt={
                    isActive ? item.item_logo_active.url : item.item_logo.url
                  }
                />
              </div>
              <span
                className={`${linkClassName} ${
                  isActive ? activeLinkClassName : ''
                }`}
              >
                {item.display_name}
              </span>
            </div>
          </a>
        ) : (
          <a
            href='#/'
            rel={
              item._type === MenuItemType.external ||
              item._type === MenuItemType.social
                ? 'nofollow'
                : ''
            }
            target={
              item._type === MenuItemType.external ||
              item._type === MenuItemType.social
                ? '_blank'
                : '_self'
            }
            className={`${linkClassName}${
              isActive ? activeLinkClassName : inactiveLinkClassName
            }`}
          >
            {displayName}
          </a>
        )}
      </Link>
    </li>
  );
};

export default NavItem;
