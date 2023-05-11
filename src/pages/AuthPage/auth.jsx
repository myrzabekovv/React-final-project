import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";
// import Cookie from 'js-cookie'
// import { getUserInfo, loginUser } from "../../api/api";

export const AuthPage = () => { 
  // const [adminInfo] = useState({
  //   token: Cookie.get('key'),
  //   isConfirmed: false
  // })

  // const [form, setForm] = useState({
  //   identifier: '',
  //   password: '',
  // })
 
  // if (adminInfo.token) {
  //   getUserInfo(adminInfo.token).then((resp) => {
  //     if (resp.role.type === 'admin') {
  //       adminInfo.isConfirmed = true
  //     }
  //   })
  // }

  // const handleInput = (event) => {
  //   setForm({
  //     ...form,
  //     [event.target.name]: event.target.value
  //   })
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //     loginUser(form)
  //       .then((resp) => {
  //         Cookie.set('key', resp.jwt)
  //         console.log(resp);
  //         window.location.href = '/admin';
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       })
  // }

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Проверка аутентификации
      if (username === 'admin' && password === 'admin123') {
        // handleLogin();
        navigate('/admin')
      } else {
        alert('Ошибка аутентификации. Доступ только для администратора!');
      }
    };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Войти</button>
    </form>
  );
};
  
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
  
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  `;
  
  const Title = styled.h2`
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  `;
  
  const Input = styled.input`
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px #007bff;
    }
  `;
  
  const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
  
    &:hover {
      background-color: #0062cc;
    }
  
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px #007bff;
    }
  `;
