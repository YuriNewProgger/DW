import React from "react";
import s from './About.module.css';
import calendar from '../../Assets/Img/calendar.png';
import notepad from '../../Assets/Img/notepad.png';
import sennheiser from '../../Assets/Img/sennheiser.png';
import car from '../../Assets/Img/car.png';


export const About = () => {
    return (
        <div className={s.outterContainer}>
            <div className={s.titleText}>
                Почему выбирают нас?
            </div>
            <div className={s.discriptionAndIcons}>
                <div className={s.discriptionAndIcon}>
                    <img src={calendar} alt="" />
                    <div>Аренда в день обращения</div>
                </div>
                <div className={s.discriptionAndIcon}>
                    <img src={notepad} alt="" />
                    <div>Официально оформленые машины</div>
                </div>
                <div className={s.discriptionAndIcon}>
                    <img src={sennheiser} alt="" />
                    <div>Поддержка 24/7</div>
                </div>
                <div className={s.discriptionAndIcon}>
                    <img src={car} alt="" />
                    <div>Все автомобили застрахованы</div>
                </div>
            </div>
            <div className={s.discriptionContainer}>
                Auto Drive Serice на рынке с 2010 года.<br/><br/>
                Мы дорожим каждым клиентом, поэтому высокое качество сервиса - приоритет для нас. Вы всегда можете задать интересующий вас
                вопрос в онлайн режиме или по телефону и получить подробную консультацию.<br/><br/>
                Команда профессионалов следит за постоянным пополнением и обновлением парка, разработкой акций и системы выгодных скидок, 
                информировании наших клиентов о появлении акций и скидок. Сотрудники проходят основательную подготовку, 
                совершенствуют свои навыки и знания, проходят специальные курсы и тренинги, чтобы идти в ногу со временем.<br/><br/>
                Мы работаем более чем с 120 городами России. География наших услуг ежегодно расширяется.<br/><br/>
                Наша цель - это постоянное развитите и повышение качества наших услуг за счёт внедрения инновационных технологий. Делать мир
                - совершеннее, а людей: клиентов, сотрудников и окружающих - счастливее.
            </div>
        </div>
    )
}