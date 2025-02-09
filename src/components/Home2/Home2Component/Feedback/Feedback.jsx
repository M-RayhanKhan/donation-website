import React, { useEffect, useState } from "react";
import heartGreen from "../../../../assets/heart (1) 1.png";
import Container from "../../../Container";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

const Feedback = () => {
  const [feedback, setReview] = useState([]);
  useEffect(() => {
    fetch("/aboutUs.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  //
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
    <section className="bg-[#fdfbf8] py-10">
      <div>
        <div className="flex justify-center items-center gap-2">
          <img className="w-5 h-5" src={heartGreen} alt="" />
          <p className="caveat font-medium text-subDescription text-xl">
            Start donating poor people
          </p>
        </div>
        <h1 className="text-title text-center mt-3  md:leading-[50px] font-bold text-4xl md:text-[48px]">
          Our valueable
          <span className="text-yellowText"> customer</span>
          <br className="hidden md:block" />
          Awesome Feedback
        </h1>
      </div>
      {/* feedback card data show */}
      <Container className="relative mt-5">
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
              slidesPerView: 3,
              spaceBetween: 16,
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
          {feedback.map((review) => (
            <SwiperSlide key={review.id}>
              <FeedbackCard review={review}></FeedbackCard>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* active button */}
                  <div className="">
                    {/*  */}
                    {/* right button */}
                    <div>
                      <button
                        onClick={() => handleActiveButton("dfsl")}
                        className={`custom-prev absolute top-0 right-20 lg:right-auto lg:top-36 lg:-left-12 z-40 ${
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
                        className={`absolute z-40 top-0 right-2 lg:top-36 lg:-right-12 custom-next ${
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
    </section>
  );
};

export default Feedback;
