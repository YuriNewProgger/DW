import React, { useEffect, useState } from "react";
import s from './AdminPanel.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { refreshCarList, getCars } from "../../Redux/carSlice";
import { CarItem } from "./Categories/Cars/CarItem";
import { Modal, useMantineTheme } from '@mantine/core';
import { AddCar } from "./Categories/Cars/AddCar/AddCar";

export const AdminPanel = () => {
    const dispatch = useDispatch();

    const [isOpenAddCarWindow, setIsOpenAddCarWindow] = useState(false);

    const theme = useMantineTheme();
    const _cars = useSelector(getCars);

    useEffect(() => {
        dispatch(refreshCarList);
    }, []);

    const addCar = () => {
        setIsOpenAddCarWindow(true);
    }

    return (
        <div className={s.outterContainerAdminPanel}>
            <div className={s.outterContainerCategories}>
                <button className="btnCommon hoverElement activeElement">Автомобили</button>
                <button className="btnCommon hoverElement activeElement">Аренда</button>
                <button className="btnCommon hoverElement activeElement">Пользователи</button>
                <button className="btnCommon hoverElement activeElement">Чёрный список</button>
            </div>
            <div>
                <button onClick={addCar}>Добавить</button>
            </div>
            <div className={s.selectedItemsContainer}>
                {
                    _cars.allCars.map(element => <CarItem key={element.id} carElement={element} allTypes={_cars.allTypes}/>)
                }
            </div>
            <Modal
                styles={{
                    modal: { backgroundColor: '#1E1E1E', border: '1px solid #373737', color: '#BBBBBB' }
                }}
                overlayColor={true ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                centered
                opened={isOpenAddCarWindow}
                onClose={() => setIsOpenAddCarWindow(false)}
                title="Добавление нового автомобиля">
                <AddCar allTypes={_cars.allTypes}/>
            </Modal>

        </div>
    )
}