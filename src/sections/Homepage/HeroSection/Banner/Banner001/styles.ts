import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {
  maxWidth: '100vw',
  background: '$dark_100',
  height: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$xxxs',

  h1: {
    margin: '0',
    fontSize: '$header_1',
    fontWeight: '$header_1',
    color: '$light_100',
    lineHeight: '$header_1',
  },

  h5: {
    margin: '0',
    fontSize: '$body_2',
    fontWeight: '$body_2',
    color: '$dark_text_200',
    lineHeight: '$body_2',
  },

  '@xs': {
    height: '550px',
    padding: '53.5px',
    textAlign: 'center',
  }
,});
