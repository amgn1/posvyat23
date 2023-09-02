import React, { useRef, useEffect } from 'react';
import "./Popup.css";
import { Container } from 'react-bootstrap';
import photo1 from '../../ui/mock/animated.png'


export const Popup_inner = () => {
  const innerPopupRef = useRef(null);
  const text = 'Ждем вас на жатве!';

  const renderRoundedText = (text) => {
    const letters = text.split('');

    return letters.map((letter, index) => (
      <span
        key={index}
        style={{ transform: `rotate(${index * 12}deg)` }}
        className='pop-up-thanks_letter'
      >
        {letter}
      </span>
    ));
  };

    return (
    <Container className='pop-up-thanks_animated '>
        
        <Container className='pop-up-thanks_logo'>
            <img src={photo1}  className='mx-auto d-block img-fluid'/>
        </Container>
        {/* <Container ref={innerPopupRef} className='pop-up-thanks_text' id='text_min'>
            {renderRoundedText(text)}
        </Container> */}
    </Container>
    );
}
