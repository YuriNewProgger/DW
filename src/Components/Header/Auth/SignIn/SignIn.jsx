import React from "react";
import s from './SignIn.module.css';
import { TextInput } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { setTypeAuth } from "../../../../Redux/userSlice";

export const SignIn = () => {
    
    const dispatch = useDispatch();

    const setSignUpTypeAuth = () => {
        dispatch(setTypeAuth({typeAuth: 'signup'}));
    }

    return (
        <div>
            <TextInput styles={{label: { color: '#BBBBBB' }}} placeholder="Логин" label="Логин" />
            <TextInput styles={{ label: { color: '#BBBBBB' }}} placeholder="Пароль" label="Пароль" />

            <div className={s.btnForgetPasswordOutterContainer}>
                <button className={s.btnForgetPassword}>Забыл пароль</button>
            </div>

            <div className={s.btnControls}>
                <button className="btnCommon" onClick={setSignUpTypeAuth}>
                    Регистрация
                </button>
                <button className="btnCommon" >
                    Войти
                </button>
            </div>

        </div>
    )
}