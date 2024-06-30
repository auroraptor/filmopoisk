import { FC, ReactNode } from 'react';
import Header from '@/components/header/Header';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
