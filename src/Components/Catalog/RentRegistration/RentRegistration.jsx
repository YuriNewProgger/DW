import React, { useEffect, useState }  from "react";
import s from './RentRegistration.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from './../../../Redux/carSlice';

export const RentRegistration = (props) => {
    console.log(props);
    return(
        <div className={s.outterContainerRentRegistr}>
            <div className={s.photoBlock}>
                <img className={s.photo} src={`data:image/png;base64,${props.SelectedCar.photo}`} alt="" />
            </div>
            <div className={s.controlBlock}>
                <button className="btnCommon hoverElement activeElement">Оформить</button>
            </div>
        </div>
    )
}