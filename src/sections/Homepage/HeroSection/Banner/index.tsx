import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Container } from './styles';
import Banner001 from './Banner001';
const SliderControllerButton = dynamic(
  () => import('./SliderControllerButton')
);
const SliderDot = dynamic(() => import('./SliderDot'));

const BannerSlider: React.FC = () => {
  const items = [
    <Banner001 key="" />,
    <Banner001 key="" />,
  ];

  const renderDotsItem = ({ isActive }) => {
    return <SliderDot isActive={isActive} />;
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <SliderControllerButton direction="left" />;
  };

  const renderNextButton = ({ isDisabled }) => {
    return <SliderControllerButton direction="right" />;
  };

  return (
    <Container>
      <AliceCarousel
        items={items}
        renderDotsItem={renderDotsItem}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        autoPlay
        autoPlayInterval={5000}
        infinite
      />
    </Container>
  );
};

export default BannerSlider;
