import React from "react";
import tg from '../../../Assets/Img/telegram.png';
import wa from '../../../Assets/Img/whatsapp.png';
import yt from '../../../Assets/Img/youtube.png';
import { NetworkItem } from '../../Common/NetworkItem/NetworkItem';
import s from './Networks.module.css';


export const Networks = () => {
    return (
        <div className={s.outterContainerMassengers}>
            <div className={s.textNameActiveNetwork}>
                Активность в сети
            </div>
            <div>
                <NetworkItem iconMassenger={tg} title="Telegram" />
                <NetworkItem iconMassenger={wa} title="WhatsApp" />
                <NetworkItem iconMassenger={yt} title="YouTube" />
            </div>
        </div>
    )
}