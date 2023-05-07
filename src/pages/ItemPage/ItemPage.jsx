import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styled from "styled-components";

const itemsUrl = 'http://localhost:1337/api/items?populate=*/'

const ItemPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  max-width: 800px;
`;

const ItemImage = styled.img`
  max-width: 400px;
  margin: 20px 0;
`;

const ItemTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ItemPrice = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0062cc;
  }
`

export const ItemPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  console.log(data)

  useEffect(() => {
    // fetch на 1 товар по  id
    fetch(`${itemsUrl}/${id}`)
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <ItemPageContainer>
    <div>item id: {data.id}</div>
    <ItemTitle>{data?.title}</ItemTitle>
    <ItemPrice>{data?.price}</ItemPrice>
    <ItemImage src={data?.img.data.attributes.url} alt={data?.name} />
    <AddToCartButton>Положить в карзину</AddToCartButton>
  </ItemPageContainer>
)
}

