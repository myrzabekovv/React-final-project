import { Link, Outlet } from "react-router-dom"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import styled from "styled-components"
import { useSelector } from "react-redux"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(59, 96, 57, 0.879);
  height: 60px;
  padding: 0px 40px;
  
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 30px;
  position: absolute;
}

`

export const Layout = () => {
  const count = useSelector((store) => store.basket.count)
  return(
    <>
      <Header>
        <Link to='/'>Electro-nic</Link>
        <Link style={{right: 130}} to='/basket'> <span>{count}</span> <AiOutlineShoppingCart/> </Link>
      </Header>
      <Outlet/>
      <footer>

      </footer>
    </>
  )
}