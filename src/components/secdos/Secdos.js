import React from 'react'
import BasurayProd from '../../assets/img/basuraconprod.jpg'
import CirccloProducto from '../../assets/img/circclojabon.jpg'
import Basura from '../../assets/img/botella-playa.jpg'
import { Parallax } from 'react-parallax';
import { Container } from 'react-bootstrap'

// import Count from '../count up'

const Secdos = () => {

    const insideStyles = {
        background: "#ececec2f" ,
        padding: 20,
        position: "absolute",
        color: " black",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      };
    return ( 
        <Container fluid>
  <Parallax  bgImage={Basura} bgImageAlt="the cat" blur={1} strength={100}>
  <div style={{ height: 700, width: 900 }}>
        <div style={insideStyles}> 
          {/* <Count/> */}
          <h2>En el largo plazo, comprar CIRCCLO es un 40%más económico que comprar en el super, ya que el costo envase descartable está incluido en el precio final y el consumidor lo paga cada vez que realiza una compra.</h2>
</div>
      </div>
  </Parallax>
            


        </Container>
     );
}
 
export default Secdos;