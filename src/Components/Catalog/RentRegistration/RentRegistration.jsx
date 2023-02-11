import React, { useEffect, useState } from "react";
import s from './RentRegistration.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from '@mantine/dates';
import { Checkbox, Modal, useMantineTheme } from '@mantine/core';
import dayjs from 'dayjs';
import moment from 'moment';
import { getFormatingDate } from './../../../Utils/DateFormatter/DateFormatter';
import { getUser } from "../../../Redux/userSlice";
import { registrRentCar } from './../../../Redux/carSlice';
import { FactorWindow } from "../FactorWIndow/FactorWindow";
import { SuccessNotification, UnsuccessNotification } from "../../../Utils/Notifaction/Notifier";

export const RentRegistration = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);

    const theme = useMantineTheme();
    const [isShowFactorWindow, setIsShowFactorWindow] = useState(false);

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

    //#region Оформление автомобиля
    const registrationCar = () => {

        if(!Number.isInteger(_totalSumForRent) || _totalSumForRent === 0){
            alert("Ошибка! Не выбраны даты.")
            return;
        }

        const _tmpRent = {
            id_car: props.SelectedCar.id,
            id_user: user.id,
            start_date: _startDate,
            end_date: _endDate,
            is_compleate: false,
            total_price: _totalSumForRent
        }
        dispatch(registrRentCar(_tmpRent)).unwrap().then(resp => {
            console.log(resp);
            if(resp.status === 200){
                SuccessNotification('Автомобиль успешно арендован. С вами свяжется оператор для уточнения деталей.');
                props.SetIsOpenWinRegistrationRent(false);                
            }                
            else if(resp.status === 400){
                UnsuccessNotification("Имеется активная аренда. Сдайте текущий автомобиль для оформления нового.");
                //alert("Ошибка! Имеется не завешённая аренда.")
            }                
            else{
                //alert("Ошибка сервера, попробуйте позже.")
                UnsuccessNotification("Ошибка сервера, попробуйте позже.")
            }
        });
    }
    //#endregion

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
                        <DatePicker minDate={dayjs(new Date()).startOf('month').add(new Date().getDate(), 'days').toDate()} 
                            value={_endDate}
                            placeholder="Конечная дата" 
                            onChange={(e) => changeEndDate(e)} />
                    </div>
                </div>
                <button className="btnCommon hoverElement activeElement" onClick={() => setIsShowFactorWindow(true)}>Условия</button>
                <Checkbox styles={
                    { labelWrapper: { color: '#BBBBBB' } }
                }
                    label="Ознакомлен с условиями"
                    checked={_isAgree}
                    onChange={(e) => setIsAgree(e.currentTarget.checked)} />
                <div>Стоимость: {_totalSumForRent} руб.</div>
                {
                    _isAgree ? <button className="btnCommon hoverElement activeElement" onClick={registrationCar}>Оформить</button> :
                        <></>
                }
            </div>

            <Modal
                styles={{
                    modal: { backgroundColor: '#1E1E1E', border: '1px solid #373737', color: '#BBBBBB' }
                }}
                overlayColor={true ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={10}
                centered
                opened={isShowFactorWindow}
                onClose={() => setIsShowFactorWindow(false)}
                title="Оформление аренды"
                size="25%">
                <FactorWindow/>
            </Modal>
        </div>
    )
}