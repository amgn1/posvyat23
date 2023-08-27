import React from "react";
import "./Register.css";
import { Container } from "react-bootstrap";
import { Label } from "./register_comps/Label/Label";
import { Form_aggr } from "./register_comps/Form/Form";

export const RegisterPage = () => {
    return (
        <Container fluid className="main-container mt-auto">
            <Container fluid className='label-wrapper mt-auto'>
                <Label />
            </Container>
            <Form_aggr />
           
        </Container>

    );
};