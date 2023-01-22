import React from "react";
import s from './NetworkItem.module.css';

export const NetworkItem = (props) => {
    return(
        <div className={s.outterContainerMassenger} onClick={() => alert("Текст заглушка. Необходимо добавить контакты.")}>
            <img src={props.iconMassenger} alt="" />
            <span>{props.title}</span>
        </div>
    )
}