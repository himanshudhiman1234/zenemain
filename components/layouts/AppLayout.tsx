import { ReactNode } from 'react';
import WithSubnavigation from '../Navbar';
import FooterSection from '../sections/Footer/Footer';


interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
    <WithSubnavigation />
      {children}
      <FooterSection />
    </>
  );
};
