import { YMaps, Map } from "@pbe/react-yandex-maps"
import { useState } from "react";
import './contacts.css'
import {FaPhone, FaEnvelope, FaClock} from 'react-icons/fa'

export const Contacts = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправлено!");
    console.log("Имя:", name);
    console.log("телефон:", number);
    console.log("Тема оброщение", text)
    console.log("Сообщение:", message);
    setName("");
    setNumber("");
    setMessage("");
    setText("")
  }
  return(
    <div className="contacts-container">
      <YMaps className="map">
        <div className="map">
        <Map className="map" defaultState={{center: [42.829379, 74.617993], zoom: 15 }} width={600} height={400} />
        </div>
      </YMaps>

      <div className="contacts-inner">
        <div className="title-contacts">
          <h1>Контакты</h1>
          <h3>Мы рады ответить на все <br /> ваши интересующие <br /> вопросы</h3>
        </div>
        <div className="contacts">
          <div className="contacts-feedback">
            <div>
              <p style={{fontWeight: 'bold' , fontSize: '15px'}}>Звоните или пишите нам</p> <br />
              <span> <span style={{color: '#828282'}}> <FaPhone/> Наши номера  </span><br /> +996 (700) 000 000 <br /> +996 (555) 000 000</span>
            </div>
            <div>
              <span> <span style={{color: '#828282'}}> <FaEnvelope/> Наша почта  </span> <br /> <a style={{textDecoration: 'none', color: 'black'}} href="electronic@gmail.com"> electronic@gmail.com</a></span>
            </div>
            <div>
              <span> <span style={{color: '#828282'}}> <FaClock/> График работы  </span> <br /> ПН-СБ 10:00-22:00</span>
            </div>
          </div>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              className="form-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Ваше имя"
            />
          </div>
          <div>
            <input
              className="form-input"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              placeholder="Укажите свой номер"
            />
          </div>
          <div>
            <input
              className="form-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              placeholder="Тема обращение"
            />
          </div>
          <div>
            <textarea
              className="form-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Ваше сообщение"
            ></textarea>
          </div>
          <button type="submit">Отправить</button>
      </form>
      </div>
      </div>
    </div>
  )
}