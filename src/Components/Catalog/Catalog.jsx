import React from "react";
import s from './Catalog.module.css';
import econonClass from '../../Assets/CarsClasses/econom.png';
import businessClass from '../../Assets/CarsClasses/business.png';
import jeepClass from '../../Assets/CarsClasses/jeep.png';
import minivenClass from '../../Assets/CarsClasses/miniven.png';
import sportClass from '../../Assets/CarsClasses/sport.png';

export const Catalog = () => {

    const classesImg = [econonClass, businessClass, sportClass, jeepClass, minivenClass];

    return (
        <div className={s.outterContainerCatalog}>
            <div className={s.titleSection}>
                Каталог
            </div>
            <hr />
            <div className={s.carClasses}>
                {
                    classesImg.map(item =>
                        <div key={item} className="hoverElement activeElement">
                            <img src={item} alt="" />
                        </div>                        
                    )
                }
            </div>
            <div className={s.carsList}>

            </div>
        </div>
    )
}