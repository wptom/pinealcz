import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GlassBox from "./GlassBox.jsx";
import Box from "./Box.jsx";
import ArrowButton from "./ArrowButton.jsx";
import {VariousServicesData} from "../data";

const VariousServices = () => {
  return (
    <Container>
      <Row>
        <Col>
          <GlassBox>
            <Row>
              {VariousServicesData.map((item, index) => {
                return (
                  <Col lg={6} key={'service' + index}>
                    <Box>
                      <h3>{item.title}</h3>
                      {item.text.map((textItem, textIndex) => (
                        <p key={'par' + index} dangerouslySetInnerHTML={{ __html: textItem }} />
                      ))}
                      <ArrowButton url={item.btn.url} text={item.btn.text} />
                    </Box>
                  </Col>
                )
              })}
            </Row>
          </GlassBox>
        </Col>
      </Row>
    </Container>
  );
};

export default VariousServices;
