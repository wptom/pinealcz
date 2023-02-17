import React, {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DataContext} from "../context/DataContext.jsx";
import {Col, Container, Row} from "react-bootstrap";
import Box from "../components/Box.jsx";
import PageTitle from "../components/PageTitle.jsx";
import PageDesc from "../components/pageDesc.jsx";
import PageDescItem from "../components/pageDescItem.jsx";
import Icons from "../components/Icons.jsx";

const ServiceMarketing = () => {
  const data = useContext(DataContext);

  if (!data.pageServiceMarketing) return false;

  return (
    <Container className={'page page--service-marketing'}>
      <Row>
        <Col lg={6}>
          <PageTitle title={data.pageServiceMarketing.title} />
          <PageDesc>
            {data.pageServiceMarketing.desc.map((item) => {
              return (
                <PageDescItem desc={item} key={uuidv4()} />
                )
            })}
          </PageDesc>
          <div className={'d-none d-lg-block'}>
            <Icons pageIcon={data.pageServiceMarketing.icon} />
          </div>
        </Col>
        <Col lg={6}>
          <div className="text-center mb-5">
            <img src={data.pageServiceMarketing.illustration} alt=""/>
          </div>
          <div className={'services-list'}>
            <Box>
              <ul className={'list'}>
                {data.pageServiceMarketing.list.map((item, index) => {
                  return (
                    <li className={'list__item'} key={uuidv4()}>{item}</li>
                  );
                })}
              </ul>
            </Box>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceMarketing;
