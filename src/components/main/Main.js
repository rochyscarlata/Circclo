import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import Refill from "../../assets/img/refill.png";
import Gif from "../../assets/img/gif.gif";
import { IntlProvider, FormattedMessage } from "react-intl";
import MensajesIngles from "../../lang/en-US.json";
import MensajesEspañol from "../../lang/es-AR.json";
import { langContext } from "../../context/langContext";
import NavBar from "../navbar/Navbar";
import Swal from "sweetalert2";

import "./Main.css";
function Main() {
  const idioma = useContext(langContext);
  console.log(idioma);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mostrarAlerta = () => {
    Swal.fire({
      input: "email",
      inputLabel: "Email (falta todo el form)",
      inputPlaceholder: "Ingresa tu email...",
      inputAttributes: {
        "aria-label": "hola",
      },
      confirmButtonText: "Enviar",
      confirmButtonColor: "#42893D",
    });
  };

  // function Sumate(){
  //     const { value: email } = await Swal.fire({
  //         title: 'Input email address',
  //         input: 'email',
  //         inputLabel: 'Your email address',
  //         inputPlaceholder: 'Enter your email address'
  //       })

  //       if (email) {
  //         Swal.fire(`Entered email: ${email}`)
  //       }
  // }

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
              <Modal.Title>Sumate!</Modal.Title>
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
        </Form>
      </div>
     
            </Modal.Body>
            <Modal.Footer>

              <Button variant="success" className="btn-color-enviar" onClick={handleClose}>Enviar</Button>
            </Modal.Footer>
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
