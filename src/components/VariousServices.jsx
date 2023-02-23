import React, {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DataContext} from "../context/DataContext.jsx";
import {Col, Container, Row} from "react-bootstrap";
import GlassBox from "./GlassBox.jsx";
import Box from "./Box.jsx";
import ArrowButton from "./ArrowButton.jsx";

const VariousServices = () => {
  const data = useContext(DataContext);

  if (!data.variousServices) return false;

  return (
    <section className={'various-services'}>
      <Container>
        <Row>
          <Col>
            <GlassBox>
              <Row>
                <Col>
                  <div className={'various-services__heading'}>
                    <h2 className={'various-services__heading__text'}>{data.variousServices.title}</h2>
                    <div className="various-services__heading__icons">
                      <img src={data.variousServices.titleImgPath} alt={data.variousServices.title}/>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                {data.variousServices.serviceBoxes.map((item, index) => {
                  return (
                    <Col lg={6} className={'mb-4 mb-lg-5'} key={uuidv4()}>
                      <Box>
                        <h3 className={'various-services__title'} dangerouslySetInnerHTML={{ __html: item.title }} />
                        <div className={'various-services__text'}>
                        {item.text.map((textItem, textIndex) => (
                          <p key={uuidv4()} dangerouslySetInnerHTML={{ __html: textItem }} />
                        ))}
                        </div>
                        <div>
                          <ArrowButton url={item.btn.url} text={item.btn.text} />
                        </div>
                      </Box>
                    </Col>
                  )
                })}
              </Row>
            </GlassBox>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VariousServices;
