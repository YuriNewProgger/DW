import React, { useEffect, useState } from "react";
import s from './RentRegistration.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from '@mantine/dates';
import { Checkbox } from '@mantine/core';
import dayjs from 'dayjs';

export const RentRegistration = (props) => {
    const [_startDate, onChangeStartDate] = useState(null);
    const [_endDate, onChangeEndDate] = useState(null);

    return (
        <div className={s.outterContainerRentRegistr}>
            <div className={s.photoBlock}>
                <img className={s.photo} src={`data:image/png;base64,${props.SelectedCar.photo}`} alt="" />
            </div>
            <div className={s.controlBlock}>
                <div>
                    <h3>Описание</h3>
                    <div className="btnMarginTopDown">{props.SelectedCar.discription}</div>
                    <div className="btnMarginTopDown"><DatePicker minDate={dayjs(new Date()).startOf('month').add(new Date().getDate() - 1, 'days').toDate()} placeholder="Начальная дата" value={_startDate} onChange={onChangeStartDate} /></div>
                    <div className="btnMarginTopDown"><DatePicker placeholder="Конечная дата" value={_endDate} onChange={onChangeEndDate} /></div>
                </div>
                <button className="btnCommon hoverElement activeElement">Условия</button>
                <Checkbox styles={
                    { labelWrapper: { color: '#BBBBBB' } }
                } label="Ознакомлен с условиями"/>                
                <button className="btnCommon hoverElement activeElement">Оформить</button>
            </div>
        </div>
    )
}