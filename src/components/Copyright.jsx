import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import logoSmall from "../assets/images/logo-small.svg"

const Copyright = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="copyright">
            <img src={logoSmall} alt="Pineal.cz"/>
            <p>Copyright © 2020 - 2023 Pineal s.r.o.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Copyright;
