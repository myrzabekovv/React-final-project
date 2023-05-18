import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { changeData, deleteData, getDataDetail} from "../../api/api";

export const EditPage = () => {
  const [data, setData] = useState(null)
  const params = useParams()
  
  const [item, setForm] =useState({
   img: '',
   name: '',
   price: '',
   instock: '',
   about: ''
  })

  useEffect(()=> {
    if(!data) return
    setForm({
      img: data?.img,
      name: data?.name,
      price: data?.price,
      instock: data?.instock,
      about: data?.about
    })
  },[data])
 
 useEffect(()=>{
  getDataDetail(params.id).then((res)=>{
    setData(res)
  })
},[])

  const navigate = useNavigate()

 const handleSubmit = (e) => {
   e.preventDefault();
   navigate('/admin')
   changeData(data?.id, item)
   console.log('save',item)
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
        <label htmlFor="insctock">InStock</label>
        <Input
          type="text"
          name="instock"
          value={item?.instock}
          onChange={(e) => setForm({ ...item, instock: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="about">about</label>
        <Textarea   type="text"
          name="about"
          value={item?.about}
          onChange={(e) => setForm({ ...item, about: e.target.value })}>
          </Textarea>
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
  </AdminEditPageWrapper>
</div>
);
};

const Textarea = styled.textarea`
  width: 350px;
  height: 25vh;
`

const AdminEditPageWrapper = styled.div`
background-color: #baadad;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
padding: 30px;
width: 40%;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
`;

const FormGroup = styled.div`
margin-bottom: 20px;
display: flex;
gap: 20px;
align-items: center;
`;

const ItemName = styled.h2`
margin-bottom: 20px;
font-size: 18px;
font-weight: bold;
`;

const InputAbout = styled.input`
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 80%;
  height: 20vh;
`

const Input = styled.input`
border: none;
border-radius: 5px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
padding: 10px;
width: 60%;
`;

const Button = styled.button`
background-color: #0080ff;
border: none;
border-radius: 5px;
width: 50%;
color: #fff;
cursor: pointer;
padding: 10px;
transition: background-color 0.2s ease-in-out;

&:hover {
background-color: #0072e6;
}
`;





