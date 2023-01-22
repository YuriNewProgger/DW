import React from "react";
import bgCont from '../../Assets/Img/bgContact.jpg';
import s from './Contacts.module.css';


export const ContactsPage = () => {
    return (
        <div>
            <div>
                <img className={s.bgCont} src={bgCont}/>
            </div>
            <div></div>
        </div>
    )
}