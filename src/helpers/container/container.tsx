import React from 'react';
import s from './style.module.css';

type ContainerType = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({children, className}: ContainerType) => {
    return <div className={`${s.wrapper} ${className}`}>{children}</div>;
};

export default Container;
