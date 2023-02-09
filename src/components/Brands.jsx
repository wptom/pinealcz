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
            <h2 className={'brands__title'}>Přidejte se k vysoce produktivním týmům našich partnerů</h2>
          </Col>
        </Row>
        <Row>
          <Col className={'brands__list brands__list--one'}>
            <a href="#" className={'brands__list__link'}>
              <img src={brandBidaskbit} alt="BidAskBit"/>
            </a>
            <a href="#" className={'brands__list__link'}>
              <img src={brandCoinfy} alt="Coinfy"/>
            </a>
            <a href="#" className={'brands__list__link'}>
              <img src={brandMycoiner} alt="MyCoiner"/>
            </a>
            <a href="#" className={'brands__list__link'}>
              <img src={brandViarosi} alt="Viarosi"/>
            </a>
            <a href="#" className={'brands__list__link'}>
              <img src={brand3anglefx} alt="3angleFX"/>
            </a>
            <a href="#" className={'brands__list__link'}>
              <img src={brandTrianglemarkets} alt="TriangleMarkets"/>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className={'brands__list brands__list--two'}>
            <a href="#" className={'brands__list__link'}>
              <img src={brandZetatrader} alt="ZetaTrader"/>
            </a>
            <a href="#" className={'brands__list__link'}>
              <img src={brandForex} alt="Forex"/>
            </a>
            <a href="#" className={'brands__list__link'}>
              <img src={brandFannex} alt="Fannex"/>
            </a>
            <a href="#" className={'brands__list__link'}>
              <img src={brandIpromarkets} alt="IProMarkets"/>
            </a>
            <a href="#" className={'brands__list__link'}>
              <img src={brandInvestcentrum} alt="InvestCentrum"/>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
