import React, {useState, useContext} from "react";
import CountUp from "react-countup";
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import "./Count.css";

const Count = () => {
  const idioma = useContext(langContext);
  console.log(idioma);

  const [focus, setFocus] = React.useState(false);

  return (
    <Fade bottom>
    <Container fluid="sm" className="contenedor">
    <blockquote>  </blockquote>
      <br></br>
      <Row>
       
        <Col sm className="col-contador">
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
          <h3 className="titulos-count">
          <FormattedMessage id="count.envases" defaultMessage="Envases Reciclados" /></h3>

        </Col>
        <br/>
        <Col sm className="col-contador-derecha">
        
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
          <h3 className="titulos-count"><FormattedMessage id="count.hogares" defaultMessage="Hogares Alcanzados" /></h3>
        
        </Col>
      </Row>
      <br></br>
    </Container>
    </Fade>
  );
};

export default Count;
