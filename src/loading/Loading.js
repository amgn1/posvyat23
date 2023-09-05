import React from "react";
import "./Loading.css";
import { Container, Image, Spinner } from "react-bootstrap";
import sun from '../ui/mock/sun-2.png'

export const Loading = () => {
    return (
        <Container fluid className="main-container-loading py-5">
            <Container>
                <Image alt='' className="mx-auto d-block loading-icon img-fluid py-5" src={sun}/>
            </Container>
            <Container className="loading-label">
                Loading...
            </Container>
        </Container>

    );
};