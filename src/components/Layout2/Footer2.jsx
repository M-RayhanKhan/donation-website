import Container from "../Container";
import { RiSendPlaneFill } from "react-icons/ri";
import logoImg from "../../assets/home2/footerLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import LineImg from "../../assets/home2/Line 11.png";
import LineImg2 from "../../assets/home2/Line 12.png";
import { TbArrowUpRight } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import loveImg from '../../assets/home2/love.png'
import whiteLoveImg from '../../assets/home2/whiteLove.png'

const Footer2 = () => {
  return (
    <section className="bg-gradient-to-r from-[#023129] to-[#18302c] py-12 relative">
      {/* content main div */}
      <Container className="">
        {/* Subscribe to Our Newsletter section */}
        <div className="md:flex border-b border-gray-600 pb-[44px]  justify-between">
          {/*  */}
          <div>
            <h3 className="text-[40px] leading-none font-bold text-textWhite">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-description mt-2 text-[18px] font-[600]">
              Regular inspections and feedback mechanisms
            </p>
          </div>
          <div className="flex mt-5 md:mt-0 items-center gap-3">
            <input
              type="text"
              placeholder="Enter Your email"
              className="lg:w-[495px] md:w-auto w-[90%] bg-[#fffffff9] outline-none h-[56px] px-6 rounded-full border-2 border-gray-300 focus:border-yellow-400 box-border shadow-md focus:ring-1 focus:ring-yellow-400"
            />
            <button className="bg-yellowBg w-[96px] h-[56px] rounded-full text-2xl flex justify-center items-center">
              <RiSendPlaneFill />
            </button>
          </div>
        </div>
        {/* text content parent div */}
        <div className="lg:flex lg:gap-0 lg:flex-row mt-[40px] lg:justify-between grid md:grid-cols-3 gap-8 md:gap-16">
          {/* logo content */}
          <div className="">
            <div className="flex items-center gap-1">
              <img className="w-[43px] h-[40px]" src={logoImg} alt="" />
              <h4 className="text-3xl font-bold text-textWhite">Charitia</h4>
            </div>
            <p className="max-w-[291px] mb-[40px] mt-[30px] text-[#949d9c]">
              Our secure online donation platform allows you to make
              contributions quickly and safely. Choose from various.
            </p>
            {/* social media icons */}
            <div className="flex items-center gap-[14px]">
              {/* facebook icon */}
              <Link>
                <button className="text-textWhite hover:bg-[#f8c146] hover:border-[#f8c146]  hover:text-[#122f2a] border-2 border-[#20634190] box-border p-3 rounded-full duration-700">
                  <FaFacebookF />
                </button>
              </Link>
              {/* twitter icon */}
              <Link>
                <button className="text-textWhite hover:bg-[#f8c146] hover:border-[#f8c146]  hover:text-[#122f2a] border-2 border-[#20634190] box-border p-3 rounded-full duration-700">
                  <FaTwitter />
                </button>
              </Link>
              {/* Youtube icon */}
              <Link>
                <button className="text-textWhite hover:bg-[#f8c146] hover:border-[#f8c146]  hover:text-[#122f2a] border-2 border-[#20634190] box-border p-3 rounded-full duration-700">
                  <FaYoutube />
                </button>
              </Link>
              {/* Linkedin icon */}
              <Link>
                <button className="text-textWhite hover:bg-[#f8c146] hover:border-[#f8c146]  hover:text-[#122f2a] border-2 border-[#20634190] box-border p-3 rounded-full duration-700">
                  <FaLinkedinIn />
                </button>
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <div>
              <h4 className="text-[24px] font-bold text-textWhite">
                Quick Links
              </h4>
              <div className="flex mt-1 items-center gap-3">
                <img className="w-[40px]" src={LineImg} alt="" />
                <img className="w-[10px]" src={LineImg2} alt="" />
                <img className="w-[10px]" src={LineImg2} alt="" />
              </div>
            </div>
            <div className="mt-[30px] flex flex-col gap-[22px]">
            <Link>            
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>About Us</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>Our News</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>Our Campaign</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>Privacy Policy</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>Contact Us</p>
            </div>
            </Link>
            </div>
          </div>
          {/* Our Service */}
          <div>
            <div>
              <h4 className="text-[24px] font-bold text-textWhite">
              Our Service
              </h4>
              <div className="flex mt-1 items-center gap-3">
                <img className="w-[40px]" src={LineImg} alt="" />
                <img className="w-[10px]" src={LineImg2} alt="" />
                <img className="w-[10px]" src={LineImg2} alt="" />
              </div>
            </div>
            <div className="mt-[30px] flex flex-col gap-[22px]">
            <Link>            
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>Give Donation</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>Education Support</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>Food Support</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>Health Support</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <TbArrowUpRight className="group-hover:text-yellowText  duration-700 text-xl"/>
                <p>Our Campaign</p>
            </div>
            </Link>
            </div>
          </div>
          {/* Get In Touch */}
          <div>
            <div>
              <h4 className="text-[24px] font-bold text-textWhite">
              Get In Touch
              </h4>
              <div className="flex mt-1 items-center gap-3">
                <img className="w-[40px]" src={LineImg} alt="" />
                <img className="w-[10px]" src={LineImg2} alt="" />
                <img className="w-[10px]" src={LineImg2} alt="" />
              </div>
            </div>
            <div className="mt-[30px] flex flex-col gap-[22px]">
            <Link>            
            <div className="flex gap-2 items-center text-description group">
                <MdLocationPin className="text-yellowText  duration-700 text-xl"/>
                <p >455 West Orchard Street Kings <br /> Mountain, NC 280867</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <FaPhone className="text-yellowText  duration-700 text-xl"/>
                <p>+088 (246) 642-27-10</p>
            </div>
            </Link>
            <Link>
            <div className="flex gap-2 items-center text-description group">
                <MdEmail className="text-yellowText  duration-700 text-xl"/>
                <p>example@mail.com</p>
            </div>
            </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 border-t mt-10 pt-10 border-gray-600 items-center text-center lg:justify-between">
            <p className="text-textWhite">Copyright © 2024 Charitia . All Rights Reserved.</p>
            <div className="flex items-center gap-10">
                <p className="text-[#cfd4d3]">Privacy Policy</p>
                <p className="text-textWhite">Terms of Service</p>
                <p className="text-textWhite">Cookies Settings</p>
            </div>
        </div>
      </Container>
      <div>
        <img  className="w-[50px h-[59px] absolute top-32 -left-5" src={loveImg} alt="" />
        <img  className="w-[60px h-[69px] absolute lg:right-0 lg:bottom-28 bottom-64 right-20" src={whiteLoveImg} alt="" />
      </div>
    </section>
  );
};

export default Footer2;
