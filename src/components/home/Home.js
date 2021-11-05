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
        <a
          href="https://api.whatsapp.com/send?phone=543814620450&text=Hola!%20Quiero%20mas%20info%20sobre%20CIRCCLO"
          target="_blank"
          className="facebook"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <Main id="#home" />
      <br />

      <Funcionamiento id="#how" />
      <br />

      <br />
      <Count id="#calculadora" />
      <br />
      <br />
      <Prodcutoras id="#empresas" />

      <br></br>
      <br />
      <br />
      <Vidriera />
      <br />
    </>
  );
};

export default Home;
