import React from "react";
import bgCont from '../../Assets/Img/bgContact.jpg';
import s from './Contacts.module.css';


export const ContactsPage = () => {
    return (
        <div>
            <div>
                <img className={s.bgCont} src={bgCont}/>
            </div>
            <div className={s.outterContainerMainContact}>
                <div className={s.mainContainerContacts}>
                    <div className={s.textContent}>
                        <div>Контакты</div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}