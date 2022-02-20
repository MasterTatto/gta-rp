import React from 'react';
import s from "./style.module.css"

type CheckboxType = {
    checked: boolean
    onChange: (e: boolean) => void
    title: string
    className?: string
}

const Checkbox = ({checked, onChange, title, className}: CheckboxType) => {
    return (
        <div className={`${s.checkbox_box} ${className}`}>
            <input type='checkbox' className={s.checkbox} checked={checked}
                   onChange={() => onChange(!checked)}/>
            <span>{title}</span>
        </div>
    );
};

export default Checkbox;
