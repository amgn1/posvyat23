import React from 'react';
import welcome from '../../ui/cards/welcome.png';
import "./Welcome.css";



function Welcome() {
  return (
    <div className='card'>
        <h2 className="card_title">Велком-программа</h2>
        <p className="card_descr">Провести время с друзьями, найти новых знакомых, поучаствовать в конкурсах, посетить развлекательные welcome-точки, выиграть призы и, конечно, погрузиться в атмосферу любимого всеми праздника сбора урожая.</p>
        <img src={welcome} alt=""  className='card-welcome_img'/>
    </div>
  )
}

export default Welcome
