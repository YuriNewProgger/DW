import React from "react";
import { Routes, Route } from "react-router-dom";
import { Catalog } from "../Catalog/Catalog";
import { MainDisplay } from "../MainDisplay/MainDisplay";
import s from './Body.module.css';


export const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<MainDisplay />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>
    )
}