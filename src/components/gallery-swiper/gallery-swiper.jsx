import { Pagination, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './gallery-swiper.css';

export const GallerySwiper = ({ currBook, setImage }) => (
  <Swiper
    navigation={true}
    scrollbar={{
      draggable: true,
    }}
    watchSlidesProgress={true}
    pagination={{ clickable: true }}
    spaceBetween={30}
    modules={[Pagination, Navigation, Scrollbar]}
    className={currBook?.images?.length > 2 ? 'gallery-swiper' : 'gallery-swiper hidden'}
    data-test-id='slide-big'
    breakpoints={{
      320: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 'auto',
      },
    }}
  >
    {currBook?.images?.length > 2 &&
      currBook.images.map((img, i) => (
        <SwiperSlide data-test-id='slide-mini'>
          <button type='button' className='galleryImageButton' onClick={() => setImage(img)}>
            <img className='galleryImg' src={img} alt='Обложка' />
          </button>
        </SwiperSlide>
      ))}
  </Swiper>
);
