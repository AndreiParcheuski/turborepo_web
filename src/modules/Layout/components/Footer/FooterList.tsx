import { ReactNode } from 'react';

interface FooterListProps {
  title: string;
  children: ReactNode;
}

const FooterList = ({ title, children }: FooterListProps) => (
  <div className='ltr:first:pr-16 rtl:last:pr-16'>
    <h6 className='text-base text-white font-bold uppercase'>{title}</h6>
    <menu className='flex pt-4 flex-col'>{children}</menu>
  </div>
);

export default FooterList;
