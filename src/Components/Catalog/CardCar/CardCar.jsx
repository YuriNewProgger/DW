import React from "react";
import s from './CardCar.module.css';

export const CardCar = (props) => {
    return(
        <div className={`${s.outterContainerCard} hoverElement`}>
            <img src={props.photo} alt=""/>
            <span className={s.titleAndPrice}>{props.title}<br/>{props.price}</span>
        </div>
    )
}