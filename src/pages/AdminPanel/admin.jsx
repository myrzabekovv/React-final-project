import { useEffect, useState } from "react"
import { getData } from "../../api/api"
import { EditPage } from "./editPage"


export const AdminPage = () => {
  const [data, setData] = useState([])

useEffect(()=>{
  getData().then((res)=>{
    setData(res.data)
  })
},[])
console.log(data)
  return(
    <div>
       {/* <img src={data?.attributes} alt='ada' />
        <span>{data?.attributes?.title}</span>
        <p>{data?.attributes?.price}</p> */}
        {data.map((item) => {
        return  <EditPage key={item?.id} data={item}/>
        })}
    </div>
  )
}