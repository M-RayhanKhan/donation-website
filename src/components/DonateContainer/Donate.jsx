import { useContext, useState } from "react";
import TitlePage from "../TitlePage/TitlePage";
import { DonateContaxt } from "./DonateContainer";
import DonateCard from "./DonateCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import helpChildren from "../../assets/helpChildren.png";
import heartHellow from "../../assets/heart (1) 1.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import curvetShap from "../../assets/curved_shape.png";
import HelpPeople from "../Home/Home/HelpPeople/HelpPeople";

const Donate = () => {
  const { donate } = useContext(DonateContaxt);

  return (
    <section className="relative mb-10">
      {/* donation show  card */}
      <div className="relative bg-[#efeceaaa] md:py-16">
        <TitlePage />
        <div className="max-w-[1281px] mx-auto px-2 lg:px-0 py-4 mt-2 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              enabled: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {donate.map((items) => (
              <SwiperSlide key={items.id} className="px-2 md:px-0">
                <DonateCard items={items}></DonateCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute md:top-40 lg:top-[55%] top-72 right-[25%] md:right-auto md:left-4 transform md:-translate-y-1/2 bg-[#122f2a] hover:bg-yellowBg text-[#ffffff] text-sm p-3 rounded-full z-10">
          <FaArrowLeft />
        </button>
        <button className="custom-next absolute lg:top-[55%] md:top-40 right-10 top-72   md:right-4 transform md:-translate-y-1/2 bg-[#122f2a] hover:bg-yellowBg text-[#ffffff]  text-sm p-3 rounded-full z-10">
          <FaArrowRight />
        </button>
      </div>
      {/* help people */}
      <div>
        <HelpPeople/>
      </div>
    </section>
  );
};

export default Donate;
