import React from "react";
import "./About.css";
import about_photo_1 from '../../ui/mock/about_photo_1.png';
import sun_red from '../../ui/mock/sun_red.png';
import about_photo_2 from '../../ui/mock/about_photo_2.png';

import sun from '../../ui/mock/sun_yellow.png';



export const About = () => {
    return (
        // class="wow slideInLeft white" data-wow-duration="2s" data-wow-delay="5s"
        <div className="about wow fadeIn" data-wow-duration="3s">
            <div className="element-about-wrapper">
                <h1 className="text-wrapper wow fadeIn" data-wow-duration="3s">ЧТО ТАКОЕ ПОСВЯТ?</h1>
                <img src={about_photo_1} alt="photo" className="about_photo" />

                <div className="text__wrapper">
                    <p className="text wow fadeIn" data-wow-duration="3s">Посвят — первое крупное событие в жизни студента. Оно точно будет незабываемым, главное — довериться проводникам в мир тайн и загадок. Тебя ждут интересные беседы со служителями культа, обряды и ритуалы до утра, а также божественные дары за чтение традиций.</p>
                </div>
                 <img src={sun_red} alt="red sun"  className="sun wow fadeIn" data-wow-duration="10s"/>
                <img src={about_photo_2} alt="photo" className="about_photo_2" />

                <div className="text__wrapper text_2 wow fadeIn" data-wow-duration="3s">
                    <p className="text t_2 ">B Telegram-канале Посвята можно посмотреть на подготовку общины к мероприятию, а вся важная информация собрана в группе VK. Пропустить Жатву — значит упустить самое необычное и яркое событие твоей юности. <br /> <br />

Стань участником славянского праздника и эффектно вступи в студенческую жизнь!</p>
                </div>

                <button className="btn__registration wow fadeIn"  data-wow-duration="2s">
                    <a href="/register" className="btn_label">Регистрация</a>
                </button>


            </div>
        </div>
    );
};
