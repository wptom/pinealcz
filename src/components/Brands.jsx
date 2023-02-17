import React, {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DataContext} from "../context/DataContext.jsx";
import {Col, Container, Row} from "react-bootstrap";

const Brands = () => {
  const data = useContext(DataContext);

  if (!data.brands) return false;

  return (
    <section className={'brands'}>
      <Container className={'text-center'}>
        <Row>
          <Col>
            <h2 className={'brands__title'}>{data.brands.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col className={'brands__list brands__list--one'}>
            {
              data.brands.row1.map((item) => {
              return (
                  <a href={item.url} className={'brands__list__link'} target={'_blank'} key={uuidv4()}>
                    <img src={item.imgPath} alt={item.name}/>
                  </a>
                )
              })
            }
          </Col>
        </Row>
        <Row>
          <Col className={'brands__list brands__list--two'}>
            {
              data.brands.row2.map((item) => {
                return (
                  <a href={item.url} className={'brands__list__link'} target={'_blank'} key={uuidv4()}>
                    <img src={item.imgPath} alt={item.name}/>
                  </a>
                )
              })
            }
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
