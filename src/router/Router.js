import React from "react";
import NavBar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import Footer from '../components/footer/Footer'
import Funcionamiento from '../components/how/Funcionamiento'
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
        <Footer/>

      </BrowserRouter>
  );
}

export default Router;