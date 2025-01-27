import { useEffect, useState } from 'react';
import realLifeImg from '../../../../assets/realLifeBgImg.png'
import TitlePage from '../../../TitlePage/TitlePage';
import RealLifeCaseCard from './RealLifeCaseCard';
import {motion } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

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
            <div className='max-w-[1281px] mt-5 px-4 md:px-6 lg:px-0 mx-auto'>
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
                speed={1200}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
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
            <div className='text-center'>
            <Link>
            <motion.button
            animate={{x: [0, 30, 0]}}
            transition={{ease:"linear", duration: 2, repeat: Infinity}}
            className='bg-yellowBg  px-12 py-3 rounded-full  mt-12 mb-5 '>Get A Quote</motion.button></Link>
            </div>
        </section>
    );
};

export default RealLifeCase;