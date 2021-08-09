import React, { useContext } from "react";

import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import Howit from "../../assets/img/comofunciona.png";
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
        <FormattedMessage id="pasos.como" defaultMessage="Como funciona?" />
      </h2>
      </Fade>
      <br></br>
      <div className="contenedor-como">
        <img src={Howit} className="howi-img" />
      </div>
      <br></br>
      {/* <div class="row text-center">
        <br></br>
        <div class="col">
          <span class="badge rounded-pill bg-success ">1</span>
          <br></br>

          <br></br>
          <h3 className="pasos-descrip">
            <FormattedMessage
              id="paso.uno"
              defaultMessage="Solicitá tu pedido por takepedido/circclo.com o whatsapp business"
            />
          </h3>
        </div>
        <div class="col">
          <span class="badge rounded-pill bg-success">2</span>
          <br></br>
          <br></br>
          <h3 className="pasos-descrip">
            <FormattedMessage
              id="paso.dos"
              defaultMessage="Agenda la visita de tu Circclo. Indica los productos que necesitas reponer. Paga a través de transferencia con cualquier tarjeta/método de pago o efectivo."
            />
          </h3>
        </div>
        <div class="col">
          <span class="badge rounded-pill bg-success">3</span>
          <br></br>
          <br></br>
          <h3 className="pasos-descrip">
            <FormattedMessage
              id="paso.tres"
              defaultMessage="Recibe tu reposicion de productos, intercambia los envases vacíos por los llenos y"
            />
          </h3>
        </div>
      </div>
      <div className="row text-center ">
        <br></br>
        <div className="col contenedor-how2">
          <span class="badge rounded-pill bg-success ">4</span>
          <br></br>

          <br></br>
          <h3 className="pasos-descrip">
            <FormattedMessage
              id="paso.uno"
              defaultMessage="Solicitá tu pedido por takepedido/circclo.com o whatsapp business"
            />
          </h3>
        </div>
        <div className="col contenedor-how2">
          <span class="badge rounded-pill bg-success">5</span>
          <br></br>
          <br></br>
          <h3 className="pasos-descrip">
            <FormattedMessage
              id="paso.dos"
              defaultMessage="Agenda la visita de tu Circclo. Indica los productos que necesitas reponer. Paga a través de transferencia con cualquier tarjeta/método de pago o efectivo."
            />
          </h3>
        </div>
      </div> */}
    </div>
  );
};

export default Funcionamiento;
