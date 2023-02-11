import React from "react";
import s from './BlackListItem.module.css';
import { Accordion, Textarea } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { deleteUserFromBlackList, setBlackList } from "../../../../../Redux/adminPanelSlice";
import { SuccessNotification, UnsuccessNotification } from "../../../../../Utils/Notifaction/Notifier";


export const BlackListItem = (props) => {

    const dispatch = useDispatch();

    const deleteUser = () => {
        dispatch(deleteUserFromBlackList({snpassport: props.user.snpassport}))
            .unwrap()
            .then(resp => {
                if(resp.status === 200){
                    dispatch(setBlackList(resp.values));
                    SuccessNotification('Пользователь успешно удалён из чёрного списка.');
                }
            });
        
    }

    return (
        <div className={s.outterContainerBlackListItem}>
            <div className={s.innerContainerBlackListItem}>
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
                    <Accordion.Control>{`${props.user.name} ${props.user.surname} ${props.user.snpassport}`}</Accordion.Control>
                    <Accordion.Panel>
                        <div className={s.innerContainer}>
                            <Textarea placeholder="Фотография" value={props.user.reason} onChange={() => console.log()}/>
                            
                            <button className={`btnCommon hoverElement activeElement ${s.btnRemoveControl}`}
                            onClick={() => deleteUser()}>
                                <span className={s.btnRemove}>X</span>
                            </button>
                        </div>

                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>
    )
}