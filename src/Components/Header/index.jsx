import React from "react";
import logo from "./../../assets/logo.png";
import style from "./Header.module.css";
import SearchBar from "./SearchBar/SearchBar";



const Header = () => {

    return(
        <header className={ style.header }>
            <ul className={ style.header__menu }>
                <li><a href="/"><img src={ logo } alt="logo" className={style.logo_menu__item}/></a></li>
                <li><a href="/" className={ style.menu__item }>Электронная <br /> библиотека</a></li>
                <li><a href="about.php" className={ style.menu__item }>О нас</a></li>
                <li><SearchBar /></li>
                <li><a href="login.php" className={ style.menu__item }>Вход</a></li>
                <li><a href="/auth" className={ style.menu__item }>Регистрация</a></li>
            </ul>
        </header>
    )
}

export default Header;