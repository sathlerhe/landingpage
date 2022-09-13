import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import {
  Container,
  TabCard,
} from './styles';

interface ITabsMobile {
  reasons?: Array<any>;
}

const TabsMobile: React.FC<ITabsMobile> = ({ reasons }) => {
  return (
    <Container>
      <AliceCarousel
        disableButtonsControls
        responsive={{
          0: {
            items: 1,
          },
        }}
      >
        {reasons?.map((reason) => (
          <TabCard key={reason?.key}>
            {reason?.icon}
            <h3>{reason?.title}</h3>
            <p>{reason?.description}</p>
          </TabCard>
        ))}
      </AliceCarousel>
    </Container>
  );
};

export default TabsMobile;
