import React from 'react';
import {ReferencesSlider} from "../data.js";
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import {Container, Row, Col} from "react-bootstrap";
import IconsMini from "./IconsMini.jsx";

const settings = {
  container: '.ref-slider',
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: true,
  items: 3,
  gutter: 40,
  responsive: {
    0: {
      items: 1
    },
    992: {
      items: 2
    },
    1200: {
      items: 2
    },
    1400: {
      items: 3
    }
  }
};

const References = () => {
  return (
    <section className={'references'}>
      <Container>
        <Row>
          <Col lg={6} className={'d-flex align-items-center'}>
            <h2 className={'references-title'}>Reference<span>Klíčem k úspěchu je spolupráce.</span></h2>
          </Col>
          <Col lg={6} className={'d-flex justify-content-end mb-3 mb-lg-0'}>
            <IconsMini />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={'position-relative'}>
          <Col lg={'10'} className={'offset-lg-1'}>
            <TinySlider className={'ref-slider'} settings={settings}>
              {ReferencesSlider.map((item, index) => {
                return (
                  <div key={index} className={'references__slide'}>
                    <div>
                    <p className={'references__slide__text'}>{item.text}</p>
                    <span className={'references__slide__name'}>{item.name}</span>
                    </div>
                  </div>
                )
              })}
            </TinySlider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default References;
