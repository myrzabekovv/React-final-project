import { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { changeData, deleteData, getDataDetail} from "../../api/api";

export const EditPage = () => {
  const [data, setData] = useState(null)
  const params = useParams()
  
  const [item, setForm] =useState({
   img: '',
   name: '',
   price: ''
  })

  useEffect(()=> {
    if(!data) return
    setForm({
      img: data?.img,
      name: data?.name,
      price: data?.price
    })
  },[data])
 
 useEffect(()=>{
  getDataDetail(params.id).then((res)=>{
    setData(res)
  })
},[])



 const handleSubmit = (e) => {
   e.preventDefault();
   changeData(data?.id, item)
   console.log('save',item)
 }

 const handleDelete = () => {
   deleteData(data?.id)
 }

 console.log(item)
 
 return(
  <div key={data?.id}>
  <AdminEditPageWrapper>
    <Form onSubmit={handleSubmit}>
      <ItemName>{data?.name}</ItemName>
      <FormGroup>
        <label htmlFor="name">Title</label>
        <Input
          type="text"
          name="name"
          value={item?.name}
          onChange={(e) => setForm({ ...item, name: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="price">Price</label>
        <Input
          type="text"
          name="price"
          value={item?.price}
          onChange={(e) => setForm({ ...item, price: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="img">Image URL</label>
        <Input
          type="text"
          name="img"
          value={item?.img}
          onChange={(e) => setForm({ ...item, img: e.target.value })}
        />
      </FormGroup>
      <Button type="submit">Save Changes</Button>
    </Form>
    <Button onClick={handleDelete}>Delete Item</Button>
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

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const FormGroup = styled.div`
margin-bottom: 20px;
`;

const ItemName = styled.h2`
margin-bottom: 20px;
font-size: 18px;
font-weight: bold;
`;

const Input = styled.input`
border: none;
border-radius: 5px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
padding: 10px;
`;

const Button = styled.button`
background-color: #0080ff;
border: none;
border-radius: 5px;
color: #fff;
cursor: pointer;
padding: 10px;
transition: background-color 0.2s ease-in-out;

&:hover {
background-color: #0072e6;
}
`;





