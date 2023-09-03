// import React, { useRef, useEffect } from 'react';
import React from 'react';
import "./Popup.css";
import { Container } from 'react-bootstrap';
import photo1 from '../../ui/mock/animated.png'


export const Popup_inner = () => {

    return (
    <Container className='pop-up-thanks_animated '>
        
        <Container className='pop-up-thanks_logo'>
            <img src={photo1} alt='' className='mx-auto d-block img-fluid'/>
        </Container>
    </Container>
    );
}
