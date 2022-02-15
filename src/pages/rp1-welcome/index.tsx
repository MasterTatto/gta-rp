import React from 'react';
import s from './style.module.css';
import welcom_background from '../../assets/images/background_start_game.png';
import welcom_background__block from '../../assets/images/background_block_start_game.jpg';
import {socialItems} from './data';
import Button from '../../common/button/button';
import {NavLink} from "react-router-dom";

const Welcome = () => {
    const socialMapItems = socialItems.map((el, i) => (
        <a key={el.alt + i} className={s.item} target='_blank' href={el.link}>
            <img src={el.img} alt={el.alt}/>
        </a>
    ));

    return (
        <div className={s.welcom} style={{backgroundImage: `url(${welcom_background})`}}>
            <div className={s.welcom_block}>
                <div className={s.welcom_block__background} style={{background: `url(${welcom_background__block})`}}/>
                <div className={s.welcom_block__title}>
                    <h4>Добро пожаловать!</h4>
                </div>
                <div className={s.welcom_block__actions}>
                    <p> Мы рады видеть Вас. Приятной игры!</p>
                    <div className={s.welcom_block__actions__social_items}>{socialMapItems}</div>
                    <div className={s.welcom_block__btn}>
                        <NavLink to={'/login'}>
                            <Button title={'Начать игру'} type={'button'}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
