import { AiOutlineMail } from "react-icons/ai";
import { BiLogoVenmo } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import flag1 from "../../assets/flag1.png";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import Container from "../Container";
import { GoSearch } from "react-icons/go";
import flugLogo from "../../assets/home2/flug.png";
import bgImg from "../../assets/home2/bg (1).png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import kataChiraImg from "../../assets/home2/whiteBgKatacira.png";

const Navbar2 = () => {
  const [state, setState] = useState(false);
  const links = (
    <>
      <div className="group  relative">
        <NavLink
          to="/home2/home"
          className={({ isActive }) =>
            isActive
              ? "text-[#122f2a] font-bold"
              : "text-[#800080] hover:text-[#122f2a] font-bold"
          }
        >
          <p>Home2</p>
        </NavLink>
        <div className="absolute -left-5 z-[200] pt-4 top-6 hidden group-hover:block h-[60px] w-[180px]">
          <Link to="/">
            <p className="text-xl bg-green-600 px-4 py-2 shadow-xl">Home1</p>
          </Link>
        </div>
      </div>

      <NavLink
        to="/home2/aboutUs2"
        className={({ isActive }) =>
          isActive
            ? "text-[#122f2a] font-bold"
            : "text-[#800080] hover:text-[#122f2a] font-bold"
        }
      >
        About Us
      </NavLink>

      <NavLink
        to="/home2/donations"
        className={({ isActive }) =>
          isActive
            ? "text-[#122f2a] font-bold"
            : "text-[#800080] hover:text-[#122f2a] font-bold"
        }
      >
        Donations
      </NavLink>

      <div className="group  relative">
        <NavLink
          to="/home2/page2"
          className={({ isActive }) =>
            isActive
              ? "text-[#122f2a] font-bold"
              : "text-[#800080] hover:text-[#122f2a] font-bold"
          }
        >
          <p>Pages</p>
        </NavLink>
        <div className="absolute  -left-5 z-[200] pt-4 top-6 hidden group-hover:block  w-[180px]">
          <div className="">
          <Link to="">
            <p className="text-xl bg-green-600 hover:bg-[#122f2a] hover:text-textWhite px-4 py-2 shadow-xl">
              EventPage
            </p>
          </Link>
          <Link to="">
            <p className="text-xl mt-2 bg-green-600 hover:bg-[#122f2a] hover:text-textWhite px-4 py-2 shadow-xl">
              EventPage
            </p>
          </Link>
          </div>
        </div>
      </div>

      <NavLink
        to="/home2/blog2"
        className={({ isActive }) =>
          isActive
            ? "text-[#122f2a] font-bold"
            : "text-[#800080] hover:text-[#122f2a] font-bold"
        }
      >
        Blogs
      </NavLink>

      <NavLink
        to="/home2/contact2"
        className={({ isActive }) =>
          isActive
            ? "text-[#122f2a] font-bold"
            : "text-[#800080] hover:text-[#122f2a] font-bold"
        }
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <section className="fixed w-full  z-[999] bg-white">
      {/* topbar */}
      <div className="max-w-[1316px] rounded-b-xl bg-[#122f2a]  py-1 px-4 mx-auto flex  items-center justify-between">
        <div className="flex flex-col md:flex-row  items-center md:gap-8">
          <div className="flex items-center gap-2">
            <AiOutlineMail className="text-yellowText font-bold text-xl" />
            <p className="text-textWhite text-[14px]">support@example.com</p>
          </div>

          <div className="flex items-center gap-2">
            <MdLocalPhone className="text-yellowText font-bold text-xl" />
            <p className="text-textWhite text-[14px]">support@example.com</p>
          </div>
        </div>
        <div>
          <p className="text-textWhite hidden lg:block">
            Are you ready to help them? Let’s become a volunteers...
          </p>
        </div>
        {/* select options */}
        <div className="flex flex-col space-y-2 md:flex-row md:gap-8 items-center">
          <div className="flex gap-4">
            <div className="flex  items-center">
              <img className="w-[30px] h-4" src={flag1} alt="" />
              <select className="bg-[#122f2a] text-[14px] text-[#ffffff]  outline-none">
                <option>English</option>
                <option>Bangla</option>
                <option>Arabic</option>
                <option>Hindi</option>
              </select>
            </div>
            <div className="">
              <select className="bg-[#122f2a] text-[14px] text-white  outline-none">
                <option>USD</option>
                <option>BD</option>
                <option>SA</option>
                <option>IN</option>
              </select>
            </div>
          </div>
          {/* icons */}
          <div className="flex items-center gap-5">
            <Link>
              <FaFacebookF className="text-[#bdc5c3] text-[15px] hover:text-yellowText" />
            </Link>
            <Link>
              <BiLogoVenmo className="text-[#bdc5c3] hover:text-yellowText" />
            </Link>
            <Link>
              <FaTwitter className="text-[#bdc5c3] hover:text-yellowText" />
            </Link>
            <Link>
              <FaLinkedinIn className="text-[#bdc5c3] hover:text-yellowText" />
            </Link>
          </div>
        </div>
      </div>
      {/* navbar */}
      <Container className="lg:flex hidden  items-center justify-between pt-3 pb-2">
        {/* Charitia logo */}
        <div className="flex items-center">
          <img className="w-7 h-7 mr-2" src={logoImg} alt="" />
          <h4 className="text-2xl font-bold text-title">Charitia</h4>
        </div>
        {/* links */}
        <div className="flex px-5 w-[70%] relative items-center justify-between bg-cover bg-center ">
          <div className="flex rounded-full items-center gap-6">{links}</div>
          <div className="flex ml-28 gap-2 items-center">
            <img className="w-[48px] h-[40px]" src={flugLogo} alt="" />
            <div>
              <p className="text-[14px] text-title">Call us any time:</p>
              <p className="font-bold text-[18px] text-[#122f2a]">
                +163-3654-7896
              </p>
            </div>
          </div>
          <img
            className="w-full  h-[60px] right-0 -z-10 absolute -top-1.5"
            src={bgImg}
            alt=""
          />
        </div>
        {/* button */}
        <div className="flex gap-3 items-center">
          <GoSearch className="text-2xl" />
          <button className="flex items-center justify-center bg-[#FFC107] w-[187px] h-[56px] text-[14px] font-bold rounded-[30px]">
            Donate Now
          </button>
        </div>
      </Container>
      {/* mobile device resposive */}
      <div>
        <div className="flex relative items-center lg:hidden gap-5">
          <div>
            <div onClick={() => setState(!state)}>
              {state ? (
                <IoCloseSharp className="text-2xl text-red-600 border border-red-600 absolute mt-3  z-[999] md:left-[45%] right-[9rem]   duration-700" />
              ) : (
                <IoMenu className="text-3xl absolute top-3.5" />
              )}
            </div>
            <div
              className={`flex z-[899] h-screen md:w-[50%] w-[70%] pl-3 pr-5 justify-between bg-gray-400 pt-3 absolute  duration-500 ${
                state ? "left-0" : "left-[-100%]"
              }`}
            >
              <div className="flex text-xl flex-col gap-10">{links}</div>
            </div>
          </div>
          <div className="flex mt-3 ml-3 items-center">
            <img className="w-5 h-5 mr-2" src={logoImg} alt="" />
            <h4 className="text-2xl font-bold text-title">Charitia</h4>
          </div>
        </div>
      </div>
      {/* kata chira img navbar */}
      <div className="w-full absolute h-[19px] z-40">
        <img className="w-full h-full" src={kataChiraImg} alt="" />
      </div>
    </section>
  );
};

export default Navbar2;
