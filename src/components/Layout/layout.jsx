import { Link, Outlet } from "react-router-dom"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import styled from "styled-components"
import { useSelector } from "react-redux"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(30, 35, 30, 0.879);
  height: 50px;
  padding: 0px 40px;
  box-sizing: border-box;
  
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;
  
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
  
`


const Footer = styled.footer`
  background-color: #333;
  padding: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 80hv;
`;

const FooterTextLeft = styled.span`
  text-align: left;
`;

const FooterTextCenter = styled.span`
  text-align: center;
  flex-grow: 1;
`;

const FooterTextRight = styled.span`
  text-align: right;
`;
const Content = styled.div`
  min-height: calc(100vh - 120px);
  padding-top: 60px;
`;
const Links = styled.div`
  display: flex;
  gap: 40px;
`
const Logo = styled.span`
  font-family: 'Righteous', cursive;
`

export const Layout = () => {
  const count = useSelector((store) => store.basket.count)
  return(
    <>
      <Header>
        <Link to='/'> <Logo> Electro-nic</Logo> </Link>
        <Links>
          <Link to='/about'>О нас</Link>
          <Link to='contacts'>Контакты</Link>
        </Links>
        <Link style={{right: 130}} to='/basket'> <span>{count}</span> <AiOutlineShoppingCart/> </Link>
      </Header>
      <Content>
        <Outlet/>
      </Content>
      
      <Footer>
        <FooterTextLeft>© {new Date().getFullYear()} Electro-nic. All rights reserved</FooterTextLeft>
        <FooterTextCenter>Terms of Service</FooterTextCenter>
        <FooterTextRight>Privacy Policy</FooterTextRight>
      </Footer>
    </>
  )
}