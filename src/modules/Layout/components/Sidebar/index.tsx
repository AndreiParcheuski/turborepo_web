import { selectIsOpenMenu } from '@/store/slices/sidebar';
import { useAppSelector } from '@/store/utils/hooks';

import SidebarNav from './SidebarNav';

const Sidebar = () => {
  const open = useAppSelector(selectIsOpenMenu);

  return (
    <div
      className={`
        ${open ? 'translate-x-0' : 'translate-x-full'}
        ${open ? 'block' : 'hidden'}
        bg-white
        absolute
        ltr:right-0
        rtl:left-0
        w-full
        top-full
        h-[calc(100vh_-_56px)]
        md:w-96
        md:h-[calc(100vh_-_42px)]
        p-8
        border-solid
        border-t-[1px]
        border-[##0000000D]
        z-20
        transition-translate-x
        ease-in-out
        delay-500
        duration-300
        overflow-y-auto
      `}
    >
      <SidebarNav />
      <p className='text-[13px] text-zinc-400 font-light pt-4'>
        beIN MEDIA GROUP 2022
      </p>
    </div>
  );
};

export default Sidebar;
