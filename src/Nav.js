import React from "react";
import "./Nav.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const Navigation = () => {
    return (
        <div className="mt-auto">
            {['lg'].map((expand) => (
            <Navbar collapseOnSelect expand={expand} className="navigation">
                <Container className="nv-container">
                    <Navbar.Brand  className="logo" href="#">
                        <img src="#" alt="" loading="lazy"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav activeKey={window.location.pathname} className="me-auto flex-grow-1 nv-elements justify-content-end">
                            <Nav.Link href="/" className="text-wrapper">О нас</Nav.Link>
                            <Nav.Link href="/register" className="text-wrapper">Регистрация</Nav.Link>
                            <Nav.Link href="/transfer" className="text-wrapper">Трансфер</Nav.Link>
                            <Nav.Link href="/resettlement" className="text-wrapper">Расселение</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
            ))}   
        </div>
    );
};
