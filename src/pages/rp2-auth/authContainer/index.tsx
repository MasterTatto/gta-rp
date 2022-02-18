import React, {useState} from 'react';
import s from './style.module.css'
import {facts} from "./data";
import Carousel from "../../../common/carousel/carousel";
import background_login from "../../../assets/images/background_auth.png";
import Container from "../../../helpers/container/container";
import Login from "../login";
import Registration from "../registration";

const AuthContainer = () => {
    const [navigation, setNavigation] = useState<'login' | 'regist'>('login');


    return (
        <div className={s.login} style={{backgroundImage: `url(${background_login})`}}>
            <Container>
                <div className={s.interestingFacts}>
                    <div className={s.interestingFacts__title}>
                        <h4>Интересный факт</h4>
                    </div>
                    <div className={s.interestingFacts__carousel}>
                        <Carousel data={facts} delay={5000} length={facts.length}/>
                    </div>
                </div>
                <div className={s.authorization}>
                    <h2>{(navigation === 'login' && 'Авторизация') || (navigation === 'regist' && 'Регистраиця')}</h2>
                    <p className={s.authorization__title}>Добро пожаловать на сервер.<br/> Войдите под своим аккаунтом или зарегестрируйте новый</p>
                    <div className={s.navigate}>
                        <div className={`${s.navigate__login} ${navigation === 'login' && s.active}`}
                             onClick={() => setNavigation('login')}>Авторизация
                        </div>
                        <div className={`${s.navigate__regist} ${navigation === 'regist' && s.active}`}
                             onClick={() => setNavigation('regist')}>Регистрация
                        </div>
                    </div>

                    {navigation === 'login' && <Login/>}
                    {navigation === 'regist' && <Registration/>}
                </div>
            </Container>
        </div>
    );
};

export default AuthContainer;
