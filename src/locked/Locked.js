import React, { } from 'react';
import "./Locked.css";
import { Container, Image, } from 'react-bootstrap';
import sun from '../ui/mock/sun-2.png'


export const Locked = () => {
    return (
        <Container fluid className="main-container-locked py-5">
            <Container className="label-register pt-5">
                <Container className="text-wrapper" fluid>
                    Скоро
                </Container>
                <Container className='py-5 my-5 d-flex align-middle justify-content-center' fluid >
                <button onClick={event =>  window.location.href='/'} className="mb-2 form_btn__transfer_white_popup"  data-wow-duration="2s">
                    <span className="btn_label">
                        Вернуться на главную
                    </span>
                </button>
                </Container> 
            </Container>
            <Container className='py-5'>
                <Image alt='' className="mx-auto d-block locked-icon img-fluid py-5" src={sun}/>
            </Container>
            
        </Container>
    );
};