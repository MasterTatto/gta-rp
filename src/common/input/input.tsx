import React, {ChangeEvent, FormEventHandler, KeyboardEvent, useEffect, useState} from 'react';
import s from './style.module.css';
import validateSVG from '../../assets/icons/input-icons/validate.svg';

type InputType = {
    type: string;
    name: string;
    icon: string;
    placeholder: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    errorMessage: string;
    showKeyBoardInfo?: boolean;
    className?: string;
    securityPassword?: boolean;
    securityPasswordNumber?: number;
    securityPasswordTitle?: string
    isValidateValue?: boolean;
    maxLength?: number;
    pattern?: string;
}

const Input = ({
                   errorMessage,
                   handleChange,
                   value,
                   type,
                   className,
                   icon,
                   placeholder,
                   showKeyBoardInfo,
                   name,
                   pattern,
                   securityPassword,
                   securityPasswordNumber,
                   securityPasswordTitle,
                   isValidateValue,
                   maxLength
               }: InputType) => {
    const [showCaps, setShowCaps] = useState<boolean>(false);
    const [showLanguage, setShowLanguage] = useState<string>('');
    const [focused, setFocused] = useState<boolean>(false);

    const checkCapsAndLanguage = (event: KeyboardEvent<HTMLInputElement>) => {
        const caps = event.getModifierState && event.getModifierState('CapsLock');
        setShowCaps(caps);

        const rusLowerCase = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        const enLowercase = 'abcdefghijklmnopqrstuvwxyz';
        const ru = rusLowerCase + rusLowerCase.toUpperCase();
        const en = enLowercase + enLowercase.toUpperCase();

        if (ru.includes(event.key)) {
            setShowLanguage('RU');
        } else if (en.includes(event.key)) {
            setShowLanguage('EN');
        }
    };

    const scaleSecurity = Array.from(Array(5).keys());

    useEffect(() => {
        const elements = document.querySelectorAll('#item');

        elements.forEach((el, i) => {
            if (i < securityPasswordNumber!) {
                el.classList.add(s.active);
            }
            if (i >= securityPasswordNumber!) {
                el.classList.remove(s.active);
            }
        });
    }, [securityPasswordNumber]);

    const invalidEvent = (e: FormEventHandler<HTMLInputElement> | any) => {
        e.preventDefault()
        if (!e.target!.validity.valid) {
            setFocused(true)
        }
    }

    return (
        <div className={`${s.input} ${className}`}>
            <input
                id='input'
                pattern={pattern}
                required
                type={type}
                placeholder={placeholder}
                value={value}
                onKeyUp={(event) => checkCapsAndLanguage(event)}
                name={name}
                onChange={(e) => handleChange(e)}
                onBlur={() => {
                    setFocused(true);
                    setShowLanguage('');
                    setShowCaps(false);
                }}
                onInvalid={invalidEvent}
                maxLength={maxLength}
                data-focused={focused.toString()}
                onFocus={() => name === 'confirmPassword' && setFocused(true)}
            />

            {securityPassword && (
                <div className={s.scaleSecurity}>
                    <div className={s.scaleSecurity__box}>
                        {scaleSecurity.map((el, i) => (
                            <div key={i} id={'item'} className={`${s.scaleSecurity__item}`}/>
                        ))}
                    </div>
                    <span className={s.scaleSecurity__title}>{securityPasswordTitle}</span>
                </div>
            )}

            {isValidateValue && <img className={s.validateSVG} src={validateSVG} alt=''/>}
            {showKeyBoardInfo && showCaps && <p className={s.capsLock}>Caps Lock</p>}
            {showKeyBoardInfo && showLanguage && <p className={s.language}>{showLanguage}</p>}

            <span className={s.errorMessage}>{errorMessage}</span>
            <img className={s.logo_input} src={icon} alt=''/>
        </div>
    );
};

export default Input;
