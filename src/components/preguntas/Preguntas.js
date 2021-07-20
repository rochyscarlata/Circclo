import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Preguntas.css";

const Preguntas = () => {
  return (
    <Container fluid="sm">
      <br></br>
      <h3 className="preguntasfrec">Preguntas frecuentes</h3>
      <br></br>
      <div className="container-fluid">
      <h6 className="h6">¿Cuándo puedo hacer mi pedido a domicilio?</h6>
      <p className="respuestas">Cualquier día de la semana</p>
      <h6 className="h6">
        ¿De qué Calidad son los productos? ¿De quién son los productos? ¿Ustedes
        hacen los productos?
      </h6>
      <p className="respuestas">
        Trabajamos en base a un estándar de calidad con productores locales que
        tienen experiencia en el rubro hace ya varios años y son 100%
        confiables. La calidad es similar a las primeras marcas de
        supermercados.
      </p>
      <h6 className="h6">¿Pago por envases?</h6>
      <p className="respuestas">Sólo en tu primera compra pagas por los envases. Después
              únicamente por la recarga.</p>
      <h6 className="h6">¿Que es un envase inteligente?</h6>
<p className="respuestas">Es un envase con un chip RFID incorporado, esta tecnología que nos
              permite trackear el envase para que nunca lleguen a la basura.</p>
<h6 className="h6">¿Qué pasa si quiero dejar de comprar?
</h6>
<p className="respuestas">No importa! Tu pago en envases funciona como depósito, cuando quieras dejar de comprar te reintegramos tu dinero.</p>
<h6 className="h6">¿Puedo darte envases que ya tengo (no son deCIRCCLO)?</h6>
<p className="respuestas">No. Los envases de CIRCCLO son especificos para los productos que vendemos y para que la retornabilidad sea posible.</p>

<h6 className="h6">¿Hacen envíos al centro?</h6>
<p className="respuestas">Por el momento no. Aspiramos en un futuro a expandirnos a más zonas.</p>
<h6  className="h6">¿Hasta dónde llegamos?</h6>
<p className="respuestas">Los envíos se realizan únicamente dentro de Yerba Buena.</p>
<h6 className="h6">¿Tienen precios por mayor para empresas?</h6>
<p className="respuestas">Si. En caso de necesitarlas, hay un archivo disponible</p>
<h6 className="h6">¿Qué pasa si hacen las entregas en un horario que no estoy?
</h6>
<p className="respuestas">En el caso de los countries, los clientes pueden pagar por transferencia y dejar sus envases vacíos en el garage listos para ser intercambiados.
</p>
<h6 className="h6">¿Puedo elegir un horario?</h6>
<p className="respuestas">Siempre y cuando esté dentro de la franja horaria establecida, se puede solicitar un horario aproximado</p>
<h6 className="h6">¿Método de pago?
</h6>
<p className="respuestas">Recibimos cualquier método de pago. Los medios de pago son por transferencia o en efectivo</p>
<h6 className="h6">¿Son biodegradables?</h6>
<p className="respuestas">No.</p>
<h6 className="h6">¿Cuánto más económico es que el super?
</h6>
<p className="respuestas">En el largo plazo, comprar CIRCCLO es un 40%más económico que comprar en el super, ya que el costo envase descartable está incluido en el precio final y el consumidor lo paga cada vez que realiza una compra.</p>
<h6 className="h6">¿Hay costo de envío?</h6>
<p className="respuestas">Solo en caso de compras menores a $500, se cobra $50 de envio.</p>

      </div>
      

    </Container>
  );
};

export default Preguntas;

{
  /* <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              ¿Cuándo puedo hacer mi pedido a domicilio?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Cualquier día de la semana</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              ¿De qué Calidad son los productos? ¿De quién son los productos?
              ¿Ustedes hacen los productos?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Trabajamos en base a un estándar de calidad con productores
              locales que tienen experiencia en el rubro hace ya varios años y
              son 100% confiables. La calidad es similar a las primeras marcas
              de supermercados.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              ¿Pago por envases?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Sólo en tu primera compra pagas por los envases. Después
              únicamente por la recarga.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              ¿Que es un envase inteligente?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Es un envase con un chip RFID incorporado, esta tecnología que nos
              permite trackear el envase para que nunca lleguen a la basura.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              ¿Qué pasa si quiero dejar de comprar?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              No importa! Tu pago en envases funciona como depósito, cuando
              quieras dejar de comprar te reintegramos tu dinero.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              ¿Puedo darte envases que ya tengo (no son deCIRCCLO)?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              No. Los envases de CIRCCLO son especificos para los productos que
              vendemos y para que la retornabilidad sea posible.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              ¿El jabón para la ropa es concentrado?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              No. Está hecho para ser utilizado en el formato en que viene.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
              ¿Hacen envíos al centro?{" "}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              Por el momento no. Aspiramos en un futuro a expandirnos a más
              zonas.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="8">
              ¿Hasta dónde llegamos?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              Los envíos se realizan únicamente dentro de Yerba Buena.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="9">
              ¿Tienen precios por mayor para empresas?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              Si. En caso de necesitarlas, hay un archivo disponible.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="9">
              ¿Qué pasa si hacen las entregas en un horario que no estoy?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              En el caso de los countries, los clientes pueden pagar por
              transferencia y dejar sus envases vacíos en el garage listos para
              ser intercambiados.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="9">
              ¿Son biodegradables?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>No.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="9">
              ¿Puedo elegir un horario?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              Siempre y cuando esté dentro de la franja horaria establecida, se
              puede solicitar un horario aproximado.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="9">
              ¿Puedo retirar los productos de algún lado?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              No. El servicio es unicamente a través de envios.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion> */
}
