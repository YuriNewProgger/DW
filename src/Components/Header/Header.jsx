import React, { useState } from "react";
import s from './Header.module.css';
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Modal, useMantineTheme } from '@mantine/core';
import { Auth } from "./Auth/Auth";

export const Header = () => {

    const navigate = useNavigate();
    const theme = useMantineTheme();

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
                <button className={s.btnSign} onClick={() => setOpened(true)}>
                    Войти
                </button>
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
                title="Вход">
                <Auth/>
            </Modal>
        </div>
    )
}