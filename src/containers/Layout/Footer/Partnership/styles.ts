import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {
  background: '$primary_900',

  '@xs': {
    padding: '$md',
  }
});

export const LogoTxt = styled('div', {
  background: '$light_100',
  width: '244px',
  height: '50px',
  borderRadius: '2px',
});

export const PartnershipSec = styled('div', {
  height: '338px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '$xs',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$xxxs',

    h6: {
      fontSize: '$header_6',
      fontWeight: '$header_6',
      color: '$light_100',
      margin: '0',
    },
  },

  '> p': {
    maxWidth: '992px',
    fontSize: '$header_4',
    lineHeight: '$header_4',
    fontWeight: '$header_4',
    textAlign: 'center',
    color: '$dark_text_200',
    margin: '0',
  },

  '@xs': {
    height: '300px',

    '> div': {
      flexDirection: 'column',
    },

    '> p': {
      width: 'calc(100vw - 30px)',
      fontSize: '$body_2',
      lineHeight: '$body_2',
      fontWeight: '$body_2',
      textAlign: 'center',
    },

  },
});
