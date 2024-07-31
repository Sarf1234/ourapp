// components/Carousel.js
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = ({ data, isMobile }) => {
  const swiperProps = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
    className: 'mySwiper',
    style: { maxWidth: '100%', height: 'auto' },
  };

  return (
    <Swiper {...swiperProps}>
      {data.map((item, index) => (
        <SwiperSlide key={item.id}>
          <img src={item.uri} alt={`bannerimage-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;