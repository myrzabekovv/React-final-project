import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styled from "styled-components";

const itemsUrl = 'https://644d1fcfcfdddac9709d8cdc.mockapi.io/api/items/items'

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


export const ItemPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    // fetch на 1 товар по  id
    fetch(`${itemsUrl}/${id}`)
      .then(res => res.json())
      .then((d) => {
        setData(d)
        console.log(1, d)
      })
  }, [id])
  

  return (
    <ItemPageContainer>
    <div>item id: {data?.id}</div>
    <ItemTitle>{data?.name}</ItemTitle>
    <ItemPrice>{data?.price}</ItemPrice>
    <ItemImage src={data?.img} alt={'img'} />
  </ItemPageContainer>
)
}
