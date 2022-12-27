import React from "react";
import s from './PopMenu.module.css';
import { NavLink } from "react-router-dom";

export const PopMenu = (props) => {
    return (
        <div className={props.isOpen ? `${s.outterContainerPopMenu} ${s.outterContainerPopMenuVisible}` : s.outterContainerPopMenuNoVisible}>
            {props.role === 'admin' ?
                <div className={`${s.linkPA} hoverElement activeElement`}>
                    <NavLink to="/personalAccount">Админ панель</NavLink>
                </div> : <></>}
            <div className={`${s.linkPA} hoverElement activeElement`}>
                <NavLink to="/personalAccount">Личный кабинет</NavLink>
            </div>
            <div className={`${s.linkPA} hoverElement activeElement`}>
                <NavLink to="/exit">Выйти</NavLink>
            </div>
        </div>
    )
}
