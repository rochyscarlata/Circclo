import React from "react";
import NavBar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import Footer from '../components/footer/Footer'
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import LangProvider from "./context/langContext";

function Router() {
  return (
    // <LangProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
         
        </Switch>
        <Footer/>

      </BrowserRouter>
    // </LangProvider>
  );
}

export default Router;