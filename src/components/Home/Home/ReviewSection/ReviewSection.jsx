import { useEffect, useState } from "react";
import heartGreen from "../../../../assets/heartGreen.png";
import ClientFeedback from "./ClientFeedback";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation , Autoplay} from 'swiper/modules';

const ReviewSection = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("/aboutUs.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const [active, setActive] = useState({
    button: true,
    status: "first",
  });

  const handelActiveButtons = (status) => {
    if (status === "first") {
      setActive({
        button: true,
        status: "first",
      });
    } else {
      setActive({
        button: false,
        status: "tow",
      });
    }
  };

  return (
    <section className="relative pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-2 lg:px-0">
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" src={heartGreen} alt="" />
          <p className="caveat font-medium text-[#2c6b59] text-xl">
            Start donating poor people
          </p>
        </div>
        <h1 className="text-title mt-2 mb-6 md:leading-[40px] font-bold text-3xl md:text-[40px]">
          What People Say <br className="hidden md:block" />
          About us
        </h1>
      </div>
      <div className="max-w-[1279px]  mt-5 mx-auto ">
        <Swiper
         slidesPerView={1} 
        //  spaceBetween={30} 
         loop={true} 
         navigation={{
           nextEl: ".custom-next",
           prevEl: ".custom-prev",
         }}
         speed={1200}
     
         modules={[Pagination, Navigation]}
         className="mySwiper"
        >
          {review.map((client) => (
            <SwiperSlide key={client.id}>
              <ClientFeedback client={client}></ClientFeedback>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* slider button */}
      <div className="flex items-center gap-4 absolute md:top-[77%] md:bottom-auto bottom-72 right-5 md:right-[54%] z-10">
        {/* right button */}
        <button
          onClick={() => handelActiveButtons("tfsdfow")}
          className={`custom-prev ${
            active.button
              ? "text-[#2c6b59]  border border-[#2c6b59] box-border text-2xl p-2.5 rounded-full"
              : "bg-[#2c6b59] p-2.5  rounded-full text-2xl text-white"
          } `}
       
        >
          <TiArrowRight />
        </button>
        {/* left button */}
        <button
          onClick={() => handelActiveButtons("first")}
          className={`custom-next ${
            active.button
              ? "bg-[#2c6b59]  p-2.5 rounded-full text-2xl text-white"
              : "text-[#2c6b59]  border border-[#2c6b59] box-border text-2xl p-2.5 rounded-full"
          } `}
    
        >
          <TiArrowLeft />
        </button>
      </div>
      <div className="bg-[#f8c146] -z-10  h-full w-[150px] absolute right-0 top-0"></div>
    </section>
  );
};

export default ReviewSection;
