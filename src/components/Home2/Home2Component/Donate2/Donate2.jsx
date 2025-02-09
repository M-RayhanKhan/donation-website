import Container from "../../../Container";
import heartGreen from "../../../../assets/heartGreen.png";
import { useContext, useState } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { DonateContaxt } from "../../../DonateContainer/DonateContainer";
import DonateCard from "../../../DonateContainer/DonateCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Donate2 = () => {
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

  return (
    <section className="bg-[#ebebe8] py-16">
      <Container>
        {/* text content and active button here */}
        <div className="flex items-end mb-8 justify-between">
          {/* text content */}
          <div>
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src={heartGreen} alt="" />
              <p className="caveat font-medium text-[#122f2a] text-xl">
                Start donating poor people
              </p>
            </div>
            <h1 className="text-title mt-3  md:leading-[45px] font-bold text-4xl md:text-[48px]">
              Helping each other can <br className="hidden md:block" /> make
              <span className="text-yellowText font-bold">world</span> better
            </h1>
          </div>
          {/* active button */}
          <div className="flex items-center gap-4">
            {/*  */}
            {/* right button */}
            <div>
              <button
                onClick={() => handleActiveButton("slider")}
                className={`custom-prev ${
                  isActive.getBtn
                    ? " bg-[#122f2a] text-textWhite text-2xl p-2.5 rounded-full"
                    : " bg-[#f8c146] p-2.5 text-[#122f2a] rounded-full text-2xl "
                } `}
              >
                <TiArrowLeft />
              </button>
            </div>
            {/* left button */}
            <div>
              <button
                onClick={() => handleActiveButton("get")}
                className={` custom-next ${
                  isActive.getBtn
                    ? "  p-2.5 bg-[#f8c146] rounded-full text-2xl text-[#122f2a] "
                    : " bg-[#122f2a] text-textWhite  text-2xl p-2.5 rounded-full"
                } `}
              >
                <TiArrowRight />
              </button>
            </div>
          </div>
        </div>
        {/* show donate data */}
        <div className="">
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
            {donate.map((items) => (
              <SwiperSlide key={items.id} className="px-2 md:px-0">
                <DonateCard items={items}></DonateCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Donate2;
