import React from "react";
import SlickSliderFirst from "./SlickSliderFirst/SlickSliderFirst"
import SlickSliderSecond from "./SlickSliderSecond/SlickSliderSecond";
import SlickSliderThird from "./SlickSliderThird/SlickSliderThird";
import SlickSliderFourth from "./SlickSliderFourth/SlickSliderFourth";
import Slider from "./../../slider";


const SlickSlider = () =>{
    return(
        <div>
            <Slider />
            <SlickSliderFirst />
            <SlickSliderSecond />
            <SlickSliderThird />
            <SlickSliderFourth />
        </div>
    )
}

export default SlickSlider;