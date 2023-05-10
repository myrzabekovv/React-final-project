import styled from "styled-components";
import { useEffect, useState } from "react";
import { changeData, getData } from "../../api/api";

export const EditPage = ({data}) => {
 console.log(data)
   const [item, setItem] =useState({
    img: null,
    title: data?.title,
    price: data?.price,
  })
  useEffect(()=>{
    getData(data)
  },[data])


  const handleSubmit = (e) => {
    e.preventDefault();
    changeData(item)
  }

  return(
    <div key={data?.id}>
          <AdminEditPageWrapper>
            <form onSubmit={handleSubmit}>
              <span>{data.title}</span>
              <label htmlFor="title">Title</label>
              <input type="text" name="title"  value={item.title} onChange={(e) => setItem({...item, title: e.target.value})} />

              <label htmlFor="price">Price</label>
              <input type="number" name="price"  value={item.price} onChange={(e) => setItem({...item, price: e.target.value})} />

              <label htmlFor="img">Image URL</label>
              <input type="file" name="img" onChange={(e) => setItem({...item, img: e.target.files[0]})} />

              <button type="submit">Save Changes</button>
            </form>
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