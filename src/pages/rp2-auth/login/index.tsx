import React from 'react';
import background_login from '../../../assets/images/background_auth.png'
import s from './style.module.css'
import InterestingFacts from "./InterestingFacts";
import Authorization from "./authorization";

const Login = () => {
    return (
        <div className={s.login} style={{backgroundImage: `url(${background_login})`}}>
            <div className={s.wrapper}>
                <InterestingFacts/>
                <Authorization/>
            </div>
        </div>
    );
};

export default Login;
