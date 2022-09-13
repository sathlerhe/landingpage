import { styled } from '../../../../stitches.config';

export const Container = styled('header', {
  height: '98px',
  width: '100vw',
  zIndex: 3,
  top: 0,
  transition: 'all 0.3s',
  backgroundColor: '$light_100',

  '#header__row': {
    width: '100%',
    margin: '$xxxs',
  },
});

export const Flex = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '.bars__header': {
    width: '35px',
    height: '40px',
  },
});
