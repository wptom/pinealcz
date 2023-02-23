import React, {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DataContext} from "../context/DataContext.jsx";
import {Col, Container, Row} from "react-bootstrap";
import Box from "../components/Box.jsx";
import PageTitle from "../components/PageTitle.jsx";
import PageDesc from "../components/pageDesc.jsx";
import PageDescItem from "../components/pageDescItem.jsx";
import Icons from "../components/Icons.jsx";

const AboutUs = () => {
  const data = useContext(DataContext);

  if (!data.pageAboutUs) return false;

  return (
    <Container className={'page page--service-consulting'}>
      <Row>
        <Col lg={6}>
          <PageTitle title={data.pageAboutUs.title} />
          <PageDesc>
            {data.pageAboutUs.desc.map((item) => {
              return (
                <PageDescItem desc={item} key={uuidv4()} />
              )
            })}
          </PageDesc>
        </Col>
        <Col lg={6} className={'pt-lg-5'}>
          <div className="text-center mb-5">
            <img src={data.pageAboutUs.illustration} alt=""/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
