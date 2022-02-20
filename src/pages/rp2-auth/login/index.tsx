import React from 'react';
import s from './style.module.css';
import vk from '../../../assets/icons/login-with/vk.svg'
import facebook from '../../../assets/icons/login-with/facebook.svg'
import google from '../../../assets/icons/login-with/google.svg'
import webSite from '../../../assets/icons/login-with/web_site.svg'
import LoginForm from "./loginForm";

const iconsLoginWith = [
    {icon: vk},
    {icon: facebook},
    {icon: google},
    {icon: webSite},
]

const Login = () => {
    return (
        <>
            <LoginForm/>
            <div className={s.forget_password}>
                <p className={s.forget_password__title}>Забыли пароль?</p>
                <span>Восстановить</span>
            </div>
            <div className={s.login_with}>
                <p className={s.login_with__title}>Войти с помощью</p>
                {iconsLoginWith.map((el, i) => <img className={s.icons} key={i} src={el.icon} alt=""/>)}
            </div>
        </>
    )
}

export default Login