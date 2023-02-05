import React, { useEffect } from "react";
import s from './AdminPanelRents.module.css';
import { RentItem } from './RentItem/RentItem';
import { useDispatch, useSelector } from 'react-redux';
import { getRents, loadRents, setRents } from './../../../../Redux/adminPanelSlice';

export const AdminPanelRents = () => {

    const mockUser ={
        name: "Tranton",
        surname: "Smith",
        patronymic: "Juliya",
        snpassport: "3214 852014",
    }
    const mockCar ={
        title: "Ford Focus Hatchback 3"
    }
    const mockRent ={
        start_date: "2023-02-03",
        end_date: "2023-02-04"
    }

    const dispatch = useDispatch();
    const rents = useSelector(getRents);

    useEffect(() => {
        dispatch(loadRents()).unwrap().then(resp => {
            if(resp.status === 200){
                console.log(resp.value)
                dispatch(setRents(resp.value))
            }
        })
    }, []);

    return(
        <div>
            {/* <RentItem User={mockUser} Car={mockCar} Rent={mockRent}/> */}
            {
                rents.map(item => <RentItem RentItem={item}/>)
            }
        </div>
    )
}