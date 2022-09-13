import { styled } from '../../../../../stitches.config';

export const Container = styled('section', {
  width: '100%',
  height: '60px',

  '.alice-carousel__dots': {
    opacity: '0',
  },
  '.alice-carousel__prev-btn, .alice-carousel__next-btn': {
    display: 'none',
  },
  '.alice-carousel__stage': {
    display: 'flex',
    alignItems: 'center',
    gap: '$sm',
  },
  '.alice-carousel__stage li': {
    maxWidth: 'fit-content',
  },

});

export const HeaderType = styled('a', {
  display: 'flex',
  gap: '10px',
  fontSize: '$header_5',
  fontWeight: '$header_6',
  lineHeight: '$header_5',
  color: '$light_text_100',
  '> svg': {
    minWidth: '23px',
  },
});

export const Button = styled('button', {
  width: '130px',
  cursor: 'pointer',
  background: '$light_100',
  border: '1px solid $gray_700',
  borderRadius: '$xs',
  padding: '10px $xxxs 10px $nano',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$nano',

  fontSize: '$body_3',
  fontWeight: '$body_3',
  lineHeight: '$body_3',
  color: '$gray_700',

  '> svg': {
    width: '15px',
  },

  '&:hover': {
    background: '$light_300',
  },
});


