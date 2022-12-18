import React, { useState } from "react";
import s from './Header.module.css';
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Modal, useMantineTheme, Avatar } from '@mantine/core';
import { Auth } from "./Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getTypeAuth, getUser } from "../../Redux/userSlice";


export const Header = () => {

    const navigate = useNavigate();
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const typeAuth = useSelector(getTypeAuth);
    const currentUser = useSelector(getUser);

    const [opened, setOpened] = useState(false);

    return (
        <div className={s.outterContainerHedaer}>
            <div className={s.logoText} onClick={() => navigate('/')}>
                <span>Auto Drive Service</span>
            </div>
            <div className={s.navContainer}>
                <Navbar />
            </div>
            <div className={s.btnContainer}>
                {
                    currentUser === '' ? <button className="btnCommon" onClick={() => setOpened(true)}>Войти</button> :
                    <div className={`textCommon ${s.currentUserInitials}`}>
                        {<Avatar color="cyan" radius="xl" src={null} size='lg' alt={`${currentUser.name} ${currentUser.surname}`}>{currentUser.name[0]}{currentUser.surname[0]}</Avatar>}
                    </div>
                }
            </div>
            <Modal
                styles={{
                    modal: { backgroundColor: '#1E1E1E', border: '1px solid #373737', color: '#BBBBBB'}
                }}
                overlayColor={true ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                onClose={() => setOpened(false)}
                centered
                title={typeAuth === 'signin' ? 'Вход' : 'Регистрация'}>
                <Auth/>
            </Modal>
        </div>
    )
}