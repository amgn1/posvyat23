import React, {useState} from 'react';
import Food from '../../cards/Food/Food';
import Welcome from '../../cards/Welcome/Welcome';
import MainProgram from '../../cards/MainProgram/MainProgram';
import NightProgram from '../../cards/NightProgram/NightProgram';
import Transfer from '../../cards/Transfer/Transfer';
import Residence from '../../cards/Residence/Residence';

import "./Expectations.css";
import { act } from 'react-dom/test-utils';


function Expectations() {
    const [active, setActive] = useState(0);
    let items = [
        (style) => <div className="item" style={style}><Welcome/> </div>,
        (style) => <div className="item" style={style}><MainProgram /></div>,
        (style) => <div className="item" style={style}><NightProgram /></div>,
        (style) => <div className="item" style={style}><Transfer /></div>,
        (style) => <div className="item" style={style}><Residence /></div>,
        (style) => <div className="item" style={style}><Food /></div>
    ];
   
    const loadShow = () => {
        let stt = 0;
        console.log(items[1]);
        items[active] = items[active]({
            transform: "none", 
            zIndex: 2, 
            filter: "none",
            opacity: 1
        })
        for (var i = active + 1; i < items.length; i++){
            stt++;
            items[i] = items[i]({
                transform: `translateX(${830*stt}px) rotateY(-10deg)`,
                scale: `${1 - 0.4*stt}`,
                zIndex: 2 - stt,
                filter: "blur(5px)",
                opacity: stt > 1 ? 0 : 0.4
            })
        }
        stt = 0;
        for (let i  = active - 1; i >= 0; i--){
            stt++;
            items[i] = items[i]({
                transform: `translateX(${-830*stt}px) rotateY(10deg)`,
                scale: `${1 - 0.4*stt}`,
                zIndex: 2 - stt,
                filter: "blur(5px)",
                opacity: stt > 1 ? 0 : 0.4
            })
        }
    }

    loadShow()
        



    return (
        <div className="expectations__wrapper">
            <h2 className  ="expectations__title wow fadeIn" data-wow-duration="3s">ЧТО Тебя ждет?</h2>
            <div className="slider wow" data-wow-duration="3s">
                {items}

                {active - 1 >= 0 && <button className='exp_btn  prev_btn' onClick= {() => setActive((old) => old - 1)}></button>}
                {active + 1 < items.length && <button className = 'exp_btn next_btn'onClick= {() => setActive((old) => old + 1)}></button>}

            </div>

        </div>
    )
}

export default Expectations
