import React, {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DataContext} from "../context/DataContext.jsx";
import {Container, Row, Col} from 'react-bootstrap';
import ButtonDefault from '../components/ButtonDefault.jsx';
import BoxMiniTitle from "../components/boxMiniTitle.jsx";
import TitleBig from "../components/TitleBig.jsx";
import Copyright from '../components/Copyright';

const Footer = () => {
  const data = useContext(DataContext);

  if (!data.footer) return false;

  return (
    <footer id={'footer'} className='footer mt-auto'>
      <Container>
        <Row>
          <Col>
            <TitleBig title={data.footer.title} subtitle={data.footer.subtitle} />
          </Col>
        </Row>
      </Container>
    <Container>
        <Row>
          {data.footer.boxes.map((box, index) => {
            const boxContent = box.content ? <p className={'test'} dangerouslySetInnerHTML={{ __html: box.content }} /> : '';
            const boxButton = box.btn ? <ButtonDefault tag={box.btn.tag} modifier={box.btn.modifier} text={box.btn.text} link={box.btn.link} target='_blank' /> : '';
            return (
              <Col xl={4} key={uuidv4()} className={'mb-4 mb-xl-0'}>
                <div className='box-mini'>
                  <BoxMiniTitle title={box.title} />
                  {boxContent}
                  {boxButton}
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
