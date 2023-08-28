import React, { useEffect } from "react";
import "./Main.css";
// import Container from "react-bootstrap/esm/Container";
import {Container} from 'react-bootstrap';
import WOW from 'wowjs';

export const Main = () => {

    document.addEventListener("DOMContentLoaded", function(){
        new WOW.WOW({
            live: false
        }).init();
    })

    // useEffect (() => {
    //     new WOW.WOW({
    //         live: false
    //     }).init();
    //   }, [])

    // $( document ).ready(function() {
    //     new WOW().init()
    // });

    return (
        <div className="main">
            <Container className="element-main-wrapper ">
                <Container className="element-main">
                    <h4 class="wow slideInLeft white" data-wow-duration="4s" data-wow-delay="5s">тест текст</h4>
                    <div className="text-wrapper">30 сентября – 1 октября</div>
                    <div className="label">
                          {/* ПОСВЯТ */}
                    </div>
                    <p className="p">Скорее регистрируйся, чтобы не пропустить главное событие твоего студенчества!</p>
                    <div className="btn">
                        регистрация
                    </div>

                    <button className="next"></button>
                </Container>
            </Container>
        </div>
    );
};
