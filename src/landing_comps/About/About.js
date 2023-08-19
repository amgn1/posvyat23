import React from "react";
import "./About.css";
import about_photo_1 from '../../ui/mock/about_photo_1.png';
import sun_red from '../../ui/mock/sun_red.png';
import about_photo_2 from '../../ui/mock/about_photo_2.png';

<<<<<<< Updated upstream
import sun from '../../ui/mock/sun.png';
=======
import sun from '../../ui/mock/sun_yellow.png';
>>>>>>> Stashed changes

export const About = () => {
    return (
        <div className="about">
<<<<<<< Updated upstream
            {/* <Container className="element-about-wrapper">
                <Container className="element-about">
                    <h1 className="text-wrapper">
                        ЧТО ТАКОЕ ПОСВЯТ?
                    </h1>
                    <img src={about_photo_1} alt="photo" />
                    <p className="text">Посвят – это, возможно, первое яркое событие в жизни каждого студента! Тебя ждут и диалоги тет-а-тет с одногруппниками, и нон-стоп танцы до утра, и даже highway to hell, если ты сильно захочешь победить в конкурсах.</p>
                    <img src={sun} className="sun" alt="sun" />
                    <p className="text" >В Telegram-канале Посвята — закулисье подготовки, а всю важную информацию ты найдешь в группе ВКонтакте и боте. Пропустить событие, которое бывает раз в жизни, — преступление. Скорее садись на поезд в студенчество!</p>

                    <button className="btn">Зарегистрироваться</button>
                </Container>
            </Container> */}

=======
>>>>>>> Stashed changes
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
