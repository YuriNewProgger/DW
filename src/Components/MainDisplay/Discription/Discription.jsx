import React from "react";
import s from './Discription.module.css';
import { useNavigate } from 'react-router-dom';

export const Discription = () => {

    const navigate = useNavigate();

    return(
        <div className={s.outterContainerDiscription}>
            <div className={s.hedaerText}>Сервис аренды автомобилей по всей России</div>
            <div className={s.textDiscription}>
                Чёткая организация рабочего процесса,
                позволяет гарантировать безупречное выполнение обязательств.
                Вы можете оформить любой автомобиль на нашем сервисе и
                уже через час оказаться за рулём.
                <ul>
                    <li>автомобиль будет подан к указаному времени</li>
                    <li>задержка автомобиля в пути сведена к минимуму</li>
                    <li>путешествие или деловая поездка будут предельно компфортной, безопаснтной и увлекательной</li>
                </ul>
                <button onClick={() => navigate('/catalog')}>каталог автомобилей &gt;</button>
            </div>
        </div>
    )
}