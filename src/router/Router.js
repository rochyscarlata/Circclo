import React from "react";
import NavBar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import Marquee from "react-fast-marquee";
import Funcionamiento from "../components/how/Funcionamiento";
import Count from '../components/count up/Count'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Switch>
        <Funcionamiento />  
      </Switch>
      <br/>
      <Switch>
        <Count />  
      </Switch>
      <br/>
      {/* <marquee width="100%" direction="left" height="30px" bgcolor="#038910" className="marquesina" loop="infinite">
        This is a sample scrolling text that has scrolls texts to left.
        This is a sample scrolling text that has scrolls texts to left.
        This is a sample scrolling text that has scrolls texts to left. This is a sample scrolling text that has scrolls texts to left.
        This is a sample scrolling text that has scrolls texts to left. This is a sample scrolling text that has scrolls texts to left.
</marquee> */}
 <Marquee>
     Empresas productoras locales?  o algun texto ? Empresas productoras locales?  o algun texto ? Empresas productoras locales?  o algun texto ? Empresas productoras locales?  o algun texto ?
  </Marquee>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
