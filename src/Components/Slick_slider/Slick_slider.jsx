import React from "react";
import style from "./Slick_slider.module.css"

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

import april from "../../assets/Slides/foreign-books/1.jpg";
import gatsby from "../../assets/Slides/foreign-books/2.jpg";
import frost from "../../assets/Slides/foreign-books/3.jpg";
import don from "../../assets/Slides/foreign-books/4.jpg";
import daughter from "../../assets/Slides/foreign-books/5.jpg";
import call from "../../assets/Slides/foreign-books/6.jpg";
import cruise from "../../assets/Slides/foreign-books/7.jpg";
import adam from "../../assets/Slides/foreign-books/8.jpg";
import adventure from "../../assets/Slides/foreign-books/9.jpg";
import brute from "../../assets/Slides/foreign-books/10.jpg";

import cheechov from "../../assets/Slides/classic-books/chechov.jpg";
import cheechov2 from "../../assets/Slides/classic-books/chechov2.jpg";
import dikens from "../../assets/Slides/classic-books/dikens.jpg";
import dostoevski from "../../assets/Slides/classic-books/dostoevski.jpg";
import duma from "../../assets/Slides/classic-books/duma.jpg";
import gogol from "../../assets/Slides/classic-books/gogol.jpg";
import jule_vern from "../../assets/Slides/classic-books/jule_vern.jpg";
import jule_vern2 from "../../assets/Slides/classic-books/jule_vern2.jpg";
import lev_tolstoi from "../../assets/Slides/classic-books/lev-tolstoi.jpg";
import lev_tolstoi2 from "../../assets/Slides/classic-books/lev-tolstoi2.jpg";

import advenchure_on_ice from "../../assets/Slides/child-books/advenchure_on_ice.jpg";
import alisa_in_wynderland from "../../assets/Slides/child-books/alisa_in_wynderland.jpg";
import anderson_duimovochka from "../../assets/Slides/child-books/anderson_duimovochka.jpg";
import anderson_girl from "../../assets/Slides/child-books/anderson_girl.jpg";
import anderson_tales from "../../assets/Slides/child-books/anderson_tales.jpg";
import gaidar from "../../assets/Slides/child-books/gaidar.jpg";
import pushkin_tales from "../../assets/Slides/child-books/pushkin_tales.jpg";
import rus_army from "../../assets/Slides/child-books/rus_army.jpg";
import secret_person from "../../assets/Slides/child-books/secret_person.jpg";
import sin_forest from "../../assets/Slides/child-books/sin_forest.jpg";




const SlickSlider = () =>{
    return (
        <div>
            <div className={ style.content }>

                <div >
                    <h4 className={ style.title }>Наиболее популярные</h4> 
                    <div className={ style.slider }>
                        <div>
                            <div className="slider__item filter">
                                <img src={  chechov } alt="chechov" />
                            </div>
                            <br/>
                            <form action="books\popular-books\Chehov_A_Pari.a6.pdf" target="_blank">
                                <button className={ style.button_slider }>Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className={ style.slider__item }>
                                <img src={ liza } alt="liza" />
                            </div>
                            <br />
                            <form action="books\popular-books\Karamzin_N_Shkolnayabibli_Bednaya_Liza_Sbornik.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ makarenko } alt="makarenko" />
                            </div>
                            <br />
                            <form action="books\popular-books\Makarenko_A_Moya_Sistema_Vospitaniya_.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ milton } alt="milton" />
                            </div>
                            <br />
                            <form action="books\popular-books\Milton_D_Zarubejnayakla_Rayi_Poteryannyiyi_Rayi_V.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ secret_home } alt="secret_home" />
                            </div>
                            <br />
                            <form action="books\popular-books\Cehanovich_A_Tayina_Ugryumogo_Doma_Sta.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={slovo} alt="slovo" />
                            </div>
                            <br />
                            <form action="books\popular-books\Neustanovlenniy__Slovo_O_Polku_Igoreve_2_P.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ solov } alt="solov" />
                            </div>
                            <br />
                            <form action="books\popular-books\Solovev_V_Volhviy.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ stalker } alt="stalker" />
                            </div>
                            <br />
                            <form action="books\popular-books\Yuki_kassi__Stalker.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ turgenev } alt="turgenev" />
                            </div>
                            <br />
                            <form action="books\popular-books\Turgenev_I_Dyim.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ zolia } alt="zolia" />
                            </div>
                            <br />
                            <form action="books\popular-books\Zolya_Ye_Knigavsumochku_Prostupok_Abbata_Mure.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="slider-slick-2">
                    <h4  className="title">Книги на иностранном языке</h4>
                    <div className="slider">
                        <div>
                            <div className="slider__item filter">
                                <img src={ april } alt="april" />
                            </div>
                            <br />
                            <form action="books\foreign-books\april_twilight.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ gatsby } alt="gatsby" />
                            </div>
                            <br />
                            <form action="books\foreign-books\Великий Гетсби.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ frost } alt="frost" />
                            </div>
                            <br />
                            <form action="books\foreign-books\forest_children.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ don } alt="don" />
                            </div>
                            <br />
                            <form action="books\foreign-books\don_kihot.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ daughter } alt="daughter" />
                            </div>
                            <br />
                            <form action="books\foreign-books\dother_of_snows.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ call } alt="call" />
                            </div>
                            <br />
                            <form action="books\foreign-books\call_fury.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ cruise } alt="cruise" />
                            </div>
                            <br />
                            <form action="books\foreign-books\shark_cruise.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ adam } alt="adam" />
                            </div>
                            <br />
                            <form action="books\foreign-books\before_adam.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ adventure } alt="adventure" />
                            </div>
                            <br />
                            <form action="books\foreign-books\adventure.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ brute } alt="brute" />
                            </div>
                            <br />
                            <form action="books\foreign-books\abusmal_brute.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="slider-slick-3">
                    <h4  className="title">Класическая литература</h4>
                    <div className="slider">
                        <div>
                            <div className="slider__item filter">
                                <img src={ cheechov } alt="cheechov" />
                            </div>
                            <br />
                            <form action="books\classic-books\Chekhov_tales.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ cheechov2 } alt="cheechov2" />
                            </div>
                            <br />
                            <form action="books\classic-books\Chechov_tragik_tales.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ dikens } alt="dikens" />
                            </div>
                            <br />
                            <form action="books\classic-books\Dikenz_cold_home.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ dostoevski } alt="dostoevski" />
                            </div>
                            <br />
                            <form action="books\classic-books\Dostoevskiyi_F_Bratya_Karamazovyi.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ duma } alt="duma" />
                            </div>
                            <br />
                            <form action="books\classic-books\Dyuma_A_Korolevamargo1_Koroleva_Margo.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ gogol } alt="gogol" />
                            </div>
                            <br />
                            <form action="books\classic-books\Gogol_dead_souls.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ jule_vern } alt="jule_vern" />
                            </div>
                            <br />
                            <form action="books\classic-books\Jul_Vern_20_lie.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ jule_vern2 } alt="jule_vern2" />
                            </div>
                            <br />
                            <form action="books\classic-books\Jul_Venr_island.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ lev_tolstoi } alt="lev_tolstoi" />
                            </div>
                            <br />
                            <form action="books\classic-books\Lev_Tolstoi_war_and_peace..pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ lev_tolstoi2 } alt="lev_tolstoi2" />
                            </div>
                            <br />
                            <form action="books\classic-books\Lev_Tolstoi_tales.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="slider-slick-4">
                    <h4  className="title">Для детей</h4>
                    <div className="slider">
                        <div>
                            <div className="slider__item filter">
                                <img src={ advenchure_on_ice } alt="advenchure_on_ice" />
                            </div>
                            <br />
                            <form action="books\child-books\Usachev_A_Dedmorozizde5_Puteshestvie_Na_Ayisberge.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ alisa_in_wynderland } alt="alisa_in_wynderland" />
                            </div>
                            <br />
                            <form action="books\child-books\Kyerroll_L_Alisa_V_Strane_ChudesII.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ anderson_duimovochka } alt="anderson_duimovochka" />
                            </div>
                            <br />
                            <form action="books\child-books\Andersen_G_Dyuyimovochka.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ anderson_girl } alt="anderson_girl" />
                            </div>
                            <br />
                            <form action="books\child-books\Andersen_G_Devochka_So_Spichkami.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ anderson_tales } alt="anderson_tales" />
                            </div>
                            <br />
                            <form action="books\child-books\Andersen_G_Skazki_Istorii_Sbornik.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ gaidar } alt="gaidar" />
                            </div>
                            <br />
                            <form action="books\child-books\Gayidar_A_Chuk_I_GekII.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ pushkin_tales } alt="pushkin_tales" />
                            </div>
                            <br />
                            <form action="books\child-books\Pushkin_A_Skazki_Ruslan_I_Lyudmila_.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ rus_army } alt="rus_army" />
                            </div>
                            <br />
                            <form action="books\child-books\Pajitnev_V_Russkaya_Armiya_1812_Goda.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ secret_person } alt="" />
                            </div>
                            <br />
                            <form action="books\child-books\Perekrest_A_Tayina_Propavshego_Passajira.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                        <div>
                            <div className="slider__item filter">
                                <img src={ sin_forest } alt="sin_forest" />
                            </div>
                            <br />
                            <form action="books\child-books\Perov_E_Burunduchok_Po_Imeni_Sim_I.a6.pdf" target="_blank">
                                <button className="button-slider">Читать</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlickSlider;