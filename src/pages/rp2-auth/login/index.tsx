import React, {ChangeEvent, useState} from 'react';
import s from './style.module.css';
import Input from "../../../common/input/input";
import vk from '../../../assets/icons/login-with/vk.svg'
import facebook from '../../../assets/icons/login-with/facebook.svg'
import google from '../../../assets/icons/login-with/google.svg'
import webSite from '../../../assets/icons/login-with/web_site.svg'
import Button from "../../../common/button/button";
import userIcon from "../../../assets/icons/input-icons/user.svg";
import passwordIcon from "../../../assets/icons/input-icons/password.svg";

const iconsLoginWith = [
    {icon: vk},
    {icon: facebook},
    {icon: google},
    {icon: webSite},
]

const Login = () => {
    const [values, setValues] = useState({
        userName: '',
        password: '',
    })

    const inputs = [
        {
            name: 'userName',
            type: 'text',
            placeholder: 'Логин',
            icon: userIcon,
            errorMessage: 'Логин должен состоять от 4-16 символов',
            pattern: "^[A-Za-z0-9]{4,16}$",
            required: true
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Пароль',
            icon: passwordIcon,
            errorMessage: 'Пароль должен состоять от 6-20 символов',
            showKeyBoardInfo: true,
            pattern: "^[A-Za-z0-9!@#$%^&*]{6,20}$",
            required: true
        }
    ]

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <>
            <form>
                <div className={s.input_box}>
                    {inputs.map((input, i) => (
                        //@ts-ignore
                        <Input key={input.name + i} value={values[input.name]} className={s.inputs_regist}
                               handleChange={handleChange}  {...input}/>
                    ))}
                </div>
                <div className={s.checkbox_box}>
                    <input type="checkbox" className={s.checkbox}/>
                    <span>Запомнить меня</span>
                </div>
                <div className={s.button_box}>
                    <Button title={'Войти'}/>
                </div>
            </form>
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