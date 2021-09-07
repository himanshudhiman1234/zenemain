import { ReactNode } from 'react';
import WithSubnavigation from '../Navbar';
import FooterSection from '../sections/Footer/Footer';


interface BlogLayoutProps {
  children: ReactNode;
}

 const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
    <WithSubnavigation />
      {children}
      <FooterSection />
    </>
  );
};

export default BlogLayout;
