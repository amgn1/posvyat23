import React from 'react';
import food from '../../ui/cards/food.png';
import "./Food.css";

function Food() {
  return (
    <div className='card_food'>
        <h2 className="card_title_food">Ужин и завтрак</h2>
        <p className="card_descr_food">После дороги и перед началом основной программы мы предлагаем выбрать из шведского стола ужин на выбор. На утро после шумного гуляния тебя ждет теплый завтрак.</p>
        <img src={food} alt=""  className='card-food_img'/>
    </div>
  )
}

export default Food;
