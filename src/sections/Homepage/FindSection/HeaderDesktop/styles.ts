import { styled } from '../../../../../stitches.config';

export const FindHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@sm': {
    gap: '$xxs',
  }
});

export const HeaderTypes = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$sm',

  '@sm': {
    gap: '$xxxs',
  }
});

export const HeaderType = styled('a', {
  display: 'flex',
  gap: '$nano',
  fontSize: '$body_2',
  fontWeight: '$body_2',
  lineHeight: '$body_2',
  color: '$light_text_200',
  '> svg': {
    minWidth: '16px',
  },
});

export const HeaderButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$xxxs',
});

export const Button = styled('button', {
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

  '@sm': {
    width: '130px',
  }
});

