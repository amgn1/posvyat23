import React from "react";
import "./Main.css";
import Container from "react-bootstrap/esm/Container";

export const Main = () => {
    return (
        <div className="mt-auto main">
            <Container className="element-main-wrapper ">
                <Container className="element-main">
                    <div className="text-wrapper">28–29 сентября</div>
                    <div className="label">
                        <h1 className="h-1">ПОСВЯТ</h1>
                    </div>
                    <p className="p">Скорее регистрируйся, чтобы не пропустить главное событие твоего студенчества!</p>
                    <div className="btn">
                        <div className="div">Зарегистрироваться</div>
                    </div>
                </Container>
            </Container>
        </div>
    );
};
