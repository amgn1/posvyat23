import React, { useEffect } from "react";
import "./Transfer.css";
import { Container } from "react-bootstrap";
import { Label } from "./transfer_comps/Label/Label";
import { Form_aggr } from "./transfer_comps/Form/Form";

export const TransferPage = () => {

    useEffect(() => {
        document.title = 'Трансфер';
      }, []);

    return (
        <Container fluid className="main-container-transfer mt-auto">
            <Label />
            <Form_aggr />
        </Container>

    );
};