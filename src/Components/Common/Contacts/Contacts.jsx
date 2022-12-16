import React from "react";
import s from './Contacts.module.css';

export const Contacts = () => {
    return(
        <div className={s.outterContainerComments}>
            <div className={s.titleComments}>Контакты</div>
            <div className={s.numberAndAddress}>
                <div>Телефон: +8-800-2000-600</div>
                <div>Адрес: г.Москва Бульвар Маршала Рокоссовского 10</div>
            </div>
        </div>
    )
}