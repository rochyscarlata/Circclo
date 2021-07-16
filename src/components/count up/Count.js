import React from "react";
import CountUp from "react-countup";
import Fade from 'react-reveal/Fade';

import { Container, Col, Row } from "react-bootstrap";
import "./Count.css";
const Count = () => {
  return (
    <Fade bottom>
    <Container fluid className="contenedor">
      <Row>
        <Col sm className="columna">
          <h3 className="titulos-count">Envases reciclados</h3>
          <div className="padre-count">
          <CountUp className="contador" start={0} end={10000} duration={6} z />

          </div>
        </Col>
        <Col sm>
          <h3 className="titulos-count">Casas</h3>
          <div className="padre-count">
          <CountUp className="contador text-center" start={0} end={500} duration={12} z />

          </div>
        </Col>
        <Col sm>
          <h3 className="titulos-count">Algo</h3>
          <div className="padre-count">
          <CountUp className="contador" start={0} end={900} duration={12} z />
          </div>
        
        </Col>
      </Row>
    </Container>
    </Fade>
  );
};

export default Count;
