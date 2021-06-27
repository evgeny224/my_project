import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider_1 from "./assets/slider-1.png";
import slider_2 from "./assets/slider-2.png";
import slider_3 from "./assets/slider-3.png";



export default class Slider extends Component {
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ slider_1 }
                        alt="slider_1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ slider_2 }
                        alt="slider_2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ slider_3 }
                        alt="slider_3"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}