import React, { useState } from "react";
import s from './EditInfoUser.module.css';
import { TextInput, Avatar } from '@mantine/core';
import { useSelector } from 'react-redux';
import { getUser } from "../../../Redux/userSlice";
import { CustomUploadFile } from "../CustomUploadFile/CustomUploadFile";
import { ConverImageToBase64 } from './../../../Utils/Converter/Converter';

export const EditInfoUser = (props) => {

    const [_name, setName] = useState(props.User.name ?? "");
    const [_surname, setSurname] = useState(props.User.surname ?? "");
    const [_patronymic, setPatronymic] = useState(props.User.patronymic ?? "");
    const [_photo, setPhoto] = useState(props.User.photo ?? "");
    const [_snpassport, setSnpassport] = useState(props.User.snpassport ?? "");
    const [_phone, setPhone] = useState(props.User.phone ?? "");
    const [_email, setEmail] = useState(props.User.email ?? "");
    const [_login, setLogin] = useState(props.User.login ?? "");
    const [_password, setPassword] = useState(props.User.password ?? "");

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await ConverImageToBase64(file);
        setPhoto(base64);
    }

    return (
        <div className={s.outterContainerEditUsirInfo}>
            <div className={s.userInfo}>
                <div className={s.userPhoto}>
                    <Avatar size={200}
                        radius="xl"
                        src={_photo}
                        alt="no image here" />
                    <CustomUploadFile TitlePhoto="" CbUploadImage={uploadImage} />
                </div>
                <div className={s.textFields}>
                    <TextInput placeholder="Имя" value={_name} onChange={(e) => setName(e.currentTarget.value)} />
                    <TextInput placeholder="Фамилия" value={_surname} onChange={(e) => setSurname(e.currentTarget.value)} />
                    <TextInput placeholder="Отчество" value={_patronymic} onChange={(e) => setPatronymic(e.currentTarget.value)} />
                    <TextInput placeholder="Серия и номер паспорта" value={_snpassport} onChange={(e) => setSnpassport(e.currentTarget.value)} />
                    <TextInput placeholder="Телефон" value={_phone} onChange={(e) => setPhone(e.currentTarget.value)} />
                    <TextInput placeholder="Почта" value={_email} onChange={(e) => setEmail(e.currentTarget.value)} />
                    {/* TODO сделать поля логина и пароля редактируемые */}
                    {/* <TextInput placeholder="Логин" value={_login} onChange={(e) => setLogin(e.currentTarget.value)}/>
                <TextInput placeholder="Пароль" value={_password} onChange={(e) => setPassword(e.currentTarget.value)}/> */}
                </div>
            </div>
            <button className="btnCommon hoverElement activeElement" onClick={() => {
                props.Update(
                    {
                        id: props.User.id,
                        name: _name,
                        surname: _surname,
                        patronymic: _patronymic,
                        age: props.User.age,
                        email: _email,
                        login: _login,
                        password: _password,
                        phone: _phone,
                        photo: _photo,
                        snpassport: _snpassport,
                        id_login: props.User.id_login
                    })
            }}>
                <span className={s.btnUpdate}>Сохранить</span>
            </button>
            <button className={`btnCommon hoverElement activeElement ${props.Delete === '' ? 'btnCommonHide' : 'btnCommonShow'}`}
                onClick={() => 
                    props.Delete(
                        {
                            id: props.User.id,
                            id_role: props.User.id_role, 
                            id_login: props.User.id_login
                        })}>
                <span>Удалить</span></button>
        </div>
    )
}