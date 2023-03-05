import React, {useEffect, useState} from "react";
import s from './PersonalAccount.module.css'
import { Avatar, Table, Tooltip, Modal, useMantineTheme } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, setHistory, setUser } from "../../Redux/userSlice";
import { getHistory, getUserHistory } from './../../Redux/userSlice';
import { getCars } from "../../Redux/carSlice";
import editIcon from '../../Assets/Img/editIcon.svg';
import { EditInfoUser } from "../Common/EditInfoUser/EditInfoUser";
import { updateInfoUser } from "../../Redux/adminPanelSlice";
import { SuccessNotification, UnsuccessNotification } from './../../Utils/Notifaction/Notifier';

export const PersonalAccount = () => {

    const dictionary = [
        {field: 'name', interpretation: 'Имя'},
        {field: 'surname', interpretation: 'Фамилия'},
        {field: 'patronymic', interpretation: 'Отчество'},
        {field: 'age', interpretation: 'Возраст'},
        {field: 'snpassport', interpretation: 'Серия и номер паспорта'},
        {field: 'phone', interpretation: 'Телефон'},
        {field: 'email', interpretation: 'Почта'},
        {field: 'login', interpretation: 'Логин'},
        {field: 'password', interpretation: 'Пароль'},
    ]
    const user = useSelector(getUser);
    const histoty = useSelector(getHistory);
    const dispatch = useDispatch();

    const theme = useMantineTheme();
    const [isEditProfile, setIsEditProfile] = useState(false);

    //#region Отображение информации о пользователе
    const displayUserInfo = () => {
        const fields = [];

        Object.keys(user).forEach(item => {
            if(!item.includes('id') && !item.includes('title') && !item.includes('photo') 
                && !item.includes('login') && !item.includes('password') && !item.includes('age'))
                fields.push(
                <div className={s.fieldInfoText} key={item}>
                    {dictionary.find(element => element.field === item)?.interpretation}: {user[item]}
                </div>)
        });

        return fields;
    }
    //#endregion

    //#region Отображение строк аренды
    const displayRows = () => {
        const rows = histoty.map((element) => (
            <tr key={element.id} className={s.rowTable}>
              <td>{element.title}</td>
              <td>{element.start_date.replace('T', ' ').split('.')[0]}</td>
              <td>{element.end_date.replace('T', ' ').split('.')[0]}</td>
              <td>{element.total_price}</td>
              <td className={element.is_compleate ? s.compleate : s.notCompleate}>{element.is_compleate ? `Завершено`: `Активно` }</td>
            </tr>
          ));
          return rows;
    }
    //#endregion

    useEffect(() => {
        if(user.id){
            dispatch(getUserHistory(user.id)).unwrap().then(resp => {
                if(resp.status === 200){
                    dispatch(setHistory(resp.values));
                }
            });
        }
        
    }, []);

    //#region Обновляет информацию о пользователе
    const update = (value) => {
        dispatch(updateInfoUser(value)).unwrap().then(resp => {
            if(resp.status === 200){
                dispatch(setUser(value));
                SuccessNotification('Изменения сохранены.');
                setIsEditProfile(false);
            }
            else{
                UnsuccessNotification('Изменения не сохранены.');
            }
        })
    }
    //#endregion

    return (
        <div className={s.outterContanerPersonalAccount}>
            <div className={s.infoPanel}>
                <div className={s.titleBlock}>
                    <div>Профиль</div>
                    <Tooltip label="Редактировать профиль">
                        <div className={s.btnEdit} onClick={() => setIsEditProfile(true)}>
                            <img className={s.editIcon} src={editIcon}/>
                        </div>
                    </Tooltip>
                </div>
                <div className={s.persanalInfo}>
                    <div className={s.photoBlock}>
                        <div>
                            <Avatar size={200}
                                radius="xl"
                                src={user.photo}
                                alt="no image here" />
                        </div>
                    </div>

                    <div className={s.textFields}>
                        {
                            displayUserInfo()
                        }
                    </div>
                </div>
            </div>

            <div className={s.infoPanel}>
                <div className={s.titleBlock}>История</div>
                <div className={s.tableOutterContainer}>
                    <Table horizontalSpacing="xl" fontSize="1em" withColumnBorders>
                      <thead>
                        <tr>
                          <th>Автомобиль</th>
                          <th>Начало</th>
                          <th>Окончание</th>
                          <th>Цена</th>
                          <th>Статус</th>
                        </tr>
                      </thead>
                      <tbody>{displayRows()}</tbody>
                    </Table>
                </div>
            </div>

            <Modal
                styles={{
                    modal: { backgroundColor: '#1E1E1E', border: '1px solid #373737', color: '#BBBBBB' }
                }}
                overlayColor={true ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={10}
                centered
                opened={isEditProfile}
                onClose={() => setIsEditProfile(false)}
                title="Редактирование профиля"
                size="55%">
                <EditInfoUser Update={update} User={user} Delete={''}/>
            </Modal>
        </div>
    )
}