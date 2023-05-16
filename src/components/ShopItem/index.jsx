import styled from "styled-components"
import { useState } from "react";
import { ItemPage } from "../../pages/ItemPage/modal";
import {  RiSearchLine  } from 'react-icons/ri';


const Items = styled.div`
  width: 300px;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc none;
  background-color: rgba(226, 227, 228, 0.481);
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  
  img {
    width: 80%;
    max-height: 50%;
    margin-bottom: 0.5rem;
    object-fit: cover;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    color: #000000;
  }

  button {
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
    color: #000000;
    border: 1px solid #000000;
    padding: 3px 2rem;
    cursor: pointer;
    margin-top: 0.5rem;
    transition-duration: 400ms;
  }
  button:hover {
    background-color: #101f31;
    color: white;
    transition-duration: 400ms;
  }

  a {
    font-size: 0.8rem;
    font-weight: bold;
    color: #101f31;
    text-decoration: none;
    margin-left: 0.5rem;
    margin-top: 8px;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: auto;
`

export const ShopItem = ({ data }) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div>
      <Items key={data?.id}> 
        <img src={data?.img} alt='img' />
        <span>{data?.name}</span>
        <p>Цена товара: {data?.price}</p>
        <Buttons>
            <button onClick={() => setModalActive(true)}>
              <RiSearchLine  size={20} />
              <span>Подробнее</span>
            </button>
        </Buttons>

      </Items>
      <ItemPage active={modalActive} setActive={setModalActive} id={data?.id}/>
    </div>
  )
}







