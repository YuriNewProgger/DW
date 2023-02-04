import React, {useState} from "react";
import { TextInput,  Textarea} from '@mantine/core';
import s from './WindowAddUserToBlackList.module.css';

export const WindowAddUserToBlackList = (props) => {
    const [_snpassport, setSNPassport] = useState("");
    const [_reason, setReason] = useState("");

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
                <button className="btnCommon hoverElement activeElement" onClick={
                    () => props.AddUserToBlacList({
                        snpassport: _snpassport,
                        reason: _reason
                    })
                }>Добавить</button>
            </div>
        </div>
    )
}