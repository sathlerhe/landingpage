import { styled } from '../../../../../stitches.config';

export const Container = styled('section', {
  width: '100%',
  margin: '$nano',

  '.alice-carousel__dots': {
    opacity: '0',
  },
  '.alice-carousel__prev-btn, .alice-carousel__next-btn': {
    display: 'none',
  },
  '.alice-carousel__stage': {
    display: 'flex',
    alignItems: 'center',
    gap: '$xxxs',
  },
  '.alice-carousel__stage-item': {
    height: '600px',
  },
  '.alice-carousel__stage li': {
    maxWidth: 'fit-content',
  },

  '@xxs': {
    '.alice-carousel__stage': {
      gap: '$md',
    },
  },
});

export const TabCard = styled('div', {
  width: '313px',
  height: '557px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'start',
  padding: '$xs $xxs',

  borderRadius: '$sm',

  border: '0.600231px solid rgba(0, 0, 0, 0.12)',

  boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.12)',

  h3: {
    fontSize: '$header_3',
    fontWeight: '$header_5',
    lineHeight: '$header_3',
    color: '$gray_900',
  },

  p: {
    fontSize: '$body_2',
    fontWeight: '$body_2',
    lineHeight: '$body_2',
    color: '$gray_900',
  },

  '@xxs': {
    width: '300px',
  }
});
