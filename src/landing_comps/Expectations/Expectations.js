import React from 'react';
import Food from '../../cards/Food/Food';
import Welcome from '../../cards/Welcome/Welcome';
import MainProgram from '../../cards/MainProgram/MainProgram';
import NightProgram from '../../cards/NightProgram/NightProgram';
import Transfer from '../../cards/Transfer/Transfer';
import Residence from '../../cards/Residence/Residence';

import "./Expectations.css";
import { act } from 'react-dom/test-utils';


function Expectations() {
    window.addEventListener("load", function() {
        let items = document.querySelectorAll('.slider .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');
    
        let active = 3;
        function loadShow() {
            let stt = 0;
            stt++;
            console.log(items[1]);
            console.log(next);
            items[active].style.transform = `none`;
            items[active].style.zIndex = 1;
            
            items[active].style.filter = 'none';
            items[active].style.opacity = 1
            for (var i = active + 1; i < items.length; i++){
                stt++;
                items[i].style.transform = `translateX(${530*stt}px) scale(${1 - 0.2*stt}) perspective (20px) rotateY(-1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
            stt = 0;
            for (var i  = active - 1; i >= 0; i--){
                stt++;
                items[i].style.transform = `translateX(${800*stt}px) scale(${1 - 0.2*stt}) perspective (20px) rotateY(1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
        }
    
        loadShow()
    
        next.onclick = function() {
            if (active + 1 < items.length) {
                next.style.display = 'block';
                prev.style.display = 'block';
                active = active + 1;
            } else {
                next.style.display = 'none';
            }
            // active = active + 1 < items.length ? active + 1: active;
            loadShow()
        }
    
        prev.onclick = function() {
            if (active - 1 >= 0) {
                active = active - 1;
                prev.style.display = 'block';
                next.style.display = 'block';
            } else {
                prev.style.display = 'none';
                next.style.display = 'block';
            }
            // active = active - 1 > 0 ? active - 1: active;
            loadShow()
        }
    });




    return (
        <div className="expectations__wrapper">
            <h2 className  ="expectations__title">ЧТО Тебя ждет?</h2>
            <div className="slider">
                <div className="item">
                    <Welcome/>
                </div>
                <div className="item">
                    <MainProgram/>
                </div>
                <div className="item">
                    <NightProgram/>
                </div>
                <div className="item">
                    <Transfer/>
                </div>
                <div className="item">
                    <Residence/>
                </div>
                <div className="item">
                    <Food/>
                </div>



                <button id='next'></button>
                <button id='prev'></button>
            </div>

        </div>
    )
}

export default Expectations
