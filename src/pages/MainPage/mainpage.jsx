import './mainpage.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ShopItem } from '../../components/ShopItem'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { useEffect, useState } from 'react';
import { getData } from '../../api/api';

export const MainPage = () => {

  const [items, setItems] = useState()

useEffect(() => {
  getData().then((rew)=>{
     setItems(rew.data)
  })

}, [])
  // console.log(items)


  return (
    <div className='container'>
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            className='slider'
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="pc">
                <div>ОТ 20000 рублей</div>
                <h1>Игровые Компьютеры</h1>
                <button>ЗАКАЗАТЬ</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='iphone pc'>
                <div>От 40000 рублей</div>
                <h1>Смартфоны</h1>
                <button>ЗАКАЗАТЬ</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='headphones pc'>
                <div>От 10000 рублей</div>
                <h1>Наушники</h1>
                <button>ЗАКАЗАТЬ</button>
              </div>
            </SwiperSlide>
          </Swiper>


      <h2>КАТАЛОГ ТОВАРОВ</h2>

      <div className="catalog">
        {
          items && items.map((item) => {
            // console.log(item);
            return (
          <ShopItem key={item?.id} data={item?.attributes}/>

            )
          })
        }
        
      </div>
      
    </div>
  )
}