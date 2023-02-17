import React, {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DataContext} from "../context/DataContext.jsx";
import {Col, Container, Row} from "react-bootstrap";
import PageTitle from "../components/PageTitle.jsx";
import Box from "../components/Box.jsx";
import PageSubtitle from "../components/PageSubtitle.jsx";
import IconBox from "../components/IconBox.jsx";
import ArrowButton from "../components/ArrowButton.jsx";
import CareerPositionsTitle from "../components/CareerPositionsTitle.jsx";
import CareerIcons from "../components/CareerIcons.jsx";

const Career = () => {
  const data = useContext(DataContext);

  if (!data.pageCareer) return false;

  const stars = (numberOfStars) => {
    let text = "";

    for(let i=1; i<=numberOfStars; i++) {
      text += "<span class='job-box__seniority'></span>";
    }

    return text;
  }

  return (
    <section className={'page page--career'}>
      <Container>
      <Row>
        <Col>
          <PageTitle title={data.pageCareer.title} />
          <PageSubtitle text={data.pageCareer.desc} />
        </Col>
      </Row>
      <CareerIcons>
        <Row>
          {data.pageCareer.boxes.map((item) => {
            return (
              <Col xl={3} className={'d-block d-xl-flex'} key={uuidv4()}>
                <Box>
                  <IconBox icon={item.icon} text={item.text} />
                </Box>
              </Col>
            );
          })}
        </Row>
      </CareerIcons>
      <Row>
        <Col className={'text-lg-center'}>
          <CareerPositionsTitle>
            <PageSubtitle text={data.pageCareer.jobBoxesTitle} />
          </CareerPositionsTitle>
        </Col>
      </Row>
      <Row className={'d-flex justify-content-center mb-5 mb-lg-0'}>
        {data.pageCareer.jobBoxes.map((item, index) => {
          let starsHtml = stars(item.seniority)
          return (
            <Col lg={4} key={uuidv4()}>
              <Box>
                <div className={'job-box'}>
                  <h3 className={'job-box__position'}>{item.position}</h3>
                  <p className={'job-box__level'} dangerouslySetInnerHTML={{ __html: starsHtml + item.level }} />
                  <ArrowButton url={item.button.url} text={item.button.text} />
                  <p className={'job-box__desc'}>{item.text}</p>
                </div>
              </Box>
            </Col>
            )
        })}
      </Row>
    </Container>
    </section>
  );
};

export default Career;
