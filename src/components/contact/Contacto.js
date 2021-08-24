import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Contacto.css";
import Fade from "react-reveal";
import axios from "axios";
export default class Contacto extends React.Component {


    state={
      name: '',
      phone:'',
      email: '',
      message:'',
      sent:false
    }

    // manejando los input 
      handleName=(e)=>{
        this.setState({
          name: e.target.value
        })
      }
      handlePhone=(e)=>{
        this.setState({
          phone: e.target.value
        })
      }
      handleEmail=(e)=>{
        this.setState({
          email: e.target.value
        })
      }
      handleMessage=(e)=>{
        this.setState({
          message: e.target.value
        })
      }
    // fin de los input 



    // envio a la api
    formSubmit=(e)=>{
      e.preventDefault();

      let data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      }


      axios.post('/api/forma', data)
      .then(res=>{
        this.setState({
          sent:true,
        }, this.resetForm())
      }).catch(()=>{
        console.log('El mensaje no se pudo enviar, intente nuevamente mas tarde')
      })

    }

    // para resetear el formulario

    resetForm=()=>{
      this.setState({
        name: '',
      phone:'',
      email: '',
      message:'',
      })

      setTimeout(()=>{
        this.setState({
          sent:false,
        })
      },3000)
    }

  render() {
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
            <Form.Control 
              type="name"
              name="name"
              placeholder="Nombre y apellido" 
              value={this.state.name}
              onChange={this.handleName}
              />
          </Form.Group>
          <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            <Form.Control 
            type="number"
            name="phone" 
            placeholder="Celular"
            value={this.state.phone}
            onChange={this.handlePhone}
            />
          </Form.Group>
          <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Control 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={this.state.email}
            onChange={this.handleEmail}
            />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control 
            as="textarea" 
            name="message" rows={3}  
            placeholder="Mensaje"
            value={this.state.message}
            onChange={this.handleMessage}
            />
          </Form.Group>
        </Form>
      </div>
      <div  className="btn-enviar">
      <Button variant="success" className="btn-color-enviar">Enviar</Button>
        <br></br>
      </div>

  
    </div>
    )
  }
}