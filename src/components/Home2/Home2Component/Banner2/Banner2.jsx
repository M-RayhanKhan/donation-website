import React, { useState } from "react";
import Container from "../../../Container";
import heartYellow from "../../../../assets/heart (1) 1.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { SiTrustedshops } from "react-icons/si";
import banner1Img from "../../../../assets/home2/home2Banner1.png";
import banner2Img from "../../../../assets/home2/banner2.png";
import banner3Img from "../../../../assets/home2/banner3.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Banner2 = () => {
  // isActive button toggle
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
  const [sliderActive, setSliderActive] = useState({
    slidBtn: true,
    status: "slider",
  });
  const handleActiveSliderBtn = (sta) => {
    if (sta === "slider") {
      setSliderActive({
        slidBtn: true,
        status: "next",
      });
    } else {
      setSliderActive({
        slidBtn: false,
        status: "prev",
      });
    }
  };

  const linearImage = {
    backgroundImage: `
    linear-gradient(to right, #091f1b, rgba(0, 0, 0, 0.1000)),
    url(${banner1Img})
    `,
  };
  const linearImage2 = {
    backgroundImage: `
    linear-gradient(to right, #091f1b, rgba(0, 0, 0, 0.1000)),
    url(${banner2Img})
    `,
  };
  const linearImage3 = {
    backgroundImage: `
    linear-gradient(to right, #091f1b, rgba(0, 0, 0, 0.1000)),
    url(${banner3Img})
    `,
  };

  return (
    <section className="relative">
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          enabled: false,
        }}
        navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          speed={700}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* first  */}
        <SwiperSlide>
          <div
            style={linearImage}
            className="w-full  h-[700px] bg-cover bg-center bg-no-repeat flex"
          >
            <Container className="flex w-full items-center justify-between">
              <div className="">
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5" src={heartYellow} alt="" />
                  <p className="caveat font-medium text-yellowText text-xl">
                    Start donating poor people
                  </p>
                </div>
                <h1 className="text-textWhite font-bold text-4xl md:text-6xl lg:text-[80px] leading-none lg:leading-[70px] mt-2">
                  Helping Each <br className="hidden lg:block" /> Other Make{" "}
                  <span>World</span> <br className="hidden lg:block" /> Better
                  today
                </h1>
                {/* buttons */}
                {/* button */}
                <div className="md:flex hidden gap-4 mt-5 mx-">
                  <Link>
                    {" "}
                    <motion.button
                      animate={{ x: [0, 25, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                      }}
                      onClick={() => handleActiveButton("discord")}
                      className={`${
                        isActive.getBtn
                          ? "flex bg-[#182c29] text-textWhite rounded-full items-center gap-1 px-6 md:px-8 py-4  transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold"
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
                      animate={{ x: [0, 25, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                      }}
                      onClick={() => handleActiveButton("get")}
                      className={`${
                        isActive.getBtn
                          ? " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4 w-full md:w-auto transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-[#182c29] text-textWhite rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold "
                      }`}
                    >
                      Get A Quote
                      <IoArrowForwardOutline className=" -rotate-45" />
                    </motion.button>
                  </Link>
                </div>
                {/* mobail device responsive */}
                <div className="flex md:hidden gap-4 mt-5 mx-">
                  <Link>
                    {" "}
                    <motion.button
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                      }}
                      onClick={() => handleActiveButton("discord")}
                      className={`${
                        isActive.getBtn
                          ? "flex bg-[#2f454185] text-textWhite rounded-full items-center gap-1 px-6 md:px-8 py-4  transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold"
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
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                      }}
                      onClick={() => handleActiveButton("get")}
                      className={`${
                        isActive.getBtn
                          ? " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4 w-full md:w-auto transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-[#2f454185] text-textWhite rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold "
                      }`}
                    >
                      Get A Quote
                      <IoArrowForwardOutline className=" -rotate-45" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        {/* second  */}
        <SwiperSlide>
          <div
            style={linearImage2}
            className="w-full  h-[700px] bg-cover bg-center bg-no-repeat flex"
          >
            <Container className="flex w-full items-center justify-between">
              <div className="">
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5" src={heartYellow} alt="" />
                  <p className="caveat font-medium text-yellowText text-xl">
                    Start donating poor people
                  </p>
                </div>
                <h1 className="text-textWhite font-bold text-4xl md:text-6xl lg:text-[80px] leading-none lg:leading-[70px] mt-2">
                  Helping Each <br className="hidden lg:block" /> Other Make{" "}
                  <span>World</span> <br className="hidden lg:block" /> Better
                  today
                </h1>
                {/* buttons */}
                {/* button */}
                <div className="md:flex hidden gap-4 mt-5 mx-">
                  <Link>
                    {" "}
                    <motion.button
                      animate={{ x: [0, 25, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                      }}
                      onClick={() => handleActiveButton("discord")}
                      className={`${
                        isActive.getBtn
                          ? "flex bg-[#182c29] text-textWhite rounded-full items-center gap-1 px-6 md:px-8 py-4  transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold"
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
                      animate={{ x: [0, 25, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                      }}
                      onClick={() => handleActiveButton("get")}
                      className={`${
                        isActive.getBtn
                          ? " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4 w-full md:w-auto transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-[#182c29] text-textWhite rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold "
                      }`}
                    >
                      Get A Quote
                      <IoArrowForwardOutline className=" -rotate-45" />
                    </motion.button>
                  </Link>
                </div>
                {/* mobail device responsive */}
                <div className="flex md:hidden gap-4 mt-5 mx-">
                  <Link>
                    {" "}
                    <motion.button
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                      }}
                      onClick={() => handleActiveButton("discord")}
                      className={`${
                        isActive.getBtn
                          ? "flex bg-[#2f454185] rounded-full items-center gap-1 px-6 md:px-8 py-4  transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold"
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
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                      }}
                      onClick={() => handleActiveButton("get")}
                      className={`${
                        isActive.getBtn
                          ? " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4 w-full md:w-auto transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-[#2f454185] rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold "
                      }`}
                    >
                      Get A Quote
                      <IoArrowForwardOutline className=" -rotate-45" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        {/* third  */}
        <SwiperSlide>
          <div
            style={linearImage3}
            className="w-full  h-[700px] bg-cover bg-center bg-no-repeat flex"
          >
            <Container className="flex w-full items-center justify-between">
              <div className="">
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5" src={heartYellow} alt="" />
                  <p className="caveat font-medium text-yellowText text-xl">
                    Start donating poor people
                  </p>
                </div>
                <h1 className="text-textWhite font-bold text-4xl md:text-6xl lg:text-[80px] leading-none lg:leading-[70px] mt-2">
                  Helping Each <br className="hidden lg:block" /> Other Make{" "}
                  <span>World</span> <br className="hidden lg:block" /> Better
                  today
                </h1>
                {/* buttons */}
                {/* button */}
                <div className="md:flex hidden gap-4 mt-5 mx-">
                  <Link>
                    {" "}
                    <motion.button
                      animate={{ x: [0, 25, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                      }}
                      onClick={() => handleActiveButton("discord")}
                      className={`${
                        isActive.getBtn
                          ? "flex bg-[#182c29] text-textWhite rounded-full items-center gap-1 px-6 md:px-8 py-4  transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold"
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
                      animate={{ x: [0, 25, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                      }}
                      onClick={() => handleActiveButton("get")}
                      className={`${
                        isActive.getBtn
                          ? " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4 w-full md:w-auto transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-[#182c29] text-textWhite rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold "
                      }`}
                    >
                      Get A Quote
                      <IoArrowForwardOutline className=" -rotate-45" />
                    </motion.button>
                  </Link>
                </div>
                {/* mobail device responsive */}
                <div className="flex md:hidden gap-4 mt-5 mx-">
                  <Link>
                    {" "}
                    <motion.button
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                      }}
                      onClick={() => handleActiveButton("discord")}
                      className={`${
                        isActive.getBtn
                          ? "flex bg-[#2f454185] rounded-full items-center gap-1 px-6 md:px-8 py-4  transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold"
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
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                      }}
                      onClick={() => handleActiveButton("get")}
                      className={`${
                        isActive.getBtn
                          ? " flex bg-yellowBg text-[#122f2a] rounded-full items-center gap-1 md:px-8 px-6 py-4 w-full md:w-auto transition-all duration-300 ease-linear  font-semibold"
                          : " flex bg-[#2f454185] rounded-full items-center gap-1 md:px-8 px-6 py-4  transition-all duration-300 ease-linear  font-semibold "
                      }`}
                    >
                      Get A Quote
                      <IoArrowForwardOutline className=" -rotate-45" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* slider button */}
      <div className="flex gap-3 flex-col z-20 absolute right-5  bottom-5 lg:right-[70px] lg:top-[280px]">
        {/* right button */}
        <div>
          <button
            onClick={() => handleActiveSliderBtn("prev")}
            className={`custom-prev ${
              sliderActive.slidBtn
                ? " bg-[#2c6b59] text-textWhite text-2xl p-2.5 rounded-full"
                : " bg-yellowBg p-2.5 text-[#2c6b59] rounded-full text-2xl "
            } `}
          >
            <TiArrowLeft />
          </button>
        </div>
        {/* left button */}
        <div>
          <button
            onClick={() => handleActiveSliderBtn("slider")}
            className={` custom-next ${
              sliderActive.slidBtn
                ? "  p-2.5 bg-yellowBg rounded-full text-2xl text-[#2c6b59] "
                : " bg-[#2c6b59] text-textWhite  text-2xl p-2.5 rounded-full"
            } `}
          >
            <TiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
