import React from 'react';
import transfer from '../../ui/cards/transfer.png';
import "./Transfer.css";

function Transfer() {
  return (
    <div className='card_transfer'>
        <h2 className="card_title_transfer">Трансфер</h2>
        <p className="card_descr_transfer">До место проведения Жатвы можно добраться и самостоятельно, однако мы рекомендуем воспользоваться предложенным трансфером, чтобы не запутаться. Автобусы стартуют 
с нескольких точек в разное время — ты можешь выбрать для себя оптимальный.</p>
        <img src={transfer} alt=""  className='card-transfer_img'/>
    </div>
  )
}

export default Transfer;
