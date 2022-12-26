import React from "react";
import s from './PopMenu.module.css';

export const PopMenu = (props) => {
    return(
        <div className={props.isOpen ? `${s.outterContainerPopMenu} ${s.outterContainerPopMenuVisible}` : s.outterContainerPopMenuNoVisible}>
            {props.role === 'admin' ? <div className="hoverElement activeElement">Админ панель</div> : <></>}
            <div className="hoverElement activeElement">Личный кабинет</div>
            <div className="hoverElement activeElement">Выйти</div>
        </div>
    )
}