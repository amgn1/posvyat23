import React from "react";
import "./Loading.css";
import { Container, Spinner } from "react-bootstrap";

export const Loading = () => {
    return (
        <Container fluid className="main-container-loading mt-auto">
            <Spinner animation="border" variant="danger" role="status">
                <Container> Loading... </Container>
            </Spinner>
            <Container className="try">
                Hello, nice to meet you there, but dont even try, dagestanians will find you
            </Container>
        </Container>

    );
};