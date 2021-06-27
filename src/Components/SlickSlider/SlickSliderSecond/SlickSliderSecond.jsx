import React from "react";
import style from "./SlickSliderSecond.module.css";
import april from "../../../assets/Slides/foreign-books/1.jpg";
import gatsby from "../../../assets/Slides/foreign-books/2.jpg";
import forest_child from "../../../assets/Slides/foreign-books/3.jpg";
import don_kihot from "../../../assets/Slides/foreign-books/4.jpg";
import dother_snow from "../../../assets/Slides/foreign-books/5.jpg";
import call_fury from "../../../assets/Slides/foreign-books/6.jpg";
import shark_cruise from "../../../assets/Slides/foreign-books/7.jpg";
import before_adam from "../../../assets/Slides/foreign-books/8.jpg";
import adventure from "../../../assets/Slides/foreign-books/9.jpg";
import abusmal_brute from "../../../assets/Slides/foreign-books/10.jpg";

import april_pdf from "../../../assets/books/foreign-books/april_twilight.pdf";
import gatsby_pdf from "../../../assets/books/foreign-books/Великий Гетсби.pdf";
import forest_child_pdf from "../../../assets/books/foreign-books/forest_children.pdf";
import don_kihot_pdf from "../../../assets/books/foreign-books/don_kihot.pdf";
import dother_snow_pdf from "../../../assets/books/foreign-books/dother_of_snows.pdf";
import call_fury_pdf from "../../../assets/books/foreign-books/call_fury.pdf";
import shark_cruise_pdf from "../../../assets/books/foreign-books/shark_cruise.pdf";
import before_adam_pdf from "../../../assets/books/foreign-books/before_adam.pdf";
import adventure_pdf from "../../../assets/books/foreign-books/adventure.pdf";
import abusmal_brute_pdf from "../../../assets/books/foreign-books/abusmal_brute.pdf";

const SlickSliderSecond = () => {

    return(

        <div className={style.container}>
            <h4 className={style.title}>Книги на иностранном языке</h4>
            <div className={style.slider}>
            <div className={style.slide }>
                <img src={april}  alt="chechov"/>
                <form action={april_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={gatsby}  alt="liza"/>
                <form action={gatsby_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide }>
                <img src={forest_child}  alt="makarenko"/>
                <form action={forest_child_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={don_kihot}  alt="milton"/>
                <form action={don_kihot_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={dother_snow}  alt="secret_home"/>
                <form action={dother_snow_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={call_fury}  alt="slovo"/>
                <form action={call_fury_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={shark_cruise}  alt="solov"/>
                <form action={shark_cruise_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={before_adam}  alt="stalker"/>
                <form action={before_adam_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={adventure}  alt="turgenev"/>
                <form action={adventure_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={abusmal_brute}  alt="zolia"/>
                <form action={abusmal_brute_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            </div>
    </div>
    )
}

export default SlickSliderSecond;