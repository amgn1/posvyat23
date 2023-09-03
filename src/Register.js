import React from "react";
import "./Register.css";
import { Container } from "react-bootstrap";
import { Label } from "./register_comps/Label/Label";
import { Form_aggr } from "./register_comps/Form/Form";

export const RegisterPage = () => {
    return (
        <Container fluid className="main-container-register mt-auto">
            <Label />
            <Form_aggr />
        </Container>

    );
};