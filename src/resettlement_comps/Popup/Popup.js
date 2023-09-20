import React from 'react';
import "./Popup.css";
import { Container, Image } from 'react-bootstrap';
import home from '../../ui/mock/file 1 (1).png'


export const Popup_inner = () => {

    return (
    <Container className='pop-up-thanks_animated '>
        
        <Container className='pop-up-thanks_logo d-block'>
            <Image src={home} alt='' className='my_home mx-auto d-block img-fluid'/>
        </Container>
        {/* <Container ref={innerPopupRef} className='pop-up-thanks_text' id='text_min'>
            {renderRoundedText(text)}
        </Container> */}
    </Container>
    );
}
