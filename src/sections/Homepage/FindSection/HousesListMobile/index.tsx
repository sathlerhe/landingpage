import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faBed } from '@fortawesome/free-solid-svg-icons/faBed';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';

import {
  Container,
  HouseCard,
  PriceContent,
  LocalContent,
  InfoContent,
  DescriprionContent,
} from './styles';

interface IHousesListMobile {
  houses?: Array<any>;
}

const HousesListMobile: React.FC<IHousesListMobile> = ({ houses }) => {

  return (
    <Container>
      <AliceCarousel
        disableButtonsControls
        responsive={{
          0: {
            items: 1.1,
          },
        }}
      >
        {houses?.map((house) => (
          <HouseCard key={house?.title}>
            <Image
              width="368px"
              height="230px"
              className="image__card"
              src={house?.img}
              alt={house?.title}
            />
            <PriceContent>R${house?.price}/cota</PriceContent>

            <DescriprionContent>
              <LocalContent>
                <FontAwesomeIcon icon={faLocationDot} />
                {house?.local}
              </LocalContent>
              <h3>{house?.title}</h3>
              <p>{house?.description}</p>
              <InfoContent>
                <p>
                  <FontAwesomeIcon icon={faBed} />
                  {house?.suite} Suítes
                </p>
                <p>
                  <FontAwesomeIcon icon={faHouse} />
                  {house?.area}m²
                </p>
              </InfoContent>
            </DescriprionContent>
          </HouseCard>
        ))}
      </AliceCarousel>
    </Container>
  );
};

export default HousesListMobile;
