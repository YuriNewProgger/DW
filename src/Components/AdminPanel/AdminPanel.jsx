import React, { useEffect, useState } from "react";
import s from './AdminPanel.module.css';
import { NavLink, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AdminPanelCars } from "./Categories/Cars/AdminPanelCars";
import { AdminPanelBlackList } from "./Categories/BlackList/AdminPanelBlackList";
import { AdminPanelUsers } from "./Categories/Users/AdminPanelUsers";
import { AdminPanelRents } from "./Categories/Rents/AdminPanelRents";

export const AdminPanel = () => {

    return (
        <div className={s.outterContainerAdminPanel}>
            <div className={s.outterContainerCategories}>
                <NavLink className={s.test} to="cars">Автомобили</NavLink>
                <NavLink to="retns">Аренда</NavLink>
                <NavLink to="users">Пользователи</NavLink>
                <NavLink to="blackList">Чёрный список</NavLink>
            </div>
            {
                <Routes>
                    <Route path="/cars" element={<AdminPanelCars/>} />
                    <Route path="/retns" element={<AdminPanelRents/>} />
                    <Route path="/users" element={<AdminPanelUsers/>} />
                    <Route path="/blackList" element={<AdminPanelBlackList/>} />
                </Routes>
            }
            

        </div>
    )
}