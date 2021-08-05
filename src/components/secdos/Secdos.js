import React from 'react'
import BasurayProd from '../../assets/img/basuraconprod.jpg'
import CirccloProducto from '../../assets/img/circclojabon.jpg'
import Basura from '../../assets/img/basural-paralaxx.jpeg'
import { Background, Parallax } from 'react-parallax';
import { Container } from 'react-bootstrap'
import './Secdos.css'

// import Count from '../count up'

const Secdos = () => {

    return ( 
        <Container fluid="xxl" className="basural-img">
           <div  >
        <div className="contenedor-texto-basural">
          <div className="texto-basura">
          <p className="texto-debasura">
            ¿Alguna vez preguntaste cuantos envases plasticos tiraste a la basura en tu hogar y donde fueron a parar realmente? 
            #RetornandoLosEnvasesNuncaSeConviertenEnBasura.
          </p>
          </div>
           
        </div>
          
         </div>
          {/* <img src={Basura} /> */}

         
        </Container>
     );
}
 
export default Secdos;