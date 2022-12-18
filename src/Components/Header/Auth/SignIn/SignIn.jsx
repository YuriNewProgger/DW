import React from "react";
import s from './SignIn.module.css';
import { TextInput } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { changeTypeAuth } from "../../../../Redux/userSlice";

export const SignIn = () => {
    
    const dispatch = useDispatch();

    const doChangeSignIn = () => {
        dispatch(changeTypeAuth({typeAuth: 'signup'}));
    }

    return (
        <div>
            <TextInput styles={{label: { color: '#BBBBBB' }}} placeholder="Логин" label="Логин" />
            <TextInput styles={{ label: { color: '#BBBBBB' }}} placeholder="Пароль" label="Пароль" />

            <div className={s.btnForgetPasswordOutterContainer}>
                <button className={s.btnForgetPassword}>Забыл пароль</button>
            </div>

            <div className={s.btnControls}>
                <button className="btnCommon" onClick={doChangeSignIn}>
                    Регистрация
                </button>
                <button className="btnCommon" >
                    Войти
                </button>
            </div>

        </div>
    )
}