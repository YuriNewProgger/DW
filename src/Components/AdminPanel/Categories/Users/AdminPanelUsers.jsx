import React, {useEffect} from "react";
import s from './AdminPanelUsers.module.css';
import { useDispatch } from 'react-redux';
import { deleteInfoUser, getAllUsers, loadUsers } from "../../../../Redux/adminPanelSlice";
import { useSelector } from 'react-redux';
import { UserItem } from "./UserItem/UserItem";
import { updateInfoUser } from './../../../../Redux/adminPanelSlice';

export const AdminPanelUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);

    useEffect(() => {
        dispatch(loadUsers);
    }, []);

    //#region Обновление информации о пользователе
    const updateUserItem = (value) => {
        dispatch(updateInfoUser(value)).unwrap().then(resp => {
            if(resp.status === 200)
                dispatch(loadUsers);
        });
    }
    //#endregion

    //#region Удалить пользователя
    const deleteUserItem = (value) => {
        dispatch(deleteInfoUser(value)).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(loadUsers);
            }
        });
    }
    //#endregion

    return(
        <div>
            {
                users.map(item => <UserItem key={item.id} User={item} Update={updateUserItem} Delete={deleteUserItem}/>)
            }
        </div>
    )
}