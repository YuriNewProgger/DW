import React from "react";
import s from './BlackListItem.module.css';
import { TextInput } from '@mantine/core';

import { Accordion, Textarea } from '@mantine/core';


export const BlackListItem = (props) => {
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
                            <Textarea placeholder="Фотография" value={props.user.reason}/>
                            
                            <button className={`btnCommon hoverElement activeElement ${s.btnRemoveControl}`}
                            onClick={() => props.DeleteFromBlackList({snpassport: props.user.snpassport})}>
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