import React, {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DataContext} from "../context/DataContext.jsx";
import {Col, Container, Row} from "react-bootstrap";

const Hero = () => {
  const data = useContext(DataContext);

  if (!data.hero) return false;

  return (
    <Container className={'hero'}>
      <Row>
        <Col xl={3} className={'hero__say'}>
          <img src={data.hero.illustrationLeft} className={'lax lax_preset_seesaw:140:11'} alt=""/>
        </Col>
        <Col xl={6}>
          <h1 className={'hero__title'} dangerouslySetInnerHTML={{ __html: data.hero.title }} />
          <div className={'hero__controls'}>
            {data.hero.buttons.map((item) => {
              return (
                <a href={item.url} className={'btn' + `${item.modifierClass}`} key={uuidv4()}>{item.text}</a>
                )
              })
            }
          </div>
        </Col>
        <Col xl={3} className={'hero__listen'}>
          <img src={data.hero.illustrationRight} className={'lax lax_preset_seesaw:140:20'} alt=""/>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className={'hero__reason'}>{data.hero.subtitle}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
