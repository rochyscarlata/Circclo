import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Jabon from '../../assets/img/jabon.jpg'
import JabonLiquido from '../../assets/img/jabonliquido.jpg'
import Detergente from '../../assets/img/detergente.jpg'
import DetergenteMano from '../../assets/img/detergente-mano.jpg'
import Agua from '../../assets/img/agua.jpg'
import Alcohol from '../../assets/img/alcohol.jpg'

import {Container, Carousel} from 'react-bootstrap'
import './Vidriera.css'


 const Vidriera = () => {

 


     return ( 
<Container fluid>
        <h2 className="text-center">Nuestros Productos</h2>
        <h6 className="text-center">(seccion en reparacion)</h6>
      {/* <Carousel >
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={Jabon}
      alt="First slide"
      className="img-jabon"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={JabonLiquido}
      alt="Second slide"
    />

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Detergente}
      alt="Third slide"
      className="img-detergente"
    />

   
  </Carousel.Item>
</Carousel> */}
</Container>

//     
      );
 }
  
 export default Vidriera;