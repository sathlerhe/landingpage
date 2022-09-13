import React from 'react';

import { Container } from './styles';
interface ISliderDot {
  isActive: boolean;
}
const SliderDot: React.FC<ISliderDot> = ({ isActive }) => {
  return (
    <Container className={isActive ? 'slider__dot__active' : 'slider__dot'} />
  );
};

export default SliderDot;
