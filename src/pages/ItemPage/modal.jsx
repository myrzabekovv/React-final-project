import { useEffect, useState } from "react";
import styled from "styled-components";
import './modal.css'
import { addBasket , countAdd} from "../../store/basket";
import { useDispatch } from "react-redux";
import { RiShoppingCart2Line, RiSearchLine  } from 'react-icons/ri';


const itemsUrl = 'https://644d1fcfcfdddac9709d8cdc.mockapi.io/api/items/items';

const ItemImage = styled.img`
  max-width: 80%;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ItemTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const ItemPrice = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ItemStock = styled.span`
font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: ${(props) => (props.inStock === 'В наличии' ? "green" : "red")};
`;

const ItemDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;

  span {
    font-weight: bold;
    font-size: 28px;
  }
`;

const Button = styled.button`
    width: 200px;
    font-size: 1rem;
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

export const ItemPage = ({active, setActive, id}) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    fetch(`${itemsUrl}/${id}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        console.log(1, d);
      });
  }, [id]);

  const handleCloseOverlay = (e) => { 
    setActive(false)
  }

  const handleAddToBasket = () => {
    if(data?.instock === 'В наличии'){
      dispatch(addBasket(data));
      dispatch(countAdd())
    } else {
      alert('товара нет в наличии')
    }
  }
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={handleCloseOverlay}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
        <div className="content">
          <div>
           <ItemImage src={data?.img} alt={'img'} />
          </div>
          <div>
            <ItemTitle>{data?.name}</ItemTitle>
            <ItemPrice>Цена товара: {data?.price} Рублей</ItemPrice>
            <ItemDescription> <span>О товаре </span> <br />{data?.about}</ItemDescription> <br /> <br />
            <div className="instock-button">
              <ItemStock inStock={data?.instock}>{data?.instock === 'В наличии' ? "В наличии" : "Нет в наличии"}</ItemStock>
              <Button 
                onClick={handleAddToBasket}>
                  <RiShoppingCart2Line size={20} />
                  Положить в корзину
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};