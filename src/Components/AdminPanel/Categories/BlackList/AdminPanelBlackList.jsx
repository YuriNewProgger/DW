import React, { useEffect, useState } from "react";
import s from './AdminPanelBlackList.module.css';
import { BlackListItem } from "./BlackListItem/BlackListItem";
import { useDispatch, useSelector } from 'react-redux';
import { getBlackList, loadBlackList, setBlackList } from "../../../../Redux/adminPanelSlice";
import { ScrollArea, Modal, useMantineTheme } from '@mantine/core';
import { WindowAddUserToBlackList } from "./WindowAddUserToBlackList/WindowAddUserToBlackList";
import { addUserToBlackList } from './../../../../Redux/adminPanelSlice';

export const AdminPanelBlackList = () => {

    const dispatch = useDispatch();
    const blackListItems = useSelector(getBlackList);

    const theme = useMantineTheme();
    const [isOpenWindowAddedUserToBlackList, setIsOpenWindowAddedUserToBlackList] = useState(false);

    useEffect(() => {
        dispatch(loadBlackList()).unwrap().then(resp => {
            if (resp.status === 200) {
                dispatch(setBlackList(resp.values));
            }
        });
    }, []);



    return (
        <div className={s.outterContainerBlackList}>
            <div>
                <button className={`btnCommon hoverElement activeElement btnMarginTopDown`} onClick={() => setIsOpenWindowAddedUserToBlackList(true)}> + Добавить пользователя</button>
            </div>
            {
                blackListItems.map(item => <BlackListItem key={item.id} user={item}/>)
            }

            <Modal
                styles={{
                    modal: { backgroundColor: '#1E1E1E', border: '1px solid #373737', color: '#BBBBBB' }
                }}
                overlayColor={true ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={10}
                centered
                opened={isOpenWindowAddedUserToBlackList}
                onClose={() => setIsOpenWindowAddedUserToBlackList(false)}
                title=""
                size="25%">
                    <WindowAddUserToBlackList SetIsDisplayWindow={setIsOpenWindowAddedUserToBlackList}/>
            </Modal>
        </div>
    )
}