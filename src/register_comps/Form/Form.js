import React, { useState } from 'react';
import "./Form.css";
import { Modal, Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import classnames from 'classnames';

export const Form_aggr = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы по умолчанию
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:8000/api/v1/registration/'); // Замените URL на ваш серверный API
        // const data = new FormData(event.target);
        // xhr.send(data);
        xhr.onload = () => {
            if (xhr.status === 201) {
                // Успешное выполнение запроса
                // Очищаем форму и ошибки
                setFormData({});
                setErrors({});
                setShowModal(true);
            } else if (xhr.status === 400) {
                // Получаем ответ с ошибками от сервера
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
                // Обработка других статусов ошибок
                setErrors({});
                alert('Что-то пошло не так при отправке формы.');
            }
      
            // Отобразить pop-up с соответствующим содержимым
            // Здесь можно использовать ваше предпочтительное модальное окно или библиотеку для отображения pop-up
            // alert(xhr.status);
        };
      
        xhr.onerror = () => {
            // Ошибка при выполнении запроса
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
            }
        }

        return '';
    };

    const getFieldClassName = (fieldName) => {
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

    return (
        <Container className="form_container" fluid>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridSurname">
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

                    <Form.Group as={Col} controlId="formGridName">
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

                    <Form.Group as={Col} controlId="formGridPatronymic">
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

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
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

                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label className="form_label">Телефон</Form.Label>
                        <Form.Control 
                            type="phone" 
                            name='phone' 
                            id='phone'
                            placeholder="+7 (900) 777-14-88" 
                            className={getFieldClassName('phone')}
                            value={formData.phone || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('phone')}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBithdate">
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

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridVK">
                        <Form.Label className="form_label">Ссылка на VK</Form.Label>
                        <Form.Control 
                            type="text" 
                            name='vkurl'
                            id='vkurl'
                            placeholder="vk.com/ivan1488" 
                            className={getFieldClassName('vkurl')}
                            value={formData.vkurl || ''}
                            onChange={handleInputChange}
                        />
                        {getFieldErrorMessage('vkurl')}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTG">
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

                    <Form.Group as={Col} controlId="formGridSex">
                        <Form.Label className="form_label">Пол</Form.Label>
                        <Form.Select 
                            defaultValue="Мужской" 
                            name='sex'
                            id='sex'
                            className={getFieldClassName('sex')}
                            value={formData.sex || ''}
                            onChange={handleInputChange}
                        >
                            <option>Мужской</option>
                            <option>Женский</option>
                        </Form.Select>
                        {getFieldErrorMessage('sex')}
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridUniversity">
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

                    <Form.Group as={Col} controlId="formGridFaculty">
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

                    <Form.Group as={Col} controlId="formGridCourse">
                        <Form.Label className="form_label">Курс</Form.Label>
                        <Form.Select 
                            defaultValue="1" 
                            name='year'
                            id='year'
                            className={getFieldClassName('year')}
                            value={formData.year || ''}
                            onChange={handleInputChange}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>1 (магистратура)</option>
                            <option>2 (магистратура)</option>
                        </Form.Select>
                        {getFieldErrorMessage('year')}
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridOP">
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

                    <Form.Group as={Col} controlId="formGridGroup">
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

                <Form.Group className="mb-3" controlId="formGridTransfer">
                    <Form.Label className="form_label">Нужен ли тебе трансфер?</Form.Label>
                    <Form.Select 
                        defaultValue="Да, от Одинцово и обратно" 
                        name='transfer' 
                        id='transfer'
                        className={getFieldClassName('transfer')}
                        value={formData.transfer || ''}
                        onChange={handleInputChange}

                    >
                        <option className='form-option' >Да, от Одинцово и обратно</option>
                        <option>Да, от Парка Победы и обратно</option>
                        <option>Не нужен</option>
                    </Form.Select>
                    {getFieldErrorMessage('transfer')}
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGridHealth">
                    <Form.Label className="form_label">Особенности здоровья (при наличии)</Form.Label>
                    <Form.Control 
                        type="text" 
                        name='health' 
                        id='health'
                        className={getFieldClassName('health')}
                        value={formData.health || ''}
                        onChange={handleInputChange}
                    />
                    {getFieldErrorMessage('health')}
                </Form.Group>
                
                <Button type="submit" className="mb-2 form-btn">
                    Отправить
                </Button>
                

            </Form>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Body>
                    {/* <img src="path/to/image.jpg" alt="Изображение" className="img-fluid" /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" href="/">вернуться на главную</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};
