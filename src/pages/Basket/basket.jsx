import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../store/basket";

import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`;

const ImgWrap = styled.div`
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
`;

const Span = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #007bff;
`;

const H1 = styled.h1`
  text-align: center;
  margin-top: 6%;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 0.5rem;
`;

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.basket.basket);
  return (
    <div>
      <H1>Корзинка</H1>
      {
        basket.map((item) => {
          console.log(item);
          return (
            <div key={item.id}>
              <Cont>
                <ImgWrap>
                <div>item id: {item?.id}</div>
                  <Img src={item?.img} alt={'img'} />
                </ImgWrap>
                <Span>{item?.name}</Span>
                <P>{item?.price}</P>
                <Button
                 onClick={() => {
                  dispatch(removeTask(item.id));
                }}>
                  remove
                </Button>
              </Cont>
            </div>
          )
        })}
    </div>
  );
};