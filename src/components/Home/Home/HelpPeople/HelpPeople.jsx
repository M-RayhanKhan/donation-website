import React, { useState } from 'react';
import helpChildren from "../../../../assets/helpChildren.png";
import heartHellow from "../../../../assets/heart (1) 1.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import curvetShap from "../../../../assets/curved_shape.png";
import helpPeopleImg from '../../../../assets/marquee/helpSSideImg.png'

const HelpPeople = () => {
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
            linear-gradient(-134.25deg, rgba(12, 26, 23, 0) 1.9%, rgba(9, 31, 27, 0.0754386) 37.31%, rgba(9, 31, 27, 0.172779) 40.18%, rgba(9, 31, 27, 0.372684) 47.05%, rgba(9, 31, 27, 0.671715) 56.36%, #091F1B 73.4%, #091F1B 95.2%, rgba(9, 31, 27, 0.905484) 103.44%), 
                 url(${helpChildren})
             `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
    return (
        <section className='relative'>
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
              Children Need Your Help <br className="hidden md:block" /> By
              Donating Today
            </h1>
            {/* button contaienr */}
            <div className="flex text-sm  gap-4 mt-5  mx-">
              <Link>
                {" "}
                <motion.button
                  animate={{ x: [0, 30, 0] }}
                  transition={{ ease: "linear", duration: 2, repeat: Infinity }}
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
                  animate={{ x: [0, 30, 0] }}
                  transition={{
                    ease: "linear",
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
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
      {/* yellow side image */}
      <div className='absolute top-0  left-0'>
        <img className='h-[450px]' src={helpPeopleImg} alt="" />
      </div>
        </section>
    );
};

export default HelpPeople;