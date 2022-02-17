import React from 'react';
import s from './style.module.css'

type inputType = {
    type: string
    className?: string
    icon: string
    placeholder: string
}

const Input = ({type, className, icon, placeholder}: inputType) => {
    return (
        <div className={`${s.input} ${className}`}>
            <input type={type} placeholder={placeholder}/>
            <img src={icon} alt=""/>
        </div>
    );
};

export default Input;
