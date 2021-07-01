import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import style from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SlickSlider from "./Components/SlickSlider/SlickSlider";
import Search from "./Components/Search/Search";
import RegPage from "./Pages/RegistrationPage/RegistrationPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import AgreementPage from "./Pages/AgreementPage/AgreementPage";


function App() {


  return (
    <BrowserRouter>
      <div className={ style.body }>
        <Header />
        <Route exact path='/' component = {SlickSlider} />
        <Route path='/search' component = {Search} />
        <Route path='/registration' component = {RegPage} />
        <Route path='/auth' component = {AuthPage} />
        <Route path='/about' component = {AboutPage} />
        <Route path='/agreement' component = {AgreementPage} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
