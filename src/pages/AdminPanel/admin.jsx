import { useEffect, useState } from "react"
import { getData } from "../../api/api"
import { Link } from "react-router-dom"
import { ItemsAdminPage } from "./itemseditPage"
import styled from "styled-components"
import { RiAddLine } from "react-icons/ri";


const CreateItemLink = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  background-color: #333;
  font-size: 16px;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #5d5b5bb8;
`

export const AdminPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <Container>
        {data.map((item) => {
          return (
            <ItemsAdminPage key={item?.id} data={item} />
          );
        })}
      </Container>
      <CreateItemLink to={"/create"}>
        <RiAddLine size={20} />
        CREATE ITEM
      </CreateItemLink>
    </>
  );
}