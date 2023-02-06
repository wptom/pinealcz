import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Box from "../components/Box.jsx";

import {pageServiceMarketing} from "../data.js";
import PageTitle from "../components/PageTitle.jsx";
import PageDesc from "../components/pageDesc.jsx";
import PageDescItem from "../components/pageDescItem.jsx";

import illustrationMarketing from "../assets/images/illustration-marketing.svg";
import Icons from "../components/Icons.jsx";
import PageIcon from "../components/PageIcon.jsx";

const ServiceMarketing = () => {
  return (
    <Container className={'page'}>
      <Row>
        <Col lg={6}>
          <PageTitle title={pageServiceMarketing.title} />
          <PageDesc>
            {pageServiceMarketing.desc.map((item, index) => {
              return (
                <PageDescItem desc={item} key={index} />
                )
            })}
          </PageDesc>
          <Icons pageIcon={pageServiceMarketing.icon} />
        </Col>
        <Col lg={6}>
          <div className="text-center mb-5">
            <img src={illustrationMarketing} alt=""/>
          </div>
          <Box>
            <ul className={'list'}>
              {pageServiceMarketing.list.map((item, index) => {
                return (
                  <li className={'list__item'} key={index}>{item}</li>
                );
              })}
            </ul>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceMarketing;
