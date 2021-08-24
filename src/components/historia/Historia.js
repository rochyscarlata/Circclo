import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import { Row, Col, Container } from "react-bootstrap";
import Consumo from "../../assets/img/historia-consumo.png";
import Nadando from '../../assets/img/nadando.png'
import Reuso from '../../assets/img/reuso.png'
import Circular from '../../assets/img/circcloprod.jpg'
import Futuro from '../../assets/img/futuro.png'


import Fade from 'react-reveal/Fade';

import "./Historia.css";

const Historia = () => {
  const idioma = useContext(langContext);
  console.log(idioma);

  return (
    <Container fluid="md">
      <div className="titulo-hist">
        <h3 className="historia">
          <FormattedMessage id="hist.titulo" defaultMessage="Historia" />
        </h3>
      </div>
      <hr width="160"></hr>
      <br/>
      <Row>
      <Col sm className="columna-img">
      <Fade >

        <img src={Consumo} className="img-consumo"></img>
      </Fade>
        </Col>
        <Col sm>
                  <Fade >

        <h5 className="titulo-consumo">
                <FormattedMessage id="hist.consumo" defaultMessage="¿Somos conscientes de nuestro consumo?" />
              </h5>
              
              <p className="descrip-consumos">
                <FormattedMessage
                  id="hist.consumoDescrip1"
                  defaultMessage="La filosofía de consumo “Comprar, usar, desechar” es uno de los problemas más generalizados y de rápido crecimiento que enfrenta nuestro planeta en la actualidad. ¿Alguna vez nos detuvimos a pensar cuánto plástico generamos en nuestros hogares e por el uso de productos de limpieza básicos? (Detergente,Limpiador de Pisos, Jabón para la ropa,  entre otros)."
                />
              </p>
              <p className="descrip-consumo">
                <FormattedMessage
                  id="hist.consumoDescrip2"
                  defaultMessage="Vivimos en un mundo donde consumimos una cantidad y una variedad cada vez mayor de artículos desechables; de los cuales del 100% sólo un 2% se recicla efectivamente."
                />
              </p>
              <p className="descrip-consumo">
                <FormattedMessage
                  id="hist.consumoDescrip3"
                  defaultMessage="Esta filosofía de consumo de “Comprar, usar, descartar” se ha apoderado de nuestra vida cotidiana porque nos brinda una comodidad incomparable a un precio accesible."
                />
              </p>
              <p className="descrip-consumo">
                <FormattedMessage
                  id="hist.consumoDescrip4"
                  defaultMessage="Para ayudar a resolver los aspectos negativos de vivir una vida desechable, Y manteniendo sus virtudes de facilidad y accesibilidad, nos hemos asociado con fabricantes líderes a nivel provincial para reinventar sus productos."
                />
              </p>
              </Fade>
        </Col>
       
      </Row>
      <br></br>
      <hr width="60%" className="divider"></hr>
      <br></br> 
      <Row>
          
        <Col sm className="columna-derecha">
        <Fade >
        <h5 className="titulo-consumo">
                <FormattedMessage id="hist.basura" defaultMessage="La basura no desaparece" />
              </h5>
              <br></br>
              <p className="descrip-basura">
                <FormattedMessage
                  id="hist.basuraDescrip1"
                  defaultMessage="No existe el desperdicio en el mundo natural. Es una invención puramente humana, y bastante moderna. Antes de la década de 1950, los productos generalmente se fabricaban para ser de alta calidad y reutilizables; modelos como “el lechero” fueron populares."
                />
              </p>
              <p className="descrip-basura">
                <FormattedMessage
                  id="hist.basuraDescrip2"
                  defaultMessage="Luego vino la comercialización de materiales complejos (como los plásticos) que la naturaleza no tiene la capacidad de absorber."
                />
              </p>
              </Fade>
        </Col>
        <Col sm className="columna-img2">
        <Fade >
        <img src={Nadando} className="img-consumo"></img>
          </Fade>
        </Col>
      </Row>
      <br></br>
      <hr width="60%" className="divider"></hr>
      <br></br> 
      <Row>
      <Col sm className="columna-img">
        <Fade >
        <img src={Reuso} className="img-consumo"></img>
        </Fade>
        </Col>
        <Col sm>
        <Fade >
        <h5 className="titulo-consumo">
                <FormattedMessage id="hist.reuso" defaultMessage="Reciclar (Sólo) no es la respuesta" />
              </h5>
              <br></br>
              <p className="descrip-reuso">
                <FormattedMessage
                  id="hist.reusoDescrip1"
                  defaultMessage="La reutilización de un objeto ahorra tiempo, energía y recursos."
                />
              </p>
              <p className="descrip-reuso">
                <FormattedMessage
                  id="hist.reusoDescrip2"
                  defaultMessage="Consideremos el ejemplo de “El lechero”, donde los consumidores compraban leche en botellas de vidrio duraderas, que luego se recolectaban y rellenaban cuando estaban vacías. Esta reutilización eliminó la necesidad de nueva energía, tiempo y recursos para fabricar otra botella para la próxima compra de leche."
                />
              </p>
              <p className="descrip-reuso">
                <FormattedMessage
                  id="hist.reusoDescrip3"
                  defaultMessage="El reciclaje es importante porque considera que los “residuos” son un recurso útil, para la fabricación. Sin embargo, a diferencia de la reutilización, requiere que un objeto se descomponga nivel material para usarse en una nueva producción. Cambiar la forma de un objeto requiere energía y recursos, al igual que recolectar y clasificar el material para su procesamiento."
                />
              </p>
             </Fade>
        </Col>
        
      </Row>
           <br></br>
      <hr width="60%" className="divider"></hr>
      <br></br> 
      <Row>
     
     <Col sm className="columna-derecha">
     <Fade >
     <h5 className="titulo-consumo">
             <FormattedMessage id="hist.circular" defaultMessage="Economía circular" />
           </h5>
           <br></br>
           <p className="descrip-circular">
             <FormattedMessage
               id="hist.circularDescrip1"
               defaultMessage="La mayoría de los productos actuales son “lineales”, es decir, se desechan  después de su uso (generalmente único). Este modelo unidireccional envía recursos valiosos a la basura."
             />
           </p>
           <p className="descrip-circular">
             <FormattedMessage
               id="hist.circularDescrip2"
               defaultMessage="En un sistema “circular”, esa línea se convierte en un círculo que mantiene los recursos en uso y recorriendo el sistema durante el mayor tiempo posible."
             />
           </p>
           <p className="descrip-circular">
             <FormattedMessage
               id="hist.circularDescrip3"
               defaultMessage="El objetivo de la economía circular es hacer que nuestros productos vuelvan de ser inútiles a útiles."
             />
           </p>
           </Fade>
     </Col>
     <Col sm className="columna-img2">
     <Fade >
     <img src={Circular} className="img-circular"></img>
      </Fade>
     </Col>
   </Row>
   <br></br>
      <hr width="60%" className="divider"></hr>
      <br></br> 

   <Row>
      <Col sm className="columna-img">
      <Fade >

        <img src={Futuro} className="img-consumo"></img>
      </Fade>
        </Col>
        <Col sm>
                  <Fade >

        <h5 className="titulo-consumo">
                <FormattedMessage id="hist.futuro" defaultMessage="El futuro de cómo consumimos" />
              </h5>
              
              <p className="descrip-consumo">
                <FormattedMessage
                  id="hist.futuroDescrip1"
                  defaultMessage="Tomamos decisiones todos los días, con nuestro dinero, para el futuro que queremos. Inclinemos esa decisión por los productos que son regenerativos y circulares, en lugar de destructivos y lineales, y comparta nuestro sueño: que un día podamos recordar el concepto de desperdicio como una anomalía que agradecemos haber superado."
                />
              </p>
              <p className="descrip-consumo">
                <FormattedMessage
                  id="hist.futuroDescrip2"
                  defaultMessage="“El poder de cambio que necesitamos para nuestro planeta está en manos de los consumidores. Tu compra significa un voto a la marca que consumís. Vota consciente”"
                />
              </p>
             
              </Fade>
        </Col>
       
      </Row>

    </Container>
  );
};

export default Historia;
