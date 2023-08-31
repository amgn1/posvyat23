import React, {useState} from "react";
import "./Nav.css";
import {Container, Navbar, Nav} from "react-bootstrap";
import logo from './ui/mock/logo.png';
// import {Container} from 'react-bootstrap/esm/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';

export const Navigation = () => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    // window.addEventListener('DOMContentLoaded', () => {
    //     const menu = document.querySelector('.menu'),
    //     menuItem = document.querySelectorAll('.menu_item'),
    //     hamburger = document.querySelector('.hamburger');
    
    //     hamburger.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('menu_active');
    //     });
    
    //     menuItem.forEach(item => {
    //         item.addEventListener('click', () => {
    //             hamburger.classList.toggle('hamburger_active');
    //             menu.classList.toggle('menu_active');
    //         })
    //     })
    // })

    return (
        <nav>
            <div className="nv_container">
                <img src={logo} className="logo"  alt="" loading="lazy"/>
                <ul className={`nv_list ${menuActive ? 'nv_list_active' : ''}`}>
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
            <div className={`hamburger ${menuActive ? 'hamburger_active' : ''}`} onClick={toggleMenu}>
                    <span className="hamburger__span span_1"></span>
                    <span className="hamburger__span"></span>
                    <span className="hamburger__span"></span>
                </div>
        </nav>

    )
};
