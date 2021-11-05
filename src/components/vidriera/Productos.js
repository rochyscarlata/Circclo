import React from "react";
import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
import "./Vidriera.css";

const Vidriera = () => {
  return (
    <Container fluid>
      <h1 className="text-center titulo-comentarios">
        HOGARES QUE FORMAN PARTE
      </h1>
      <br />
      <Carousel variant="dark">
        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <p className="opiniones">
                  “ Los productos son muy buenos, el precio esta adecuado.
                  Excelente iniciativa para cuidar el medioambiente y más
                  excelente es la atencion y el seguimiento. ”
                </p>
              </Card>
              <br></br>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <p className="opiniones-texto">
                  “ Felicitarlos y agradecerles por pensar en el futuro, por su
                  calidez y amabilidad. Son una esperanza y es una caricia al
                  alma comprarles.(Siempre los pongo como ejemplo de dedicacion,
                  inteligencia y perseverancia) ojala no cambien nunca. ”
                </p>
              </Card>
              <br></br>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <br></br>
                <br></br>
                <p className="opiniones"> “ ¡Me encanta la propuesta! ”</p>
              </Card>
              <br></br>
            </Col>
          </Row>{" "}
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <p className="opiniones">
                  {" "}
                  “ Me copa el emprendimiento! En todos sus sentidos. A los
                  fines prácticos, solo me agregaría un producto tipo ciff para
                  baño porque asi evito el grueso de limpieza en el super! Pero
                  muy bueno, mucho éxito! ”
                </p>
              </Card>
              <br></br>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <br></br>
                <p className="opiniones">
                  “ La verdad estoy súper conforme, son súper cumplidos,
                  eficientes, educados y me resulta cómodo el sistema. ”
                </p>
              </Card>
              <br></br>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <br></br>
                <p className="opiniones">
                  “ Excelente equipo y sobretodo capos en comunicación. Prolijos
                  en todo. ”
                </p>
              </Card>
              <br></br>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Vidriera;
