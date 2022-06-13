import NavItem from '@/modules/Layout/components/NavItem';
import { NavItemTypeProps } from '@/modules/Layout/components/NavItem/types/navItemProps';

import { toggleMenu } from '@/store/slices/sidebar';
import { useAppDispatch } from '@/store/utils/hooks';

interface MenuItemProps {
  item: NavItemTypeProps;
}

const SidebarItem = ({ item }: MenuItemProps) => {
  const { _id: id } = item;
  const dispatch = useAppDispatch();

  const handleToggleMenu = () => dispatch(toggleMenu());

  return (
    <NavItem
      key={id}
      item={item}
      itemClassName={`
        list-item
        border-b-[1px]
        border-solid
        border-[#cbcbcb]
        py-5
        first:pt-0
        last:border-b-0
        md:py-6
      `}
      linkClassName='
        leading-3
        font-Gotham
        font-bold
        text-base
        whitespace-nowrap
        uppercase
        hover:text-main
        transition
        ease-in-out
        duration-100
      '
      onClick={handleToggleMenu}
    />
  );
};

export default SidebarItem;
