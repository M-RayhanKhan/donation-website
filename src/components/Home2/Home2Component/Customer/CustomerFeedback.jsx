import { useEffect, useRef, useState } from 'react';
import realLifeImg from '../../../../assets/realLifeBgImg.png'
import heartGreen from '../../../../assets/heartGreen.png'
import {motion, useInView } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import RealLifeCaseCard from '../../../Home/Home/RealLifeCase/RealLifeCaseCard';

const CustomerFeedback = () => {
    const [realLife, setRealLife] = useState([])
    const ref = useRef(null);
    const inView = useInView(ref, {once:true})
    
       {/* real life data load koresi */}
     useEffect(() => {
        fetch('/RealLifeCase.json').then(res => res.json()).then(data => setRealLife(data))
     } , [])
  
    return (
        <section style={{backgroundImage: `url(${realLifeImg})`}} className="bg-cover bg-no-repeat bg-center py-16">
                <section className='text-center  flex flex-col justify-center items-center'>
                        <motion.div
                        ref={ref}
                        animate={inView ? {x: 0, opacity: 1,  transition: {duration: 1, ease:"easeInOut", rotate: 0}} : 
                        {x: -500, opacity: 0 , duration:2, ease:"easeInOut"}}
                         className='flex gap-3 items-center'>
                            <img className='w-7 h-7' src={heartGreen} alt="" />
                            <p className='text-subDescription caveat text-[22px]'>Start donating poor people</p>
                        </motion.div>
                        <motion.h1 
                         ref={ref}
                         animate={inView ? {x: 0, opacity: 1,  transition: {duration: 1, ease:"easeInOut", rotate: 0}} : 
                         {x: -500, opacity: 0 , duration:2, ease:"easeInOut"}}
                        className='text-3xl md:text-[50px] font-bold text-title leading-none'>Our valueable  
                         <span className='text-yellowText'> customer</span><br className='hidden md:block' />Awesome Feedback</motion.h1>
                    </section>
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
    
        </section>
    );
};

export default CustomerFeedback;