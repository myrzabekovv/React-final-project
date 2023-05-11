import styled from "styled-components";
import { useEffect, useState } from "react";
import { changeData, deleteData } from "../../api/api";

export const EditPage = ({data}) => {
 
   const [item, setItem] =useState({
    img: data?.img,
    name: data?.name || '',
    price: data?.price || '',
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    changeData(data.id, item)
    console.log('save',item)
  }

  const handleDelete = () => {
    deleteData(data.id)
  }
  
  return(
    <div key={data?.id}>
          <AdminEditPageWrapper>
            <form onSubmit={handleSubmit}>
              <span>{data.name}</span>
              <label htmlFor="name">Title</label>
              <input type="text" name="name"  value={item.name} onChange={(e) => setItem({...item, name: e.target.value})} />

              <label htmlFor="price">Price</label>
              <input type="text" name="price"  value={item.price} onChange={(e) => setItem({...item, price: e.target.value})} />

              <label htmlFor="img">Image URL</label>
              <input type="text" name="img" value={item.img} onChange={(e) => setItem({...item, img: e.target.value})} />

              <button type="submit">Save Changes</button>
            </form>
            <button onClick={handleDelete}>Delete Item</button>
    </AdminEditPageWrapper>
    </div>
  )
}


const AdminEditPageWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 50%;

  & h2 {
    margin-bottom: 20px;
  }

  & form {
    display: flex;
    flex-direction: column;
  }

  & label {
    color: #555;
    font-size: 14px;
    margin-bottom: 5px;
  }

  & input {
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 20px;
  }

  & button[type="submit"] {
    background-color: #0080ff;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.2s ease-in-out;
  }

  & button[type="submit"]:hover {
    background-color: #0072e6;
  }
`;