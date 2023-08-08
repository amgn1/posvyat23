import React from 'react';
import night_program from '../../ui/cards/night_program.png';
import "./NightProgram.css";

function NightProgram() {
  return (
    <div className='card_night'>
        <h2 className="card_title_night">Ночная программа</h2>
        <p className="card_descr_night">Дискотека с любимыми треками, гитарник, ночные точки и расслабление — время, где каждый на празднике обретает себя.</p>
        <img src={night_program} alt=""  className='card-night_program_img'/>
    </div>
  )
}

export default NightProgram;
