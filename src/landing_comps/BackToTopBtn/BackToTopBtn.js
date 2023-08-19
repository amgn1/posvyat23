import React from 'react';
import {useState, useEffect} from 'react';

import './BackToTopBtn.css';

function BackToTopBtn() {
    const [backToTopBtn, setBackToTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setBackToTopBtn(true)
            } else {
                setBackToTopBtn(false)
            }
        })
    }, [])


    const scrollUp = () => {
        window.scrollTo({
            top: 50,
            behaviour: "smooth"
        })
    }


  return (
    <div>
        {backToTopBtn && <button className='backtotop' onClick={scrollUp}></button>}

    </div>
  )
}

export default BackToTopBtn
