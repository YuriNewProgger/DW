import React, { useEffect, useState } from "react";
import s from './Header.module.css';
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Modal, useMantineTheme, Avatar } from '@mantine/core';
import { Auth } from "./Auth/Auth";
import { useSelector } from "react-redux";
import { getTypeAuth, getUser } from "../../Redux/userSlice";
import { PopMenu } from "./PopOverMenu/PopMenu";


export const Header = () => {

    const navigate = useNavigate();
    const theme = useMantineTheme();
    const typeAuth = useSelector(getTypeAuth);
    const currentUser = useSelector(getUser);

    const [opened, setOpened] = useState(false);
    const [openedPopMenu, setOpenedPopMenu] = useState(false);

    useEffect(() => {
        if (currentUser !== '') {
            setOpened(false);
        }
    }, [currentUser]);

    
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
                    currentUser === '' || currentUser === 'Bad' || currentUser === 'Blocked' ?
                        <button className="btnCommon hoverElement activeElement" onClick={() => setOpened(true)}>Войти</button> :
                        <div className={openedPopMenu ? `textCommon ${s.currentUserInitials}` : `textCommon ${s.currentUserInitials} hoverElement activeElement`}>
                            <PopMenu isOpen={openedPopMenu} role={currentUser.title}/>                             
                            {<Avatar onClick={() => setOpenedPopMenu(!openedPopMenu)} color="cyan" radius="xl" src={currentUser.photo} size='lg' alt={`${currentUser.name} ${currentUser.surname}`}>{currentUser.name[0]}{currentUser.surname[0]}</Avatar>}
                        </div>
                }
            </div>
            <Modal
                styles={{
                    modal: { backgroundColor: '#1E1E1E', border: '1px solid #373737', color: '#BBBBBB' }
                }}
                overlayColor={true ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                onClose={() => setOpened(false)}
                centered
                title={typeAuth === 'signin' ? 'Вход' : 'Регистрация'}>
                <Auth />
            </Modal>
        </div>
    )
}