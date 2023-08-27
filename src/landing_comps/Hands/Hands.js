import React from 'react';
import right_hand from '../../ui/Hands/right_hand.PNG';
import left_hand from '../../ui/Hands/left_hand.PNG';

import './Hands.css';

function Hands() {
    return (
        <div className='hands__wrapper'>

            <div className="hands-info_block">
                <p className='hands-info_main'>даты</p>
                <p className='clarifications'>30 сентября
                    1 октября</p>
                <p className='hands-info_main' >место проведения:</p>
                <p className='clarifications'>«Лесной городок»</p>
                <div className="btn hands_btn">
                    регистрация
                </div>

                <img src={right_hand} alt="right hand" className='hands hand_right' />
                <img src={left_hand} alt="" className='hands hand_left'/>
            </div>
        </div>
    )
}

export default Hands
