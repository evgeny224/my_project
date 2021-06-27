import React from "react";
import './App.css';
import style from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./slider";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SlickSliderFirst from "./Components/SlickSlider/SlickSlider";

function App() {


  return (
    <div className={ style.body }>
      <Header />
      <Slider />
      <SlickSliderFirst />
      <Footer />

    </div>
  );
}

export default App;
