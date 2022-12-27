import React, { useEffect, useState } from "react";
import s from './SignUp.module.css';
import { TextInput } from '@mantine/core';
import { useDispatch } from "react-redux";
import { loginQuery, registrationQuery, setTypeAuth, setUser } from "../../../../Redux/userSlice";

export const SignUp = () => {

    const [_name, setName] = useState('');
    const [_surName, setSurName] = useState('');
    const [_patronymic, setPatronymic] = useState('');
    const [_snPassport, setsnPassport] = useState('');
    const [_age, setAge] = useState('');
    const [_phone, setPhone] = useState('');
    const [_email, setEmail] = useState('');
    const [_login, setLogin] = useState('');
    const [_password, setPassword] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(setTypeAuth({ typeAuth: 'signin' }));
        }

    }, []);

    const registration = () => {
        const newUser = {
            name: _name,
            surname: _surName,
            patronymic: _patronymic,
            snpassport: _snPassport,
            age: _age,
            phone: _phone,
            email: _email,
            login: _login,
            password: _password
        }

        dispatch(registrationQuery(newUser)).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(loginQuery({login: newUser.login, password: newUser.password}));                
            }
        });
    }

    return (
        <div>
            <TextInput placeholder="Имя" label="Имя" withAsterisk styles={{
                label: { color: '#BBBBBB' }
            }}
                value={_name} onChange={(e) => setName(e.currentTarget.value)} />

            <TextInput placeholder="Фамилия" label="Фамилия" withAsterisk styles={{
                label: { color: '#BBBBBB' }
            }}
                value={_surName} onChange={(e) => setSurName(e.currentTarget.value)} />

            <TextInput placeholder="Отчество" label="Отчество" withAsterisk styles={{
                label: { color: '#BBBBBB' }
            }}
                value={_patronymic} onChange={(e) => setPatronymic(e.currentTarget.value)} />

            <TextInput placeholder="серия и номер паспорта" label="серия и номер паспорта" withAsterisk styles={{
                label: { color: '#BBBBBB' }
            }}
                value={_snPassport} onChange={(e) => setsnPassport(e.currentTarget.value)} />

            <TextInput placeholder="Полных лет" label="Возраст" withAsterisk styles={{
                label: { color: '#BBBBBB' }
            }}
                value={_age} onChange={(e) => setAge(e.currentTarget.value)} />

            <TextInput placeholder="+7-000-000-00-00" label="Номер телефона" withAsterisk styles={{
                label: { color: '#BBBBBB' }
            }}
                value={_phone} onChange={(e) => setPhone(e.currentTarget.value)} />

            <TextInput placeholder="example@gmail.com" label="Email" withAsterisk styles={{
                label: { color: '#BBBBBB' }
            }}
                value={_email} onChange={(e) => setEmail(e.currentTarget.value)} />

            <TextInput placeholder="Логин" label="Логин" withAsterisk styles={{
                label: { color: '#BBBBBB' }
            }}
                value={_login} onChange={(e) => setLogin(e.currentTarget.value)} />

            <TextInput placeholder="Пароль" label="Пароль" withAsterisk styles={{
                label: { color: '#BBBBBB' }
            }}
                value={_password} onChange={(e) => setPassword(e.currentTarget.value)} />

            <div className={s.outterContainerBtnSignUp}>
                <div className={s.btnControls}>
                    <button className="btnCommon hoverElement activeElement" onClick={registration}>
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    )
}