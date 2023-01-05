import React from "react";
import s from './AdminPanel.module.css';

export const AdminPanel = () => {
    
    return (
        <div className={s.outterContainerAdminPanel}>
            <div className={s.outterContainerCategories}>
                <button className="btnCommon hoverElement activeElement">Автомобили</button>
                <button className="btnCommon hoverElement activeElement">Аренда</button>
                <button className="btnCommon hoverElement activeElement">Пользователи</button>
                <button className="btnCommon hoverElement activeElement">Чёрный список</button>
            </div>

        </div>
    )
}