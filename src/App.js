import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import style from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SlickSlider from "./Components/SlickSlider/SlickSlider";
import Search from "./Components/Search/Search";
import AuthPage from "./Pages/AuthPage/AuthPage";

function App() {


  return (
    <BrowserRouter>
      <div className={ style.body }>
        <Header />
        <Route exact path='/' component = {SlickSlider} />
        <Route path='/search' component = {Search} />
        <Route path='/auth' component = {AuthPage} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
