import React, { useState } from 'react';
import { postData } from '../../api/api';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

export const PostPage = () => {
  // 1. Создание состояний item и errors
  const [item, setItem] = useState({
    name: '',
    price: '',
    img: '',
    instock: '',
    about: ''
  });
  const [errors, setErrors] = useState({})

  // 2. Импорт функции навигации
  const navigate = useNavigate()

  // 3. Функция, вызываемая при отправке формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 4. Проверка наличия ошибок
    if (hasErrors()) {
      return;
    }

    // 5. Навигация на страницу "/admin"
    navigate('/admin')

    try {
       // 6. Отправка данных нового продукта на сервер
      const createdItem = await postData(item);
      console.log('Создан новый элемент:', createdItem);
    } catch (error) {
      console.error('Ошибка при создании элемента:', error);
    }
  };

  // 7. Функция, вызываемая при изменении полей ввода
  const handleChange = (e) => {
    const { name, value } = e.target;

     // Обновление состояний item и errors
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? 'Заполните поле' : ''
    }))
  };

  // 8. Функция для проверки наличия ошибок
  const hasErrors = () => {
    const newErrors = {};

    Object.keys(item).forEach((key) => {
      if (item[key].trim() === '') {
        newErrors[key] = 'Заполните поле';
      }
    });

    // Обновление состояния errors
    setErrors(newErrors);
    return Object.keys(newErrors).length > 0;
  };


  return (
    <Container>
      <Title>ADD NEW PRODUCT</Title>
      <Form onSubmit={handleSubmit}>

        {errors && <p style={{ color: 'red' }}>{errors.name}</p>}
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />

       {errors && <p style={{ color: 'red' }}>{errors.price}</p>}
        <Label htmlFor="price">Price</Label>
        <Input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
        />

        {errors && <p style={{ color: 'red' }}>{errors.instock}</p>}
        <Label htmlFor="instock">inSctock</Label>
        <Input
          type="text"
          name="instock"
          value={item.instock}
          onChange={handleChange}
        />

        {errors && <p style={{ color: 'red' }}>{errors.about}</p>}
        <Label htmlFor="about">About</Label>
        <TextArea type="text"
          name="about"
          value={item.about}
          onChange={handleChange}>
          </TextArea>

          {errors && <p style={{ color: 'red' }}>{errors.img}</p>}
        <Label htmlFor="img">Img</Label>
        <Input
          type="text"
          name="img"
          value={item.img}
          onChange={handleChange}
        />

        <Button type="submit">Create Item</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #5d5b5bb8;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 20px;
  color: #555;
`;

const Input = styled.input`
  width: 350px;
  height: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 350px;
  height: 200px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
//   margin-top: 20px;
//   background-color: #565252;
//   width: 40%;
//   height: 90vh;
//   border-radius: 10px;
// `;

// const Label = styled.label`
//   font-size: 18px;
//   font-weight: bold;
//   margin-top: 8px;
// `;

// const Input = styled.input`
//   width: 300px;
//   height: 50px;
//   padding: 10px;
//   font-size: 16px;
//   border-radius: 10px;
//   border: none;
//   outline: none;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   font-size: 18px;
//   font-weight: bold;
//   background-color: #f0f0f0;
//   border: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #e0e0e0;
//   }
// `;



