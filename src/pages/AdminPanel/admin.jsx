import { useEffect, useState } from "react"
import { getData } from "../../api/api"
import { EditPage } from "./editPage"
import { Link } from "react-router-dom"


export const AdminPage = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    getData().then((res)=>{
      setData(res)
    })
  },[])

  return(
    <div>
        {data.map((item) => {
        return  <EditPage key={item?.id} data={item}/>
        })}
        <Link to={'/create'}>CREATE ITEM</Link>
    </div>
  )
}