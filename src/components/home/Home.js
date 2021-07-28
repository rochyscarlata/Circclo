import React from "react";
import Marquee from "react-fast-marquee";
import Count from "../count up/Count";
import Prodcutoras from "../empresas/Productoras";
import Secdos from "../secdos/Secdos";
import Funcionamiento from "../how/Funcionamiento";
import Main from "../main/Main";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div class="icon-bar">
        <a href="#" class="facebook">
        <i class="fab fa-whatsapp"></i>
        </a>
        <a href="#" class="twitter">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a href="#" class="linkedin">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" class="linkedin">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <Main />
      <br />
      <Secdos />
   
      <blockquote></blockquote>
      <br></br>
      <Funcionamiento />
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
      <br />
      <blockquote></blockquote>

      <Count />
      <br />
      <blockquote></blockquote>
      <Prodcutoras />
    </>
  );
};

export default Home;
