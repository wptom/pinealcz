import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Box from "../components/Box.jsx";

import {pageServiceManagement, pageServiceMarketing} from "../data.js";
import PageTitle from "../components/PageTitle.jsx";
import PageDesc from "../components/pageDesc.jsx";
import PageDescItem from "../components/pageDescItem.jsx";

import illustrationMarketing from "../assets/images/illustration-marketing.svg";
import Icons from "../components/Icons.jsx";

const ServiceManagement = () => {
  return (
    <Container className={'page'}>
      <Row>
        <Col lg={6}>
          <PageTitle title={pageServiceManagement.title} />
          <PageDesc>
            {pageServiceManagement.desc.map((item, index) => {
              return (
                <PageDescItem desc={item} key={index} />
              )
            })}
          </PageDesc>
          <Icons pageIcon={pageServiceManagement.icon} />
        </Col>
        <Col lg={6} className={'pt-lg-5'}>
          <Box>
            <ul className={'list'}>
              {pageServiceManagement.list.map((item, index) => {
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

export default ServiceManagement;
