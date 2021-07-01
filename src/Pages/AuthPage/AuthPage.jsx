import React from "react";
import style from "./AuthPage.module.css";
const AuthPage = () => {
    return(
        <div>
            <div className={style.break}></div>
            <div className={style.login_content}>
                <div className={style.login}>
                <div className={style.login_title}>Логин:</div>
                <form action="sign_in.php" method="post" className={style.form_login} >
                    <input type="text" name="login"  className={style.input_login} />
                    <div className={style.password_title}>Пароль:</div>
                    <input type="password" name="password" className={style.input_password} />
                    <button type="submit" className={style.log_in_btn}>Войти</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default AuthPage;