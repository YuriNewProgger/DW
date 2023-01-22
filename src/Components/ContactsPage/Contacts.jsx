import React from "react";
import bgCont from '../../Assets/Img/bgContact.jpg';
import s from './Contacts.module.css';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons';
import tg from '../../Assets/Img/telegram.png';
import wa from '../../Assets/Img/whatsapp.png';
import yt from '../../Assets/Img/youtube.png';
import { NetworkItem } from "../Common/NetworkItem/NetworkItem";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


export const ContactsPage = () => {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 9,
        controls: ["zoomControl", "fullscreenControl"],
    };
    return (
        <div>
            <div>
                <img className={s.bgCont} src={bgCont} />
            </div>
            <div className={s.outterContainerMainContact}>
                <div className={s.mainContainerContacts}>
                    <div className={s.textContent}>
                        <div>Контакты</div>
                        <div><IconMapPin size={24} />Бульвар Маршала Рокоссовского 10</div>
                        <div><IconPhone size={24} />+7-800-2000-600</div>
                        <div><IconPhone size={24} />+7-(495)-345-66-00</div>
                        <div><IconAt size={24} />ads@gmail.com</div>
                        <div><IconSun size={24} />Без выходных, Круглосуточно</div>
                        <hr />
                        <div>Реквизиты</div>
                        <div>ООО "Авто Драйв Сервис"</div>
                        <div>9154874320 / 305184759874210</div>
                        <hr />
                        <div>Активность в сети</div>
                        <NetworkItem iconMassenger={tg} title="Telegram" />
                        <NetworkItem iconMassenger={wa} title="WhatsApp" />
                        <NetworkItem iconMassenger={yt} title="YouTube" />
                    </div>
                    <div style={{width:'60%', height:'100%', position:'relative'}}>
                        <YMaps>
                            <Map width='100%' height='100%' defaultState={defaultState} modules={["control.ZoomControl", "control.FullscreenControl"]}>
                                <Placemark geometry={[55.812044, 37.726161]} 
                                modules={["geoObject.addon.balloon"]}
                                properties={{
                                    balloonContentBody:
                                      "Auto Drive Service - сервис аренды автомобилей.",
                                  }}/>
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </div>
    )
}