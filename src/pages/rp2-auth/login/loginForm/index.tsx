import React, {ChangeEvent, useState} from 'react';
import s from "./style.module.css";
import Input from "../../../../common/input/input";
import Checkbox from "../../../../common/checkbox/checkbox";
import Button from "../../../../common/button/button";
import userIcon from "../../../../assets/icons/input-icons/user.svg";
import passwordIcon from "../../../../assets/icons/input-icons/password.svg";

const LoginForm = () => {

    const [rememberMe, setRememberMe] = useState<boolean>(false)
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
            isValidateValue: /^[A-Za-z0-9-А-Яа-я]{4,16}$/.test(values.userName),
            pattern: '^[A-Za-z0-9-А-Яа-я]{4,16}$',
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Пароль',
            icon: passwordIcon,
            errorMessage: 'Пароль должен состоять от 6-20 символов',
            showKeyBoardInfo: true,
            isValidateValue: /^[A-Za-z0-9-А-Яа-я!@#$%^&*]{6,20}$/.test(values.password),
            pattern: '^[A-Za-z0-9-А-Яа-я!@#$%^&*]{6,20}$',
        }
    ]

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    return (
        <form>
            <div className={s.input_box}>
                {inputs.map((input, i) => (
                    //@ts-ignore
                    <Input key={input.name + i} value={values[input.name]} className={s.inputs_regist}
                           handleChange={handleChange}  {...input}/>
                ))}
            </div>
            <Checkbox className={s.checkbox_box} checked={rememberMe} title={'Запомнить меня'}
                      onChange={setRememberMe}/>
            <div className={s.button_box}>
                <Button title={'Войти'}/>
            </div>
        </form>
    );
};

export default LoginForm;
