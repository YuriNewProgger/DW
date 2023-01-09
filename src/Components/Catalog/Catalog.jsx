import React, { useEffect } from "react";
import s from './Catalog.module.css';
import { CardCar } from "./CardCar/CardCar";
import { ScrollArea } from '@mantine/core';
import businessList from "../../MockData/BussinessCarsMock";
// import economList from "../../MockData/EconomCarsMock";
import carsTypes from "../../Utils/CarsTypes/CarsTypes";
import { useSelector, useDispatch } from 'react-redux';
import { getCars, refreshCarList, setCurrentTypeCar } from "../../Redux/carSlice";
import { getCurrentTypeCar } from './../../Redux/carSlice';

export const Catalog = () => {

    const dispatch = useDispatch();
    const _cars = useSelector(getCars);
    const _currentTypeCar = useSelector(getCurrentTypeCar);

    useEffect(() => {
        dispatch(refreshCarList);
        console.log(_currentTypeCar);
    }, []);

    const changeTypeCar = (value) => {
        dispatch(setCurrentTypeCar(value));
    }

    return (
        <div className={s.outterContainerCatalog}>
            <div className={s.titleSection}>
                Каталог
            </div>
            <hr />
            <div className={s.carClasses}>
                {
                    carsTypes.map(item =>
                        <div key={item.title} className={`hoverElement activeElement ${s.typeCarItem}`} onClick={() => changeTypeCar(item.title)}>
                            <img src={item.photo} alt="" />
                            <div>{item.title}</div>
                        </div>
                    )
                }
            </div>
            <ScrollArea style={{ height: '70vh', width: '100%' }}>
                <div className={s.carsList}>
                {                   
                    _cars.length !== 0 ? _cars.allCars.filter(item => item.type.interpretation === `${_currentTypeCar}`).map(item =>
                        <CardCar key={item.title} title={item.title} price={item.price} photo={item.photo} />
                    ) :
                    <></>
                    
                }
                </div>
            </ScrollArea>
        </div>
    )
}