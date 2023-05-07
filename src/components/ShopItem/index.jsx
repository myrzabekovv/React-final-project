import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import styled from "styled-components"
import {addBasket} from '../../store/basket'

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Items = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
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
    color: #007bff;
  }

  button {
    font-size: 1rem;
    font-weight: bold;
    background-color: #007bff;
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
    <ItemsContainer>
      <Items key={data?.id}> 
        <img src={data?.img} alt={data?.title} />
        <span>{data.title}</span>
        <p>{data.price}</p>
        <button 
        onClick={() => {
          dispatch(addBasket(data));
        }}
        >Положить в карзину</button>
        <Link to={`/item/${data?.id}`}>Подробнее</Link>
     </Items>
    </ItemsContainer>
  )
}
