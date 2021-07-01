import React from "react";
import style from "./Footer.module.css";
import vk_logo from "./../../assets/el_vkontakte.png";
import fb_logo from "./../../assets/el_facebook.png";
import yt_logo from "./../../assets/vaadin_youtube-square.png";


const Footer = () => {
    return(
        <footer className={ style.footer_container }>
            <div className={ style.email }>Наш E-mail: onlinelib@gmail.ru</div>
            <div className={ style.central }> 
                <div className={ style.social_net }>Наша библеотека в соц. сетях</div>
                <a href="https://vk.com/feed"><img className={ style.vk } src={ vk_logo } alt="vk_logo"></img></a>
                <a href="https://www.facebook.com/"><img className={ style.facebook } src={ fb_logo } alt="fb_logo"></img></a>
                <a href="https://www.youtube.com/"><img className={ style.youtube } src={ yt_logo } alt="yt_logo"></img></a>
            </div> 
            <a href="/agreement"><div className={ style.agreement }>Пользовательское соглашение</div></a>
        </footer>
    )
}

export default Footer;