import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';

import { media } from '../../../../stitches.config';
import { Container, CardContainer, Card } from './styles';
import CardMobile from './CardMobile';

const AboutSection: React.FC = () => {
  const isMobile = useMediaQuery(media.sm);
  return (
    <Container id="about">
      <Image
        width="1200px"
        height="750px"
        className="image__about"
        src="/assets/imgs/casa-about.webp"
        priority
        alt="house"
      />
      {isMobile ? (
        <CardMobile />
      ) : (
        <CardContainer>
          <Card>
            <h5>Imóveis de altíssimo padrão e que cabem no seu bolso</h5>
            <p>Você pode ser dono com cotas a partir de R$500 mil</p>
          </Card>
          <Card>
            <h5>Imóveis de altíssimo padrão e que cabem no seu bolso</h5>
            <p>Você pode ser dono com cotas a partir de R$500 mil</p>
          </Card>
          <Card>
            <h5>Imóveis de altíssimo padrão e que cabem no seu bolso</h5>
            <p>Você pode ser dono com cotas a partir de R$500 mil</p>
          </Card>
        </CardContainer>
      )}
    </Container>
  );
};

export default AboutSection;
