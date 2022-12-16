import React from "react";
import s from './Header.module.css';
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className={s.outterContainerHedaer}>
            <div className={s.logoText} onClick={() => navigate('/')}>
                <span>Auto Drive Service</span>
            </div>
            <div className={s.navContainer}>
                <Navbar />
            </div>
            <div className={s.btnContainer}>
                <button className={s.btnSign}>
                    Войти
                </button>
            </div>
        </div>
    )
}