import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Container, Card } from './styles';

const CardMobile: React.FC = () => {
  const items = [
    <Card>
      <h5>Imóveis de altíssimo padrão e que cabem no seu bolso</h5>
      <p>Você pode ser dono com cotas a partir de R$500 mil</p>
    </Card>,
    <Card>
      <h5>Imóveis de altíssimo padrão e que cabem no seu bolso</h5>
      <p>Você pode ser dono com cotas a partir de R$500 mil</p>
    </Card>,
    <Card>
      <h5>Imóveis de altíssimo padrão e que cabem no seu bolso</h5>
      <p>Você pode ser dono com cotas a partir de R$500 mil</p>
    </Card>,
  ];

  return (
    <Container>
      <AliceCarousel
        disableButtonsControls
        items={items}
        responsive={{
          0: {
            items: 1.2,
          },
        }}
      />
    </Container>
  );
};

export default CardMobile;
