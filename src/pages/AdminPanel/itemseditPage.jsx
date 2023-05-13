import styled from "styled-components";
import { useEffect, useState } from "react";
import { changeData, deleteData } from "../../api/api";
import { Link } from "react-router-dom";

export const ItemsAdminPage = ({ data }) => {

  
  return (
    <div key={data?.id}>
    <AdminEditPageWrapper>
      <ItemName>{data.name}</ItemName>

      <Link to={`/edit/${data.id}`}>View Item</Link>
    </AdminEditPageWrapper>
  </div>
);
};

const AdminEditPageWrapper = styled.div`
background-color: #fff;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
padding: 30px;
width: 50%;
`;

const ItemName = styled.h2`
margin-bottom: 20px;
padding: 10px;
font-size: 18px;
font-weight: bold;
`;