import React from 'react';
import s from './style.module.css';
import Input from "../../../common/input/input";
import userInputImg from '../../../assets/icons/input-icons/user.svg'
import passwordInputImg from '../../../assets/icons/input-icons/password.svg'
import vk from '../../../assets/icons/login-with/vk.svg'
import facebook from '../../../assets/icons/login-with/facebook.svg'
import google from '../../../assets/icons/login-with/google.svg'
import webSite from '../../../assets/icons/login-with/web_site.svg'
import Button from "../../../common/button/button";

const iconsLoginWith = [
    {icon: vk},
    {icon: facebook},
    {icon: google},
    {icon: webSite},

]

const Login = () => {
    return (
        <div>
            <div className={s.input_box}>
                <Input type={'email'} icon={userInputImg} placeholder={'Логин'}/>
                <Input type={'password'} icon={passwordInputImg} placeholder={'Пароль'}/>
            </div>
            <div className={s.checkbox_box}>
                <input type="checkbox" className={s.checkbox}/>
                <span>Запомнить меня</span>
            </div>
            <div className={s.button_box}>
                <Button title={'Войти'}/>
            </div>
            <div className={s.forget_password}>
                <p className={s.forget_password__title}>Забыли пароль?</p>
                <span>Восстановить</span>
            </div>
            <div className={s.login_with}>
                <p className={s.login_with__title}>Войти с помощью</p>
                {iconsLoginWith.map((el, i) => <img className={s.icons} key={i} src={el.icon} alt=""/>)}
            </div>
        </div>
    )
}

export default Login