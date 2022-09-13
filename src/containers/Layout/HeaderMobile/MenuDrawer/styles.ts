import { styled } from '../../../../../stitches.config';

import Modal from 'react-modal';

export const Container = styled(Modal, {
  backgroundColor: '#fff',
  height: '100vh',
  top: '0px',
  right: 0,
  overflowY: 'auto',
  outline: 'none',
  display: 'flex',
  flex: '1',
  flexDirection: 'column',

  '.times__header': {
    width: '25px',
    height: '40px',
  },
});

export const MenuHeader = styled('div', {
  padding: '12px 16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  display: 'flex',
  alignItems: 'center',
  height: '130px',
  justifyContent: 'space-between',
});

export const MenuBody = styled('div', {});

export const MenuItem = styled('div', {
  padding: '$xxs',
  color: '$light_text_200',
  fontPattern: '$body_3',
  border: '1px solid rgba(0, 0, 0, 0.08)',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '$nano',
    fontSize: '$header_5',
    fontWeight: '$header_5',
    lineHeight: '$header_5',
  },
});
