import React, { Component } from "react";
import Slider from "react-slick";
import style from "./SlickSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chechov from "../../assets/Slides/popular-books/chechov.jpg";
import liza from "../../assets/Slides/popular-books/liza.jpg";
import makarenko from "../../assets/Slides/popular-books/makarenko.jpg";
import milton from "../../assets/Slides/popular-books/milton.jpg";
import secret_home from "../../assets/Slides/popular-books/secret_home.jpg";
import slovo from "../../assets/Slides/popular-books/slovo.jpg";
import solov from "../../assets/Slides/popular-books/solov.jpg";
import stalker from "../../assets/Slides/popular-books/stalker.jpg";
import turgenev from "../../assets/Slides/popular-books/turgenev.jpg";
import zolia from "../../assets/Slides/popular-books/zolia.jpg";

export default class Responsive extends Component {
    render() {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
        return (
        <div className={style.container}>
        <h2> Responsive </h2>
            <Slider {...settings}>
            <div>
                <img src={ chechov } alt="chechov" />
            </div>
            <div>
                <img src={ liza } alt="liza" />
            </div>
            <div>
                <img src={ makarenko } alt="makarenko" />
            </div>
            <div>
                <img src={ milton } alt="milton" />
            </div>
            <div>
                <img src={ secret_home } alt="secret_home" />
            </div>
            <div>
                <img src={ slovo } alt="slovo" />
            </div>
            <div>
                <img src={ solov } alt="solov" />
            </div>
            <div>
                <img src={ stalker } alt="stalker" />
            </div>
            <div>
                <img src={ turgenev } alt="turgenev" />
            </div>
            <div>
                <img src={ zolia } alt="zolia" />
            </div>
            </Slider>
        </div>
        );
    }
}

