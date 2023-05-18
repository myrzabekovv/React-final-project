import './about.css'
import { FaUser, FaMoneyBill, FaTools, FaShoppingBag, FaPhone, FaEnvelope, FaClock, FaMapMarker } from 'react-icons/fa'
import { YMaps, Map } from '@pbe/react-yandex-maps'

export const About = () => {
  const img = 'https://www.istore.kg/media/about_us_page/2020.20.26-00015_r9b2z4I.jpg'
  return(
    <div>
      <div className="title-img">
        <h1>Electro-nic - Магазин техники</h1>
        <img src={img} alt="" />
      </div>
      <div className='about-container'>
        <span className="about-description">
         Добро пожаловать в наш магазин, где вы можете приобрести широкий ассортимент технических товаров, включая игровые компьютеры, телефоны, наушники и многое другое. Мы специализируемся на предлагаемой продукции компании Apple, и гордимся тем, что с 2013 года знакомим жителей Бишкека с полной линейкой продукции этого производителя.

          У нас вы найдете самые привлекательные цены на все устройства Apple. Мы предлагаем большой выбор дополнительных устройств, гаджетов и аксессуаров, чтобы вы могли получить полное удовольствие от использования своей техники.
          В нашем магазине вы можете протестировать iMac, MacBook, iPad или iPhone, поскольку все эти устройства доступны для ознакомления в открытом доступе. Наши опытные консультанты всегда готовы ответить на все ваши вопросы и помочь вам определиться с выбором. Они помогут подобрать идеальное устройство, которое соответствует вашим потребностям.
          Мы также гарантируем полное гарантийное обслуживание для наших клиентов. Помимо этого, мы предоставляем неограниченное время сервисного обслуживания по программной части вашего устройства. У нас действуют накопительные программы, бонусные предложения и акции, чтобы сделать ваше покупательское пребывание еще более выгодным.
          По вопросам оформления заказа или получения дополнительной информации, обращайтесь к нам. Мы рады видеть вас в нашем магазине, где вы найдете лучшие технические товары и услуги!
          Реквизиты:
          ИП Арса К.Р.
          Будем рады видеть вас снова!
        </span>
        <div className='about-card'>
          <div className="about">
           <span className="about-icon"><FaUser size={25}/></span>
            <span className='about-title'>Консультация и сервис</span> 
            <br /> <br />
             Профессиональный и приветливый персонал; подбор и предложение только оптимальных решений; персональный менеджер
          </div>
          <div className="about">
            <span className="about-icon"><FaMoneyBill size={25}/></span>
            <span className='about-title'>Цены и расчеты</span> 
            <br /> <br /> 
            Любая форма оплаты: наличный и безналичный расчет, банковские карты Visa, MasterCard; возможность приобрести продукцию в кредит
          </div>
          <div className="about">
            <span className="about-icon"><FaTools size={25} /></span>
            <span className='about-title'>Постпродажный сервис</span>
             <br /> <br /> 
             Консультации по использованию; гарантийное обслуживание
          </div>
          <div className="about">
            <span className="about-icon"><FaShoppingBag size={25}/></span>
            <span className='about-title'>Всегда в наличии</span>
             <br /> <br />
              Айфоны, Айпады, Макбуки, а также оригинальные аксессуары для Ваших гаджетов
          </div>
        </div>
        <h2>Обратная Связь</h2>
      </div>
      <div className="feedback">
        <YMaps className='map' >
          <div className='map' >
            <Map className='map'  defaultState={{center: [42.829379, 74.617993], zoom: 15 }}/>
          </div>
        </YMaps>
          <div className='feedback-contacts'>
            <div>
            <FaPhone/> Наши номера
              <p>
                +996 (700) 000 000 
                <br />
                +996 (555) 000 000
              </p>
            </div>
            <div>
                <FaEnvelope/> Наша почта
              <p> <a style={{textDecoration: 'none', color: 'black'}} href="electronic@gmail.com"> electronic@gmail.com</a> </p>
            </div>
            <div>
                <FaClock/> График работы 
              <p> ПН-СБ 10:00-22:00 </p>
            </div>
            <div>
                <FaMapMarker/> Aдрес
              <p> 7 мкр возле ДСК </p>
            </div>
          </div>
      </div>
    </div>
  )
}