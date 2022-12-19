import React from "react";
import s from './SignUp.module.css';
import { TextInput } from '@mantine/core';
import { useDispatch } from "react-redux";
import { setTypeAuth } from "../../../../Redux/userSlice";

export const SignUp = () => {

    const dispatch = useDispatch();

    const setSignInTypeAuth = () => {
        dispatch(setTypeAuth({typeAuth: 'signin'}));        
    }


    return (
        <div>
            <TextInput placeholder="Имя" label="Имя" withAsterisk styles={{
                    label: { color: '#BBBBBB' }
                }}/>
            <TextInput placeholder="Фамилия" label="Фамилия" withAsterisk styles={{
                    label: { color: '#BBBBBB' }
                }}/>
            <TextInput placeholder="Отчество" label="Отчество" withAsterisk styles={{
                    label: { color: '#BBBBBB' }
                }}/>
            <TextInput placeholder="Полных лет" label="Возраст" withAsterisk styles={{
                    label: { color: '#BBBBBB' }
                }}/>
            <TextInput placeholder="+7-000-000-00-00" label="Возраст" withAsterisk styles={{
                    label: { color: '#BBBBBB' }
                }}/>
            <TextInput placeholder="example@gmail.com" label="Email" withAsterisk styles={{
                    label: { color: '#BBBBBB' }
                }}/>
            <TextInput placeholder="Логин" label="Логин" withAsterisk styles={{
                    label: { color: '#BBBBBB' }
                }}/>
            <TextInput placeholder="Пароль" label="Пароль" withAsterisk styles={{
                    label: { color: '#BBBBBB' }
                }}/>
            <div className={s.outterContainerBtnSignUp}>
                {/* <button className="btnCommon">Регистрация</button> */}
                <div className={s.btnControls}>
                <button className="btnCommon hoverElement activeElement">
                    Регистрация
                </button>
                <button className="btnCommon hoverElement activeElement" onClick={setSignInTypeAuth}>
                    Войти
                </button>
            </div>
            </div>
        </div>
    )
}