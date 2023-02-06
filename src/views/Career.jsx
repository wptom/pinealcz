import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PageTitle from "../components/PageTitle.jsx";
import {pageCareer, pageServiceMarketing} from "../data.js";
import PageDesc from "../components/pageDesc.jsx";
import PageDescItem from "../components/pageDescItem.jsx";
import Icons from "../components/Icons.jsx";
import Box from "../components/Box.jsx";
import PageSubtitle from "../components/PageSubtitle.jsx";
import IconBox from "../components/IconBox.jsx";
import ArrowButton from "../components/ArrowButton.jsx";
import CareerPositionsTitle from "../components/CareerPositionsTitle.jsx";
import CareerIcons from "../components/CareerIcons.jsx";

const Career = () => {
  return (
    <Container className={'page'}>
      <Row>
        <Col>
          <PageTitle title={pageCareer.title} />
          <PageSubtitle text={pageCareer.desc} />
        </Col>
      </Row>
      <CareerIcons>
        <Row>
          {pageCareer.boxes.map((item, index) => {
            return (
              <Col xl={3} className={'d-block d-xl-flex'} key={index}>
                <Box>
                  <IconBox icon={item.icon} text={item.text} />
                </Box>
              </Col>
            );
          })}
        </Row>
      </CareerIcons>
      <Row>
        <Col className={'text-center'}>
          <CareerPositionsTitle>
            <PageSubtitle text={pageCareer.jobBoxesTitle} />
          </CareerPositionsTitle>
        </Col>
      </Row>
      <Row className={'d-flex justify-content-center'}>
        {pageCareer.jobBoxes.map((item, index) => {
          return (
            <Col lg={4} key={index}>
              <Box>
                <div className={'job-box'}>
                  <h3 className={'job-box__position'}>{item.position}</h3>
                  <p className={'job-box__level'}>
                    <span className={'job-box__seniority'}></span>
                    <span className={'job-box__seniority'}></span>
                    <span className={'job-box__seniority'}></span>
                    {item.level}
                  </p>
                  <ArrowButton url={item.button.url} text={item.button.text} />
                  <p className={'job-box__desc'}>{item.text}</p>
                </div>
              </Box>
            </Col>
            )
        })}
      </Row>
    </Container>
  );
};

export default Career;
