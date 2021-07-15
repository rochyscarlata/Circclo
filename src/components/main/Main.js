import React, {useContext} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Refill from '../../assets/img/refill.png'
import { IntlProvider, FormattedMessage } from 'react-intl';
import MensajesIngles from '../../lang/en-US.json'
import MensajesEspañol from '../../lang/es-AR.json'
import { langContext } from '../../context/langContext';

import './Main.css'
function Main() {

    const idioma = useContext(langContext);
    console.log(idioma);

    return (
        <Container >
            <br></br>
            <Row>
                <Col >
                <h1 className="frase-main">
                    <FormattedMessage  
                    id="frase.main"
                    defaultMessage="Hola"
                    /> 
                </h1>
                {/* <h1  className="frase-mainx">inteligentes</h1><h1  className="frase-mainz">a productos de primera necesidad</h1> */}
                </Col>
                <Col >
                <img src={Refill} className="refill-img"  ></img>
                </Col>
            </Row>
            <br></br>
        </Container>
    )
}

export default Main
