import React, {useState} from "react";
import CountUp from "react-countup";
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";

import "./Count.css";

const Count = () => {

  const [focus, setFocus] = React.useState(false);

  return (
    <Fade bottom>
    <Container fluid className="contenedor">
    <blockquote>  </blockquote>
      <br></br>
      <Row>
        <Col sm className="columna">
          <h3 className="titulos-count">
            Algunos <br/> datos <br/>
            interesantes
          </h3>
        </Col>
        <Col sm>
        <h3 className="titulos-count">Envases reciclados</h3>
          <div className="padre-count">
            
          <CountUp className="contador" start={focus ? 0 : null} end={24000} duration={6} z >
          {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                    if (isVisible) { setFocus(true); }
                }}>
                  <h3 ref={countUpRef} />
                </VisibilitySensor>
            )}
          </CountUp>

          </div>
        </Col>
        <Col sm>
        <h3 className="titulos-count">Hogares alcanzados</h3>
          <div className="padre-count">
          <CountUp className="contador text-center" start={focus ? 0 : null} end={500} duration={8} z >
          {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                    if (isVisible) { setFocus(true); }
                }}>
                  <h3 ref={countUpRef} />
                </VisibilitySensor>
            )}
          </CountUp>


          </div>
        
        </Col>
      </Row>
      <br></br>
    </Container>
    </Fade>
  );
};

export default Count;
