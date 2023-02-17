import React, {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DataContext} from "../context/DataContext.jsx";
import {Col, Container, Row} from "react-bootstrap";
import Box from "../components/Box.jsx";
import PageTitle from "../components/PageTitle.jsx";
import PageDesc from "../components/pageDesc.jsx";
import PageDescItem from "../components/pageDescItem.jsx";
import Icons from "../components/Icons.jsx";

const ServiceSystems = () => {
  const data = useContext(DataContext);

  if (!data.pageServiceSystems) return false;

  return (
    <Container className={'page page--service-systems'}>
      <Row>
        <Col lg={6}>
          <PageTitle title={data.pageServiceSystems.title} />
          <PageDesc>
            {data.pageServiceSystems.desc.map((item) => {
              return (
                <PageDescItem desc={item} key={uuidv4()} />
              )
            })}
          </PageDesc>
          <div className={'d-none d-lg-block'}>
            <Icons pageIcon={data.pageServiceSystems.icon} />
          </div>
        </Col>
        <Col lg={6} className={'pt-lg-5'}>
          <div className={'services-list'}>
            <Box>
              <ul className={'list'}>
                {data.pageServiceSystems.list.map((item) => {
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

export default ServiceSystems;
