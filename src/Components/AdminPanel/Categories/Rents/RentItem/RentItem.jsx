import React, {useEffect, useState} from "react";
import { Accordion, TextInput, Text } from '@mantine/core';
import s from './RentItem.module.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { finishRent, setRents } from "../../../../../Redux/adminPanelSlice";

export const RentItem = (props) => {
    const dispatch = useDispatch();

    const finish = () => {
        dispatch(finishRent(props.RentItem.id_rents)).unwrap()
            .then(resp => {
                if(resp.status === 200){
                    dispatch(setRents(resp.value))
                }
            })
    }


    return(
        <div className={s.outterContainerCarItem}>
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
                    <Accordion.Control>
                        <Text fz="lg" c={props.RentItem.isOverdue ? "red" : "#bbb"}>{`${props.RentItem.name} ${props.RentItem.surname} ${props.RentItem.patronymic} ${props.RentItem.snpassport}`} {props.RentItem.isOverdue ? "Просроченно" : "Активно"}</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className={s.innerContainer}>
                            <Text fz="lg" c="#bbb">{props.RentItem.title}</Text>
                            <Text fz="lg" c="#bbb">{props.RentItem.start_date.replace('T', ' ').replace('Z','').split(' ')[0]}</Text>
                            <Text fz="lg" c={props.RentItem.isOverdue ? "red" : "#bbb"}>{props.RentItem.end_date.replace('T', ' ').replace('Z','').split(' ')[0]}</Text>
                            <button className="btnCommon hoverElement activeElement" onClick={() => finish()}>
                                <span className={s.btnRemove}>Завершить</span>
                            </button>
                        </div>

                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}