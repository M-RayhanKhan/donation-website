import { Link } from "react-router-dom";
import bannerImg from "../../../../assets/banner.png";
import heartImg from "../../../../assets/heart (1) 1.png";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import {motion} from "motion/react"
import kataChiraImg from '../../../../assets/katacira.png'
import Aos from "aos";
import 'animate.css';

const Banner = () => {

  useEffect(() => {
    Aos.init({duration: 2500})
  }, [])

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
    height: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    backgroundImage: `
            linear-gradient(to right, #091f1b, rgba(0, 0, 0, 0.1000)), 
            url(${bannerImg})
        `,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section style={bannerStyle} className="relative z-30">
      {/* banner text contant */}
      <div className="flex animate__animated animate__rotateInDownLeft items-center gap-2">
        <img className="w-5 h-5" src={heartImg} alt="" />
        <p className="caveat font-medium text-yellowText text-xl">
          Start donating poor people
        </p>
      </div>
      <h1 className="text-textWhite md:leading-[65px] font-bold text-4xl md:text-[70px] animate__animated animate__backInLeft ">
        Helping Each Other Make <br className=" hidden md:block" />
        <span className="text-yellowText font-normal">Better</span> today
      </h1>
      <p className="text-[#FFFF] mt-4">
        Join our monthly giving program to provide consistent support to our
        initiatives. Regular contributions, no{" "}
        <br className=" hidden md:block" /> matter the size, help us plan and
        sustain long-term projects.
      </p>
      {/* button */}
      <div className="md:flex hidden gap-4 mt-5 mx-">
        <Link>
          {" "}
          <motion.button
           animate={{x: [0, 30, 0]}}
           transition={{ease:"linear", duration: 2, repeat: Infinity}}

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
            animate={{x: [0, 30, 0]}}
            transition={{ease:"linear", duration: 2, repeat: Infinity, delay: 1}}
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
      {/* mobail device responsive */}
      <div className="flex md:hidden gap-4 mt-5 mx-">
        <Link>
          {" "}
          <motion.button
           animate={{x: [0, 10, 0]}}
           transition={{ease:"linear", duration: 2, repeat: Infinity}}

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
            animate={{x: [0, 10, 0]}}
            transition={{ease:"linear", duration: 2, repeat: Infinity, delay: 1}}
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
      <div data-aos="fade-right" className="md:w-[450px] h-[450px] backdrop-blur-sm absolute w-full  -z-10 bg-[#17302b96] rounded-full"></div>
      <div className="absolute bottom-0 z-5">
        <img src={kataChiraImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;
