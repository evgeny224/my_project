import React from "react";
import SlickSliderFirst from "./SlickSliderFirst/SlickSliderFirst"
import SlickSliderSecond from "./SlickSliderSecond/SlickSliderSecond";
import SlickSliderThird from "./SlickSliderThird/SlickSliderThird";
import SlickSliderFourth from "./SlickSliderFourth/SlickSliderFourth";


const SlickSlider = () =>{
    return(
        <div>
            <SlickSliderFirst />
            <SlickSliderSecond />
            <SlickSliderThird />
            <SlickSliderFourth />
        </div>
    )
}

export default SlickSlider;