import React, { useState } from 'react';
import { postData } from '../../api/api';

export const PostPage = () => {
  const [item, setItem] = useState({
    name: '',
    price: '',
    img: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div>
      <h1>Create New Item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
        <label htmlFor="img">Img</label>
        <input type="text"
          name='img'
          value={item.img}
          onChange={handleChange}
        />

        <button type="submit">Create Item</button>
      </form>
    </div>
  );
};