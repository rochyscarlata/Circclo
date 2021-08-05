import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import { Col, Row, Card } from "react-bootstrap";
import Equipo from "../../assets/img/equipo.jpg";
import PiggyBank from "../../assets/icon/piggybank.png";
import HandShake from "../../assets/icon/handshake.png";
import Planet from "../../assets/icon/planet.png";
import Climate from '../../assets/logos/climate.png'
import ClimateLaunch from '../../assets/logos/climate-launch.png'
import Macro from '../../assets/logos/macro.png'
import Naves from '../../assets/logos/naves.jpg'
import School from '../../assets/logos/school.png'
import Unl from '../../assets/logos/unl.png'
import Jije from '../../assets/logos/jije.jpg'
import Lagaceta from '../../assets/logos/lagaceta.png'
import Fade from 'react-reveal/Fade';

// Con color
import HandsColor from "../../assets/icon/handshakeColor.png";
import PlanetColor from "../../assets/icon/planetColor.png";

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
      <hr width="100"></hr>
      <br></br>
      <div className="titulos-padre">
        <div className="titulos-centrados">
        <Fade bottom>
          <h1 className="text-center howit">
            
            <FormattedMessage
              id="nos.titulo"
              defaultMessage="Somos una empresa de jovenes que busca revolucionar la manera en que consumimos día a día."
            />
          </h1>
          
          <blockquote> </blockquote>
          <br />
          <h5 className="text-center ">
            <FormattedMessage
              id="nos.subtitulo"
              defaultMessage="Nuestra meta es acercar al consumidor mejores productos, con menos intermediarios y a un precio justo. Apostamos por el triple impacto y pronto nos certificaremos como Empresa B:"
            />
          </h5>
          <br></br>
          </Fade >
        </div>
      </div>

      <div class="row text-center">
        <Col>
          <br></br>
          <Fade bottom>
          <img src={PiggyBank} className="" width="100" height="80"></img>
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
          </Fade >
        </Col>
        <Col>
        <Fade bottom>
          <br></br>
          <img src={HandShake} className="hand-shake" width="100" height="90"></img>
          <br></br>
          <h6 className="ecosocam">
            <FormattedMessage id="nos.social" defaultMessage="Social" />
          </h6>
          <p className="descripciones">
            <FormattedMessage
              id="nos.socialDescrip"
              defaultMessage="Fomentamos las economías locales y el comercio justo, eliminando las largas cadenas de intermediarios."
            />
          </p>
          </Fade >
        </Col>
        <Col>
        <Fade bottom>
          <br></br>
          <img src={Planet} className="mb-1" width="100" height="80"></img>
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
          </Fade >
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
                width="250"
                height="200"
                className="img-proposito"
              />
              </Fade>
            </Col>
            <Col>
            <Fade right>
              <h1 className="text-center titulo-proposito">
                <FormattedMessage
                  id="nos.proposito"
                  defaultMessage="Propósito"
                />
              </h1>
              <Card className="text-center card-proposito">
                <Card.Body className="card-body">
                  <h5>
                    <FormattedMessage
                      id="nos.propositoDescrip"
                      defaultMessage="Brindar soluciones inteligentes para productos de primera necesidad mediante la eliminación del plástico de un solo uso."
                    />
                  </h5>
                </Card.Body>
              </Card>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>

      <br />
      <hr width="100"></hr>
      <div className="equipo-padre">
        <div className="equipo">
          <Fade>
          <h1 className="text-center ">
            <FormattedMessage id="nos.equipo" defaultMessage="Equipo Circclo" />
          </h1>
          <blockquote> </blockquote>
          <br />
          <Row>
            <Col sm>
            <div className="equipo-img">
            <img
              src={Equipo}
              width="550"
              height="400"
              className="imagen-equipo"
            ></img>
          </div>
            </Col>
            <Col sm>
            <h5 className="equipo-texto">
            <FormattedMessage
              id="nos.equipoDescrip"
              defaultMessage="somos un equipo de jóvenes profesionales con demasiadas ganas de cambiar lo que esta mal, nos dimos cuenta de que si hay algo que no esta en la agenda de las principales marcas a nivel mundial, es resolver el problema de los plásticos, así que decidimos hacernos cargo. Aunque sea muy dificil y parezca imposible, no vamos a bajar los brazos nunca porque el futuro de este planeta no puede ser descartable."
            />
          </h5>
            </Col>
          </Row>
        
          <br></br>
          
          </Fade>
        </div>
      </div>
      
      {/* <div className="vision-padre">
        <Fade>
        <div className="vision">
          <h2 className="vision-titulo text-center">
            <FormattedMessage id="nos.vision" defaultMessage="Visión" />
          </h2>
          
          <br></br>
          <h5 className="text-center vision-texto">
            <FormattedMessage
              id="nos.visionDescrip"
              defaultMessage="Un ecosistema de reutilización global:  Con nuestra marca, socios minoristas y operativos, estamos construyendo un ecosistema global para el movimiento de reutilización que mantiene la conveniencia y la asequibilidad que disfrutamos con un estilo de vida desechable. Circclo tiene la misión de eliminar la idea del desperdicio de una manera que sea accesible para todos."
            />
          </h5>
        </div>
        </Fade>
      </div> */}
      <br/>
      {/* <Fade>
      <Card className="text-center objetivo">
        <Card.Body>
          <div className="objetivo-contenido">
            <h6>
              <FormattedMessage
                id="nos.objetivo"
                defaultMessage="Nuestro objetivo es hacer que la devolución de envases retornables sea tan fácil y accesible como tirar algo."
              />
            </h6>
          </div>
        </Card.Body>
      </Card>
      </Fade> */}
    <br></br>
<hr></hr>
        <div className="reconocimientos-padre">
          <Fade>          <div className="reconocimientos">
            <h4>
            <FormattedMessage
              id="nos.reconocimientos"
              defaultMessage="Reconocimientos"
            />
            </h4>
            <br/>
            <Row>
              <Col>
                <a href="https://www.infobae.com/tendencias/2020/08/21/argentina-y-uruguay-participan-en-la-competencia-verde-mas-relevante-del-mundo/" target="_blank">
                  <img src={Climate} width="300" className="climate-img"></img>
                </a>
              </Col>
              <Col>
              <a href="https://www.infobae.com/tendencias/2020/08/21/argentina-y-uruguay-participan-en-la-competencia-verde-mas-relevante-del-mundo/" target="_blank">
                  <img src={ClimateLaunch} height="120" className="climate-launch"></img>
                </a>
                </Col>
                <Col sm>
              <a  target="_blank" href="https://www.lagaceta.com.ar/nota/862165/actualidad/banco-macro-premio-emprendedores-tucumanos-certamen-naves-federal.html">
                  <img src={Naves} height="120" className="naves-img"></img>
                </a>
                </Col>
            </Row>
            <br/>
           
            <Row>
            <Col sm>
                <a href="https://www.lagaceta.com.ar/nota/862165/actualidad/banco-macro-premio-emprendedores-tucumanos-certamen-naves-federal.html" target="_blank">
                  <img src={School} height="120" className="school-img"></img>
                </a>
                </Col>
              <Col>
                <a href="https://www.unl.edu.ar/noticias/news/view/la_jije_2019_premi%C3%B3_a_proyectos_y_emprendimientos_innovadores#.YPghGehKjIU" target="_blank">

                  <img src={Unl} width="300" className="unl-img"></img>
                </a>
              </Col>
              <Col>
              <a href="https://www.unl.edu.ar/noticias/news/view/la_jije_2019_premi%C3%B3_a_proyectos_y_emprendimientos_innovadores#.YPghGehKjIU" target="_blank">
                  <img src={Jije} height="120" className="jije-img"></img>
                </a>
                </Col>
            </Row>
            <br/>
            <Row>
            <div class="col-md-6 offset-md-3"> <a href="https://www.lagaceta.com.ar/nota/824592/actualidad/menos-plastico-idea-premiaron-grupo-tucumanos.html" target="_blank">
                  <img src={Lagaceta} height="90" className="lagaceta-img"></img>
                </a></div>
            </Row>
          </div>
          </Fade>

        </div>
    </div>
  );
};

export default Nosotros;
