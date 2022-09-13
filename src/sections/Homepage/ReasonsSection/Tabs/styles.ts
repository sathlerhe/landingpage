import { styled } from '../../../../../stitches.config';
import * as Tabs from '@radix-ui/react-tabs';

export const Container = styled(Tabs.Root, {
  width: '100%',
  padding: '$xxl',

  '.tabs__col': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$lg',
  },
});

export const List = styled(Tabs.List, {
  display: 'flex',
  gap: '$quarck',
});

export const Trigger = styled(Tabs.Trigger, {
  background: 'none',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$nano',
  padding: '$nano',
  fontSize: '$body_2',
  lineHeight: '$body_2',
  fontWeight: '$body_2',
  borderBottom: '2px solid transparent',

  opacity: 0.5,
  cursor: 'pointer',

  '> svg': {
    width: '17px',
  },

  '&[data-state="active"], &:hover': {
    opacity: 1,
    borderBottom: '2px solid $gray_800',
  },
});

export const ContentContainer = styled('div', {
  width: '100%',
});

export const Content = styled(Tabs.Content, {
  width: '100%',
  minHeight: '160px',
  padding: '$md',
  background: '$light_100',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: '$sm',
  boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.12)',

  p: {
    margin: '0px',
    fontSize: '$header_4',
    lineHeight: '$header_4',
    fontWeight: '$header_4',
    color: '$primary_900',
    textAlign: 'center',
  },
});
