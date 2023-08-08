import React from "react";
import "./Main.css";
// import Container from "react-bootstrap/esm/Container";
import {Container} from 'react-bootstrap';

export const Main = () => {
    return (
        <div className="main">
            <Container className="element-main-wrapper ">
                <Container className="element-main">
                    <div className="text-wrapper">30 сентября – 1 октября</div>
                    <div className="label">
                          ПОСВЯТ
                    </div>
                    <p className="p">Скорее регистрируйся, чтобы не пропустить главное событие твоего студенчества!</p>
                    <div className="btn">
                        регистрация
                    </div>

                    <button className="next"></button>
                </Container>
            </Container>
        </div>
    );
};
