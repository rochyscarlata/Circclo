import React, { useContext } from "react";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
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

  const mostrarAlerta = () => {
    Swal.fire({
        input: 'email',
        inputLabel: 'Email (falta todo el form)',
        inputPlaceholder: 'Ingresa tu email...',
        inputAttributes: {
          'aria-label': 'hola'
        },confirmButtonText: 'Enviar',
        confirmButtonColor: '#42893D'
      })
      
     
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
      <br></br>

      <Row>
        <Col sm>
          <h1 className="frase-main">
            <FormattedMessage
              id="frase.main"
              defaultMessage="Soluciones inteligentes a productos de primera necesidad"
            />
          </h1>
          <br></br>
          <div className="divbtn">
            <Button className="btn-revolucion" onClick={() => mostrarAlerta()}>
              {" "}
              Sumate a la revolucion
            </Button>
          </div>
          <br></br>
          {/* <h1  className="frase-mainx">inteligentes</h1><h1  className="frase-mainz">a productos de primera necesidad</h1> */}
        </Col>
        <Col sm className="columna-main">
          <img src={Gif} className="refill-img"></img>

          {/* <video  autoPlay loop="true" className="refill-img">
                    <source src={Video}  type="video/mp4"></source>
                </video> */}
        </Col>
      </Row>
      <br></br>
    </Container>
  );
}

export default Main;
