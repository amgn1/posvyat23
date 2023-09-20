import React, { useState, } from 'react';
import "./Form.css";
import { Modal, Container, Image } from 'react-bootstrap';
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
    
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSelectChange = (value, action) => {
        setFormData({ ...formData, [action.name]: value });
    };

    document.addEventListener("DOMContentLoaded", function(){
        new WOW.WOW({
            live: false
        }).init();
    })

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(event.target)

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://posvyatmiem.ru/api/v1/registration/'); 

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
                alert('Что-то пошло не так при отправке формы.');
            }
        };
      
        xhr.onerror = () => {
            setErrors({});
            alert('Ошибка при отправке запроса на сервер.');
        };
      
          
        const formDataToSend = new FormData(event.target);
        console.log(formDataToSend)
        xhr.send(formDataToSend);
        
    };

    const getErrorMessage = (fieldName, errorArray) => {
        if (fieldName === 'vkurl') {
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'registration with this vkurl already exists.') {
                return 'Регистрация с таким VK уже существует';
            } else if (errorArray[0] === 'Enter a valid URL.') {
                return 'Введена неверная ссылка'
            }
        } else if (fieldName === 'tgurl') {
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'registration with this tgurl already exists.') {
                return 'Регистрация с таким Telegram уже существует';
            }  else if (errorArray[0] === 'Enter a valid URL.') {
                return 'Введена неверная ссылка'
            }
        } else if (fieldName === 'phone') {
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'registration with this phone already exists.') {
                return 'Регистрация с таким номером телефона уже существует';
            } else if (errorArray[0] === 'The phone number entered is not valid.') {
                return 'Неправильный номер телефона'
            }
        } else if (errorArray.length > 0) {
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'Date has wrong format. Use one of these formats instead: YYYY-MM-DD.') {
                return 'Неверный формат даты. Используйте, например, дд.мм.гггг';
            } else if (errorArray[0] === "\"\" is not a valid choice."){
                return errorArray[0].replace('\"\" is not a valid choice.', 'Это поле не должно быть пустым');
            }
        }

        return '';
    };

    const getFieldClassName = (fieldName) => {
        if ((fieldName === 'transfer') || (fieldName === 'sex') || fieldName === 'year') {
            if (errors.hasOwnProperty(fieldName)) {
                return classnames('form-text-wrapper form-select-frame invalid', {
                    'is-invalid': errors.hasOwnProperty(fieldName)
                }); 
            } else {
                return classnames('form-text-wrapper form-select-frame', {
                    'is-invalid': errors.hasOwnProperty(fieldName)
                }); 
            }
            
        }
        return classnames('form-text-wrapper form-frame', {
            'is-invalid': errors.hasOwnProperty(fieldName)
        });
    };

    const getFieldErrorMessage = (fieldName) => {
        if (errors.hasOwnProperty(fieldName)) {
            console.log(fieldName)
            console.log(errors[fieldName])
            return <div className="invalid-feedback">{errors[fieldName]}</div>;
        }
        return null;
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                <Row className="mb-3 gy-3">
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

                <Row className="mb-3 gy-3">
                    <Form.Group as={Col} lg={6} xs={12} className='form_component'>
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

                    <Form.Group as={Col} lg={3} xs={12} className='form_component'>
                        <Form.Label className="form_label">Телефон</Form.Label>
                        <Form.Control 
                            
                            type="phone" 
                            name='phone' 
                            id='phone'
                            placeholder="+7 (999) 99-99-99" 
                            className={getFieldClassName('phone')}
                            value={formData.phone || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('phone')}
                    </Form.Group>

                    <Form.Group as={Col} lg={3} xs={12} className='form_component'>
                        <Form.Label className="form_label">Дата рождения</Form.Label>
                        <Form.Control 
                            
                            type="date" 
                            name='birth_date'
                            id='birth_date'
                            placeholder="20.01.2005"
                            className={getFieldClassName('birth_date')}
                            value={formData.birth_date || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('birth_date')}
                    </Form.Group>
                </Row>

                <Row className="mb-3 gy-3">
                    <Form.Group as={Col} lg={5} xs={12} className='form_component'>
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
                        <Form.Label className="form_label">Никнейм TG</Form.Label>
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

                    <Form.Group as={Col} lg={3} xs={12} className='form_component'>
                        <Form.Label className="form_label">Пол</Form.Label>
                        <Select 
                            styles={colourStyles}
                            placeholder="Пол" 
                            name='sex'
                            id='sex'
                            className={getFieldClassName('sex')}
                            value={formData.sex || ''}
                            onChange={handleSelectChange}
                            options={[
                                {value: 'Мужской', label: 'Мужской'},
                                {value: 'Женский', label: 'Женский'},
                                
                            ]}
                        />
                        <Container>
                        {getFieldErrorMessage('sex')}
                        </Container>
                        {getFieldErrorMessage('sex')}
                    </Form.Group>
                </Row>

                <Row className="mb-3 gy-3">
                    <Form.Group as={Col} lg={5} xs={12} className='form_component'>
                        <Form.Label className="form_label">ВУЗ</Form.Label>
                        <Form.Control 
                            
                            type="text"
                            name='univer'
                            id='univer'
                            placeholder="Высшая Школа Экономики" 
                            className={getFieldClassName('univer')}
                            value={formData.univer || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('univer')}
                    </Form.Group>

                    <Form.Group as={Col} lg={4} xs={12} className='form_component'>
                        <Form.Label className="form_label">Факультет</Form.Label>
                        <Form.Control 
                            
                            placeholder="МИЭМ" 
                            name='faculty' 
                            id='faculty'
                            type='text'
                            className={getFieldClassName('faculty')}
                            value={formData.faculty || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('faculty')}
                    </Form.Group>

                    <Form.Group as={Col} lg={3} xs={12} className='form_component'>
                        <Form.Label className="form_label">Курс</Form.Label>
                        <Select
                            styles={colourStyles}
                            placeholder="Курс" 
                            name='year'
                            id='year'
                            className={getFieldClassName('year')}
                            value={formData.year || ''}
                            onChange={handleSelectChange}
                            options={[
                                {value: '1', label: '1 курс'},
                                {value: '2', label: '2 курс'},
                                {value: '3', label: '3 курс'},
                                {value: '4', label: '4 курс'},
                                {value: '5', label: '5 курс'},
                                {value: '6', label: '6 курс'},
                                {value: '1 (маг)', label: '1 курс (маг.)'},
                                {value: '2 (маг)', label: '2 курс (маг.)'},
                                {value: 'Не студент', label: 'Не студент'},
                            ]}
                        />
                        {getFieldErrorMessage('year')}
                    </Form.Group>
                </Row>

                <Row className="mb-3 gy-3">
                    <Form.Group as={Col} lg={9} xs={12} className='form_component'>
                        <Form.Label className="form_label">Образовательная программа</Form.Label>
                        <Form.Control 
                            
                            name='program' 
                            type='text'
                            id='program'
                            placeholder="ИВТ (Информатика и вычислительная техника)" 
                            className={getFieldClassName('program')}
                            value={formData.program || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('program')}
                    </Form.Group>

                    <Form.Group as={Col} lg={3} xs={12} className='form_component'>
                        <Form.Label className="form_label">Группа</Form.Label>
                        <Form.Control 
                            
                            placeholder="БИВ230" 
                            name='group' 
                            type='text'
                            id='group'
                            className={getFieldClassName('group')}
                            value={formData.group || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('group')}
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} lg={6} xs={12} className="mb-3 form_component">
                        <Form.Label className="form_label">Нужен ли тебе трансфер?</Form.Label>
                        <Select
                            styles={colourStyles}
                            placeholder="Выберите вариант трансфера" 
                            name='transfer' 
                            id='transfer'
                            className={getFieldClassName('transfer')}
                            value={formData.transfer || ''}
                            onChange={handleSelectChange}
                            options={[
                                {value: 'Да, от Одинцово', label: 'Да, от Одинцово'},
                                {value: 'Да, от Парка Победы', label: 'Да, от Парка Победы'},
                                {value: 'Не нужен', label: 'Не нужен'},
                            ]}

                        />
                        {getFieldErrorMessage('transfer')}
                    </Form.Group>
                </Row>
                
                <Row>
                    <Form.Group as={Col} lg={9} xs={12} className="mb-3 form_component">
                        <Form.Label className="form_label" lang='ru'>Особенности здоровья</Form.Label>
                        <Form.Control 
                            
                            placeholder='При наличии'
                            type="text" 
                            name='health' 
                            id='health'
                            className={getFieldClassName('health')}
                            value={formData.health || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('health')}
                    </Form.Group>
                </Row>
                
                <Container fluid className='d-flex align-middle justify-content-center py-5'>
                    <button type="submit"  className="mb-2 form_btn__registration_white wow fadeIn"  data-wow-duration="2s">
                        <span className="btn_label">
                            Отправить  
                        </span>
                    </button>
                </Container>

            </Form>

            <Modal size="lg" centered show={showModal} onHide={handleCloseModal} className=''>
                
                <Container className='sun1-register-wrapper'>
                    <Image src={sun} className='sun1-register'/>
                </Container>

                <Container className='sun2-register-wrapper'>
                    <Image src={sun} className='sun2-register'/>
                </Container>

                <Modal.Body className='mx-1 my-1'>
                    <Popup_inner />
                    <Container fluid className='d-flex align-middle justify-content-center pb-5'>
                        <button onClick={event =>  window.location.href='/'} className="mb-2 form_btn__registration_white_popup"  data-wow-duration="2s">
                            <span className="btn_registration_label_popup">
                                Вернуться на главную
                            </span>
                        </button>
                    </Container>
                </Modal.Body>
            </Modal>
            
        </Container>
    );
};
