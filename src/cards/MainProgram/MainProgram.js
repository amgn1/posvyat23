import React from 'react';
import main_program from '../../ui/cards/main_program.png';
import "./MainProgram.css";

function MainProgram() {
  return (
    <div className='card_main'>
        <h2 className="card_title_main">Основная программа</h2>
        <p className="card_descr_main">Полное погружение в тематику: <br />
            – квест по командам <br />
            – необычные повороты событий <br />
            – еще больше знакомств <br />
            – концерт <br />
            – сюрпризы, крупные призы <br />
            и только позитивные эмоции.</p>
        <img src={main_program} alt=""  className='card-main_program_img'/>
    </div>
  )
}

export default MainProgram