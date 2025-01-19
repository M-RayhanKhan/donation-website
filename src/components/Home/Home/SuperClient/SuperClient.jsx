import { useContext } from "react";
import TitlePage from "../../../TitlePage/TitlePage";
import { ClientContext } from "./ClientData";
import ClientCard from "./ClientCard";
import loveImg from '../../../../assets/love.png'
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const SuperClient = () => {
  const { clientData } = useContext(ClientContext);
// modules={[Autoplay, Navigation]}
  return (
    <section className="my-20 relative bg-[#fbf8f4] py-20 lg:py-28 ">
      <TitlePage />

      <div className="mt-4 max-w-7xl mx-auto px-5 lg:px-0">
        <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    el: ".swiper-pagination",
                  clickable: true,
                }}
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false,
                }}
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
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
        >
          {clientData.map((client) => (
            <SwiperSlide key={client.id}>
              <ClientCard client={client}></ClientCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute right-3 top-0 top-16">
        <img className="w-20" src={loveImg} alt="" />
      </div>
    </section>
  );
};

export default SuperClient;
