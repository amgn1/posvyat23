import React, { useState, } from 'react';
import "./Form.css";
import { Modal, Container, Image, Alert, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import classnames from 'classnames';
import { Popup_inner } from '../Popup/Popup';
import sun from '../../ui/mock/sun (3).png'
import WOW from 'wowjs';
import Select from "react-select";
import cls_button from '../../ui/mock/close_btn.png';
import add_button from '../../ui/mock/add_btn.png';

export const Form_aggr = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [fields, setFields] = useState([{FIO: '' }]);

    const handleAddField = () => {
        setFields([...fields, {FIO: '' }]);
    };

    const handleDeleteField = (index) => {
        const updatedFields = [...fields];
        updatedFields.splice(index, 1);
        setFields(updatedFields);
    };

    const handleFullNameChange = (index, value) => {
        const updatedFields = [...fields];
        updatedFields[index].FIO = value;
        setFields(updatedFields);
    };
    
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSelectChange = (value, action) => {
        setFormData({ ...formData, [action.name]: value });
    };

    // const [people, setPeople] = useState([{ name: "" }]);

    // const handleAddPerson = () => {
    //     setPeople([...people, { name: "" }]);
    // };
  
    // const handleRemovePerson = (index) => {
    //     const updatedPeople = [...people];
    //     updatedPeople.splice(index, 1);
    //     setPeople(updatedPeople);
    // };
  
    // const handleInputChange_custom = (index, e) => {
    //     const { name, value } = e.target;
    //     const updatedPeople = [...people];
    //     updatedPeople[index][name] = value;
    //     setPeople(updatedPeople);
    // };

    document.addEventListener("DOMContentLoaded", function(){
        new WOW.WOW({
            live: false
        }).init();
    })

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://posvyatmiem.ru/api/v1/resettlement/'); 
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
        
        let formDataObject = Object.fromEntries(formDataToSend.entries());
        formDataObject.people_custom = fields.slice(1)
    
        // Format the plain form data as JSON
        let formDataJsonString = JSON.stringify(formDataObject);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(formDataJsonString);
        
    };

    const getErrorMessage = (fieldName, errorArray) => {
        if (fieldName === 'vkurl') {
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'resettlement with this vkurl already exists.') {
                return 'Расселение с таким VK уже существует';
            } else if (errorArray[0] === 'Enter a valid URL.') {
                return 'Введена неверная ссылка'
            }
        } else if (fieldName === 'tgurl') {
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'resettlement with this tgurl already exists.') {
                return 'Расселение с таким Telegram уже существует';
            }  else if (errorArray[0] === 'Enter a valid URL.') {
                return 'Введена неверная ссылка'
            }
        } else if (fieldName === 'phone') { 
            if (errorArray[0] === 'This field may not be blank.') {
                return errorArray[0].replace('This field may not be blank.', 'Это поле не должно быть пустым');
            } else if (errorArray[0] === 'resettlement with this phone already exists.') {
                return 'Расселение с таким номером телефона уже существует';
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
                    <Form.Group as={Col} lg={3} xs={12} className='form_component'>
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

                    <Form.Group as={Col} lg={3} xs={12} className='form_component'>
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

                <Row className="mb-5 gy-5">
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
                </Row>

                {fields.map((field, index) => (
                    <>{index !== 0 && (
                        <Row className="mb-5 gy-5">
                            <Form.Group key={index} as={Col} lg={9} xs={9} className='form_component'>
                                <Form.Label className="form_label">С кем хочешь жить? (ФИО {index}-го человека)</Form.Label>
                                <Form.Control

                                    
                                    id={'FIO' + index}
                                    type='text'
                                    placeholder="Фазылова Элиза Флоридовна"
                                    className={getFieldClassName('people_custom')}
                                    value={field.FIO}
                                    onChange={(event) => handleFullNameChange(index, event.target.value)} />
                                {getFieldErrorMessage('people_custom')}
                            </Form.Group>
                            <Button type="button" as={Col} lg={1} xs={3} onClick={() => handleDeleteField(index)} className='remove_btn'><Image src={cls_button} className='mx-auto d-block img-fluid'/></Button>
                            
                        </Row>
                        )}
                        
                    </>
                    
                ))}

                {fields.length <= 3 && ( 
                    <Row>
                        <Button type="button" as={Col} lg={6} xs={6} onClick={handleAddField} className='add_btn'><Image src={add_button} className='d-block img-fluid'/> Добавить человека</Button>
                    </Row>
                )}
                


                
                <Container fluid className='d-flex align-middle justify-content-center py-5'>
                    
                    <button type="submit"  className="mb-2 form_btn__resettlement_white wow fadeIn"  data-wow-duration="2s">
                        <span className="btn_label">
                            Отправить  
                        </span>
                    </button>
                </Container>

            </Form>

            <Modal size="lg" centered show={showModal} onHide={handleCloseModal}>

                <Container className='sun1-resettlement-wrapper'>
                    <Image src={sun} className='sun1-resettlement'/>
                </Container>
                
                <Modal.Body className='mx-1 my-1'>
                    <Popup_inner />
                    <Container fluid className='d-flex align-middle justify-content-center pb-5'>
                        <button onClick={event =>  window.location.href='/'} className="mb-2 form_btn__resettlement_white_popup"  data-wow-duration="2s">
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
