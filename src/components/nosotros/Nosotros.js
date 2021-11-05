import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import { Col, Row, Card } from "react-bootstrap";
import Equipo from "../../assets/img/equipoimg.jpg";
import Economico from "../../assets/icon/hand.png";
import HandShake from "../../assets/icon/handshake.png";
import Planet from "../../assets/icon/world.png";
import Climate from "../../assets/logos/climate.png";
import ClimateLaunch from "../../assets/logos/climate-launch.png";
import Macro from "../../assets/logos/macro.png";
import Naves from "../../assets/logos/naves.jpg";
import School from "../../assets/logos/school.png";
import Unl from "../../assets/logos/unl.png";
import Jije from "../../assets/logos/jije.jpg";
import Lagaceta from "../../assets/logos/lagaceta.png";
import Fade from "react-reveal/Fade";

// Con color
import PlanetColor from "../../assets/icon/tierra-proposito.png";

import "./Nosotros.css";

const Nosotros = () => {
  const idioma = useContext(langContext);
  console.log(idioma);

  return (
    <div class="container contenedor-hiw">
      <h6 className="nosotros">
        {" "}
        <FormattedMessage id="nos.nosotros" defaultMessage="Sobre nosotros" />
      </h6>

      <div className="titulos-padre">
        <div className="titulos-centrados">
          <Fade bottom>
            <h4 className="text-center howit">
              <FormattedMessage
                id="nos.titulo"
                defaultMessage="Somos una empresa de jovenes que busca revolucionar la manera en que consumimos día a día."
              />
            </h4>

            <br></br>
            <hr width="100"></hr>
            <br />
            <h5 className="text-center titulo-siguiente">
              <FormattedMessage
                id="nos.subtitulo"
                defaultMessage="Nuestra meta es acercar al consumidor mejores productos, con menos intermediarios y a un precio justo. Apostamos por el triple impacto y pronto nos certificaremos como Empresa B:"
              />
            </h5>
            <br></br>
          </Fade>
        </div>
      </div>

      <div class="row text-center">
        <Col>
          <br></br>
          <Fade bottom>
            <img
              src={Economico}
              alt="economico"
              className=""
              width="80"
              height="80"
            ></img>
            <br></br>
            <h5 className="ecosocam">
              <FormattedMessage id="nos.economico" defaultMessage="Economico" />
            </h5>
            <p className="descripciones">
              <FormattedMessage
                id="nos.economicoDescrip"
                defaultMessage="Somos una empresa privada que busca rentabilidad como consecuencia del impacto social y ambiental"
              />
            </p>
          </Fade>
        </Col>
        <Col>
          <Fade bottom>
            <br></br>
            <img
              src={Planet}
              alt="planeta"
              className="mb-1"
              width="90"
              height="80"
            ></img>
            <br></br>
            <h5 className="ecosocam">
              <FormattedMessage id="nos.ambiental" defaultMessage="Ambiental" />
            </h5>
            <p className="descripciones">
              <FormattedMessage
                id="nos.ambientalDescrip"
                defaultMessage="Nuestros envases están diseñados para durar para toda la vida. Evitando que se produzca más plástico y se generen más desechos."
              />
            </p>
          </Fade>
        </Col>
        <Col>
          <Fade bottom>
            <br></br>
            <img
              src={HandShake}
              alt="social"
              className="hand-shake"
              width="90"
              height="80"
            ></img>
            <br></br>
            <h5 className="ecosocam">
              <FormattedMessage id="nos.social" defaultMessage="Social" />
            </h5>
            <p className="descripciones">
              <FormattedMessage
                id="nos.socialDescrip"
                defaultMessage="Fomentamos las economías locales y el comercio justo, eliminando las largas cadenas de intermediarios."
              />
            </p>
          </Fade>
        </Col>
      </div>
      <br></br>
      <div className="proposito-padre">
        <div className="proposito">
          <Row>
            <Col>
              <Fade left>
                <img
                  src={PlanetColor}
                  width="220"
                  height="220"
                  className="img-proposito"
                />
              </Fade>
            </Col>
            <Col>
              <Fade right>
                <h3 className="titulo-pro">
                  <FormattedMessage
                    id="nos.proposito"
                    defaultMessage="Nuestro propósito"
                  />
                </h3>
                <hr width="100" className="propositohr"></hr>
                <br />
                <h5 className="descripcion-proposito">
                  <FormattedMessage
                    id="nos.propositoDescrip"
                    defaultMessage="Brindar soluciones inteligentes para productos de primera necesidad mediante la eliminación del plástico de un solo uso."
                  />
                </h5>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>

      <br />
      {/* <hr width="100"></hr> */}
      <div className="equipo-padre">
        <div className="equipo">
          <Fade>
            <blockquote> </blockquote>
            <br />
            <div className="equipo-img">
              <img
                src={Equipo}
                alt="equipo"
                width="670"
                height="430"
                className="imagen-equipo"
              ></img>
            </div>
            <h1 className="text-center titulo-equipo">
              <FormattedMessage
                id="nos.equipo"
                defaultMessage="Equipo Circclo"
              />
            </h1>
            <br />
            <div className="equipo-textoPadre">
              <h5 className="equipo-texto">
                <FormattedMessage
                  id="nos.equipoDescrip1"
                  defaultMessage="Somos un equipo de jóvenes profesionales con demasiadas ganas de cambiar lo que está mal. "
                />
              </h5>
              <h5 className="equipo-texto">
                <FormattedMessage
                  id="nos.equipoDescrip2"
                  defaultMessage="Nos dimos cuenta de que si hay algo que no está en la agenda de las principales marcas a nivel mundial, es resolver el problema de los plásticos, así que decidimos hacernos cargo. "
                />
              </h5>
              <h5 className="equipo-texto3">
                <FormattedMessage
                  id="nos.equipoDescrip3"
                  defaultMessage="Aunque sea muy difícil y parezca imposible, no vamos a bajar los brazos nunca porque el futuro de este planeta no puede ser descartable."
                />
              </h5>
            </div>

            <br></br>
          </Fade>
        </div>
      </div>

      <br />

      <br></br>
      <div className="reconocimientos-padre">
        <Fade>
          {" "}
          <div className="reconocimientos">
            <h4 className="reconocimientos-titulo">
              <FormattedMessage
                id="nos.reconocimientos"
                defaultMessage="Reconocimientos"
              />
            </h4>
            <br />
            <Row>
              <Col>
                <a
                  href="https://www.infobae.com/tendencias/2020/08/21/argentina-y-uruguay-participan-en-la-competencia-verde-mas-relevante-del-mundo/"
                  target="_blank"
                >
                  <img
                    src={Climate}
                    alt="climate"
                    width="300"
                    className="climate-img"
                  ></img>
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.infobae.com/tendencias/2020/08/21/argentina-y-uruguay-participan-en-la-competencia-verde-mas-relevante-del-mundo/"
                  target="_blank"
                >
                  <img
                    src={ClimateLaunch}
                    alt="climatelaunch"
                    height="120"
                    className="climate-launch"
                  ></img>
                </a>
              </Col>
              <Col sm>
                <a
                  target="_blank"
                  href="https://www.lagaceta.com.ar/nota/862165/actualidad/banco-macro-premio-emprendedores-tucumanos-certamen-naves-federal.html"
                >
                  <img
                    src={Naves}
                    height="120"
                    alt="naves-gaceta"
                    className="naves-img"
                  ></img>
                </a>
              </Col>
            </Row>
            <br />

            <Row>
              <Col sm>
                <a
                  href="https://www.lagaceta.com.ar/nota/862165/actualidad/banco-macro-premio-emprendedores-tucumanos-certamen-naves-federal.html"
                  target="_blank"
                >
                  <img
                    src={School}
                    height="120"
                    alt="bancomacro-naves"
                    className="school-img"
                  ></img>
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.unl.edu.ar/noticias/news/view/la_jije_2019_premi%C3%B3_a_proyectos_y_emprendimientos_innovadores#.YPghGehKjIU"
                  target="_blank"
                >
                  <img
                    src={Unl}
                    alt="unl-emprendedores"
                    width="250"
                    className="unl-img"
                  ></img>
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.unl.edu.ar/noticias/news/view/la_jije_2019_premi%C3%B3_a_proyectos_y_emprendimientos_innovadores#.YPghGehKjIU"
                  target="_blank"
                >
                  <img
                    src={Jije}
                    alt="unl"
                    height="100"
                    className="jije-img"
                  ></img>
                </a>
              </Col>
            </Row>
            <br />
            <Row>
              <div class="col-md-6 offset-md-3">
                {" "}
                <a
                  href="https://www.lagaceta.com.ar/nota/824592/actualidad/menos-plastico-idea-premiaron-grupo-tucumanos.html"
                  target="_blank"
                >
                  <img
                    src={Lagaceta}
                    alt="lagaceta"
                    height="90"
                    className="lagaceta-img"
                  ></img>
                </a>
              </div>
            </Row>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Nosotros;
