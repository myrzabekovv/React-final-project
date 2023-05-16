import React, { useState } from 'react';
import { postData } from '../../api/api';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

export const PostPage = () => {
  const [item, setItem] = useState({
    name: '',
    price: '',
    img: '',
    instock: '',
    about: ''
  });

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/admin')
    try {
      const createdItem = await postData(item);
      console.log('Создан новый элемент:', createdItem);
    } catch (error) {
      console.error('Ошибка при создании элемента:', error);
    }
  };

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Title>ADD NEW PRODUCT</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />

        <Label htmlFor="price">Price</Label>
        <Input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
        <Label htmlFor="instock">inSctock</Label>
        <Input
          type="text"
          name="instock"
          value={item.instock}
          onChange={handleChange}
        />

        <Label htmlFor="about">About</Label>
        <Input
          type="text"
          name="about"
          value={item.about}
          onChange={handleChange}
        />
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
  background-color: #eee1e1;
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
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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



