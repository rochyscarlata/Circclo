import React, {useContext} from "react";
import Paso1 from '../../assets/img/paso1.png'
import Paso2 from '../../assets/img/camion-hiw.png'
import Paso3 from '../../assets/img/paso3.png'
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";

import './Funcionamiento.css'

const Funcionamiento = () => {
    const idioma = useContext(langContext);
    console.log(idioma);

  return (
    <div class="container contenedor-hiw">
        <br></br>
      <h1 className="text-center howit">
          <FormattedMessage id="pasos.como" deffaultMessage="Como funciona?" /></h1>
          <br></br>
      <div class="row text-center">
        <div class="col">
            <span class="badge rounded-pill bg-success ">1</span>
            <br></br>
            
            <img src={Paso1} className="paso1"></img>
            <br></br>
            <h3 className="pasos-descrip"> 
            <FormattedMessage id="paso.uno" deffaultMessage="Paso 1" /></h3>
            </div>
        <div class="col">
            <span class="badge rounded-pill bg-success">2</span>
            <br></br>
            <img src={Paso2} className="paso2"></img>
            <br></br>
            <h3 className="pasos-descrip">
                 <FormattedMessage id="paso.dos" deffaultMessage="Paso dos" /></h3>
        </div>
        <div class="col">
            <span class="badge rounded-pill bg-success">3</span>
            <br></br>
            <img src={Paso3} className="paso3"></img>
            <br></br>
            <h3 className="pasos-descrip">
                <FormattedMessage id="paso.tres" deffaultMessage="Como funciona?" /></h3>

            </div>
      </div>
     
    </div>
  );
};

export default Funcionamiento;
