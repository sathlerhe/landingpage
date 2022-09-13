import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {
  cursor: 'pointer',
  height: '8px',
  width: '8px',
  background: '#ECECEC',
  borderRadius: '20px',
  '&.slider__dot__active, &:hover': {
    background: '$secondary_pure',
  },
  '&:hover': {
    opacity: '100%',
  },
});
