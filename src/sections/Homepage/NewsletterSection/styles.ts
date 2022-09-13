import { styled } from '../../../../stitches.config';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '$xl 0 -$quarck 0',

  '@sm': {
    flexDirection: 'column',
  },
});

export const Form = styled('form', {
  zIndex: '1',
  width: '660px',
  marginLeft: '-245px',

  background: '$light_100',
  boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.12)',
  borderRadius: '$sm',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$md',
  padding: '$md',

  h1: {
    color: '$light_text_100',
    fontSize: '$header_1',
    lineHeight: '$header_1',
    fontWeight: '$header_1',
    margin: '0',
  },

  '@sm': {
    margin: '-400px 0 $xxl 0'
  },

  '@xs': {
    width: 'calc(100% - 30px)',
    padding: '$xxs',
    gap: '$xxs',
    marginTop: '-250px',

    '#address__form': {
      display: 'none',
    },

    h1: {
      fontSize: '$header_3',
      lineHeight: '$header_3',
      fontWeight: '$header_3',
      textAlign: 'center',
    },
  },
});

export const CheckboxContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '$nano',
});

export const Checkbox = styled('input', {});

export const FormInputs = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$xxxs',
});

export const InputContainer = styled('div', {
  width: '100%',

  '> svg': {
    display: 'block',
    position: 'absolute',
    width: '17px',
    marginLeft: '10px',
    marginTop: '$nano',
    color: '$light_text_200',
  },
});

export const Input = styled('input', {
  padding: '10px 10px 10px 36px',
  width: '100%',
  height: '40px',

  background: '$light_100',
  borderRadius: '$sm',
  border: '1px solid rgba(0, 0, 0, 0.12)',

  fontSize: '$body_4',
  fontWeight: '$body_4',
  lineHeight: '$body_4',
  color: '$light_text_200',

  '&:hover, &:focus': {
    border: '1px solid $gray_500',
  },
});

export const Button = styled('button', {
  width: '100%',
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

  '&:hover': {
    background: '$light_300',
  },
});
