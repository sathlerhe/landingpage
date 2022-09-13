import { styled } from '../../../../../stitches.config';

export const Container = styled('section', {
  width: '100%',
  height: '200px',
  marginTop: '-90px',

  '.alice-carousel__dots': {
    opacity: '0',
  },
  '.alice-carousel__prev-btn, .alice-carousel__next-btn': {
    display: 'none',
  },
  '.alice-carousel__stage li': {
    minHeight: '350px',
  },

  '@xxs': {
    marginTop: '-70px',
  },
});

export const Card = styled('div', {
  marginLeft: '$xxxs',
  width: '516px',
  height: '186px',
  background: '$light_100',
  boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.12)',
  borderRadius: '$sm',
  display: 'flex',
  padding: '$md',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$nano',

  h5: {
    margin: '0',
    fontWeight: '$header_5',
    fontSize: '$header_5',
    lineHeight: '$header_5',
    color: '$light_text_100',
  },

  p: {
    margin: '0',
    fontWeight: '$body_2',
    fontSize: '$body_2',
    lineHeight: '$body_2',
    color: '$light_text_200',
  },

  '@xs': {
    width: '299px',
    height: '190px',
  },

  '@xxs': {
    width: '255px',
    height: '190px',

    h5: {
      fontSize: '$body_1',
    },

    p: {
      fontSize: '$body_3',
    },
  },
});
