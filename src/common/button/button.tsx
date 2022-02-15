import React from 'react';
import s from './style.module.css'

type ButtonType = {
    title: string
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({title, onClick, className, type}: ButtonType) => {
    return (
        <button onClick={onClick} type={type} className={`${s.btn} ${className}`}>{title}</button>
    );
};

export default Button;
