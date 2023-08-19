import React from 'react';
import Food from '../../cards/Food/Food';
import "./Expectations.css";


function Expectations() {
    return (
        <div className="expectations__wrapper">
            <h2 className  ="expectations__title">ЧТО Тебя ждет?</h2>
            <Food className = 'expectations_card'/>
        </div>
    )
}

export default Expectations
