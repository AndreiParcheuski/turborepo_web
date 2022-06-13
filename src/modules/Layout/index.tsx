import type { PropsWithChildren } from 'react';

import { selectIsArabic } from '@/store/slices/locale';
import { selectIsOpenMenu, toggleMenu } from '@/store/slices/sidebar';
import { useAppDispatch, useAppSelector } from '@/store/utils/hooks';

import Footer from './components/Footer';
import Header from './components/Header';

const Layout = ({ children }: PropsWithChildren) => {
  const isArabic = useAppSelector(selectIsArabic);
  const open = useAppSelector(selectIsOpenMenu);
  const dispatch = useAppDispatch();

  const handleToggleMenu = () => dispatch(toggleMenu());

  return (
    <div className='flex flex-col min-h-screen' dir={isArabic ? 'rtl' : 'ltr'}>
      <div
        onClick={handleToggleMenu}
        aria-hidden='true'
        className={` 
          ${open ? 'block' : 'hidden'} 
          bg-black/[.7] 
          transition 
          ease-in-out 
          delay-150 
          w-screen 
          h-screen 
          absolute 
          inset-0
          z-10
       `}
      />
      <div className='grow'>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
