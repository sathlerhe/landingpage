import React from 'react';
import { Container } from './styles';
import BannerSlider from './Banner';

const Hero: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <Container {...props}>
      <BannerSlider />
    </Container>
  );
};

export default Hero;
