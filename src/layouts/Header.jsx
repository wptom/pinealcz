import React from "react";
import Navigation from "../components/Navigation.jsx";
import {Container, Row, Col} from "react-bootstrap";
import logo from "../../public/images/logo.png";

const Header = () => {
  return (
    <header className={'header'}>
      <Container>
        <Row>
          <Col lg={4} className={'d-flex align-items-center header__logo'}>
            <img src={logo} alt="Pineal.cz"/>
          </Col>
          <Col lg={8}>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
