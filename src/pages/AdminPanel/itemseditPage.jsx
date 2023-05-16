import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteData } from "../../api/api";
import { AiOutlineDelete } from "react-icons/ai";

export const ItemsAdminPage = ({ data }) => {
  const handleDelete = () => {
    deleteData(data?.id);
  };

  return (
    <div key={data?.id}>
      <AdminEditPageWrapper>
        <ItemName>{data.name}</ItemName>

        <LinkButton>
          <ViewItemLink to={`/edit/${data.id}`}>View Item</ViewItemLink>
          <DeleteButton onClick={handleDelete}>
            <AiOutlineDelete size={16} />
            DELETE
          </DeleteButton>
        </LinkButton>
      </AdminEditPageWrapper>
    </div>
  );
};

const LinkButton = styled.div`
  display: flex;
  gap: 48%;
`

const ViewItemLink = styled(Link)`
  display: inline-block;
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const AdminEditPageWrapper = styled.div`
  background-color: #d8d0d0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 400px;
`;

const ItemName = styled.h2`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;