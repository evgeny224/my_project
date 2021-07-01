import React from "react";
import style from "./RegistrationPage.module.css";

const RegPage = () => {
    return(
        <div>
            <div className={style.registration_container}>
                <div className={style.registration_content}>
                    <div className={style.registration_title}>Форма для регистрации</div>
                    <div className={style.login_registration}>Логин:</div>
                    <form action="" method="post" className={style.form_login}>
                    <input type="text" name="login" className={style.input_login_registration} />
                    <div className={style.password_registration}>Пароль:</div>
                    <input type="text" name="password" className={style.input_password_registration} />
                    <div className={style.mail_title}>Электронный адрес:</div>
                    <input type="email" name="email" className={style.input_mail} />
                    <button className={style.registration_btn} type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegPage;