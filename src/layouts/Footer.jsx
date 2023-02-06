import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ButtonDefault from '../components/ButtonDefault.jsx';
import {footerBoxes, footerTitle} from "../data.js";
import BoxMiniTitle from "../components/boxMiniTitle.jsx";
import TitleBig from "../components/TitleBig.jsx";
import Copyright from '../components/Copyright';

const Footer = () => {
  return (
    <footer className='footer mt-auto'>
      <Container>
        <Row>
          <Col>
            <TitleBig title={footerTitle.title} subtitle={footerTitle.subtitle} />
          </Col>
        </Row>
      </Container>
    <Container>
        <Row>
          {footerBoxes.map((footerBox, index) => {
            const footerBoxContent = footerBox.content ? <p className={'test'} dangerouslySetInnerHTML={{ __html: footerBox.content }} /> : '';
            const footerBoxButton = footerBox.btn ? <ButtonDefault tag={footerBox.btn.tag} modifier={footerBox.btn.modifier} text={footerBox.btn.text} link={footerBox.btn.link} target='_blank' /> : '';
            return (
              <Col xl={4} key={index}>
                <div className='box-mini'>
                  <BoxMiniTitle title={footerBox.title} />
                  {footerBoxContent}
                  {footerBoxButton}
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
      <Copyright />
    </footer>
  );
};

export default Footer;
