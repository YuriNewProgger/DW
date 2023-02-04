import React, {useState} from "react";
import { TextInput,  Textarea} from '@mantine/core';
import s from './WindowAddUserToBlackList.module.css';
import { useDispatch } from 'react-redux';
import { addUserToBlackList, setBlackList } from './../../../../../Redux/adminPanelSlice';

export const WindowAddUserToBlackList = (props) => {

    const [_snpassport, setSNPassport] = useState("");
    const [_reason, setReason] = useState("");

    const dispatch = useDispatch();

    //#region Добавление пользователя в чёрный список
    const adduserToBlackList = () => {
        dispatch(addUserToBlackList({
            snpassport: _snpassport,
            reason: _reason
        })).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(setBlackList(resp.values));
                props.SetIsDisplayWindow(false);
            }
        });
        
    }
    //#endregion

    return(
        <div className={s.outterContainerWindowAddUserToBlackList}>
            <div>
                <div>Серия и номер паспорта</div>
                <TextInput value={_snpassport} onChange={(e) => setSNPassport(e.currentTarget.value)}/>
            </div>

            <div>
                <div>Причина</div>
                <Textarea value={_reason} onChange={(e) => setReason(e.currentTarget.value)}/>
            </div>

            <div>
                <button className="btnCommon hoverElement activeElement" onClick={() => adduserToBlackList()}>Добавить</button>
            </div>
        </div>
    )
}