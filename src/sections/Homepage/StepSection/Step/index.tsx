import React from 'react';

import { Container, IconContainer, TextContainer } from './styles';

interface IStep {
  title: string;
  subtitle: string;
  number: number;
  icon: any;
}

const Step: React.FC<IStep> = ({ icon, title, subtitle, number }) => {
  return (
    <Container>
      <TextContainer>
        <div>
          <h6>0{number}</h6>
          <span>/{title}</span>
        </div>
        <span>{subtitle}</span>
      </TextContainer>
      <IconContainer>{icon}</IconContainer>
    </Container>
  );
};

export default Step;