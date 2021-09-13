import React, { useContext } from "react";

import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import Howit from "../../assets/img/comofunciona.png";
import Paso1 from "../../assets/img/paso1.png"
import Paso2 from "../../assets/img/paso2.png"
import Paso3 from "../../assets/img/paso3.png"
import "./Funcionamiento.css";
import { Fade } from "react-reveal";

const Funcionamiento = () => {
  const idioma = useContext(langContext);
  console.log(idioma);

  return (
    <div class="container contenedor-hiw">
      <br></br>
      <Fade bottom>
      <h2 className="text-center howit">
        <FormattedMessage id="pasos.como" defaultMessage="COMO SOLUCIONAR ESTO?" />
      </h2>
      </Fade>
      <br></br>
      {/* <div className="contenedor-como">
        <img src={Howit} className="howi-img" />
      </div> */}
       <div class="row text-center">
        <br></br>
        <div class="col">
        <img src={Paso1} className="paso1"></img>
        <br></br>

          <span class="badge"> PASO 1</span>
          <br></br>

          <h3 className="pasos-descrip">
            <FormattedMessage
              id="paso.uno"
              defaultMessage="Hace tu pedido"
            />
          </h3>
        </div>
        <div class="col">
        <img src={Paso2} className="paso1"></img>
        <br></br>

          <span class="badge"> PASO 2</span>
          <br></br>
          <h3 className="pasos-descrip">
            <FormattedMessage
              id="paso.dos"
              defaultMessage="Utilizá los productos"
            />
          </h3>
        </div>
        <div class="col">
        <img src={Paso3} className="paso1"></img>
        <br></br>

          <span class="badge"> PASO 3</span>
          <br></br>
          <h3 className="pasos-descrip">
            <FormattedMessage
              id="paso.tres"
              defaultMessage="Pedí tu recarga"
            />
          </h3>
        </div>
      </div>
     
      <br></br> 
    </div>
  );
};

export default Funcionamiento;
