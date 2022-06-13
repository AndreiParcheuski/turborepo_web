import { selectIsOpenMenu, toggleMenu } from '@/store/slices/sidebar';
import { useAppDispatch, useAppSelector } from '@/store/utils/hooks';

import CloseMenu from '~/svg/close_menu.svg';
import OpenMenu from '~/svg/open_menu.svg';

const SidebarIcon = () => {
  const open = useAppSelector(selectIsOpenMenu);
  const dispatch = useAppDispatch();

  const handleToggleMenu = () => dispatch(toggleMenu());

  return (
    <div className='flex content-center'>
      <button type='button' className='w-4 h-4' onClick={handleToggleMenu}>
        <div
          className={`
            ${open ? 'block' : 'hidden'}
            transition-all
            ease-in-out
            delay-400
          `}
        >
          <CloseMenu />
        </div>
        <div
          className={`
            ${open ? 'hidden' : 'block'}
            transition-all
            ease-in-out
            delay-400
            rtl:-scale-x-100
          `}
        >
          <OpenMenu />
        </div>
      </button>
    </div>
  );
};

export default SidebarIcon;
