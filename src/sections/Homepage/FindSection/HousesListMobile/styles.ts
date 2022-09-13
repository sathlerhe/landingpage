import { styled } from '../../../../../stitches.config';

export const Container = styled('section', {
  width: '100%',
  margin: '$xxs 0',

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
  '.alice-carousel__stage li': {
    maxWidth: 'fit-content',
  },

  '@xxs': {
    '.alice-carousel__stage': {
      gap: '$md',
    },
  }
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
  width: '311px',
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

  '@xxs': {
    width: '300px',
  }
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
  marginTop: '-14px',
  borderRadius: '0 0 $sm $sm',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '$xxs',
  gap: '12px',
  border: '1px solid $light_other_200',

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
