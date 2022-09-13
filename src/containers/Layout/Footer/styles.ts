import { styled } from '../../../../stitches.config';

export const Container = styled('footer', {
  background: '$light_100',
});

export const LogoTxt = styled('div', {
  background: '$dark_300',
  width: '76px',
  height: '15px',
  borderRadius: '2px',
});

export const FooterSection = styled('section', {
  padding: '$xs',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$lg',
  color: '$light_text_200',

  '.partnership__footer': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$xxxs',
  },

  '@xs': {
    padding: '$xxxs $nano',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'start',
    gap: '$xs',

    '.logo__footer': {
      margin: '$xs 0 0 -10px',
    },

    '.partnership__footer': {
      marginTop: '-30px',
      fontWeight: '$header_1',
    },
  },
});

export const FooterLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$md',

  '@xs': {
    flexDirection: 'column',
    gap: '$xs',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export const FooterSm = styled('div', {
  display: 'flex',
  gap: '$nano',
});
