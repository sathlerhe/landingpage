import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container as GridContainer, Col, Row } from 'react-grid-system';

import { Container, List, Trigger, Content, ContentContainer } from './styles';

interface ITabs {
  reasons: Array<{
    key: string;
    title: string;
    description: string;
  }>;
}

const Tabs: React.FC<ITabs> = ({ reasons }) => {
  return (
    <Container defaultValue={reasons[0].key}>
      <GridContainer>
        <Row>
          <Col className="tabs__col">
            <List>
              {reasons.map((reason) => (
                <Trigger key={reason.key} value={reason.key}>
                  <FontAwesomeIcon icon={faCirclePlus} />
                  {reason?.title}
                </Trigger>
              ))}
            </List>
            <ContentContainer>
              {reasons.map((reason) => (
                <Content key={reason.key} value={reason.key}>
                  <p>{reason.description}</p>
                </Content>
              ))}
            </ContentContainer>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Tabs;
