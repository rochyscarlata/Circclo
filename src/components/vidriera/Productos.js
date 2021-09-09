import React from "react";
// import Carousel from 'nuka-carousel';

import SimpleImageSlider from "react-simple-image-slider";
import Coment1 from "../../assets/img/comentarios/1.jpg";
import Coment2 from "../../assets/img/comentarios/2.jpg";
import Coment3 from "../../assets/img/comentarios/3.jpg";
import Coment4 from "../../assets/img/comentarios/4.jpg";
import Coment5 from "../../assets/img/comentarios/5.jpg";
import Coment6 from "../../assets/img/comentarios/6.jpg";

import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
import "./Vidriera.css";

const Vidriera = () => {
  return (
    <Container fluid>
      <h1 className="text-center titulo-comentarios">HOGARES QUE FORMAN PARTE</h1>
      <br />
      <Carousel variant="dark" controls="true">
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
          {/* <img
        src={Coment1}
        alt="First slide"
        className="img-jabon"
      />
     */}
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <p className="opiniones">
                “ Felicitarlos y agradecerles por pensar en el futuro, por su
                calidez y amabilidad. Son una esperanza y es una caricia al alma
                comprarles.(Siempre los pongo como ejemplo de dedicacion,
                inteligencia y perseverancia) ojala no cambien nunca. ”
                </p>
            
              </Card>
              <br></br>  
            </Col>
          </Row>

          {/* <img
      src={Coment2}
      alt="First slide"
      className="img-jabon"
    />
   */}
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
              <p className="opiniones">              “ ¡Me encanta la propuesta! ”
</p>

              </Card>
            <br></br>  
            </Col>
          </Row>{" "}
          {/* <img
      src={Coment3}
      alt="First slide"
      className="img-jabon"
    />
   */}
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <p className="opiniones">  “ Me copa el emprendimiento! En todos sus sentidos. A los fines
                prácticos, solo me agregaría un producto tipo ciff para baño
                porque asi evito el grueso de limpieza en el super! Pero muy
                bueno, mucho éxito! ”</p>
             
              </Card>
              <br></br>  
            </Col>
          </Row>
          
          {/* <img
      src={Coment4}
      alt="First slide"
      className="img-jabon"
    /> */}
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <p className="opiniones">
                “ La verdad estoy súper conforme, son súper cumplidos,
                eficientes, educados y me resulta cómodo el sistema. ”
                </p>
             
              </Card>
              <br></br>  
            </Col>
          </Row>
          {/* <img
      src={Coment5}
      alt="First slide"
      className="img-jabon"
    /> */}
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card body className="opiniones">
                <p className="opiniones">
                “ Excelente equipo y sobretodo capos en comunicación. Prolijos en
                todo. ”
                </p>
             
              </Card>
              <br></br>  
            </Col>
          </Row>
          {/* <img
      src={Coment6}
      alt="First slide"
      className="img-jabon"
    />
   */}
        </Carousel.Item>
      </Carousel>
    </Container>

    //
  );
};

export default Vidriera;
