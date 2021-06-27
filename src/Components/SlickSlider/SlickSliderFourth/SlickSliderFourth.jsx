import React from "react";
import style from "./SlickSliderFourth.module.css";
import advenchure_on_ice from "../../../assets/Slides/child-books/advenchure_on_ice.jpg";
import alisa_in_wynderland from "../../../assets/Slides/child-books/alisa_in_wynderland.jpg";
import anderson_duimovochka from "../../../assets/Slides/child-books/anderson_duimovochka.jpg";
import anderson_girl from "../../../assets/Slides/child-books/anderson_girl.jpg";
import anderson_tales from "../../../assets/Slides/child-books/anderson_tales.jpg";
import gaidar from "../../../assets/Slides/child-books/gaidar.jpg";
import pushkin_tales from "../../../assets/Slides/child-books/pushkin_tales.jpg";
import rus_army from "../../../assets/Slides/child-books/rus_army.jpg";
import secret_person from "../../../assets/Slides/child-books/secret_person.jpg";
import sin_forest from "../../../assets/Slides/child-books/sin_forest.jpg";

import advenchure_on_ice_pdf from "../../../assets/books/child-books/Usachev_A_Dedmorozizde5_Puteshestvie_Na_Ayisberge.a6.pdf";
import alisa_in_wynderland_pdf from "../../../assets/books/child-books/Kyerroll_L_Alisa_V_Strane_ChudesII.a6.pdf";
import anderson_duimovochka_pdf from "../../../assets/books/child-books/Andersen_G_Dyuyimovochka.a6.pdf";
import anderson_girl_pdf from "../../../assets/books/child-books/Andersen_G_Devochka_So_Spichkami.a6.pdf";
import anderson_tales_pdf from "../../../assets/books/child-books/Andersen_G_Skazki_Istorii_Sbornik.a6.pdf";
import gaidar_pdf from "../../../assets/books/child-books/Gayidar_A_Chuk_I_GekII.a6.pdf";
import pushkin_tales_pdf from "../../../assets/books/child-books/Pushkin_A_Skazki_Ruslan_I_Lyudmila_.a6.pdf";
import rus_army_pdf from "../../../assets/books/child-books/Pajitnev_V_Russkaya_Armiya_1812_Goda.a6.pdf";
import secret_person_pdf from "../../../assets/books/child-books/Perekrest_A_Tayina_Propavshego_Passajira.a6.pdf";
import sin_forest_pdf from "../../../assets/books/child-books/Perov_E_Burunduchok_Po_Imeni_Sim_I.a6.pdf";

const SlickSliderFourth = () => {

    return(

        <div className={style.container}>
            <h4 className={style.title}>Для детей</h4>
            <div className={style.slider}>
            <div className={style.slide }>
                <img src={advenchure_on_ice}  alt="chechov"/>
                <form action={advenchure_on_ice_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={alisa_in_wynderland}  alt="liza"/>
                <form action={alisa_in_wynderland_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide }>
                <img src={anderson_duimovochka}  alt="makarenko"/>
                <form action={anderson_duimovochka_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={anderson_girl}  alt="milton"/>
                <form action={anderson_girl_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={anderson_tales}  alt="secret_home"/>
                <form action={anderson_tales_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={gaidar}  alt="slovo"/>
                <form action={gaidar_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={pushkin_tales}  alt="solov"/>
                <form action={pushkin_tales_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={rus_army}  alt="stalker"/>
                <form action={rus_army_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={secret_person}  alt="turgenev"/>
                <form action={secret_person_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            <div className={style.slide}>
                <img src={sin_forest}  alt="zolia"/>
                <form action={sin_forest_pdf} target="_blank">
                    <button className={style.button_slider}>Читать</button>
                </form>
            </div>
            </div>
    </div>
    )
}

export default SlickSliderFourth;