import React from "react";
import style from "./SlickSliderThird.module.css";
import chechov from "../../../assets/Slides/classic-books/chechov.jpg";
import chechov_2 from "../../../assets/Slides/classic-books/chechov2.jpg";
import dikens from "../../../assets/Slides/classic-books/dikens.jpg";
import dostoevski from "../../../assets/Slides/classic-books/dostoevski.jpg";
import duma from "../../../assets/Slides/classic-books/duma.jpg";
import gogol from "../../../assets/Slides/classic-books/gogol.jpg";
import jule_vern from "../../../assets/Slides/classic-books/jule_vern.jpg";
import jule_vern2 from "../../../assets/Slides/classic-books/jule_vern2.jpg";
import lev_tolstoi from "../../../assets/Slides/classic-books/lev-tolstoi.jpg";
import lev_Tolstoi_war_and_peace from "../../../assets/Slides/classic-books/lev-tolstoi2.jpg";

import chechov_pdf from "../../../assets/books/classic-books/Chekhov_tales.pdf";
import chechov_2_pdf from "../../../assets/books/classic-books/Chechov_tragik_tales.pdf";
import dikens_pdf from "../../../assets/books/classic-books/Dikenz_cold_home.pdf";
import dostoevski_pdf from "../../../assets/books/classic-books/Dostoevskiyi_F_Bratya_Karamazovyi.a6.pdf";
import duma_pdf from "../../../assets/books/classic-books/Dyuma_A_Korolevamargo1_Koroleva_Margo.a6.pdf";
import gogol_pdf from "../../../assets/books/classic-books/Gogol_dead_souls.pdf";
import jule_vern_pdf from "../../../assets/books/classic-books/Jul_Venr_island.pdf";
import jule_vern2_pdf from "../../../assets/books/classic-books/Jul_Vern_20_lie.pdf";
import lev_tolstoi_pdf from "../../../assets/books/classic-books/Lev_Tolstoi_tales.pdf";
import lev_tolstoi_war_and_peace from "../../../assets/books/classic-books/Lev_Tolstoi_war_and_peace..pdf";

const SlickSliderThird = () => {

    return(

        <div className={style.container}>
            <h4 className={style.title}>Класическая литература</h4>
            <div className={style.slider}>
            <div className={style.slide }>
                <img src={chechov}  alt="chechov"/>
                <form action={chechov_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={chechov_2}  alt="liza"/>
                <form action={chechov_2_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide }>
                <img src={dikens}  alt="makarenko"/>
                <form action={dikens_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={dostoevski}  alt="milton"/>
                <form action={dostoevski_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={duma}  alt="secret_home"/>
                <form action={duma_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={gogol}  alt="slovo"/>
                <form action={gogol_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={jule_vern}  alt="solov"/>
                <form action={jule_vern_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={jule_vern2}  alt="stalker"/>
                <form action={jule_vern2_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={lev_tolstoi}  alt="turgenev"/>
                <form action={lev_tolstoi_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={lev_Tolstoi_war_and_peace}  alt="zolia"/>
                <form action={lev_tolstoi_war_and_peace} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            </div>
    </div>
    )
}

export default SlickSliderThird;