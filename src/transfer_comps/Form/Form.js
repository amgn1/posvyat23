import React, { useState, } from 'react';
import "./Form.css";
import { Modal, Container, Image, Alert } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import classnames from 'classnames';
import { Popup_inner } from '../Popup/Popup';
import sun from '../../ui/mock/sun (3).png'
import WOW from 'wowjs';
import Select from "react-select";

export const Form_aggr = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSelectChange = (value, action) => {
        setFormData({ ...formData, [action.name]: value });
    };

    var Odi = [
        {value: '16:45', label: '16:45'},
        {value: '17:25', label: '17:25'},
        {value: '17:45', label: '17:45'},
        {value: '18:25', label: '18:25'},
        {value: '18:45', label: '18:45'},
        {value: '19:25', label: '19:25'},
    ];

    var PP = [
        {value: '15:15', label: '15:15'},
        {value: '15:35', label: '15:35'},
        {value: '15:55', label: '15:55'},
        {value: '17:35', label: '17:35'},
    ];

    document.addEventListener("DOMContentLoaded", function(){
        new WOW.WOW({
            live: false
        }).init();
    })

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://posvyatmiem.ru/api/v1/transfer/'); 
        xhr.onload = () => {
            if (xhr.status === 201) {
                setFormData({});
                setErrors({});
                setShowModal(true);
            } else if (xhr.status === 400) {
                const response = JSON.parse(xhr.responseText);
                const errorMessages = {};
        
                for (const field in response) {
                  if (response.hasOwnProperty(field)) {
                    const errorMessage = getErrorMessage(field, response[field]);
                    errorMessages[field] = errorMessage;
                  }

                }
        
                setErrors(errorMessages);
            } else {
                setErrors({});
                // alert('Что-то пошло не так при отправке формы.');
                // setShowModal(true);
            }
        };
      
        xhr.onerror = () => {
            setErrors({});
            alert('Ошибка при отправке запроса на сервер.');
        };
      
          
        const formDataToSend = new FormData(event.target);
        xhr.send(formDataToSend);
        
    };

    const getErrorMessage = (fieldName, errorArray) => {
        if (fieldName === 'vkurl') {
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'transfer with this vkurl already exists.') {
                return 'Трансфер с таким VK уже существует';
            } else if (errorArray[0] === 'Enter a valid URL.') {
                return 'Введена неверная ссылка'
            }
        } else if (fieldName === 'tgurl') {
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'transfer with this tgurl already exists.') {
                return 'Трансфер с таким Telegram уже существует';
            }  else if (errorArray[0] === 'Enter a valid URL.') {
                return 'Введена неверная ссылка'
            }
        } else if (fieldName === 'phone') { 
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'transfer with this phone already exists.') {
                return 'Трансфер с таким номером телефона уже существует';
            } else if (errorArray[0] === 'The phone number entered is not valid.') {
                return 'Неправильный номер телефона'
            } 
        } else if (errorArray[0] === 'Такого phone нет в Registration.') {
            setShowAlert(true)
            return 'Нет регистрации на этот номер телефона'
        
        } else if (errorArray.length > 0) {
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'Date has wrong format. Use one of these formats instead: YYYY-MM-DD.') {
                return 'Неверный формат даты. Используйте, например, дд.мм.гггг';
            }
        }

        return '';
    };

    const getFieldClassName = (fieldName) => {
        if ((fieldName === 'transfer') || (fieldName === 'departure_time') || fieldName === 'year') {
            return classnames('form-text-wrapper form-select-frame', {
                'is-invalid': errors.hasOwnProperty(fieldName)
            }); 
        }
        return classnames('form-text-wrapper form-frame', {
            'is-invalid': errors.hasOwnProperty(fieldName)
        });
    };

    const getFieldErrorMessage = (fieldName) => {
        if (errors.hasOwnProperty(fieldName)) {
            return <div className="invalid-feedback">{errors[fieldName]}</div>;
        }
        return null;
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // alert(getFieldErrorMessage('non_field_errors'))

    const colourStyles = {
        option: styles => ({ ...styles, 
            backgroundColor: '#1b1818', 
            color: 'whitesmoke', 
            backgroundImage: "url(" + "../../ui/mock/noise.png" + ")" ,
            "&:active": {
                backgroundColor: "#1b1818",
                textDecoration: 'solid underline 2px' 
              },
            "&:hover": {
                backgroundColor: "#1b1818",
                textDecoration: 'solid underline 2px' 
              }
        }),
        menu: styles => ({ ...styles, 
            borderColor: "#f6b460",
            backgroundColor: '#1b1818', 
            backgroundImage: "url(" + "../../ui/mock/noise.png" + ")",
            boxShadow: '0 0 0 2px #f6b460',
            border: '3px solid', 
            color: '#1b1818',
            borderRadius: '30px',
            overflow: 'hidden',
            padding: '2px 2px',
            

        }),
        menuList: (base) => ({
            ...base,
        
            "::-webkit-scrollbar": {
              width: "4px",
              height: "0px",
            },
            "::-webkit-scrollbar-track": {
              background: "#1b1818"
            },
            "::-webkit-scrollbar-thumb": {
              background: "#888"
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "#555"
            }
          })
      };

    return (
        <Container className="mt-auto pt-5">
            <Form onSubmit={handleSubmit} className='mt-auto pt-auto' >
                <Row className="mb-5 gy-5">
                    <Form.Group as={Col} lg={4} xs={12} className='form_component'>
                        <Form.Label className="form_label">Фамилия</Form.Label>
                        <Form.Control 
                            
                            name='surname'
                            id='surname'
                            type='text'
                            placeholder="Иванов" 
                            className={getFieldClassName('surname')}
                            value={formData.surname || ''}
                            onChange={handleInputChange} 
                        />
                        {getFieldErrorMessage('surname')}
                    </Form.Group>

                    <Form.Group as={Col} lg={4} xs={12} className='form_component'>
                        <Form.Label className="form_label">Имя</Form.Label>
                        <Form.Control 
                            
                            name='name'
                            id='name'
                            type='text' 
                            placeholder="Иван" 
                            className={getFieldClassName('name')}
                            value={formData.name || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('name')}
                    </Form.Group>

                    <Form.Group as={Col} lg={4} xs={12} className='form_component'>
                        <Form.Label className="form_label">Отчество (при наличии)</Form.Label>
                        <Form.Control 
                            
                            name='patronymic'
                            id='patronymic'
                            type='text'
                            placeholder="Иванович" 
                            className={getFieldClassName('patronymic')}
                            value={formData.patronymic || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('patronymic')}
                    </Form.Group>
                </Row>

                <Row className="mb-5 gy-5">
                    <Form.Group as={Col} lg={4} xs={12} className='form_component'>
                        <Form.Label className="form_label">Почта</Form.Label>
                        <Form.Control 
                            
                            type="email" 
                            name='email'
                            id='email'
                            placeholder="posvyat@edu.ru" 
                            className={getFieldClassName('email')}
                            value={formData.email || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('email')}
                    </Form.Group>
                    <Form.Group as={Col} lg={4} xs={12} className='form_component'>
                        <Form.Label className="form_label">Ссылка на VK</Form.Label>
                        <Form.Control 
                            
                            type="text" 
                            name='vkurl'
                            id='vkurl'
                            placeholder="vk.com/ivan" 
                            className={getFieldClassName('vkurl')}
                            value={formData.vkurl || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('vkurl')}
                    </Form.Group>

                    <Form.Group as={Col} lg={4} xs={12} className='form_component'>
                        <Form.Label className="form_label">Ссылка на TG</Form.Label>
                        <Form.Control 
                            
                            placeholder="@student" 
                            name='tgurl'
                            type='text'
                            id='tgurl'
                            className={getFieldClassName('tgurl')}
                            value={formData.tgurl || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('tgurl')}
                    </Form.Group>
                </Row>

                <Row className="mb-5 gy-5">
                    
                    <Form.Group as={Col} lg={4} xs={12} className='form_component'>
                        <Form.Label className="form_label">Телефон</Form.Label>
                        <Form.Control 
                            
                            type="phone" 
                            name='phone' 
                            id='phone'
                            placeholder="+7 (999) 999-99-99" 
                            className={getFieldClassName('phone')}
                            value={formData.phone || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('phone')}
                    </Form.Group>

                    <Form.Group as={Col} lg={4} xs={12} className="mb-3 form_component">
                        <Form.Label className="form_label">Откуда?</Form.Label>
                        <Select
                            styles={colourStyles}
                            placeholder="Отправление" 
                            name='transfer' 
                            id='transfer'
                            className={getFieldClassName('transfer')}
                            value={formData.transfer || ''}
                            onChange={handleSelectChange}
                            options={[
                                {value: 'Одинцово', label: 'Одинцово'},
                                {value: 'Парк Победы', label: 'Парк Победы'},
                            ]}

                        />
                        {getFieldErrorMessage('transfer')}
                    </Form.Group>

                    {formData.transfer &&
                    <Form.Group as={Col} lg={4} xs={12} className="mb-3 form_component">
                        <Form.Label className="form_label">Время отправления</Form.Label>
                        <Select
                            styles={colourStyles}
                            placeholder="00:00" 
                            name='departure_time' 
                            id='departure_time'
                            className={getFieldClassName('departure_time')}
                            value={formData.departure_time || ''}
                            onChange={handleSelectChange}
                            options={formData.transfer.value === "Одинцово" ? Odi : PP}
                        />
                        {getFieldErrorMessage('departure_time')}
                    </Form.Group> 
                    } 
                </Row>
                
                <Container fluid className='d-flex align-middle justify-content-center py-5'>
                    <button type="submit"  className="mb-2 form_btn__transfer_white wow fadeIn"  data-wow-duration="2s">
                        <span className="btn_label">
                            Отправить  
                        </span>
                    </button>
                </Container>

            </Form>

            <Modal size="lg" centered show={showModal} onHide={handleCloseModal}>

                <Container className='sun1-transfer-wrapper'>
                    <Image src={sun} className='sun1-transfer'/>
                </Container>

                <Container className='sun2-transfer-wrapper'>
                    <Image src={sun} className='sun2-transfer'/>
                </Container>
                
                <Modal.Body className='mx-1 my-1'>
                    <Popup_inner />
                    <Container fluid className='d-flex align-middle justify-content-center pb-5'>
                        <button onClick={event =>  window.location.href='/'} className="mb-2 form_btn__transfer_white_popup"  data-wow-duration="2s">
                            <span className="btn_label">
                                Вернуться на главную
                            </span>
                        </button>
                    </Container>
                </Modal.Body>
            </Modal>

            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible show={showAlert} className='alert'>
                <Alert.Heading>Нет регистрации с таким номером телефона!</Alert.Heading>
                <p>
                    Попробуйте другой номер телефона. <br/>
                    Если вы уверены, что регистрировались на этот номер телефона, <br/>
                    то свяжитесь с организаторами
                </p>
            </Alert>
            
        </Container>
    );
};
