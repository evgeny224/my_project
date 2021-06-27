import React from "react";
import style from "./SlickSliderFirst.module.css";
import chechov from "../../../assets/Slides/popular-books/chechov.jpg";
import liza from "../../../assets/Slides/popular-books/liza.jpg";
import makarenko from "../../../assets/Slides/popular-books/makarenko.jpg";
import milton from "../../../assets/Slides/popular-books/milton.jpg";
import secret_home from "../../../assets/Slides/popular-books/secret_home.jpg";
import slovo from "../../../assets/Slides/popular-books/slovo.jpg";
import solov from "../../../assets/Slides/popular-books/solov.jpg";
import stalker from "../../../assets/Slides/popular-books/stalker.jpg";
import turgenev from "../../../assets/Slides/popular-books/turgenev.jpg";
import zolia from "../../../assets/Slides/popular-books/zolia.jpg";

import chechov_pdf from "../../../assets/books/popular-books/Chehov_A_Pari.a6.pdf";
import liza_pdf from "../../../assets/books/popular-books/Karamzin_N_Shkolnayabibli_Bednaya_Liza_Sbornik.a6.pdf";
import makarenko_pdf from "../../../assets/books/popular-books/Makarenko_A_Moya_Sistema_Vospitaniya_.a6.pdf";
import milton_pdf from "../../../assets/books/popular-books/Milton_D_Zarubejnayakla_Rayi_Poteryannyiyi_Rayi_V.a6.pdf";
import secret_home_pdf from "../../../assets/books/popular-books/Cehanovich_A_Tayina_Ugryumogo_Doma_Sta.a6.pdf";
import slovo_pdf from "../../../assets/books/popular-books/Neustanovlenniy__Slovo_O_Polku_Igoreve_2_P.a6.pdf";
import solov_pdf from "../../../assets/books/popular-books/Solovev_V_Volhviy.a6.pdf";
import stalker_pdf from "../../../assets/books/popular-books/Yuki_kassi__Stalker.a6.pdf";
import turgenev_pdf from "../../../assets/books/popular-books/Turgenev_I_Dyim.a6.pdf";
import zoila_pdf from "../../../assets/books/popular-books/Zolya_Ye_Knigavsumochku_Prostupok_Abbata_Mure.a6.pdf";

const SlickSlider = () => {

    return(

        <div className={style.container}>
            <h4 className={style.title}>Наиболее популярные</h4>
            <div className={style.slider}>
            <div className={style.slide }>
                <img src={chechov}  alt="chechov"/>
                <form action={chechov_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={liza}  alt="liza"/>
                <form action={liza_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide }>
                <img src={makarenko}  alt="makarenko"/>
                <form action={makarenko_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={milton}  alt="milton"/>
                <form action={milton_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={secret_home}  alt="secret_home"/>
                <form action={secret_home_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={slovo}  alt="slovo"/>
                <form action={slovo_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={solov}  alt="solov"/>
                <form action={solov_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={stalker}  alt="stalker"/>
                <form action={stalker_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={turgenev}  alt="turgenev"/>
                <form action={turgenev_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={zolia}  alt="zolia"/>
                <form action={zoila_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            </div>
    </div>
    )
}

export default SlickSlider;