import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../store/basket";

import styled from 'styled-components';
import { useState } from "react";

const BasketContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Wrapper = styled.div`
  padding-top: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageWrap = styled.div`
  width: 100px;
  margin-right: 20px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.span`
  font-weight: bold;
  color: #333;
`;

const ItemPrice = styled.p`
  margin: 5px 0;
  color: #666;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const TotalPrice = styled.div`
  text-align: right;
  margin-top: 20px;
  font-weight: bold;
  color: #333;
`;

const Button = styled.div`
   font-size: 1rem;
   width: 80px;
    font-weight: bold;
    background-color: transparent;
    color: #000000;
    border: 1px solid #000000;
    padding: 3px 2rem;
    cursor: pointer;
    margin-top: 0.5rem;
    transition-duration: 400ms;
  
    :hover {
      background-color: #101f31;
      color: white;
      transition-duration: 400ms;
    }
`

export const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.basket.basket);
  const [product, setProduct] = useState()
  
  const handleProduct = () => {
    alert('Ваш заказ будет расмотрен менеджером')
  }
  return (
    <Wrapper>
    <BasketContainer>
      <Heading>Корзинка</Heading>
      {basket.map((item) => {
        console.log(item);
        return (
          <ItemContainer key={item.id}>
            <ImageWrap>
              <ItemImage src={item?.img} alt="img" />
            </ImageWrap>
            <ItemInfo>
              <ItemName>{item?.name}</ItemName>
              <ItemPrice>
                Цена: {item?.price} руб. <br /> Количество: {item?.count}
              </ItemPrice>
            </ItemInfo>
            <RemoveButton
              onClick={() => {
                dispatch(removeTask(item.id));
              }}
            >
              Удалить
            </RemoveButton>
            <span>{item?.price * item?.count} руб.</span>
          </ItemContainer>
        );
      })}
      <TotalPrice>
        Общая сумма: {basket.reduce((total, item) => total + item.price * item.count, 0)} руб.
      </TotalPrice>
      <Button onClick={handleProduct}>ЗАКАЗАТЬ</Button>
    </BasketContainer>
    </Wrapper>
  );
};