import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {
  // '.alice-carousel__stage-item > div': {
  //   display: 'flex !important',
  //   justifyContent: 'center',
  // },
  maxWidth: 'calc(100vw - 15px)',
  '.alice-carousel__dots': {
    gap: '$nano',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '$nano',
  },
  '.alice-carousel__prev-btn, .alice-carousel__next-btn': {
    display: 'flex',
    padding: '10px 5px',
    top: '0',
    width: '670px',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100% - 22px)',
  },
  '.alice-carousel__next-btn': {
    right: 0,
  },
  '.alice-carousel__stage li': {
    minHeight: '350px',
  },

  '@sm': {
    maxWidth: '100vw',

    '.alice-carousel__prev-btn, .alice-carousel__next-btn': {
      display: 'none',
    }
  }
});
