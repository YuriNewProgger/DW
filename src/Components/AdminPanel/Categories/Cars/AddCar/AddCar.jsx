import React, { useEffect, useState } from "react";
import { TextInput, Select, Textarea } from '@mantine/core';
import s from './AddCar.module.css';


export const AddCar = (props) => {

    const [_title, setTitle] = useState(" ");
    const [_price, setPrice] = useState(" ");
    const [_photo, setPhoto] = useState(" ");
    const [_discription, setDiscription] = useState(" ");

    const _types = [];
    for (let item of props.allTypes)
        _types.push({ value: item.title, label: item.title });



    return (
        <div className={s.outterContainerAddCar}>
            <div>
                <div>Наименование автомобиля</div>
                <TextInput value={_title} onChange={(e) => setTitle(e.currentTarget.value)} />
            </div>

            <div>
                <div>Цена суточной аренды</div>
                <TextInput value={_price} onChange={(e) => setPrice(e.currentTarget.value)} />
            </div>

            <div>
                <div>Фотография в формате base64 (размер 1280х1024)</div>
                <Textarea value={_photo} onChange={(e) => setPhoto(e.currentTarget.value)} />
            </div>

            <div>
                <div>Описание автомобиля (комплектация, л.с и т.д.)</div>
                <Textarea value={_discription} onChange={(e) => setDiscription(e.currentTarget.value)} />
            </div>

            <div>
                <div>Класс</div>
                <Select data={_types} />
            </div>

            <div>
                <button className="btnCommon hoverElement activeElement">Сохранить</button>
            </div>

        </div>
    )
}