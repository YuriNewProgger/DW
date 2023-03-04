import React from "react";
import s from './CustomUploadFile.module.css';

export const CustomUploadFile = (props) => {
    return(
        <div className={s.customUploaderFile}>
            <label className={s.customfileupload}>
                <input type="file" onChange={(e) => props.CbUploadImage(e)}/>
                Загрузить фото
            </label>
            <div>
                {props.TitlePhoto ?? ''}
            </div>
        </div>
    )
}