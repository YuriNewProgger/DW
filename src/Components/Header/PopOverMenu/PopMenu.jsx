import React from "react";
import s from './PopMenu.module.css';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser, setUser } from "../../../Redux/userSlice";

export const PopMenu = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(getUser);


    const exitAccount = () => {
        dispatch(setUser(''));
    }

    return (
        <div className={props.isOpen ? `${s.outterContainerPopMenu} ${s.outterContainerPopMenuVisible}` : s.outterContainerPopMenuNoVisible}>
            <div className={s.outterContainerInfoUser}>
                <div>{user.name} {user.surname}</div>
                <div>{user.email}</div>
                <hr />
            </div>
            {props.role === 'admin' ?
                <div className={`${s.linkPA} hoverElement activeElement`}>
                    <NavLink to="/adminPanel">Админ панель</NavLink>
                </div> : <></>}
            <div className={`${s.linkPA} hoverElement activeElement`}>
                <NavLink to="/personalAccount">Личный кабинет</NavLink>
            </div>
            <div className={`${s.linkPA} hoverElement activeElement`} onClick={exitAccount}>Выйти</div>
        </div>
    )
}
