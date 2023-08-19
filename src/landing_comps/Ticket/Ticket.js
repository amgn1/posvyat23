import React from 'react';
import ticket from '../../ui/ticket/ticket2.png';

import ticket_part2 from '../../ui/ticket/ticket_part2.png';
import dash_line from '../../ui/ticket/dash-line.png';
// import people from '../../ui/ticket/people.png';

import './Ticket.css';



function Ticket() {
    return (
        <div className="ticket__wrapper">
            {/* <div className="ticket_img__wrapper">
                <img src={ticket} alt="ticket" className='ticket_background_img'/>
                <img src={dash_line} alt=""  className='ticket_dashline'/>
                <img src={ticket_part2} alt="" className='ticket_background_img2'/>
            </div> */}

            <div className="ticket_img__wrapper">
                <img src={ticket} alt="ticket" className='ticket_background_img'/>
                <p className='ticket_text'>Билеты на Посвят продаются в несколько волн — с новой волной цена увеличивается.
                <br /> <br />
                Смена волны продаж осуществляется по времени.</p>

                <button className="ticket_btn">регистрация</button>
            </div>

            <div className="footer_share">
                <div className='share_vk'>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></a>
                </div>

                <div className='share_tg'>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" ></a>
                </div>

            </div>


            {/* <img src={people} alt="people" className='ticket_img' /> */}
        </div>
    )
}

export default Ticket
