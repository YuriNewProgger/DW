import React, { useState } from "react";
import s from './CarItem.module.css';
import { TextInput, Select, Textarea } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { deleteCarFromBD } from './../../../../Redux/carSlice';
import { Accordion } from '@mantine/core';
import { CustomUploadFile } from "../../../Common/CustomUploadFile/CustomUploadFile";
import { ConverImageToBase64 } from "../../../../Utils/Converter/Converter";

export const CarItem = (props) => {
    const dispatch = useDispatch();

    const [_title, setTitle] = useState(props.carElement.title);
    const [_price, setPrice] = useState(props.carElement.price);
    const [_photo, setPhoto] = useState(props.carElement.photo);
    const [_discription, setDiscription] = useState(props.carElement.discription);
    const [_type, setType] = useState(props.carElement.type.interpretation);

    const _types = [];
    for (let item of props.allTypes)
        _types.push({ value: item.interpretation, label: item.interpretation });

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        //setTitlePhoto(file.name);
        const base64 = await ConverImageToBase64(file);
        setPhoto(base64);
    }

    return (
        <div className={s.outterContainerCarItem}>
            <Accordion chevronPosition="right" defaultValue="" transitionDuration={1000}
                styles={{
                    control: {
                        '&:hover': {
                            backgroundColor: 'transparent',
                        }
                    },

                    chevron: {
                        color: '#bbb',
                    },
                    label: {
                        color: '#bbb',
                    },
                }}>
                <Accordion.Item value="customization">
                    <Accordion.Control>{`${_title} ${_price} ${_type}`}</Accordion.Control>
                    <Accordion.Panel>
                        <div className={s.innerContainer}>
                            <img src={_photo} style={{height:'250px'}}/>
                            <CustomUploadFile TitlePhoto="" CbUploadImage={uploadImage}/>
                            <TextInput value={_title ?? " "} onChange={(e) => setTitle(e.currentTarget.value)} placeholder="Название" />
                            <TextInput value={_price ?? " "} onChange={(e) => setPrice(e.currentTarget.value)} placeholder="Цена" />
                            {/* <Textarea value={_photo ?? " "} onChange={(e) => setPhoto(e.currentTarget.value)} placeholder="Фото" /> */}
                            <TextInput value={_discription ?? ""} onChange={(e) => setDiscription(e.currentTarget.value)} placeholder="Описание" />
                            <Select value={_type} data={_types} onChange={setType} />
                            <button className="btnCommon hoverElement activeElement" onClick={() => {
                                props.updateMethod(
                                    {
                                        id: props.id,
                                        title: _title,
                                        price: _price,
                                        photo: _photo,
                                        discription: _discription,
                                        type: props.allTypes.find(item => item.interpretation === _type).id
                                    });
                            }}>
                                <span className={s.btnUpdate}>&#8634;</span>
                            </button>
                            <button className="btnCommon hoverElement activeElement" onClick={() => props.delMethod(props.id)}><span className={s.btnRemove}>X</span></button>
                        </div>

                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}