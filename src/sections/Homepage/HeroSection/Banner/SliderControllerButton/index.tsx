import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Container } from './styles';

interface ISliderControllerButton {
  direction: 'left' | 'right';
  callback?: Function;
}

const SliderControllerButton: React.FC<ISliderControllerButton> = ({
  direction,
  callback,
}) => {
  return (
    <Container
      onClick={() => callback?.()}
      className={`arrow__direction__${direction}`}
    >
      {direction === 'left' ? (
        <FontAwesomeIcon icon={faChevronLeft} />
      ) : (
        <FontAwesomeIcon icon={faChevronRight} />
      )}
    </Container>
  );
};

export default SliderControllerButton;
