import React, {useEffect} from "react";
import s from './PersonalAccount.module.css'
import { Avatar, Table } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, setHistory } from "../../Redux/userSlice";
import { getHistory, getUserHistory } from './../../Redux/userSlice';
import { getCars } from "../../Redux/carSlice";

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

    const displayUserInfo = () => {
        const fields = [];

        Object.keys(user).forEach(item => {
            if(!item.includes('id') && !item.includes('title') && !item.includes('photo') && !item.includes('login') && !item.includes('password'))
                fields.push(
                <div className={s.fieldInfoText} key={item}>
                    {dictionary.find(element => element.field === item)?.interpretation}: {user[item]}
                </div>)
        });

        return fields;
    }

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

    useEffect(() => {
        if(user.id){
            dispatch(getUserHistory(user.id)).unwrap().then(resp => {
                if(resp.status === 200){
                    dispatch(setHistory(resp.values));
                }
            });
        }
        
    }, []);

    return (
        <div className={s.outterContanerPersonalAccount}>
            <div className={s.infoPanel}>
                <div className={s.titleBlock}>
                    Профиль
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
                    <Table horizontalSpacing="xl" fontSize="1em">
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
        </div>
    )
}