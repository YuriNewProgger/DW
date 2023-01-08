import React, { useEffect, useState } from "react";
import { TextInput, Select, Textarea } from '@mantine/core';
import s from './AddCar.module.css';


export const AddCar = (props) => {

    const [_title, setTitle] = useState("");
    const [_price, setPrice] = useState("");
    const [_photo, setPhoto] = useState("");
    const [_discription, setDiscription] = useState("");
    const [_typeCar, setTypeCar] = useState("");

    const [_titleError, setTitleError] = useState("");
    const [_priceError, setPriceError] = useState("");
    const [_photoError, setPhotoError] = useState("");
    const [_discriptionError, setDiscriptionError] = useState("");
    const [_typeCarError, setTypeCarError] = useState("");

    const _types = [];
    for (let item of props.allTypes)
        _types.push({ value: item.title, label: item.title });


    const saveNewCar = () => {
        //const _typeCar = props.allTypes.find(item => item.title === _typeCar);

        // const newCar = {
        //     title: _title,
        //     price: _price,
        //     photo: _photo,
        //     discription: _discription,
        //     typeCar: props.allTypes.find(item => item.title === _typeCar).id
        // }

        //console.log(newCar);

        _typeCar === "" ?  setTypeCarError("Ошибка! Значение поля не допустимо."):  setTypeCarError("");
        _title === "" ?  setTitleError("Ошибка! Значение поля не допустимо."):  setTitleError("");
        _price === "" ?  setPriceError("Ошибка! Значение поля не допустимо."):  setPriceError("");
        _photo === "" ?  setPhotoError("Ошибка! Значение поля не допустимо."):  setPhotoError("");
        _discription === "" ?  setDiscriptionError("Ошибка! Значение поля не допустимо."):  setDiscriptionError("");

        if(_titleError !== "" || _priceError !== "" || _photoError !== "" || _discriptionError !== "" || _typeCarError !== "")
            return;
        
            

        const newCar = {
            title: _title,
            price: _price,
            photo: _photo,
            discription: _discription,
            typeCar: props.allTypes.find(item => item.title === _typeCar).id
        }

        console.log(newCar);
    }

    return (
        <div className={s.outterContainerAddCar}>
            <div>
                <div>Наименование автомобиля</div>
                <TextInput value={_title} onChange={(e) => setTitle(e.currentTarget.value)} error={_titleError} />
            </div>

            <div>
                <div>Цена суточной аренды</div>
                <TextInput value={_price} onChange={(e) => setPrice(e.currentTarget.value)} error={_priceError}/>
            </div>

            <div>
                <div>Фотография в формате base64 (размер 1280х1024)</div>
                <Textarea value={_photo} onChange={(e) => setPhoto(e.currentTarget.value)} error={_photoError}/>
            </div>

            <div>
                <div>Описание автомобиля (комплектация, л.с)</div>
                <Textarea value={_discription} onChange={(e) => setDiscription(e.currentTarget.value)} error={_discriptionError}/>
            </div>

            <div>
                <div>Класс</div>
                <Select data={_types} value={_typeCar} onChange={setTypeCar} error={_typeCarError}/>
            </div>

            <div>
                <button className="btnCommon hoverElement activeElement" onClick={saveNewCar}>Сохранить</button>
            </div>

        </div>
    )
}