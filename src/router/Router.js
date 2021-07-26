import React from "react";
import NavBar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import Marquee from "react-fast-marquee";
import Funcionamiento from "../components/how/Funcionamiento";
import Count from "../components/count up/Count";
import Prodcutoras from "../components/empresas/Productoras";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preguntas from "../components/preguntas/Preguntas.js";
import Secdos from "../components/gallery/Secdos";
import Home from "../components/home/Home";
import Nosotros from "../components/nosotros/Nosotros";
import Historia from "../components/historia/Historia";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <blockquote> </blockquote>

      <Switch>
        <Route exact path="/nosotros">
          <Nosotros />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/historia">
          <Historia />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/faq">
          <Preguntas />
        </Route>
      </Switch>
      <br></br>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
