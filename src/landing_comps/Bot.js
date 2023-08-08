import React from "react";
import "./Bot.css";

export const Bot = () => {
    return (
        <div className="box">
            <div className="bot-wrapper">
                <div className="bot">
                    <div className="div">
                        <div className="div-2">
                            <div className="rectangle" />
                            <div className="txt">
                                <h1 className="text-wrapper">О мероприятии</h1>
                                <p className="element">
                                    Дата: 1-2 октября.
                                    <br />
                                    <br />
                                    Площадка: «Лесной городок»
                                    <br />
                                    <br />
                                    Жизнь студента – пары, сессии, домашние задания. Но достаточно ли этого, чтобы сделать время в вузе
                                    незабываемым? Посвящение в студенты — твой шанс наполнить годы в университете яркими воспоминаниями.
                                </p>
                            </div>
                        </div>
                        <div className="div-2">
                            <div className="txt">
                                <div className="text-wrapper-2">Стоимость</div>
                                <p className="element">
                                    Билеты на Посвят продаются в 3 волны — <br />с новой волной цена увеличивается. <br />
                                    <br />
                                    Смена волны продаж осуществляется не по времени, а по количеству проданных билетов. Волны начинаются в
                                    разные дни.
                                </p>
                            </div>
                            <div className="rectangle-2" />
                        </div>
                    </div>
                    <div className="btn">
                        <div className="text-wrapper-3">Зарегистрироваться</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
