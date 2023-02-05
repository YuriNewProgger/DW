import React, { useEffect } from "react";
import s from './AdminPanelRents.module.css';
import { RentItem } from './RentItem/RentItem';
import { useDispatch, useSelector } from 'react-redux';
import { getRents, loadRents, setRents } from './../../../../Redux/adminPanelSlice';

export const AdminPanelRents = () => {

    const dispatch = useDispatch();
    const rents = useSelector(getRents);

    useEffect(() => {
        dispatch(loadRents()).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(setRents(resp.value))
            }
        })
    }, []);


    return(
        <div>
            {
                rents.map(item => <RentItem key={item.id_rents} RentItem={item}/>)
            }
        </div>
    )
}