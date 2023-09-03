import React from 'react';
import residence from '../../ui/cards/residence.png';
import "./Residence.css";

function Residence() {
  return (
    <div className='card_residence'>
        <h2 className="card_title_residence">Проживание</h2>
        <p className="card_descr_residence">После хорошего праздника можно 
и отдохнуть. Не стоит переживать, если в какой-то момент силы начнут покидать тебя — теплая и комфортная комната на несколько человек будет тебя ждать. Там же можно не только поспать, но и оставить вещи, переодеться или провести время только с друзьями.</p>
        <img src={residence} alt=""  className='card-residence_img'/>
    </div>
  )
}

export default Residence