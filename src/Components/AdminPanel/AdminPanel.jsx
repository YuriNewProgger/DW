import React, { useEffect } from "react";
import s from './AdminPanel.module.css';
import { useSelector } from 'react-redux';
import { getCars } from "../../Redux/carSlice";
import { CarItem } from "./Categories/Cars/CarItem";

export const AdminPanel = () => {

    const _cars = useSelector(getCars);

    useEffect(() => {
        console.log(_cars);
    }, []);

    return (
        <div className={s.outterContainerAdminPanel}>
            <div className={s.outterContainerCategories}>
                <button className="btnCommon hoverElement activeElement">Автомобили</button>
                <button className="btnCommon hoverElement activeElement">Аренда</button>
                <button className="btnCommon hoverElement activeElement">Пользователи</button>
                <button className="btnCommon hoverElement activeElement">Чёрный список</button>
            </div>
            {/* <div>
                <button>Добавить</button>
            </div> */}
            <div className={s.selectedItemsContainer}>
                {
                    _cars.allCars.map(element => <CarItem key={element.id} carElement={element} allTypes={_cars.allTypes}/>)
                }
            </div>

        </div>
    )
}