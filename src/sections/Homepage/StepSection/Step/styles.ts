import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontStyle: 'normal',
  fontSize: '$header_4',
  color: '$light_text_100',
  padding: '20px 0px',
  position: 'relative',
  '&:first-child': {
    paddingTop: '0px',
  },
  '&:not(:last-child)': {
    borderBottom: '1px solid rgb(151 174 180 / 50%)',
  },
  '@xs': {
    padding: '14px 0px',
  },
});

export const IconContainer = styled('div', {
  display: 'flex',
  alignSelf: 'baseline',
  transform: 'scale(0.7)',
  '@xs': {
    display: 'none',
  },
});

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '& > span': {
    fontStyle: 'normal',
    fontWeight: '$body_2',
    fontSize: '$body_2',
    textAlign: 'left',
    color: '$light_text_200',
  },
  div: {
    fontWeight: '$header_1',
    display: 'flex',
    fontSize: '21px',
    alignItems: 'flex-end',
    color: '$light_text_100',
    '& h6': {
      margin: '0',
      display: 'flex',
      fontSize: '46px',
      fontWeight: '400',
      paddingRight: '2px',
    },
    '& span': {
      bottom: '10px',
      fontWeight: '$body_2',
      fontSize: '19px',
      position: 'relative',
    },
  },
  '@xs': {
    div: {
      fontSize: '16px',
      '& h6': {
        fontSize: '46px',
      },
    },
  },
});
