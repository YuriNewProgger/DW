import React, {useEffect} from "react";
import s from './AdminPanelUsers.module.css';
import { useDispatch } from 'react-redux';
import { refreshUsers } from "../../../../Redux/adminPanelSlice";

export const AdminPanelUsers = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUsers);
    }, []);

    return(
        <div>
            AdminPanelUsers
        </div>
    )
}