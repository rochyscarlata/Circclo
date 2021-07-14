import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Refill from '../../assets/img/refill.png'
import './Main.css'
function Main() {
    return (
        <Container>
            <br></br>
            <Row>
                <Col>
                <h1 className="frase-main">Soluciones Inteligentes a productos de primera necesidad</h1>
                </Col>
                <Col>
                <img src={Refill} className="refill-img"  ></img>
                </Col>
            </Row>
            <br></br>
        </Container>
    )
}

export default Main
