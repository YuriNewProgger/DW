import React, { useEffect, useState } from "react";
import s from './RentRegistration.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from '@mantine/dates';
import { Checkbox } from '@mantine/core';
import dayjs from 'dayjs';
import moment from 'moment';
import { getFormatingDate } from './../../../Utils/DateFormatter/DateFormatter';

export const RentRegistration = (props) => {
    const [_startDate, onChangeStartDate] = useState(null);
    const [_endDate, onChangeEndDate] = useState(null);
    const [_isAgree, setIsAgree] = useState(false);
    const [_totalSumForRent, setTotalSumForRent] = useState(0);
    

    const changeStartDate = (e) => {
        onChangeStartDate(getFormatingDate(e));        
    }

    const changeEndDate = (e) => {
        if(_startDate === null || _startDate === "")
            return;

        
        let dateFormating = getFormatingDate(e);
        let a = moment(_startDate, "YYYY-MM-DD");
        let b = moment(dateFormating, "YYYY-MM-DD");
        let days = b.diff(a, 'days') ;

        if(days < 0){
            return;
        }

        onChangeEndDate(dateFormating);
        setTotalSumForRent(days * props.SelectedCar.price);
    }

    return (
        <div className={s.outterContainerRentRegistr}>
            <div className={s.photoBlock}>
                <img className={s.photo} src={`data:image/png;base64,${props.SelectedCar.photo}`} alt="" />
            </div>
            <div className={s.controlBlock}>
                <div>
                    <h3>Описание</h3>
                    <div className="btnMarginTopDown">{props.SelectedCar.discription}</div>
                    <div className="btnMarginTopDown">
                        <DatePicker minDate={dayjs(new Date()).startOf('month').add(new Date().getDate() - 1, 'days').toDate()} 
                            value={_startDate}
                            placeholder="Начальная дата" 
                            onChange={(e) => changeStartDate(e)} />
                    </div>
                    <div className="btnMarginTopDown">
                        <DatePicker minDate={dayjs(new Date()).startOf('month').add(new Date().getDate() - 1, 'days').toDate()} 
                            value={_endDate}
                            placeholder="Конечная дата" 
                            onChange={(e) => changeEndDate(e)} />
                    </div>
                </div>
                <button className="btnCommon hoverElement activeElement">Условия</button>
                <Checkbox styles={
                    { labelWrapper: { color: '#BBBBBB' } }
                }
                    label="Ознакомлен с условиями"
                    checked={_isAgree}
                    onChange={(e) => setIsAgree(e.currentTarget.checked)} />
                <div>Стоимость: {_totalSumForRent} руб.</div>
                {
                    _isAgree ? <button className="btnCommon hoverElement activeElement">Оформить</button> :
                        <></>
                }
            </div>
        </div>
    )
}

//className="btnCommon hoverElement activeElement"