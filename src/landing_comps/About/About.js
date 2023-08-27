import React from "react";
import "./About.css";
import about_photo_1 from '../../ui/mock/about_photo_1.png';
import sun_red from '../../ui/mock/sun_red.png';
import about_photo_2 from '../../ui/mock/about_photo_2.png';

import sun from '../../ui/mock/sun_yellow.png';

export const About = () => {
    return (
        <div className="about">
            <div className="element-about-wrapper">
                <h1 className="text-wrapper">ЧТО ТАКОЕ ПОСВЯТ?</h1>
                <img src={about_photo_1} alt="photo" className="about_photo" />

                <div className="text__wrapper">
                    <p className="text">Посвят — первое крупное событие в жизни студента. Оно точно будет незабываемым, главное — довериться проводникам в мир тайн и загадок. Тебя ждут интересные беседы со служителями культа, обряды и ритуалы до утра, а также божественные дары за чтение традиций.</p>
                </div>
                 <img src={sun_red} alt="red sun"  className="sun"/>
                <img src={about_photo_2} alt="photo" className="about_photo_2" />

                <div className="text__wrapper text_2">
                    <p className="text">B Telegram-канале Посвята можно посмотреть на подготовку общины к мероприятию, а вся важная информация собрана в группе VK. Пропустить Жатву — значит упустить самое необычное и яркое событие твоей юности. 

Стань участником славянского праздника и эффектно вступи в студенческую жизнь!</p>
                </div>

                <div className="btn">
                    регистрация
                </div>


            </div>
        </div>
    );
};
