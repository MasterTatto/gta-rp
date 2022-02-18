import React, {ChangeEvent, useEffect, useState} from 'react';
import Input from "../../../common/input/input";
import s from './style.module.css'
import userIcon from '../../../assets/icons/input-icons/user.svg'
import passwordIcon from '../../../assets/icons/input-icons/password.svg'
import emailIcon from '../../../assets/icons/input-icons/email.svg'
import promoIcon from '../../../assets/icons/input-icons/promo.svg'
import Button from "../../../common/button/button";


const Registration = () => {
    const [checkedMail, setCheckedMail] = useState(true)
    const [checkedRoot, setCheckedRoot] = useState(false)
    const [securityPasswordNumber, setSecurityPasswordNumber] = useState<number>(0)

    const [values, setValues] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
        promo: ''
    })

    const inputs = [
        {
            name: 'userName',
            type: 'text',
            placeholder: 'Логин',
            icon: userIcon,
            errorMessage: 'Логин должен состоять от 4-16 символов',
            pattern: "^[A-Za-z0-9-А-Яа-я]{4,16}$",
            required: true
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Пароль',
            icon: passwordIcon,
            errorMessage: 'Пароль должен состоять от 6-20 символов',
            showKeyBoardInfo: true,
            pattern: "^[A-Za-z0-9-А-Яа-я!@#$%^&*]{6,20}$",
            required: true,
            securityPassword: true
        },
        {
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Подтвердите пароль',
            icon: passwordIcon,
            errorMessage: 'Пароли не совпадают',
            pattern: values.password,
            required: true
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'E-mail',
            icon: emailIcon,
            errorMessage: 'Невалидный email адресс',
            pattern: `^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$`,
            required: true
        },
        {
            name: 'promo',
            type: 'text',
            placeholder: 'Промокод',
            icon: promoIcon,
            errorMessage: '',
            required: true
        },
    ]

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        if (/[a-z0-9-а-я]/.test(values.password) && values.password.length >= 6) {
            setSecurityPasswordNumber(1)
        } else if (/[A-Za-z0-9-А-Яа-я]/.test(values.password) && values.password.length >= 6) {
            setSecurityPasswordNumber(2)
        } else if (/[A-Za-z0-9-А-Яа-я!@#$%^&*]/.test(values.password) && values.password.length >= 6) {
            setSecurityPasswordNumber(3)
        } else if (values.password.length < 6) {
            setSecurityPasswordNumber(0)
        }

    }, [values.password, securityPasswordNumber])
    console.log(securityPasswordNumber)


    return (
        <div>
            <form>
                {inputs.map((input, i) => (
                    //@ts-ignore
                    <Input key={input.name + i} value={values[input.name]} className={s.inputs_regist}
                           securityPasswordNumber={securityPasswordNumber}
                           handleChange={handleChange}  {...input}/>
                ))}
                <div className={s.checkbox_box}>
                    <div className={s.checkbox_box__item}>
                        <input type="checkbox" className={s.checkbox} checked={checkedMail}
                               onChange={() => setCheckedMail(!checkedMail)}/>
                        <span>Согласен принимать информационные рассылки</span>
                    </div>
                    <div className={s.checkbox_box__item}>
                        <input type="checkbox" className={s.checkbox} checked={checkedRoot}
                               onChange={() => setCheckedRoot(!checkedRoot)}/>
                        <span>Я ознакомился с правилами сервера и принимаю их</span>
                    </div>
                </div>
                <div className={s.button_box}>
                    <Button title={'Правила сервера'} className={`${s.btn} ${s.root_btn}`}/>
                    <Button title={'Создать аккаунт'} className={s.btn}/>
                </div>
            </form>
        </div>
    );
};

export default Registration;
