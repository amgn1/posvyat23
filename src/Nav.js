import React from "react";
import "./Nav.css";
import {Container, Navbar, Nav} from "react-bootstrap";
import logo from './ui/mock/logo.png';
// import {Container} from 'react-bootstrap/esm/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';

export const Navigation = () => {
    // return (
    //     <div className="">
    //         {['lg'].map((expand) => (
    //         <Navbar collapseOnSelect expand={expand} className="navigation">
    //             <div className="nv-container">
    //                 <Navbar.Brand  className="logo" href="#">
    //                     <img src={logo}   alt="" loading="lazy"/>
    //                 </Navbar.Brand>
    //                 {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
    //                 <Navbar.Collapse className="nv_wrapper">
    //                         <Nav.Link href="/" className="text-wrapper">О нас</Nav.Link>
    //                         <Nav.Link href="/register" className="text-wrapper">Регистрация</Nav.Link>
    //                         <Nav.Link href="/transfer" className="text-wrapper">Трансфер</Nav.Link>
    //                         <Nav.Link href="/resettlement" className="text-wrapper">Расселение</Nav.Link>
                        
    //                 </Navbar.Collapse>
                    
    //             </div>
    //         </Navbar>
    //         ))}   
    //     </div>
    // );

    return (
        <div className="nv_container">
            <img src={logo} className="logo"  alt="" loading="lazy"/>
            <ul className="nv_list">
                <li className="nv_list_item">
                    <a href="/" className="nv_list_item">О нас</a>
                </li>
                <li className="nv_list_item">
                    <a href="/register" className="nv_list_item">Регистрация</a>
                </li>
                <li className="nv_list_item">
                    <a href="/transfer" className="nv_list_item">Трансфер</a>
                </li>
                <li className="nv_list_item">
                    <a href="/resettlement" className="nv_list_item">Расселение</a>
                </li>
            </ul>
        </div>
    )
};
