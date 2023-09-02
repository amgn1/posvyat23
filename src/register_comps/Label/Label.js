import React from "react";
import "./Label.css";
import { Container } from "react-bootstrap";

export const Label = () => {
    return (
        <Container className="label pt-5">
            <Container className="text-wrapper" fluid>
                Регистрация
            </Container> 
        </Container>
    );
};
