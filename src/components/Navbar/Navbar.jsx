import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import phoneImg from "../../assets/phone.png";
import { GoSearch } from "react-icons/go";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";
import flag1 from "../../assets/flag1.png";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoVenmo } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Scroll listener to handle sticky effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 "
            : " text-blackText hover:text-yellow-400"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/pages"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 "
            : " text-blackText hover:text-yellow-400"
        }
      >
        Pages
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 "
            : " text-blackText hover:text-yellow-400"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 "
            : " text-blackText hover:text-yellow-400"
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/news"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 "
            : " text-blackText hover:text-yellow-400"
        }
      >
        News
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-400 "
            : " text-blackText hover:text-yellow-400"
        }
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <section className="">
      <div className="bg-[#122f2a]  py-2">
        <div className="max-w-6xl px-2 mx-auto flex  items-center justify-between">
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
          {/* select options */}
          <div className="flex flex-col space-y-2 md:flex-row md:gap-8 items-center">
         <div className="flex gap-4">
         <div className="flex  items-center">
              <img className="w-[30px] h-4" src={flag1} alt="" />
              <select className="bg-[#122f2a] text-[14px] text-white  outline-none">
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
              <FaFacebookF className="text-[#bdc5c3] text-[15px] hover:text-yellowText"/>
              </Link>
              <Link>
              <BiLogoVenmo className="text-[#bdc5c3] hover:text-yellowText"/>
              </Link>
              <Link>
              <FaTwitter className="text-[#bdc5c3] hover:text-yellowText"/>
              </Link>
              <Link>
              <FaLinkedinIn className="text-[#bdc5c3] hover:text-yellowText"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* main div */}
      <section id="home"
        className={`${
          isSticky ? "fixed top-0  " : "relative"
        } mx-auto w-full  z-50 transfrom duration-700`}
      >
        <div
          className=" 
        max-w-7xl flex items-center md:grid md:grid-cols-12 mx-auto"
        >
          {/*  */}
          {/* navbar */}
          <div className="bg-[#ffffff] gap-10  lg:col-span-10 md:col-span-8  w-full pl-2 md:pl-4 py-4 flex items-center">
            {/* logo */}
            <div className="flex items-center ">
              <div className="mr-4 md:block lg:hidden  ">
                <div onClick={() => setState(!state)}>
                  {state ? (
                    <button className="text-2xl">
                      <CgClose />
                    </button>
                  ) : (
                    <button className="text-2xl">
                      <RiMenu2Fill />
                    </button>
                  )}
                  <div
                    className={`absolute py-5 shadow-xl duration-500 bg-[#081e1a] px-8 text-center flex inter text-xl flex-col space-y-8  mt-5 ${
                      state ? "left-0 " : "-left-40"
                    }`}
                  >
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400 "
                          : " text-textWhite hover:text-yellow-400"
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/pages"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400  "
                          : " text-textWhite hover:text-yellow-400"
                      }
                    >
                      Pages
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400 "
                          : " text-textWhite hover:text-yellow-400"
                      }
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to="/protfolio"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400 "
                          : " text-textWhite hover:text-yellow-400"
                      }
                    >
                      Portfolio
                    </NavLink>
                    <NavLink
                      to="/news"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400 "
                          : " text-textWhite hover:text-yellow-400"
                      }
                    >
                      News
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400 "
                          : " text-textWhite hover:text-yellow-400"
                      }
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
              <img className="w-7 h-7 mr-2" src={logoImg} alt="" />
              <h4 className="text-2xl font-bold text-title">Charitia</h4>
            </div>
            {/* lg flex items */}
            <div className="lg:block hidden">
              <div className="flex text-[14px] inter font-medium items-center gap-10">
                {links}
              </div>
            </div>
            {/* phone icon */}
            <div className="md:flex hidden items-center gap-8 ">
              <div className="flex items-center gap-1">
                <img className="w-7 h-7 mr-2" src={phoneImg} alt="" />
                <div>
                  <h6 className="uppercase inter text-description font-medium text-sm">
                    phone:
                  </h6>
                  <p className="text-yellowText font-semibold">
                    +88 1826 0594 66
                  </p>
                </div>
              </div>
              <button className="text-blackText text-3xl">
                <GoSearch />
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-4 w-full  md:block">
            <button className="bg-yellowBg flex justify-center items-center gap-4 py-[19px] md:py-[25px] md:px-[29px] w-full pl-8  text-[17px] font-bold">
              Get an quate{" "}
              <span className="text-2xl">
                <MdOutlineArrowCircleRight />
              </span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Navbar;
