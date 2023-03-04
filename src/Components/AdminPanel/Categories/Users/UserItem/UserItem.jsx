import React from "react";
import s from './UserItem.module.css';
import { TextInput, Textarea, Avatar } from '@mantine/core';
import { useState } from "react";

import { Accordion } from '@mantine/core';

export const UserItem = (props) => {

    const [_name, setName] = useState(props.User.name ?? "");
    const [_surname, setSurname] = useState(props.User.surname ?? "");
    const [_patronymic, setPatronymic] = useState(props.User.patronymic ?? "");
    const [_age, setAge] = useState(props.User.age ?? "");
    const [_photo, setPhoto] = useState(props.User.photo ?? "");
    const [_snpassport, setSnpassport] = useState(props.User.snpassport ?? "");
    const [_phone, setPhone] = useState(props.User.phone ?? "");
    const [_email, setEmail] = useState(props.User.email ?? "");
    const [_login, setLogin] = useState(props.User.login ?? "");
    const [_password, setPassword] = useState(props.User.password ?? "");



    return (
        <div className={s.outterContainerUserItem}>

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
                    <Accordion.Control>{`${_name} ${_surname} ${_patronymic} ${_snpassport}`}</Accordion.Control>
                    <Accordion.Panel>
                        {/* <div className={s.innerContainer}>
                            <img src={_photo}/>
                            <TextInput placeholder="Имя" value={_name} onChange={(e) => setName(e.currentTarget.value)}/>
                            <TextInput placeholder="Фамилия" value={_surname} onChange={(e) => setSurname(e.currentTarget.value)}/>
                            <TextInput placeholder="Отчество" value={_patronymic} onChange={(e) => setPatronymic(e.currentTarget.value)}/>
                            <TextInput placeholder="Возраст" value={_age} onChange={(e) => setAge(e.currentTarget.value)}/>
                            <TextInput placeholder="Серия и номер паспорта" value={_snpassport} onChange={(e) => setSnpassport(e.currentTarget.value)}/>
                            <TextInput placeholder="Телефон" value={_phone} onChange={(e) => setPhone(e.currentTarget.value)}/>
                            <TextInput placeholder="Почта" value={_email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                            <TextInput placeholder="Логин" value={_login} onChange={(e) => setLogin(e.currentTarget.value)}/>
                            <TextInput placeholder="Пароль" value={_password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                            <button className="btnCommon hoverElement activeElement" onClick={() => {
                                props.Update(
                                    { 
                                        id: props.User.id, 
                                        name: _name, 
                                        surname: _surname, 
                                        patronymic: _patronymic, 
                                        age: _age, 
                                        email: _email, 
                                        login: _login, 
                                        password: _password, 
                                        phone: _phone, 
                                        photo: _photo, 
                                        snpassport: _snpassport, 
                                        id_login: props.User.id_login})}}>
                                <span className={s.btnUpdate}>&#8634;</span>
                            </button>
                            <button className="btnCommon hoverElement activeElement" onClick={() => 
                                props.Delete(
                                    {
                                        id: props.User.id,
                                        id_role: props.User.id_role, 
                                        id_login: props.User.id_login
                                    })}>
                                <span className={s.btnRemove}>X</span></button>
                        </div> */}
                         <div className={s.innerContainer}>
                            <div className={s.userInfo}>
                                <div className={s.userPhoto}>
                                    <Avatar size={200}
                                        radius="xl"
                                        src={_photo}
                                        alt="no image here" />
                                </div>
                                <div className={s.textFields}>
                                    <TextInput placeholder="Имя" value={_name} onChange={(e) => setName(e.currentTarget.value)}/>
                                    <TextInput placeholder="Фамилия" value={_surname} onChange={(e) => setSurname(e.currentTarget.value)}/>
                                    <TextInput placeholder="Отчество" value={_patronymic} onChange={(e) => setPatronymic(e.currentTarget.value)}/>
                                    {/* <TextInput placeholder="Возраст" value={_age} onChange={(e) => setAge(e.currentTarget.value)}/> */}
                                    <TextInput placeholder="Серия и номер паспорта" value={_snpassport} onChange={(e) => setSnpassport(e.currentTarget.value)}/>
                                    <TextInput placeholder="Телефон" value={_phone} onChange={(e) => setPhone(e.currentTarget.value)}/>
                                    <TextInput placeholder="Почта" value={_email} onChange={(e) => setEmail(e.currentTarget.value)}/>
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
                                        age: _age, 
                                        email: _email, 
                                        login: _login, 
                                        password: _password, 
                                        phone: _phone, 
                                        photo: _photo, 
                                        snpassport: _snpassport, 
                                        id_login: props.User.id_login})}}>
                                <span className={s.btnUpdate}>&#8634;</span>
                            </button>
                            <button className="btnCommon hoverElement activeElement" onClick={() => 
                                props.Delete(
                                    {
                                        id: props.User.id,
                                        id_role: props.User.id_role, 
                                        id_login: props.User.id_login
                                    })}>
                                <span className={s.btnRemove}>X</span></button>
                        </div>

                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}