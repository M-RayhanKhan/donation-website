import { useEffect, useState } from 'react';
import realLifeImg from '../../../../assets/realLifeBgImg.png'
import TitlePage from '../../../TitlePage/TitlePage';
import RealLifeCaseCard from './RealLifeCaseCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const RealLifeCase = () => {
    const [realLife, setRealLife] = useState([])
       {/* real life data load koresi */}
     useEffect(() => {
        fetch('/RealLifeCase.json').then(res => res.json()).then(data => setRealLife(data))
     } , [])
  
    return (
        <section style={{backgroundImage: `url(${realLifeImg})`}} className="bg-cover bg-no-repeat bg-center py-16">
            <TitlePage/>
            {/* real life data maping */}
            <div className='max-w-[1209px] mt-5  mx-auto'>
                <Swiper
                slidesPerView={1}
                spaceBetween={10}
           
                pagination={{
                    el: ".swiper-pagination",
                  clickable: true,
                }}
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: false,
                }}
                speed={1500}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                >
                {
                 realLife.map(life => <SwiperSlide className='' key={life.id}>
                    <RealLifeCaseCard  life={life}></RealLifeCaseCard>
                 </SwiperSlide>)
                }
                </Swiper>
            </div>
        </section>
    );
};

export default RealLifeCase;