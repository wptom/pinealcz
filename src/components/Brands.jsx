import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import brandBidaskbit from "./../assets/images/brand-bidaskbit.svg"
import brandCoinfy from "./../assets/images/brand-coinfy.svg"
import brandMycoiner from "./../assets/images/brand-mycoiner.svg"
import brandViarosi from "./../assets/images/brand-virarosi.svg"
import brand3anglefx from "./../assets/images/brand-3anglefx.svg"
import brandTrianglemarkets from "./../assets/images/brand-trianglemarkets.svg"
import brandZetatrader from "./../assets/images/brand-zetatrader.svg"
import brandForex from "./../assets/images/brand-forex.svg"
import brandFannex from "./../assets/images/brand-fannex.svg"
import brandIpromarkets from "./../assets/images/brand-ipromarkets.svg"
import brandInvestcentrum from "./../assets/images/brand-investcentrum.svg"

const Brands = () => {
  return (
    <section className={'brands'}>
      <Container className={'text-center'}>
        <Row>
          <Col>
            <a href="#">
              <img src={brandBidaskbit} alt="BidAskBit"/>
            </a>
          </Col>
          <Col>
            <a href="#">
              <img src={brandCoinfy} alt="Coinfy"/>
            </a>
          </Col>
          <Col>
            <a href="#">
              <img src={brandMycoiner} alt="MyCoiner"/>
            </a>
          </Col>
          <Col>
            <a href="#">
              <img src={brandViarosi} alt="Viarosi"/>
            </a>
          </Col>
          <Col>
            <a href="#">
              <img src={brand3anglefx} alt="3angleFX"/>
            </a>
          </Col>
          <Col>
            <a href="#">
              <img src={brandTrianglemarkets} alt="TriangleMarkets"/>
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg={2} className={'offset-lg-1'}>
            <a href="#">
              <img src={brandZetatrader} alt="ZetaTrader"/>
            </a>
          </Col>
          <Col lg={2}>
            <a href="#">
              <img src={brandForex} alt="Forex"/>
            </a>
          </Col>
          <Col lg={2}>
            <a href="#">
              <img src={brandFannex} alt="Fannex"/>
            </a>
          </Col>
          <Col lg={2}>
            <a href="#">
              <img src={brandIpromarkets} alt="IProMarkets"/>
            </a>
          </Col>
          <Col lg={2}>
            <a href="#">
              <img src={brandInvestcentrum} alt="InvestCentrum"/>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
