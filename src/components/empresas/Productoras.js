import React from "react";
import Marquee from "react-fast-marquee";
import Clorosal from "../../assets/logos/clorosal.png";
import Beleza from "../../assets/logos/beleza.jpg";
import Frau from "../../assets/logos/frau.jpg";
import Limplus from "../../assets/logos/logolimplus.jpg";
import { Container, Carousel } from "react-bootstrap";
import "./Productoras.css";
const Prodcutoras = () => {
  return (
    <Container fluid="md">
      <br></br>
      <h3 className="textoProductoras">
        {" "}
        ¡Fomentamos el comercio local y empoderamos las economías locales! Por
        un comercio justo y sostenible.{" "}
      </h3>
      <h3 className="textoProductorash2">Empresas que se sumaron al cambio</h3>
          <br/>
     <Marquee className="marque-produc" gradientWidth="no" pauseOnHover>
       
          <img src={Limplus} width="230" height="auto" className="empresas-produc"></img>
        <img src={Beleza} width="auto" height="170" className="empresas-produc"></img>
        <img src={Clorosal} width="230" height="auto" className="empresas-produc"></img>
        <img src={Frau} width="230" height="auto" className="empresas-produc"></img>
     
        <img src={Limplus} width="230" height="auto" className="empresas-produc"></img>        
        <img src={Beleza} width="auto" height="170" className="empresas-produc"></img>
        
        <img src={Clorosal} width="230" height="auto" className="empresas-produc"></img>
        
        <img src={Frau} width="230" height="auto" className="empresas-produc"></img>
        
        

      </Marquee>
    </Container>
  );
};

export default Prodcutoras;

{
}
