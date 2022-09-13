import { styled } from '../../../../stitches.config';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '-$xl 0 $xxl 0',

  '@sm': {
    margin: '$xxxs 0 $md 0',
    flexDirection: 'column',
  },

  '@xs': {
    
  }
});

export const CardContainer = styled('div', {
  zIndex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$xxs',
  marginLeft: '-240px'
});

export const Card = styled('div', {
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
    color: '$light_text_100'
  },

  p: {
    margin: '0',
    fontWeight: '$body_2',
    fontSize: '$body_2',
    lineHeight: '$body_2',
    color: '$light_text_200'
  }
});
