import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import styled from "styled-components"
import {addBasket, countAdd} from '../../store/basket'

const Items = styled.div`
  width: 300px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc none;
  background-color: #ebad95;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  
  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
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
    background-color: #048379;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 0.5rem;
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

export const ShopItem = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Items key={data?.id}> 
        <img src={data?.img} alt='img' />
        <span>{data?.name}</span>
        <p>{data?.price}</p>
        <button 
        onClick={() => {
          dispatch(addBasket(data));
          dispatch(countAdd())
        }}
        >Положить в карзину</button>
        <Link to={`/card/${data?.id}`}>Подробнее</Link>
     </Items>
    </div>
  )
}
