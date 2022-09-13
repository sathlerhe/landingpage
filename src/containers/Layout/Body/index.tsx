import { ReactNode } from 'react';
import { Container } from './styles';

export interface BodyProps {
  children?: ReactNode;
}

export function Body(props: BodyProps) {
  return <Container className="layout__body">{props.children}</Container>;
}

export default Body;
