import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Contacto.css";
import Navbar from "../navbar/Navbar"

import Fade from "react-reveal";
import axios from "axios";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contacto = () => {
  const [sent, setSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vr7gbdk",
        "template_owzw9uj",
        e.target,
        "user_uNcjRaKIXuCVT3opMq3Pe"
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Mensaje enviado!",
          showConfirmButton: false,
          timer: 1500,
        });
        //  if(res==200){
        //   setSent(true);

        //  }
        e.target.reset();
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
    <Navbar/>
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
        <Form className="formulario-contacto" onSubmit={sendEmail}>
          <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="name"
              name="name"
              placeholder="Nombre y apellido"
            />
          </Form.Group>
          <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            <Form.Control type="number" name="phone" placeholder="Celular" />
          </Form.Group>
          <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" name="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Mensaje"
            />
          </Form.Group>
          {/* <div className={sent ?  'msg msgAppear' : 'msg'}>
     <h6> Mensaje enviado con exito</h6>
      </div> */}
          <div className="btn-enviar">
            <Button
              variant="success"
              type="submit"
              className="btn-color-enviar"
            >
              Enviar
            </Button>
            <br></br>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
};

export default Contacto;
