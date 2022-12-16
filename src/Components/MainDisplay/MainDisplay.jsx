import React from "react";
import s from './MainDisplay.module.css';
import bgWall from '../../Assets/Img/bg.jpg';
import { Discription } from "./Discription/Discription";
import { Networks } from "./Networks/Networks";
import { Contacts } from "../Common/Contacts/Contacts";

export const MainDisplay = () => {
    return(
        <div className={s.outterContainerMainDisplay}>
            <div className={s.imgAndDiscription}>
                <div>
                    <Discription/>
                </div>
                <div className={s.bgWallOutterContainer}>
                    <img src={bgWall} alt="" />
                </div>
            </div>
            <div className={s.massengersContainer}>
                <Networks/>
                <Contacts/>
            </div>
        </div>
    )
}