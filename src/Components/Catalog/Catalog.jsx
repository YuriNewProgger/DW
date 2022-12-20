import React from "react";
import s from './Catalog.module.css';
import econonClass from '../../Assets/CarsClasses/econom.png';
import businessClass from '../../Assets/CarsClasses/business.png';
import jeepClass from '../../Assets/CarsClasses/jeep.png';
import minivenClass from '../../Assets/CarsClasses/miniven.png';
import sportClass from '../../Assets/CarsClasses/sport.png';
import { CardCar } from "./CardCar/CardCar";
import { ScrollArea } from '@mantine/core';
import businessList from "../../MockData/BussinessCarsMock";

export const Catalog = () => {

    const classesImg = [
        {
            titleType: 'Эконом',
            typePhoto: econonClass
        }, 
        {
            titleType: 'Бизнес',
            typePhoto: businessClass
        }, 
        {
            titleType: 'Спорт',
            typePhoto: sportClass
        }, 
        {
            titleType: 'Внедорожник',
            typePhoto: jeepClass
        }, 
        {
            titleType: 'Минивен',
            typePhoto: minivenClass
        }, 
    ];

    return (
        <div className={s.outterContainerCatalog}>
            <div className={s.titleSection}>
                Каталог
            </div>
            <hr />
            <div className={s.carClasses}>
                {
                    classesImg.map(item =>
                        // <div key={item} className="hoverElement activeElement">
                        //     <img src={item.typePhoto} alt="" />
                        //     <div>{item.titleType}</div>
                        // </div>
                        <div key={item} className={`hoverElement activeElement ${s.typeCarItem}`}>
                            <img src={item.typePhoto} alt="" />
                            <div>{item.titleType}</div>
                        </div>
                    )
                }
            </div>
            <ScrollArea style={{height: '74vh', width: '100%'}}>
                <div className={s.carsList}>
                    {/* <CardCar title="Ford Focus 3 от 1500 руб./сут." price="" photo='https://img2.goodfon.ru/original/1280x1024/8/d1/aston-martin-one-77-aston.jpg'/>         
                    <CardCar text="Ford Focus 3 от 1500 руб./сут." photo='https://img2.goodfon.ru/original/1280x1024/8/d1/aston-martin-one-77-aston.jpg'/>         
                    <CardCar text="Ford Focus 3 от 1500 руб./сут." photo='https://img2.goodfon.ru/original/1280x1024/8/d1/aston-martin-one-77-aston.jpg'/>         
                    <CardCar text="Ford Focus 3 от 1500 руб./сут." photo='https://img2.goodfon.ru/original/1280x1024/8/d1/aston-martin-one-77-aston.jpg'/>          */}
                    {
                        businessList.map(item => 
                            <CardCar key={item.title} title={item.title} price={item.price} photo={item.photo}/>
                        )
                    }
                </div>
            </ScrollArea>
        </div>
    )
}