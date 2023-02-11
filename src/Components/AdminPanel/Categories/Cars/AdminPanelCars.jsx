import React, { useEffect, useState } from "react";
import s from './AdminPanelCars.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { refreshCarList, getCars, deleteCarFromBD, deleteCarFromState, deleteCarFromBDV2, updateCarToBD } from "../../../../Redux/carSlice";
import { Modal, useMantineTheme } from '@mantine/core';
import { AddCar } from './AddCar/AddCar';
import { CarItem } from './CarItem';
import { getStatusLoading } from './../../../../Redux/carSlice';
import { Loader } from '@mantine/core';
import { SuccessNotification, UnsuccessNotification } from "../../../../Utils/Notifaction/Notifier";

export const AdminPanelCars = () => {
    const dispatch = useDispatch();

    const [isOpenAddCarWindow, setIsOpenAddCarWindow] = useState(false);

    const theme = useMantineTheme();
    const _cars = useSelector(getCars);
    const statusLoading = useSelector(getStatusLoading);

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
                SuccessNotification("Автомобиль удалён.")
            }
            else{
                UnsuccessNotification('Не удалось удалить. Обратитесь в тухническую поддержку.');
            }
        })
    }

    const updateCarItem = (value) => {
        dispatch(updateCarToBD(value)).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(refreshCarList);
                SuccessNotification("Информация обновленав.")
            }
            else{
                UnsuccessNotification('Не удалось обновить. Обратитесь в тухническую поддержку.');
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
                    statusLoading === 'Idle' ? 
                    _cars.allCars.map(element => <CarItem key={element.id} id={element.id} delMethod={deleteCarItem} updateMethod={updateCarItem} carElement={element} allTypes={_cars.allTypes}/>) :
                    <div className={s.loaderBlock}>
                        <div>Загрузка</div>
                        <Loader />
                    </div>
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