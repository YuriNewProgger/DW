import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

export const Navbar = () => {
    return(
        <div className={s.outterContainer}>
            {/* <div>Каталог</div>
            <div>Контакты</div>
            <div>О нас</div> */}

            <NavLink to="/catalog">Каталог</NavLink>
            <NavLink to="/contact">Контакты</NavLink>
            <NavLink to="/about">О нас</NavLink>
        </div>
    )
}