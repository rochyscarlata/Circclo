import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Contacto.css";
import Fade from "react-reveal";

const Contacto = () => {
  return (
    <div class="container contenedor-hiw">
      <Fade bottom>
        <h2 className="contacto-titulo">Estemos en contacto</h2>
        <hr width="100"></hr>
      </Fade>
      <br></br>
      <div className="titulos-padre">
        <div className="contacto-subtitulos">
          <Fade bottom>
            <h4 className="contacto-subtitulo">
              Tú ganas dinero cada vez que compras usando envases inteligentes y
              el planeta tiene un desecho menos.
            </h4>
            <h4 className="contacto-subtitulo2"> Súmate a la revolución</h4>
          </Fade>
          <blockquote> </blockquote>
          <br />
        </div>
      </div>
      <br />
      <div className="contenido-padre">
        <Fade>
          {" "}
          <Row className="contacto-items">
            <Col>
              <i class="fas fa-map-marker-alt fa-2x"></i>
              <br></br>
              <h6 className="info-contacto-items">Yerba Buena, Tucuman</h6>
            </Col>
            <Col>
              <i class="fas fa-phone-alt fa-2x"></i>
              <br></br>
              <h6 className="info-contacto-items">+54 9 3814620450</h6>
            </Col>
            <Col>
              <i class="fas fa-at fa-2x"></i>
              <br></br>
              <h6 className="info-contacto-items">circclo.arg@gmail.com</h6>
            </Col>
          </Row>
        </Fade>
      </div>
      <div className="card-padre">
        <h5 className="card-hijo">Envianos un mensaje</h5>
        <br></br>
      </div>
      <br />
      <div className="contenido-form">
        <Form className="formulario-contacto">
          <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Control type="name" placeholder="Nombre y apellido" />
          </Form.Group>
          <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            <Form.Control type="number" placeholder="Celular" />
          </Form.Group>
          <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3}  placeholder="Mensaje"/>
          </Form.Group>
        </Form>
      </div>
      <div  className="btn-enviar">
      <Button variant="success" className="btn-color-enviar">Enviar</Button>
        <br></br>
      </div>

  
    </div>
  );
};

export default Contacto;
