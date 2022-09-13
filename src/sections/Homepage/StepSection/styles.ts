import { styled } from '../../../../stitches.config';

export const Container = styled('section', {
  padding: '$xxl',

  h1: {
    fontSize: '$header_1',
    fontWeight: '$header_1',
    lineHeight: '$header_1',
    color: '$light_100',
    margin: '-450px 0 $md 0',
  },

  '.step__col': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@sm': {
    padding: '0',
  },

  '@xs': {
    h1: {
      width: '223px',
      fontSize: '$header_3',
      fontWeight: '$header_3',
      lineHeight: '$header_3',
      textAlign: 'center',
      marginTop: '-480px',
    },
  },
});

export const GrayBlock = styled('div', {
  width: '100%',
  height: '557px',
  background: '$gray_700',
  borderRadius: '$sm',

  '@xs': {
    width: '100vw',
    borderRadius: '0',
  }
});

export const StepsContainer = styled('div', {
  width: '880px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  padding: '40px',

  background: '$light_100',
  boxShadow:
    '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',

  '@sm': {
    width: '70%',
  },

  '@xs': {
    width: '100%',
  },
});
