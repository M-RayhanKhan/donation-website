import React, { useState } from "react";
import Container from "../../../Container";
import { useEffect } from "react";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import OldImage from "./OldImage";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

const OldPeople = () => {
  const [donate, setDonate] = useState([]);
  useEffect(() => {
    fetch("/donate.json")
      .then((res) => res.json())
      .then((data) => setDonate(data));
  }, []);

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

  return (
    <Container className="h-[490px] relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        pagination={{
            el: ".swiper-pagination",
            clickable: true,
            enabled: false,
          }}
        speed={500}
        breakpoints={{
            640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768:{
                slidesPerView: 3,
                spaceBetween: 15
              },
              1024:{
                slidesPerView: 3,
                spaceBetween: 40,
              }
        }}
        loop={true}
        navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {donate.map((items) => (
          <SwiperSlide className="h-full" key={items.id}>
            <OldImage items={items}></OldImage>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10 text-center">
        <h1 className="text-title font-bold text-xl">old people & Child trouble</h1>
        <p className="text-description">Child & old care</p>
      </div>
       {/* active button */}
                        <div className="">
                          {/*  */}
                          {/* right button */}
                          <div>
                            <button
                              onClick={() => handleActiveButton("dfsl")}
                              className={`prev-button absolute top-0 right-20 lg:right-auto lg:top-36 lg:-left-12 z-40 ${
                                isActive.getBtn
                                  ? " bg-[#122f2a] text-textWhite text-2xl p-2.5 rounded-full"
                                  : " bg-[#f8c146] p-2.5 text-[#122f2a] rounded-full text-2xl "
                              }  `}
                            >
                              <TiArrowLeft />
                            </button>
                          </div>
                          {/* left button */}
                          <div>
                            <button
                              onClick={() => handleActiveButton("get")}
                              className={`absolute z-40 top-0 right-2 lg:top-36 lg:-right-12 next-button ${
                                isActive.getBtn
                                  ? "  p-2.5 bg-[#f8c146] rounded-full text-2xl text-[#122f2a] "
                                  : " bg-[#122f2a] text-textWhite  text-2xl p-2.5 rounded-full"
                              } `}
                            >
                              <TiArrowRight />
                            </button>
                          </div>
                        </div>
    </Container>
  );
};

export default OldPeople;
