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
        <a href="wa.link/lazk6f" target="_blank" className="facebook">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://twitter.com/Circclo_arg" className="twitter" target="_blank">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://www.linkedin.com/company/circclo" className="linkedin" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/circclo/" className="linkedin" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      
      <Main id="#home"/>
      <br />
      <Secdos id="#img"/>

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

      <br />
      <Vidriera/>
      <br/>
      <blockquote></blockquote>

      <Count id="#calculadora"/>
      <br />
      <blockquote></blockquote>
      <Prodcutoras id="#empresas"/>
      <br></br>
      {/* <div
        id="fp-nav"
        className="right scrol-lindo"
       
      >
        <ul className="fp-slidesNav ">
          <li>
            <a href="#home" class="active">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#img">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#how">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#calculadora">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#empresas">
              <span></span>
            </a>
          </li>
         
        </ul>
      </div> */}
    </>
  );
};

export default Home;
