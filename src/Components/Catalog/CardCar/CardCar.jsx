import React from "react";
import s from './CardCar.module.css';

export const CardCar = (props) => {
    return(
        <div className={`${s.outterContainerCard} hoverElement`} onClick={() => props.RegistrRent(props.id)}>
            <img src={props.photo} alt=""/>
            <span className={s.titleAndPrice}>{props.title}<br/>от {props.price} руб./сут.</span>
        </div>
    )
}