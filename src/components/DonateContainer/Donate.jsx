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
import curvetShap from '../../assets/curved_shape.png'

const Donate = () => {
  const { donate } = useContext(DonateContaxt);
    const [isActive, setActive] = useState({
      getBtn: true,
      status: "get",
    });
  
    const handleActiveButton = (status) => {
      if (status === "get") {
        setActive({
          getBtn: true,
          status: "get",
        });
      } else {
        setActive({
          getBtn: false,
          status: "discover",
        });
      }
    };
  const bannerStyle = {
    height: "450px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    backgroundImage: `
            linear-gradient(to right, #091f1b, rgba(0, 0, 0, 0.1000)), 
             url(${helpChildren})
         `,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="relative mb-10">
      {/* donation show  card */}
      <div className="relative bg-[#efeceaaa] md:py-16">
        <TitlePage />
        <div className="max-w-7xl mx-auto px-2 lg:px-0 py-4 mt-2 ">
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
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
        <button className="custom-prev absolute md:top-40 lg:top-[55%] top-72 right-[25%] md:right-auto md:left-4 transform md:-translate-y-1/2 bg-[#122f2a] hover:bg-[#122f2ae5] text-[#ffffff] text-sm p-3 rounded-full z-10">
          <FaArrowLeft />
        </button>
        <button className="custom-next absolute lg:top-[55%] md:top-40 right-10 top-72   md:right-4 transform md:-translate-y-1/2 bg-[#122f2a] hover:bg-[#122f2ae5] text-[#ffffff]  text-sm p-3 rounded-full z-10">
          <FaArrowRight />
        </button>
    
      </div>
      {/* children need your help by donating today section*/}
      <div className="relative ">
        <div style={bannerStyle} className="z-20  h-96">
          <div className="text-center flex flex-col justify-center items-center">
            <div className="flex gap-3 items-center">
              <img className="w-7 h-7" src={heartHellow} alt="" />
              <p className="text-yellowText caveat text-[22px]">
                Start donating poor people
              </p>
            </div>
            <h1 className="text-4xl lg:text-[50px] font-bold text-textWhite leading-none">
             
              Children Need Your Help <br className="hidden md:block" /> By Donating Today
            </h1>
            {/* button contaienr */}
            <div className="flex text-sm  gap-4 mt-5  mx-">
        <Link>
          {" "}
          <motion.button
           animate={{x: [0, 30, 0]}}
           transition={{ease:"linear", duration: 2, repeat: Infinity}}

            onClick={() => handleActiveButton("discord")}
            className={`${
              isActive.getBtn
                ? "flex bg-[#2f454182] rounded-full items-center gap-1 px-6 md:px-8 py-3.5  transition-all duration-300 ease-linear  font-semibold"
                : " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-3.5  transition-all duration-300 ease-linear  font-semibold"
            }`}
          >
            Discover More
            <IoArrowForwardOutline className=" -rotate-45" />
          </motion.button>
        </Link>
        {/* get a quote button */}
        <Link>
          {" "}
          <motion.button
            animate={{x: [0, 30, 0]}}
            transition={{ease:"linear", duration: 2, repeat: Infinity, delay: 1}}
            onClick={() => handleActiveButton("get")}
            className={`${
              isActive.getBtn
                ? " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-3.5 w-full md:w-auto transition-all duration-300 ease-linear  font-semibold"
                : " flex bg-[#2f454182] rounded-full items-center gap-1 md:px-8 px-6 py-3.5  transition-all duration-300 ease-linear  font-semibold "
            }`}
          >
            Get A Quote
            <IoArrowForwardOutline className=" -rotate-45" />
          </motion.button>
        </Link>
      </div>
          </div>
        </div>
      </div>
      <div className=" absolute md:-bottom-9 -bottom-2 w-full md:h-16 z-10">
      <img className="w-full h-full" src={curvetShap} alt="" />
      </div>
    </section>
  );
};

export default Donate;
