import React from 'react';
import s from './style.module.css'
import Carousel from "../../../../common/carousel/carousel";
import {facts} from "./data";

const InterestingFacts = () => {
    return (
        <div className={s.interestingFacts}>
            <div className={s.interestingFacts__title}>
                <h4>Интересный факт</h4>
            </div>
            <div className={s.interestingFacts__carousel}>
                <Carousel data={facts} delay={5000} length={facts.length}/>
            </div>
        </div>
    );
};

export default InterestingFacts;
