import React from "react";
import "./About.css";
import Container from "react-bootstrap/esm/Container";

export const About = () => {
    return (
        <div className="about mt-auto">
            <Container className="element-about-wrapper">
                <Container className="element-about">
                    <h1 className="text-wrapper">
                        ЧТО ТАКОЕ <br />
                        ПОСВЯТ?
                    </h1>

                    <p className="highway-to-hell">
                        Посвят – это, возможно, первое <br />
                        яркое событие в жизни каждого студента! <br />
                        Тебя ждут и диалоги тет-а-тет <br />с одногруппниками, и нон-стоп танцы <br />
                        до утра, и даже highway to hell, <br />
                        если ты сильно захочешь <br />
                        победить в конкурсах. <br /> <br />В Telegram-канале Посвята — закулисье подготовки, а всю важную информацию{" "}
                        <br />
                        ты найдешь в группе ВКонтакте и боте.&nbsp;&nbsp;
                        <br />
                        Пропустить событие, которое бывает раз <br />в жизни, — преступление. Скорее садись <br />
                        на поезд в студенчество!
                    </p>
                </Container>
                <div className="photo" />
            </Container>
        </div>
    );
};
