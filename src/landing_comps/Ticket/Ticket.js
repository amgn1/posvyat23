import React, {useRef, useCallback} from 'react';
import ticket from '../../ui/ticket/ticket2.png';
import ticket_part1 from '../../ui/ticket/ticket_part1.png';
import ticket_part2 from '../../ui/ticket/ticket_part2.png';
import dash_line from '../../ui/ticket/dash-line.png';
import people from '../../ui/ticket/people.png';

import './Ticket.css';

// настройки
// let options = {
//     root: document.querySelector('.scroll-list'),
//     rootMargin: '5px',
//     threshold: 0.5
// }

// функция обратного вызова
// let callback = function(entries, observer){
   
// }

// // наблюдатель
// let observer = new IntersectionObserver(callback, options)

// //создается целевой элемент, за которым наблюдает observer:
// let target = document.querySelector('.list-item')
// observer.observe(target)




function Ticket() {

    document.addEventListener("DOMContentLoaded", function(){

        let options = {
            root: document.querySelector('.ticket__wrapper'),
            rootMargin: '5px',
            threshold: 0.5
        }
    
        let observerCallback = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('observe')
                }
                entry.isIntersecting ? entry.target.classList.replace('.red', '.green') : entry.target.classList.replace('.green', '.red')
            })
        }, {
            threshold: .5
        })

        let observer = new IntersectionObserver(observerCallback, options);
        observer.observe(document.querySelector('.test'))
        
        // observerCallback.observe(document.querySelector('.test'))
      
      });

    return (
        <div className="ticket__wrapper">
            {/* <div className="ticket_img__wrapper">
                <img src={ticket} alt="ticket" className='ticket_background_img'/>
                <img src={dash_line} alt=""  className='ticket_dashline'/>
                <img src={ticket_part2} alt="" className='ticket_background_img2'/>
            </div> */}

            .

            <div className="ticket_img__wrapper">
                
                {/* <div className="test"></div> */}
                <img src={ticket_part1} alt="ticket_part1" className='ticket_background_img1'/>
                <img src={ticket_part2} alt="ticket_part2" className='ticket_background_img2'/>
                <img src={dash_line} alt="" className='dash_line'/>
                <img src={people} alt="people" className='people' />
                <p className='ticket_text'>Билеты на Посвят продаются в несколько волн — с новой волной цена увеличивается.
                <br /> <br />
                Смена волны продаж осуществляется по времени.</p>

                <button className="ticket_btn" >регистрация</button>
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
