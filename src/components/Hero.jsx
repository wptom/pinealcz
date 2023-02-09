import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import heroTalk from "./../assets/images/hero-talk.svg";
import heroListen from "./../assets/images/hero-listen.svg";

const Hero = () => {

  return (
    <Container className={'hero'}>
      <Row>
        <Col xl={3} className={'hero__say'}>
          <img src={heroTalk} className={'lax lax_preset_seesaw:140:11'} alt=""/>
        </Col>
        <Col xl={6}>
          <h1 className={'hero__title'}>Věnujte se <span>hlavním činnostem podniku</span>, <strong>vedlejší starosti
            nechte na nás.</strong></h1>
          <div className={'hero__controls'}>
            <a href="#" className={'btn'}>Navázat spolupráci</a>
            <a href="#" className={'btn btn--inverted'}>O nás</a>
          </div>
        </Col>
        <Col xl={3} className={'hero__listen'}>
          <img src={heroListen} className={'lax lax_preset_seesaw:140:20'} alt=""/>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className={'hero__reason'}>Můžete snížit své operativní náklady a ušetřit si čas outsourcingem s námi.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
