import React, {useEffect} from "react";
import s from './AdminPanelUsers.module.css';
import { useDispatch } from 'react-redux';
import { deleteInfoUser, getAllUsers, loadUsers } from "../../../../Redux/adminPanelSlice";
import { useSelector } from 'react-redux';
import { updateInfoUser } from './../../../../Redux/adminPanelSlice';
import { SuccessNotification, UnsuccessNotification } from "../../../../Utils/Notifaction/Notifier";
import { EditInfoUser } from "../../../Common/EditInfoUser/EditInfoUser";

import { Accordion } from '@mantine/core';

export const AdminPanelUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);

    useEffect(() => {
        dispatch(loadUsers);
    }, []);

    //#region Обновление информации о пользователе
    const updateUserItem = (value) => {
        dispatch(updateInfoUser(value)).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(loadUsers);
                SuccessNotification("Обновлено")
            }
            else{
                UnsuccessNotification("Обратитесь в техническую поддержку.")
            }
                
        });
    }
    //#endregion

    //#region Удалить пользователя
    const deleteUserItem = (value) => {
        dispatch(deleteInfoUser(value)).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(loadUsers);
                SuccessNotification("Пользователь успешно удалён.")
            }
            else if(resp.status === 406){
                UnsuccessNotification("Невозможно удалить. Имеется не завершенная аренда.")
            }
            else{
                UnsuccessNotification("Обратитесь в техническую поддержку.")
            }
        });
    }
    //#endregion


    //#region Создаёт карточки для пользователей
    const makeCardUser = () => {
        let tmp = [];

        users.forEach(element => {
            tmp.push(
                <Accordion key={element.id} chevronPosition="right" defaultValue="" transitionDuration={1000}
                styles={{
                    control: {
                        '&:hover': {
                            backgroundColor: 'transparent',
                        }
                    },

                    chevron: {
                        color: '#bbb',
                    },
                    label: {
                        color: '#bbb',
                    },
                }}>
                <Accordion.Item value="customization">
                    <Accordion.Control>{`${element.name} ${element.surname} ${element.patronymic} ${element.snpassport}`}</Accordion.Control>
                    <Accordion.Panel>
                        <EditInfoUser Update={updateUserItem} User={element} Delete={deleteUserItem}/>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
            );
        });

        return tmp;
    }
    //#endregion

    return(
        <div>
            {
                users.length > 0 ? makeCardUser() : ''
            }
        </div>
    )
}