import React, { useState } from "react";
import s from './CarItem.module.css';
import { TextInput, Select, Textarea } from '@mantine/core';

export const CarItem = (props) => {

    const [_title, setTitle] = useState(props.carElement.title);
    const [_price, setPrice] = useState(props.carElement.price);
    const [_photo, setPhoto] = useState(props.carElement.photo);
    const [_discription, setDiscription] = useState(props.carElement.discription);

    const _types = [];
    for(let item of props.allTypes)
        _types.push({ value: item.title, label: item.title });


    return (
        <div className={s.outterContainerCarItem}>
            <TextInput value={_title ?? " "} onChange={(e) => setTitle(e.currentTarget.value)} placeholder="Название" />
            <TextInput value={_price ?? " "} onChange={(e) => setPrice(e.currentTarget.value)} placeholder="Цена" />
            <Textarea value={_photo ?? " "} onChange={(e) => setPhoto(e.currentTarget.value)} placeholder="Фото" />
            <TextInput value={_discription ?? ""} onChange={(e) => setDiscription(e.currentTarget.value)} placeholder="Описание" />
            <Select value={props.carElement.type.title} data={_types}/>
            <button className="btnCommon hoverElement activeElement">Удалить</button>
            <button className="btnCommon hoverElement activeElement">Сохранить</button>
        </div>
    )
}