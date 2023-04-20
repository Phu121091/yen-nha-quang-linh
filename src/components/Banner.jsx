import React,{useRef} from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectFade, Autoplay , Navigation,Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './style.scss';

const Listbn = [
    './bnys0.jpg',
    './bnys1.jpg',
    './bnys2.jpg',
]

const Banner = () => {

    const swiperRef = useRef(null);
     // Hàm xử lý sự kiện điều hướng Swiper sang trang trước
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Hàm xử lý sự kiện điều hướng Swiper sang trang sau
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className='banner'>
<Swiper
                modules={[ Autoplay,EffectFade,Navigation,Pagination]}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                ref={swiperRef}
                className='banner-slide'
            >
                {Listbn.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img className='slide-item' src={img} alt='yen-sao-quang-linh'/>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className='text-banner'>
                <h1 onClick={handlePrev}>YẾN NHÀ QUANG LINH</h1>
                <h3>Thương hiệu yến sào Đaklak hảo hạng , chuyên cung cấp các sản phẩm tổ yến , yến chưng cao cấp</h3>
                <button className='button'>ĐẶT HÀNG NGAY</button>
            </div>
    </div>
  )
}

export default Banner