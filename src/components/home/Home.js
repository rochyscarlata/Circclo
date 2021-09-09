import React from "react";
import Marquee from "react-fast-marquee";
import Count from "../count up/Count";
import Prodcutoras from "../empresas/Productoras";
import Secdos from "../secdos/Secdos";
import Funcionamiento from "../how/Funcionamiento";
import Main from "../main/Main";

import "./Home.css";
import Vidriera from "../vidriera/Productos";

const Home = () => {
  return (
    <>
      <div className="icon-bar">
        <a href="https://api.whatsapp.com/send?phone=543814620450&text=Hola!%20Quiero%20mas%20info%20sobre%20CIRCCLO" target="_blank" className="facebook">
          <i className="fab fa-whatsapp"></i>
        </a>
        
      </div>
      
      <Main id="#home"/>
      <br />
      {/* <Secdos id="#img"/> */}
        <h1 className="text-center">SECCION 2 </h1>
      <blockquote></blockquote>
      <br></br>
      <Funcionamiento id="#how"/>
      <br />
      <Marquee className="marque" gradientWidth="no">
        <p className="text-marque">
          ¡Por el momento servicio disponible en Yerba Buena!
          <i class="fas fa-exclamation-circle"></i>
        </p>{" "}
        <p className="text-marque">
          #RetornandoNuestrosEnvasesNuncaSeConviertenEnBasura{" "}
          <i class="fas fa-exclamation-circle"></i>
        </p>{" "}
        <p className="text-marque">
          ¡Por el momento servicio disponible en “Yerba Buena”!{" "}
          <i class="fas fa-exclamation-circle"></i>{" "}
        </p>{" "}
        <p className="text-marque">
          #RetornandoNuestrosEnvasesNuncaSeConviertenEnBasura
          <i class="fas fa-exclamation-circle"></i>{" "}
        </p>
      </Marquee>     
       <blockquote></blockquote>

    

      <Count id="#calculadora"/>
      <br />
      <blockquote></blockquote>
      <Prodcutoras id="#empresas"/>
      <blockquote></blockquote>

      <br></br>
      <br />
      <Vidriera/>
      <br/>
    </>
  );
};

export default Home;
