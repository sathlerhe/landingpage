import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {
  // cursor: 'pointer',
  // display: 'flex',
  // position: 'absolute',
  // top: 'calc(50% - 30px)',
  // backgroundColor: '#ff2c69',
  // color: 'white',
  // padding: '8px',
  '&.arrow__direction__left, &.arrow__direction__right': {
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    background: '#fff',
    borderRadius: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '> svg': {
      width: '7px',
      color: '$gray_700'
    },
  },
});
