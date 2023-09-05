import React from 'react';
import right_hand from '../../ui//mock/animation_hands/hand-right-white.png';
import left_hand from '../../ui/mock/animation_hands/hand-left-white.png';

import right_hand_dark from '../../ui/mock/animation_hands/hand-right-black.png';
import left_hand_dark from '../../ui/mock/animation_hands/hand-left-black.png';

import './Hands.css';

function Hands() {
    return (
        <div className='hands__wrapper wow animated'>

            <div className="hands-info_block wow fadeIn animated">
                <p className='hands-info_main wow animated'>даты</p>
                <p className='clarifications animated line_break'>30 сентября 1 октября</p>
                <p className='hands-info_main wow animated' >место проведения:</p>
                <p className='clarifications animated'>«Лесной городок»</p>
                <div className="hands_btn" data-wow-delay="1s">
                    <a href="/register" className="hands_btn_label">Регистрация</a>
                </div>

                <img src={right_hand_dark} alt="" className='hands hand_right_dark wow animated'/>
                <img src={left_hand_dark} alt="" className='hands hand_left_dark wow animated'/>
            </div>
        </div>
    )
}

export default Hands
