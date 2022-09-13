import React from 'react';
import { Col, Container as GridContainer, Row } from 'react-grid-system';

import DrinkSvg from '../../../../assets/svgs/drinks-icon.svg';
import HouseSvg from '../../../../assets/svgs/house-money-icon.svg';
import BoxSvg from '../../../../assets/svgs/open-box-icon.svg';
import HeartSvg from '../../../../assets/svgs/heart-icon.svg';
import { Container, StepsContainer, GrayBlock } from './styles';
import Step from './Step';

const Steps: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const steps = [
    {
      title: 'ESCOLHA',
      subtitle:
        'Escolha uma das incríveis casas disponíveis no Litoral Norte de São Paulo, Campos do Jordão e principais condomínios de alto padrão no interior de São Paulo. ',
      icon: <HeartSvg />,
    },
    {
      title: 'COMPRE',
      subtitle:
        'Adquira quantas cotas quiser e deixe que nós encontramos e verificamos os demais proprietários. Todo o processo é de nossa responsabilidade. ',
      icon: <HouseSvg style={{ transform: 'scale(0.8)', opacity: 0.5 }} />,
    },
    {
      title: 'SURPREENDA-SE',
      subtitle:
        'Nossos designers de interiores cuidam de cada detalhe para que a sua casa fique incrível e nossa equipe de hospitalidade cuida de tudo para que sua casa esteja sempre perfeita para você e sua família.',
      icon: <BoxSvg />,
    },
    {
      title: 'APROVEITE',
      subtitle:
        'Reserve as suas datas de preferência diretamente com o seu concierge, apareça e relaxe. O agendamento é prático, online e equitativo entre os cotistas.  ',
      icon: <DrinkSvg style={{ transform: 'scale(0.8)', opacity: 0.5 }} />,
    },
  ];
  return (
    <Container {...props}>
      <GridContainer>
        <Row>
          <Col className="step__col">
            <GrayBlock />
            <h1>Entenda como funciona</h1>
            <StepsContainer>
              {steps.map((step, index) => (
                <Step
                  key={step.title}
                  number={index + 1}
                  title={step.title}
                  subtitle={step.subtitle}
                  icon={step.icon}
                />
              ))}
            </StepsContainer>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Steps;
