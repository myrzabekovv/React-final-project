import { Link, Outlet } from "react-router-dom"
import {AiOutlineShoppingCart,} from 'react-icons/ai'
import styled from "styled-components"
import { useSelector } from "react-redux"
import './layout.css'
import {FaPhone, FaEnvelope, FaMapMarker} from 'react-icons/fa'
import { useState } from "react"
import { getData } from "../../api/api"
import { MainPage } from "../../pages/MainPage/mainpage"


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(15, 16, 15, 0.879);
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
  @media screen and (max-width: 560px) {
    display: none;
  }
`
const Logo = styled.span`
  font-family: 'Righteous', cursive;
`

export const Layout = () => {
  const count = useSelector((store) => store.basket.count)
  const [burger , setBurger] = useState(false)

  return(
    <>
      <Header>
        <Link to='/'> <Logo>Electro-nic</Logo> </Link>
        <Links>
          <Link to='/'>Главная</Link>
          <Link to='/about'>О нас</Link>
          <Link to='contacts'>Контакты</Link>
        </Links>
        <Link className="basket" style={{right: 130}} to='/basket'> <span>{count}</span> <AiOutlineShoppingCart/> </Link>

        <div className="setburger" onClick={() => setBurger(!burger)}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>

        <div className="burger-nav" style={burger ? {display: 'block'} : {display: 'none'}}>
          <Links>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <Link to='contacts'>Контакты</Link>
          </Links>
          <Link className="basket" style={{right: 130}} to='/basket'> <span>{count}</span> <AiOutlineShoppingCart/> </Link>
        </div>

      </Header>
      <Content>
        <Outlet/>
      </Content>

        <div className="upper-footer-inner">
          <div className="upper-footer-card">
            <Link to='/'>Electro-nic</Link>
            <p>Electro-nic - Магазин техники</p>
            <span>Режим работы <br /> <p>ПН-СБ 10:00-22:00</p> </span>
          </div>
          <div className="upper-footer-card middle-card">
            <h4> 9 лет с Вами! </h4>
            <Link to='/about'>О нас</Link>
            <Link to='/contacts'>Контакты</Link>
          </div>
          <div className="upper-footer-card">
            <h4>Контакты</h4>
            <span style={{color: '#828282'}}> <FaPhone/> +996 (700) 000 000 <br /> +996 (555) 000 000  </span>
            <span style={{color: '#828282'}}> <FaEnvelope/> <a style={{textDecoration: 'none', color: '#828282'}} href="electronic@gmail.com"> electronic@gmail.com</a>  </span>
            <span style={{color: '#828282'}}> <FaMapMarker/> 7 мкр возле ДСК  </span>
          </div>
        </div>

      
      <Footer>
        <FooterTextLeft>© {new Date().getFullYear()} Electro-nic. All rights reserved</FooterTextLeft>
        <FooterTextCenter>Terms of Service</FooterTextCenter>
        <FooterTextRight>Privacy Policy</FooterTextRight>
      </Footer>
    </>
  )
}