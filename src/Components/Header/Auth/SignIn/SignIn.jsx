import React, { useEffect, useState } from "react";
import s from './SignIn.module.css';
import { TextInput } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { setTypeAuth, loginQuery, setUser } from "../../../../Redux/userSlice";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [_login, setLogin] = useState('');
    const [_password, setPassword] = useState('');


    const setSignUpTypeAuth = () => {
        dispatch(setTypeAuth({typeAuth: 'signup'}));
    }

    const signIn = () => {
        const value = {
            login: _login, 
            password: _password
        }
        dispatch(loginQuery(value));
    }

    return (
        <div>
            <TextInput value={_login} onChange={(e) => setLogin(e.target.value)} styles={{label: { color: '#BBBBBB' }}} placeholder="Логин" label="Логин" />
            <TextInput value={_password} onChange={(e) => setPassword(e.target.value)} styles={{ label: { color: '#BBBBBB' }}} placeholder="Пароль" label="Пароль" />

            <div className={s.btnForgetPasswordOutterContainer}>
                <button className={s.btnForgetPassword}>Забыл пароль</button>
            </div>

            <div className={s.btnControls}>
                <button className="btnCommon hoverElement activeElement" onClick={setSignUpTypeAuth}>
                    Регистрация
                </button>
                <button className="btnCommon hoverElement activeElement" onClick={signIn}>
                    Войти
                </button>
            </div>

        </div>
    )
}