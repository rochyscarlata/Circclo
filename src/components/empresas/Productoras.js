import React from "react";
import Marquee from "react-fast-marquee";
import  Clorosal from '../../assets/logos/clorosal.png'
import Beleza from '../../assets/logos/beleza.jpg'
import Frau from '../../assets/logos/frau.jpg'
import Limplus from '../../assets/logos/logolimplus.jpg'
import {Container } from 'react-bootstrap'
import './Productoras.css'
const Prodcutoras = () => {
  return (
    <Container fluid="md">
        <br></br>
      <h3 className="textoProductoras"> ¡Fomentamos el comercio local y empoderamos las economías locales! Por un comercio justo y sostenible. </h3>
      <h3 className="textoProductorash2">Empresas que se sumaron al cambio</h3>
     <div className="container-fluid">
         <a href="https://www.clorosal.com.ar/" target="_blank"> 
         <img src={Clorosal} alt="logo"  className="logoCloro" alt="logo-Clorosal" width="230" height="auto" />
         </a>
    
    <img src={Beleza} alt="logo" className="logoBeleza"  alt="logo-Beleza" width="auto" height="100" />
   
     

      <img src={Frau} alt="logo" className="logoFrau"  alt="logo-Frau" width="230" height="auto" />
      <a href="http://limplus.com.ar/" target="_blank">
      <img src={Limplus} alt="logo" className="logoLimplus"  alt="logo-Limplus" width="230" height="auto" />

      </a>
     </div>
      
      
      
    </Container>
  );
};

export default Prodcutoras;
