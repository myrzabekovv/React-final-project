import { useEffect, useState } from "react"
import { getData } from "../../api/api"
import { Link } from "react-router-dom"
import { ItemsAdminPage } from "./itemseditPage"


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
        return  <ItemsAdminPage key={item?.id} data={item}/>
        })}
        <Link to={'/create'}>CREATE ITEM</Link>
    </div>
  )
}