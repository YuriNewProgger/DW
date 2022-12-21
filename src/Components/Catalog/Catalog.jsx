import React from "react";
import s from './Catalog.module.css';
import { CardCar } from "./CardCar/CardCar";
import { ScrollArea } from '@mantine/core';
import businessList from "../../MockData/BussinessCarsMock";
// import economList from "../../MockData/EconomCarsMock";
import carsTypes from "../../Utils/CarsTypes/CarsTypes";

export const Catalog = () => {

    return (
        <div className={s.outterContainerCatalog}>
            <div className={s.titleSection}>
                Каталог
            </div>
            <hr />
            <div className={s.carClasses}>
                {
                    carsTypes.map(item =>
                        <div key={item} className={`hoverElement activeElement ${s.typeCarItem}`}>
                            <img src={item.photo} alt="" />
                            <div>{item.title}</div>
                        </div>
                    )
                }
            </div>
            <ScrollArea style={{ height: '70vh', width: '100%' }}>
                <div className={s.carsList}>{
                    businessList.cars.map(item =>
                        <CardCar key={item.title} title={item.title} price={item.price} photo={item.photo} />
                    )
                }
                </div>
            </ScrollArea>
        </div>
    )
}