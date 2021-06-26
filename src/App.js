import React from "react";
import './App.css';
import style from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./slider";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SliderS from "./Components/Slick_slider/Slick_slider"
import SimpleSlider from "./SlickSlider";
import Scrollable from "./Components/Scrollable/Scrollable";

function App() {

  const items = [
      {
        title: "Заголовок 1",
        text: "Текст"
      },
      {
        title: "Заголовок 2",
        text: "Текст"
      },
      {
        title: "Заголовок 3",
        text: "Текст"
      },
      {
        title: "Заголовок 4",
        text: "Текст"
      },
      {
        title: "Заголовок 5",
        text: "Текст"
      },
      {
        title: "Заголовок 6",
        text: "Текст"
      },
      {
        title: "Заголовок 7",
        text: "Текст"
      },
      {
        title: "Заголовок 8",
        text: "Текст"
      },
      {
        title: "Заголовок 9",
        text: "Текст"
      },
      {
        title: "Заголовок 10",
        text: "Текст"
      },
  ]

  return (
    <div className={ style.body }>
      <Header />
      <Slider />
      <div className="container">
      <Scrollable _class="items">
        {
          items.map((v,i) =>{
            return(
              <div key={i} className="item">
                <h2>{v.title}</h2>
                <p>{v.text}</p>
              </div>
            )
          })
        }
      </Scrollable>
      </div>
      {/* <SimpleSlider /> */}
      <Footer />

    </div>
  );
}

export default App;
