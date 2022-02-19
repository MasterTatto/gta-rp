import React, {ChangeEvent, useEffect, useState} from 'react';
import Input from '../../../common/input/input';
import s from './style.module.css';
import userIcon from '../../../assets/icons/input-icons/user.svg';
import passwordIcon from '../../../assets/icons/input-icons/password.svg';
import emailIcon from '../../../assets/icons/input-icons/email.svg';
import promoIcon from '../../../assets/icons/input-icons/promo.svg';
import Button from '../../../common/button/button';
import {scaleSecurePassword} from "../../../helpers/scaleSecurePassword/scale";
import Checkbox from "../../../common/checbox/chekbox";

export type ValuesType = {
    userName: string
    password: string
    confirmPassword: string
    email: string
    promo: string
}

export type InputsType = {
    name: string
    type: string
    placeholder: string
    icon: string
    errorMessage: string
    pattern: string
    required: boolean
    showKeyBoardInfo?: boolean
    securityPassword?: boolean
    showValidateSvg?: boolean
    maxLength?: number
}

type RegistrationType = {
    checkedRoot: boolean
    setCheckedRoot: (e: boolean) => void
    setShowRootServer: (e: boolean) => void
}

const Registration = ({checkedRoot, setCheckedRoot, setShowRootServer}: RegistrationType) => {
        const [checkedMail, setCheckedMail] = useState(true);
        const [securityPasswordNumber, setSecurityPasswordNumber] = useState<number>(0);
        const [securityPasswordTitle, setSecurityPasswordTitle] = useState<string>('');

        const [values, setValues] = useState<ValuesType>({
            userName: '',
            password: '',
            confirmPassword: '',
            email: '',
            promo: '',
        });

        const inputs: InputsType[] = [
            {
                name: 'userName',
                type: 'text',
                placeholder: 'Логин',
                icon: userIcon,
                errorMessage: 'Логин должен состоять от 4-16 символов',
                pattern: '^[A-Za-z0-9-А-Яа-я]{4,16}$',
                required: true,
                showValidateSvg: /^[A-Za-z0-9-А-Яа-я]{4,16}$/.test(values.userName),
            },
            {
                name: 'password',
                type: 'text',
                placeholder: 'Пароль',
                icon: passwordIcon,
                errorMessage: 'Пароль должен состоять от 6-20 символов',
                showKeyBoardInfo: true,
                pattern: '^[A-Za-z0-9-А-Яа-я!@#$%^&*]{6,20}$',
                required: true,
                securityPassword: true,
                maxLength: 20,
                showValidateSvg: /^[A-Za-z0-9-А-Яа-я!@#$%^&*]{6,20}$/.test(values.password),
            },
            {
                name: 'confirmPassword',
                type: 'text',
                placeholder: 'Подтвердите пароль',
                icon: passwordIcon,
                errorMessage: 'Пароли не совпадают',
                pattern: values.password,
                required: true,
                showValidateSvg: values.password === values.confirmPassword && /^[A-Za-z0-9-А-Яа-я!@#$%^&*]{6,20}$/.test(values.password),
            },
            {
                name: 'email',
                type: 'email',
                placeholder: 'E-mail',
                icon: emailIcon,
                errorMessage: 'Невалидный email адресс',
                pattern: `^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$`,
                required: true,
                showValidateSvg: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email),
            },
            {
                name: 'promo',
                type: 'text',
                placeholder: 'Промокод',
                icon: promoIcon,
                errorMessage: 'Error',
                pattern: '^[A-Za-z0-9-А-Яа-я]{4,16}$',
                required: true,
                showValidateSvg: /^[A-Za-z0-9-А-Яа-я]{4,16}$/.test(values.promo),
            },
        ];

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setValues({...values, [e.target.name]: e.target.value});
        };

        useEffect(() => {
            scaleSecurePassword(values.password, setSecurityPasswordNumber, setSecurityPasswordTitle)
        }, [values.password]);

        const handleSubmit = (e: any) => {
            e.preventDefault();
            if (!checkedRoot) setShowRootServer(true)
        }

        return (
            <div className={s.regist}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {inputs.map((input: InputsType, i) => {
                        //@ts-ignore
                        const value = values[input.name]

                        return <Input
                            key={input.name + i}
                            value={value}
                            className={s.inputs_regist}
                            securityPasswordNumber={securityPasswordNumber}
                            securityPasswordTitle={securityPasswordTitle}
                            handleChange={handleChange}
                            {...input}
                        />
                    })}
                    <div className={s.checkbox_box}>

                        <Checkbox className={s.checkbox1} checked={checkedMail}
                                  title={'Согласен принимать информационные рассылки'}
                                  onChange={setCheckedMail}/>
                        <Checkbox className={s.checkbox2} checked={checkedRoot}
                                  title={'Я ознакомился с правилами сервера и принимаю их '}
                                  onChange={setCheckedRoot}/>

                    </div>
                    <div className={s.button_box}>
                        <Button title={'Правила сервера'} className={`${s.btn} ${s.root_btn}`}/>
                        <Button title={'Создать аккаунт'} className={s.btn} type={'submit'}/>
                    </div>
                </form>
            </div>
        );
    }
;

export default Registration;
