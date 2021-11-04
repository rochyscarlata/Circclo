import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import Refill from "../../assets/img/refill.png";
import Gif from "../../assets/img/gif.gif";
import { IntlProvider, FormattedMessage } from "react-intl";
import MensajesIngles from "../../lang/en-US.json";
import MensajesEspañol from "../../lang/es-AR.json";
import { langContext } from "../../context/langContext";
import NavBar from "../navbar/Navbar";
import emailjs from "emailjs-com"

import Swal from "sweetalert2";

import "./Main.css";
function Main() {
  const idioma = useContext(langContext);
  console.log(idioma);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_vr7gbdk", "template_owzw9uj", e.target,
     "user_uNcjRaKIXuCVT3opMq3Pe"
     ).then(res=>{
       console.log(res)
       
     }).catch(err=>console.error(err));
  }
   
 

  return (
    <Container fluid="md">
      <Row>
        <Col sm>
          <h1 className="frase-main">
            <FormattedMessage
              id="frase.main"
              defaultMessage="El futuro de nuestro planeta, no puede ser "
            />
          </h1>
          <h1 className="frase-mainx">
            <FormattedMessage id="frase.mainx" defaultMessage="descartable." />
          </h1>
          <br></br>
          <div className="divbtn">
            <Button className="btn-revolucion" onClick={() => handleShow()}>
              {" "}
              Quiero sumarme!
            </Button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-center">Sumate!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="contenido-form">
        <Form className="formulario-contacto">
          <Form.Group className="" >
            <Form.Control 
              type="name"
              name="name"
              placeholder="Nombre y apellido" 
              required
              />
          </Form.Group>
          <Form.Group className="" >
            <Form.Control 
            type="number"
            name="phone" 
            placeholder="Celular"
            required
            />
          </Form.Group>
          <Form.Group className="" >
            <Form.Control 
            type="email" 
            name="email" 
            placeholder="Email" 
            required
            />
          </Form.Group>
        
          <Form.Group className="mb-3" >
            <Form.Control 
            as="textarea" 
            name="message" rows={3}  
            placeholder="Mensaje"
            required
            />
          </Form.Group>
          <Button variant="success" className="btn-color-enviar" onClick={handleClose}>Enviar</Button>
        </Form>
      </div>
     
            </Modal.Body>
         
          </Modal>
          <br></br>
        </Col>
        <Col sm className="columna-main">
          <img src={Gif} className="refill-img"></img>
        </Col>
      </Row>
      <br></br>
    </Container>
  );
}

export default Main;
