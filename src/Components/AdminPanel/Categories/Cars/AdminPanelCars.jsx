import React, { useEffect, useState } from "react";
import s from './AdminPanelCars.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { refreshCarList, getCars, deleteCarFromBD, deleteCarFromState, deleteCarFromBDV2, updateCarToBD } from "../../../../Redux/carSlice";
import { Modal, useMantineTheme } from '@mantine/core';
import { AddCar } from './AddCar/AddCar';
import { CarItem } from './CarItem';

export const AdminPanelCars = () => {
    console.log('LOL');
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

    const deleteCarItem = (_id) => {
        dispatch(deleteCarFromBD({id: _id})).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(refreshCarList);
            }
        })
    }

    const updateCarItem = (value) => {
        console.log(value);
        dispatch(updateCarToBD(value)).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(refreshCarList);
            }
        });
    }
    return(
        <div>
            <div>
                <button className={`btnCommon hoverElement activeElement btnMarginTopDown`} onClick={addCar}> + Новый автомобиль</button>
            </div>
            <div className={s.selectedItemsContainer}>
                {
                    _cars.length !== 0 ? 
                    _cars.allCars.map(element => <CarItem key={element.id} id={element.id} delMethod={deleteCarItem} updateMethod={updateCarItem} carElement={element} allTypes={_cars.allTypes}/>) :
                    <></>
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