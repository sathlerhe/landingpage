import { styled } from '../../../../stitches.config';

export const Container = styled('section', {
  background: '$light_200',
  padding: '$md',

  h1: {
    fontFamily: '$jetbrains',
    fontWeight: '$header_1',
    fontSize: '$header_1',
    lineHeight: '$header_1',
    textAlign: 'center',
  },

  '@sm': {
    padding: '$md 0',
  },

  '@xs': {
    h1: {
      textAlign: 'left',
    },
    background: '$light_100',
    padding: '0',
  }
});

export const FindHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const HeaderTypes = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$sm',
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
});

export const FindHouses = styled('div', {
  width: '100%',
  marginTop: '$xxs',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'start',
  gap: '$md',
  flexWrap: 'wrap',
});

export const HouseCard = styled('div', {
  width: '368px',
  background: '$light_100',
  borderRadius: '0 0 $sm $sm',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '12px',

  '.image__card': {
    borderRadius: '$sm $sm 0 0',
    marginBottom: '0',
  },

  h3: {
    color: '$primary_900',
    fontSize: '$header_3',
    fontWeight: '$header_3',
    lineHeight: '$header_3',
    margin: '0',
  },

  p: {
    color: '$light_text_200',
    fontSize: '$body_2',
    fontWeight: '$body_2',
    lineHeight: '$body_2',
    margin: '0',
  },
});

export const PriceContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  background: '$primary_600',
  color: '$light_100',
  fontSize: '$header_6',
  fontWeight: '$header_6',
  lineHeight: '$header_6',
  padding: '10px $xxs',
  marginTop: '-14px',
});

export const DescriprionContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '$xxs',
  gap: '12px',

  '> p': {
    marginBottom: '12px',
  },
});

export const LocalContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '13px',
  color: '$light_text_200',
  '> svg': {
    width: '14px',
  },
});

export const InfoContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$md',
  marginBottom: '13px',

  '> p > svg': {
    width: '22px',
    color: '$light_text_100',
    marginRight: '11px',
  },

  '> p': {
    color: '$light_text_200',
  },
});

export const Divider = styled('div', {
  width: '100%',
  height: '1px',
  background: 'rgba(0, 0, 0, 0.08)',
});

export const HouseButton = styled('button', {
  width: '100%',
  background: '$gray_900',
  marginTop: '12px',
  padding: '10px $xxxs',
  border: 'none',
  borderRadius: '$xs',
  color: '$light_100',
  fontSize: '$body_3',
  fontWeight: '$body_3',
  lineHeight: '$body_3',
});
