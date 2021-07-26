import React, {useContext} from 'react'
import {Container, Row, Col, Button, Navbar} from 'react-bootstrap'
import Refill from '../../assets/img/refill.png'
import Video from '../../assets/img/video.mp4'
import { IntlProvider, FormattedMessage } from 'react-intl';
import MensajesIngles from '../../lang/en-US.json'
import MensajesEspañol from '../../lang/es-AR.json'
import { langContext } from '../../context/langContext';
import NavBar from '../navbar/Navbar'
import './Main.css'
function Main() {

    const idioma = useContext(langContext);
    console.log(idioma);

    return (
       
        <Container fluid="md" >
            <br></br>
           
            <Row>
                <Col >
                <h1 className="frase-main">
                    <FormattedMessage  
                    id="frase.main"
                    defaultMessage="Soluciones inteligentes a productos de primera necesidad"
                    /> 
                </h1>
                <br></br>
                <div className="divbtn">
                <Button className="btn-revolucion"> Sumate a la revolucion</Button>

                </div>
                <br></br>
                </Col>
                <Col className="contenedor-gif">
                <video  autoPlay loop="true" className="refill-img">
                    <source src={Video}  type="video/mp4"></source>
                </video>
                </Col>
            </Row>
            <br></br>
        </Container>
       
    )
}

export default Main
