import React from 'react'
// import Carousel from 'nuka-carousel';

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
        <h2 className="text-center nuestros-prod">Nuestros Productos</h2>
        <br/>
        <br/>
      <Carousel variant="dark" controls="true">
  <Carousel.Item >
    <img
      src={Jabon}
      alt="First slide"
      className="img-jabon"
    />
  
  </Carousel.Item>
 
 
  
  <Carousel.Item >
    <img
      src={DetergenteMano}
      alt="First slide"
      className="img-jabon"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={Alcohol}
      alt="Third slide"
      className="img-jabon"
    />

   
  </Carousel.Item>

</Carousel>
</Container>

//     
      );
 }
  
 export default Vidriera;