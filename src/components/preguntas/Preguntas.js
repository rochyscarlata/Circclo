import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Preguntas.css";

const Preguntas = () => {
  return (
    <Container fluid="sm">
      <br></br>
      <h2 className="preguntasfrec">Preguntas frecuentes</h2>
      <hr  width="180"></hr>
      <br></br>
      <div className="preguntas-padre">
       
      <Accordion className="preguntas-hijo">
        <Card>
          <Card.Header >
            <Accordion.Toggle  variant="link" eventKey="0" className="acor">
              <h6 className="h6">¿Que es un envase inteligente?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="respuestasgrandes">
              <p className="respuestas">Es un envase con un chip RFID incorporado, esta tecnología que nos permite trackear el envase para que nunca lleguen a la basura.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card >
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="1">
              <h6 className="h6">¿Cuándo puedo hacer mi pedido a domicilio?

              </h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="respuestasgrandes">
              <p className="respuestas">
              Cualquier día de la semana.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="2">
              <h6 className="h6">
              ¿De qué Calidad son los productos? ¿Ustedes hacen los productos?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="respuestasgrandes">
              <p className="respuestas">
              Trabajamos en base a un estándar de calidad con productores locales que tienen experiencia en el rubro hace ya varios años y son 100% confiables. La calidad es similar a las primeras marcas de supermercados.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="3">
              <h6 className="h6">¿Pago por envases?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="respuestasgrandes">
              <p className="respuestas">
              Sólo en tu primera compra pagas por los envases. Después únicamente por la recarga.
              </p>{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="4">
              <h6 className="h6">¿Qué pasa si quiero dejar de comprar?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body className="respuestasgrandes">
              <p className="respuestas">
              No importa! Tu pago en envases funciona como depósito, cuando quieras dejar de comprar te reintegramos tu dinero.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="5">
              <h6 className="h6">
                ¿Puedo darte envases que ya tengo (no son de CIRCCLO)?
              </h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body className="respuestasgrandes">
              <p className="respuestas">
              No. Los envases de CIRCCLO son específicos para los productos que vendemos y para que la retornabilidad sea posible.
              </p>{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="6">
              <h6 className="h6">¿Hasta dónde llegamos?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <p className="respuestas">
              Los envíos se realizan únicamente dentro de Yerba Buena.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="7">
              <h6 className="h6">¿Puedo elegir un horario?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <p className="respuestas">Siempre y cuando esté dentro de la franja horaria establecida, se puede solicitar un horario aproximado.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="8">
              <h6 className="h6">¿Método de pago?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <p className="respuestas">Recibimos cualquier método de pago. Los medios de pago son por transferencia o en efectivo.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="9">
              <h6 className="h6">¿Puedo retirar los productos de algún lado?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              <p className="respuestas">No. El servicio es únicamente a través de envíos puerta a puerta.
</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="10">
              <h6 className="h6">¿Hacen envíos al centro?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body>
              <p className="respuestas">
                Por el momento no. Aspiramos en un futuro a expandirnos a más
                zonas.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="11">
              <h6 className="h6">¿Hasta dónde llegamos?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="11">
            <Card.Body>
              <p className="respuestas">
                Los envíos se realizan únicamente dentro de Yerba Buena.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="12">
              <h6 className="h6">¿Tienen precios por mayor para empresas?</h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              <p className="respuestas">
                Si. En caso de necesitarlas, hay un archivo disponible.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="13">
              <h6 className="h6">
                ¿Qué pasa si hacen las entregas en un horario que no estoy?
              </h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="13">
            <Card.Body className="respuestasgrandes">
              <p className="respuestas">
                En el caso de los countries, los clientes pueden pagar por
                transferencia y dejar sus envases vacíos en el garage listos
                para ser intercambiados.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="14">
              <h6 className="h6">
              ¿Puedo elegir un horario?
              </h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="14">
            <Card.Body className="respuestasgrandes">
              <p className="respuestas" >
              Siempre y cuando esté dentro de la franja horaria establecida, se puede solicitar un horario aproximado
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="15">
              <h6 className="h6">
              ¿Puedo retirar los productos de algún lado?              </h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="15">
            <Card.Body>
              <p className="respuestas">
              No. El servicio es unicamente a través de envios.

              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="16">
              <h6 className="h6">
              ¿Cuánto más económico es que el supermercado?
              </h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="16">
            <Card.Body>
              <p className="respuestas">
              En el largo plazo, comprar Circclo es un 40%más económico que comprar en el super, ya que el costo envase descartable está incluido en el precio final y el consumidor lo paga cada vez que realiza una compra. </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="17">
              <h6 className="h6">
              ¿Tengo que pedir todo junto?
              </h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="17">
            <Card.Body>
              <p className="respuestas">
              No hace falta. Los productos se pueden pedir a medida que se vayan terminando

              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="acor" variant="link" eventKey="18">
              <h6 className="h6">
              ¿Hay costo de envío?
              </h6>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="18">
            <Card.Body >
              <p className="respuestas">
              No. Solo en caso de compras menores a $500, se cobra $50 de envio.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
       
      </Accordion>
     
     </div>
    </Container>
  );
};

export default Preguntas;
