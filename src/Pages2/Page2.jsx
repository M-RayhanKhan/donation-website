import React from "react";
import GlobalSection from "../components/Home2/Home2Component/GlobalSection/GlobalSection";
import TitlePage from "../components/TitlePage/TitlePage";
import eventPageImg1 from "../assets/marquee/eventImage1.png";
import eventPageImg2 from "../assets/marquee/eventImage2.png";
import eventPageImg3 from "../assets/marquee/eventImage3.png";
import Container from "../components/Container";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const Page2 = () => {
  const backgroundImg = {
    backgroundImage: `linear-gradient(180deg, rgba(8, 11, 27, 0) 30%, #080C26 100%),
 url(${eventPageImg1})`,
  };
  const backgroundImg2 = {
    backgroundImage: `linear-gradient(180deg, rgba(8, 11, 27, 0) 30%, #080C26 100%),
 url(${eventPageImg2})`,
  };
  const backgroundImg3 = {
    backgroundImage: `linear-gradient(180deg, rgba(8, 11, 27, 0) 30%, #080C26 100%),
 url(${eventPageImg3})`,
  };

  return (
    <section>
      <Helmet>
        <title>Donate | Page</title>
      </Helmet>

      <GlobalSection title="Event Page" />
      <div className="my-10">
        <TitlePage />
      </div>
      {/* image section */}
      <Container className="grid mb-10 md:h-[400px] lg:h-[600px] gap-4 lg:gap-4 grid-cols-12 grid-rows-10">
        {/* 1 */}
        <Link
          to="/home2/eventPage"
          style={backgroundImg}
          className=" md:col-span-7 row-span-10 col-span-12 bg-cover bg-center bg-no-repeat h-96 md:h-auto lg:mr-10 flex justify-start pl-7 pb-7 items-end rounded-lg"
        >
          {/* text content */}
          <div>
            <p className="text-[#FFFFFF]  font-semibold">October 19, 2025</p>
            <h2 className="text-[30px] leading-9 text-[#FFFFFF] font-bold">
              Transforming Lives Charity Golf Tournam{" "}
              <br className="hidden md:block" />
              Entdges Charity Networking Event
            </h2>
            <p className="text-[#FFFFFF] font-semibold flex items-center gap-2">
              {" "}
              <FaLocationDot /> 135 W, 46nd Street, New York
            </p>
          </div>
        </Link>
        {/* 2 */}
        <Link
          to="/home2/eventPage"
          style={backgroundImg2}
          className="rounded-lg md:col-span-5 col-span-6 row-span-5 h-72 md:h-auto bg-cover bg-center bg-no-repeat flex items-end pl-7 pb-7"
        >
          {/* text content */}
          <div>
            <p className="text-[#FFFFFF] font-semibold">October 19, 2025</p>
            <h2 className="text-[30px] leading-9 text-[#FFFFFF] font-bold">
              Unity in Giving Community <br className="hidden md:block" />
              Charity Event
            </h2>
            <p className="text-[#FFFFFF] font-semibold flex items-center gap-2">
              {" "}
              <FaLocationDot /> 135 W, 46nd Street, New York
            </p>
          </div>
        </Link>
        {/* 3 */}
        <Link
          to="/home2/eventPage"
          style={backgroundImg3}
          className=" md:col-span-5 rounded-lg col-span-6 row-span-5 h-72 md:h-auto bg-cover bg-center bg-no-repeat flex items-end pl-7 pb-7"
        >
          {/* text content */}
          <div>
            <p className="text-[#FFFFFF] font-semibold">October 19, 2025</p>
            <h2 className="text-[30px] leading-9 text-[#FFFFFF] font-bold">
              Unity in Giving Community <br className="hidden md:block" />
              Charity Event
            </h2>
            <p className="text-[#FFFFFF] font-semibold flex items-center gap-2">
              {" "}
              <FaLocationDot /> 135 W, 46nd Street, New York
            </p>
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default Page2;
