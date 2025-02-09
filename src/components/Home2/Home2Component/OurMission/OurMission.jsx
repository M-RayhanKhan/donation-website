import Container from "../../../Container";
import heartGreen from "../../../../assets/heartGreen.png";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import takadey from "../../../../assets/marquee/takaditeci.png";
import dolarImg from "../../../../assets/marquee/dolar.png";
import groupImg from "../../../../assets/marquee/group.png";
import troubleImg from "../../../../assets/african-kid-marketplace.png";

import groupBtn from "../../../../assets/home2/groupButton.json";
import Lottie from "lottie-react";

const OurMission = () => {
  return (
    <Container className="flex flex-col my-12 lg:flex-row">
      <div className="lg:w-[45%] mb-5 lg:mb-0 relative">
        <img className="md:w-[450px]" src={groupImg} alt="" />
        <div className="absolute top-0 left-0 md:left-auto md:top-auto md:bottom-0 md:right-0">
          <img
            className="md:w-[290px] md:h-[288px] w-[200px] object-contain"
            src={troubleImg}
            alt=""
          />
        </div>
        <div className="w-[150px] h-[150px] absolute bottom-[35%] right-[40%]">
          <Link>
            <Lottie loop={true} animationData={groupBtn}></Lottie>
          </Link>
        </div>
      </div>
      {/* text content */}
      <div className="lg:w-[50%] mx-auto ">
        <div>
          <div className="flex  items-center gap-2">
            <img className="w-5 h-5" src={heartGreen} alt="" />
            <p className="caveat font-medium text-subDescription text-xl">
              Start donating poor people
            </p>
          </div>
          <h1 className="text-title  mt-3  md:leading-[50px] font-bold text-4xl md:text-[48px]">
            Helping each other can <br className="hidden md:block" />
            make <span className="text-yellowText">world </span>
            better
          </h1>
          <p className="text-description my-4">
            Charity is the voluntary act of giving help, typically in the form
            of money, time, or resources, to those in need. Charitable
            organizations aim to solve social, environmental, and economic
            challenges by addressing issues like poverty,
          </p>
        </div>
        {/* contianer */}
        <div className="grid gap-6 md:grid-cols-10 mt-7">
          <div className="md:col-span-6">
            {/* button */}
            <div className="mb-4 text-[15px]  grid grid-cols-3 ">
              <Link>
                <button className="hover:bg-subGreen hover:rounded-full hover:text-white font-bold w-full py-2.5 duration-500 border-b-2">
                  Our Mission
                </button>
              </Link>
              <Link>
                <button className="hover:bg-subGreen hover:rounded-full hover:text-white font-bold w-full py-2.5 duration-500 border-b-2">
                  Our Vission
                </button>
              </Link>
              <Link>
                <button className="hover:bg-subGreen hover:rounded-full hover:text-white font-bold w-full py-2.5 duration-500 border-b-2">
                  Our Excellence
                </button>
              </Link>
            </div>
            {/* text */}
            <div>
              <div className="flex mt-10 gap-2 items-center">
                <IoMdCheckmark className="text-yellowText text-xl" />
                <p className="text-description text-[14px]">
                  We help companies develop powerful corporate social 
                </p>
              </div>
              <div className="flex mt-3 gap-2 items-center">
                <IoMdCheckmark className="text-yellowText text-xl" />
                <p className="text-description text-[14px]">
                  Helped fund 3,265 Project powerful corporate poor.
                </p>
              </div>
              <div className="flex mt-3 gap-2 items-center">
                <IoMdCheckmark className="text-yellowText text-xl" />
                <p className="text-description text-[14px]">
                  Dedicated Tech Services
                </p>
              </div>
            </div>
            {/* radial progress */}
            <div className="md:flex mt-10 justify-between items-center ">
              <div className="flex gap-4 items-center">
                <div
                  className="rotate-[160deg] radial-progress text-[#2c6b59]"
                  style={{ "--value": 85, "--thickness": "7px" }}
                  role="progressbar"
                >
                  <span className="text-blackText rotate-[-160deg] font-bold">
                    63%
                  </span>
                </div>
                <h4 className="text-blackText font-bold ">
                  Treatment <br />
                  Helping
                </h4>
              </div>
              <div className="flex mt-4 md:mt-0 gap-4 items-center">
                <div
                  className="rotate-[160deg] radial-progress text-[#2c6b59]"
                  style={{ "--value": 85, "--thickness": "7px" }}
                  role="progressbar"
                >
                  <span className="text-blackText rotate-[-160deg] font-bold">
                    93%
                  </span>
                </div>
                <h4 className="text-blackText font-bold ">
                  Highest <br />
                  Fund Raised
                </h4>
              </div>
            </div>
          </div>
          {/* card section */}
          <div className="bg-[#f7f7f8] border border-[#e0e3e3] md:col-span-4 grid gap-10 py-5 px-2">
            <div className="flex space-y-2 flex-col justify-center items-center">
              <img className="w-[48px] h-[50px]" src={takadey} alt="" />
              <h4 className="text-title font-bold text-[18px]">Donate Now</h4>
              <p className="text-yellowText font-bold caveat text-[20px]">
                $40,456
              </p>
            </div>
            <div className="border-t"></div>
            {/*  */}
            <div className="flex   space-y-2 flex-col justify-center items-center">
              <img className="w-[45px] h-[45px]" src={dolarImg} alt="" />
              <h4 className="text-blackText font-bold text-[18px]">
                Total Fundraised
              </h4>
              <p className="text-yellowText font-bold caveat text-[20px]">
                1,540,456
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurMission;
