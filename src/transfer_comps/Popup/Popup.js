import React from 'react';
import "./Popup.css";
import { Container, Image } from 'react-bootstrap';
import bus from '../../ui/mock/bus.png'


export const Popup_inner = () => {

    return (
    <Container className='pop-up-thanks_animated '>
        
        <Container className='pop-up-thanks_logo mx-auto d-block'>
            <Image src={bus} alt='' className='bus mx-auto d-block img-fluid'/>
        </Container>
        {/* <Container ref={innerPopupRef} className='pop-up-thanks_text' id='text_min'>
            {renderRoundedText(text)}
        </Container> */}
    </Container>
    );
}
