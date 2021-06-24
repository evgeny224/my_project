import React from "react";
import logo from "./../../assets/logo.png"
import style from "./Header.module.css"



const Header = () => {
    return(
        <header className={ style.header }>
            <ul className={ style.header__menu }>
                <li><img src={ logo } alt="logo" className={style.logo_menu__item}/></li>
                <li><a href="index.php" className={ style.menu__item }>Электронная <br /> библиотека</a></li>
                <li><a href="about.php" className={ style.menu__item }>О нас</a></li>
                <li><form><input placeholder="Поиск" className={ style.item }></input></form></li>
                <li><a href="login.php" className={ style.menu__item }>Вход</a></li>
                <li><a href="registration.php" className={ style.menu__item }>Регистрация</a></li>
            </ul>
        </header>
    )
}

export default Header;