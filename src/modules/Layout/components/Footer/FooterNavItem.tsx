import NavItem from '@/modules/Layout/components/NavItem';
import { NavItemProps } from '@/modules/Layout/components/NavItem/types/navItemProps';

const FooterNavItem = ({ item }: NavItemProps) => {
  const { _id: id } = item;

  return (
    <NavItem
      key={id}
      item={item}
      itemClassName={`
        list-item
        py-2
        leading-3
      `}
      linkClassName='
        font-Gotham
        font-light
        text-white
        text-xs
        hover:font-medium
        whitespace-nowrap
        transition
        ease-in-out
        duration-100
      '
    />
  );
};

export default FooterNavItem;
