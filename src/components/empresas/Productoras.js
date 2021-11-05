import React, {useContext} from "react";
import Marquee from "react-fast-marquee";
import Clorosal from "../../assets/logos/clorosal.png";
import Beleza from "../../assets/logos/beleza.jpg";
import Frau from "../../assets/logos/frau.jpg";
import Limplus from "../../assets/logos/logolimplus.jpg";
import { Container, Carousel } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import "./Productoras.css";
const Prodcutoras = () => {
  const idioma = useContext(langContext);
    console.log(idioma);
  return (
    <Container fluid="md">
      <br></br>
     <h1 className="titulo-productoras">

     <FormattedMessage 
          id="empresas.tituloUno"
          defaultMessage="MARCAS QUE NOS ACOMPAÑAN" />
       </h1> 
      <br></br> 
      <br></br>
      <h3 className="textoProductoras">
        {" "}
        <FormattedMessage 
          id="empresas.tituloDos"
          defaultMessage="Buscamos fomentar y defender las economías locales para un comercio justo y sostenible. " />{" "}
      </h3>
      <h3 className="textoProductorash2"> <FormattedMessage 
          id="empresas.subtitulo"
          defaultMessage="Estos son los fabricantes con los que generamos una alianza" /></h3>
          <br/>
      
       <div className="contenedor-padre-productoras">
          <div className="contenedor-hijo-productoras">
                <img src={Limplus} width="140" alt="limplus" height="auto" className="empresas-produc"></img>
        <img src={Beleza} width="auto" alt="beleza" height="100" className="empresas-produc"></img>
        <img src={Clorosal} width="130" alt="clorosal" height="auto" className="empresas-produc"></img>
        <img src={Frau} width="130" alt="frau" height="auto" className="empresas-produc"></img>
     
          </div>
       </div>
        
     
        
        <br></br>
<br></br>
   
    </Container>
  );
};

export default Prodcutoras;

{
}
