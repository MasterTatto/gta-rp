import React from 'react';
import s from './style.module.css';

type containerType = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({children, className}: containerType) => {
    return <div className={`${s.wrapper} ${className}`}>{children}</div>;
};

export default Container;
