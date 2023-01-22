import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { Catalog } from "../Catalog/Catalog";
import { ContactsPage } from "../ContactsPage/Contacts";
import { MainDisplay } from "../MainDisplay/MainDisplay";
import s from './Body.module.css';


export const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<MainDisplay />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/adminPanel" element={<AdminPanel/>} />
            <Route path="/contact" element={<ContactsPage/>} />
        </Routes>
    )
}