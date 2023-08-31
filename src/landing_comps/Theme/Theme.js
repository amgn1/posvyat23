import React from 'react';

import game from '../../ui/mock/Theme/game.png';
import green_left from '../../ui/mock/green_left.png';
import green_right from '../../ui/mock/green_right.png';

import suit from '../../ui/mock/Theme/suit.png';
import left_hand from '../../ui/mock/hands/left_hand.png';
import right_hand from '../../ui/mock/hands/right_hand.png';

import atmosphere from '../../ui/mock/Theme/atmosphere.png';
import white_sun from '../../ui/mock/sun_white.png';
// import white_sun from '../../ui/mock/sun_red.png';
import "./Theme.css";

function Theme() {
    return (
        <div className='theme__wrapper'>
            <p className="theme__title">немного про тематику</p>
            <div className="theme__cards">
                <div className="theme__card atmosphere">
                    <img src={atmosphere} alt="" className="theme__card_img " />
                    <img src= {white_sun} alt="" className='white_sun'/>
                    {/* <h3 className="theme__card_title">Атмосфера</h3> */}
                    {/* <div className="theme__card_descr">Таинственные узы протянутся 
                                                        между всеми участниками 
                                                        и проведут через увеселительные
                                                        и серьезные обряды.
                   </div> */}
                </div>
                <div className="theme__card suits">
                    <img src={suit} alt="" className="theme__card_img" />
                    <img src={left_hand} alt="" className="left" />
                    <img src={right_hand} alt="" className="right" />
                    {/* <h3 className="theme__card_title">Костюмы</h3> */}
                    {/* <div className="theme__card_descr">Вдохновись тематическими одеяниями 
                                                       и украшениями, которые выделят истинных 
                                                       последователей самого светлого культа.
                    </div> */}

                </div>
                <div className="theme__card games">
                    <img src={game} alt="" className="theme__card_img" />
                    <img src={green_left} alt="" className="left"/>
                    <img src={green_right} alt="" className="right"/>
                    {/* <h3 className="theme__card_title">Игры</h3> */}
                    {/* <div className="theme__card_descr">Увлекательные игры будут 
                                                       по душе каждому посетителю, 
                                                       главное — быть открытым к миру!
                    </div> */}
                </div>

            </div>
            <div className="theme__cards_descr">
                <div className="theme__card">
                    <h3 className="theme__card_title">Атмосфера</h3>
                    <div className="theme__card_descr">Таинственные узы протянутся 
                                                        между всеми участниками 
                                                        и проведут через увеселительные
                                                        и серьезные обряды.
                    </div>
                </div>

                <div className="">
                    <h3 className="theme__card_title">Костюмы</h3>
                    <div className="theme__card_descr">Вдохновись тематическими одеяниями 
                                                       и украшениями, которые выделят истинных 
                                                       последователей самого светлого культа.
                    </div>
                </div>

                <div className="">
                    <h3 className="theme__card_title">Игры</h3>
                    <div className="theme__card_descr">Увлекательные игры будут 
                                                       по душе каждому посетителю, 
                                                       главное — быть открытым к миру!
                    </div>
                </div>

                </div>  
        </div>
    )
}

export default Theme
