import React from 'react';
import right_hand from '../../ui/Hands/hand_right_white.png';
import left_hand from '../../ui/Hands/hand_left_white.png';

import right_hand_dark from '../../ui/Hands/hand_right_dark.png';
import left_hand_dark from '../../ui/Hands/hand_left_dark.png';

import './Hands.css';

function Hands() {
    return (
        <div className='hands__wrapper wow'>

            <div className="hands-info_block wow fadeIn" data-wow-duration="4s" data-wow-delay="1s">
                <p className='hands-info_main wow fadeIn' data-wow-duration="4s" data-wow-delay="1s">даты</p>
                <p className='clarifications wow fadeIn' data-wow-duration="4s" data-wow-delay="1s">30 сентября
                    1 октября</p>
                <p className='hands-info_main wow fadeIn' data-wow-duration="4s" data-wow-delay="1s" >место проведения:</p>
                <p className='clarifications wow fadeIn' data-wow-duration="4s" data-wow-delay="1s">«Лесной городок»</p>
                <div className="hands_btn wow fadeIn" data-wow-duration="4s" data-wow-delay="1s">
                    регистрация
                </div>

                <img src={right_hand} alt="right hand" className='hands hand_right ' />
                <img src={left_hand} alt="" className='hands hand_left'/>

                <img src={right_hand_dark} alt="" className='hands hand_right_dark'/>
                <img src={left_hand_dark} alt="" className='hands hand_left_dark'/>
            </div>
        </div>
    )
}

export default Hands
