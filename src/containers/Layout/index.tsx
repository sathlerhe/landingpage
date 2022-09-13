import { ReactNode } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import { media } from '../../../stitches.config';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import { Container } from './styles';

export interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isMobile = useMediaQuery(media.xs);

  return (
    <Container>
      {isMobile ? <HeaderMobile /> : <Header />}
      <Body>{children}</Body>
      <Footer />
    </Container>
  );
}

export default Layout;
