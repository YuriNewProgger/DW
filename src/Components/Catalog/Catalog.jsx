import React, { useEffect, useState } from "react";
import s from './Catalog.module.css';
import { CardCar } from "./CardCar/CardCar";
import { ScrollArea, Modal, useMantineTheme } from '@mantine/core';
import carsTypes from "../../Utils/CarsTypes/CarsTypes";
import { useSelector, useDispatch } from 'react-redux';
import { getCars, refreshCarList, setCurrentTypeCar } from "../../Redux/carSlice";
import { getCurrentTypeCar } from './../../Redux/carSlice';
import { getUser } from "../../Redux/userSlice";
import { RentRegistration } from "./RentRegistration/RentRegistration";

export const Catalog = () => {

    const dispatch = useDispatch();
    const theme = useMantineTheme();
    const _cars = useSelector(getCars);
    const _currentTypeCar = useSelector(getCurrentTypeCar);
    const _currentUser = useSelector(getUser);

    const [isOpenWinRegistrationRent, setIsOpenWinRegistrationRent] = useState(false);
    const [_selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        dispatch(refreshCarList);
    }, []);

    //#region Переключени между классами автомобилей
    const changeTypeCar = (value) => {
        dispatch(setCurrentTypeCar(value));
    }
    //#endregion

    //#region Оформление аренды автомобиля
    const rentRegistration = (value) => {
        if (_currentUser === "") {
            alert("Для просмотра информации и оформления аренды, необходимо авторизоваться.");
            return;
        }

        setSelectedCar(_cars.allCars.find(item => item.id === value));

        setIsOpenWinRegistrationRent(true);
    }
    //#endregion

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
                            <CardCar key={item.title} RegistrRent={rentRegistration} id={item.id} title={item.title} price={item.price} photo={item.photo} />
                        ) :
                            <></>

                    }
                </div>
            </ScrollArea>

            <Modal
                styles={{
                    modal: { backgroundColor: '#1E1E1E', border: '1px solid #373737', color: '#BBBBBB' }
                }}
                overlayColor={true ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={isOpenWinRegistrationRent}
                onClose={() => setIsOpenWinRegistrationRent(false)}
                title="Оформление аренды"
                size="55%">
                <RentRegistration SelectedCar={_selectedCar} />
            </Modal>
        </div>
    )
}