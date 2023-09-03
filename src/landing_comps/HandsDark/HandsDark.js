import React from 'react';

import white_left_hand from '../../ui/Hands/white_left_hand.png';
import white_right_hand from '../../ui/Hands/white_right_hand.png';

import './HandsDark.css';


function HandsDark() {
    return (
        <div className='hands-dark__wrapper'>
            <div className="hands-info_block-dark">
                <p className='hands-info_main-dark'>даты</p>
                <p className='clarifications'>30 сентября
                    1 октября</p>
                <p className='hands-info_main-dark' >место проведения:</p>
                <p className='clarifications'>«Лесной городок»</p>
                <div className="btn-dark hands_btn">
                    регистрация
                </div>

                <img src={white_right_hand} alt="right hand" className='hands hand_right' />
                <img src={white_left_hand} alt="" className='hands hand_left'/>
            </div>

          
        </div>
    )
}

export default HandsDark
