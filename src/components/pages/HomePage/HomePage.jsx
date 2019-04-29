import React from "react";
import { Col, Row } from "@smooth-ui/core-sc";

import { Wrapper } from "./HomePageStyles";

const HomePage = () => (
  <Wrapper fluid>
    <Row>
      <Col display="flex" justifyContent="center" flex="column">
        <h1>Hello,</h1>
        <p>My name is Rembrandt</p>
      </Col>
    </Row>
  </Wrapper>
);

export default HomePage;
