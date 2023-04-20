import React, { useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";

const ListReview = [
    {
        img:'./ctm1.jpeg',
        name:'Hiền Hồ',
        class:'Ca sĩ',
        review:'Mình cần mua yến để biếu tặng nên ngoài chất lượng tốt thì bao bì cũng phải đẹp nữa. Thấy Yến nhà quang Linh được đánh giá tốt về chất lượng, lại có bao bì đẹp nên mình quyết định đặt luôn để kịp đi thăm hỏi. Lúc đặt hàng các bạn nhân viên đều rất dễ thương và tư vấn đầy đủ nên mình cũng đặt mua cho bản thân dùng để tăng cường sức khỏe.'
    },
    {
        img:'./ctm2.jpeg',
        name:'Ngọc Trinh',
        class:'Người mẫu',
        review:'Mình cần mua yến để biếu tặng nên ngoài chất lượng tốt thì bao bì cũng phải đẹp nữa. Thấy Yến nhà quang Linh được đánh giá tốt về chất lượng, lại có bao bì đẹp nên mình quyết định đặt luôn để kịp đi thăm hỏi. Lúc đặt hàng các bạn nhân viên đều rất dễ thương và tư vấn đầy đủ nên mình cũng đặt mua cho bản thân dùng để tăng cường sức khỏe.'
    },
    {
        img:'./ctm3.jpeg',
        name:'Ninh Dương Lan Ngọc',
        class:'Diên viên',
        review:'Mình cần mua yến để biếu tặng nên ngoài chất lượng tốt thì bao bì cũng phải đẹp nữa. Thấy Yến nhà quang Linh được đánh giá tốt về chất lượng, lại có bao bì đẹp nên mình quyết định đặt luôn để kịp đi thăm hỏi. Lúc đặt hàng các bạn nhân viên đều rất dễ thương và tư vấn đầy đủ nên mình cũng đặt mua cho bản thân dùng để tăng cường sức khỏe.'
    },
]

const Review = () => {
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
    <div className="product">
      <h2 className="title-product">CẢM NHẬN KHÁCH HÀNG</h2>
      <div className="hr" />
      <div className="slide-review">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          loop={true}
          effect={'slide'}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          ref={swiperRef}
          className="review-slide"
        >
          {ListReview.map((item, index) => (
            <SwiperSlide key={index} className="review-item">
              <img className="slide-item" src={item.img} alt="yen-sao-quang-linh" />
              <div className="review-text">
              <h4>{item.name}</h4>
              <h5>{item.class}</h5>
              <p>{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
