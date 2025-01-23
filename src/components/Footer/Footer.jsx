import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import logoImg from '../../assets/logo.png'

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className=" bg-gradient-to-r from-[#081e1a] to-[#0b1312]">
      <footer className="max-w-[1281px] mx-auto  py-20 px-2 lg:px-0 flex lg:gap-20 flex-col lg:flex-row">
        {/* left side content */}
        <div className="lg:w-[48%]">
          <h1 className="text-textWhite font-bold text-[40px] leading-none">
            children need your help <br className="hidden md:block" />
            by <span className="text-yellowText">Donating</span> today
          </h1>
          {/* input box */}
          <div className="bg-[#3a454345] rounded-lg pl-3 mt-5 md:mt-16 md:pl-8 pt-10 md:pr-8 pb-12">
            <h2 className="text-textWhite text-[28px] font-bold">
              Subscribe Newsletter
            </h2>
            <p className="text-[#93989c] mt-3">
              We understand that every challenge is an opportunity{" "}
            </p>
            {/* input email */}
            <div className="flex flex-wrap mt-6 items-center gap-4">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
                className="bg-[#3a454345] font-bold rounded-md text-[#939d9c] py-3 px-6 outline-none border border-[#2e413e] focus:border-[#3a4543bc]  focus:ring-1 focus:ring-[#3a4543bc] md:w-[328.51px]  md:h-[56px]"
              />
              {/* sign up button */}
              <Link>
                {" "}
                <button className="text-blackText font-bold bg-yellow-500 md:w-[151px] w-full px-6 h-[56px] rounded-lg flex justify-center items-center">
                  Sign Up <MdKeyboardArrowRight className="text-xl" />{" "}
                </button>
              </Link>
            </div>
            {/* description */}
            <div className="flex gap-3 mt-5  items-center">
              <button className="text-yellowText border-2 border-[#4e545f] p-1.5 rounded-full">
                <IoCheckmarkSharp />
              </button>
              <p className="text-lowGray  font-bold">
                By subscribing, you’re accept{" "}
                <Link>
                  <span className="text-textWhite link ">Privacy Policy</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* right side content lg:device responsive*/}
        <div className="lg:w-[52%] relative hidden  lg:block">
          {/*  */}
          <div className="relative">
            <button className="md:w-[500px]  w-full  h-[84px] absolute top-0 right-0  bg-[#151d1b] rounded-full text-[20px] pl-12 font-bold text-textWhite">
              <motion.p
                animate={
                  inView
                    ? {
                        opacity: 1,
                        transition: {
                          duration: 3,
                          delay: 2,
                          ease: "easeInOut",
                        },
                      }
                    : { opacity: 0, rotate: 45 }
                }
              >
                for Any Enquiry
                <span className="text-yellowText link">
                  <Link>@WOWtheme.co</Link>
                </span>
              </motion.p>
            </button>
            {/* motion */}
            <motion.div
              animate={
                inView
                  ? {
                      x: 0,
                      transition: { delay: 0.5, duration: 2, ease: "linear" },
                    }
                  : { x: 419, transition: { duration: 1, ease: "linear" } }
              }
              className="bg-[#313836] 
        w-[68px] h-[68px] absolute left-[133px] top-[8px] rounded-full"
              ref={ref}
            ></motion.div>
          </div>
          <div className="flex mt-[133px] items-center justify-between">
            {/* Services itmes content */}
            <div className="">
              <h3 className="text-xl font-bold text-textWhite">Services</h3>
              <Link>
                <p className="text-lowGray my-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Request A Quate</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray  flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Our Services</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray my-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Our What We Do</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Shipments</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Pricing Flexibility</span>
                </p>
              </Link>
            </div>
            {/* location */}
            <div>
              <h3 className="text-xl font-bold text-textWhite">Location</h3>
              <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                55 Main Street, 2nd block <br className="md:block hidden" />
                Malborne, Australia
              </p>
              <h3 className="text-xl font-bold text-textWhite mt-5">Contact</h3>
              <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                support@gmail.com
              </p>
              <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                +880 (123) 456 88
              </p>
            </div>
          </div>
        </div>
        {/* right side content medium device responsive*/}
        <div className=" relative hidden md:block lg:hidden">
          {/*  */}
          <div className="relative">
            <button className="md:w-[500px]  w-full  h-[84px] absolute top-[50px] right-[16%]  bg-[#151d1b] rounded-full text-[20px] pl-12 font-bold text-textWhite">
              <p>
                for Any Enquiry{" "}
                <span className="text-yellowText link">
                  <Link>@WOWtheme.co</Link>
                </span>
              </p>
            </button>
            {/* motion */}
            <div
              className="bg-[#313836] 
        w-[68px] h-[68px] absolute left-[140px] top-[58px] rounded-full"
            ></div>
          </div>
          <div className="flex gap-40 overflow-hidden mt-[183px] items-center justify-center">
            {/* Services itmes content */}
            <div className="">
              <h3 className="text-xl font-bold text-textWhite">Services</h3>
              <Link>
                <p className="text-lowGray my-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Request A Quate</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray  flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Our Services</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray my-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Our What We Do</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Shipments</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Pricing Flexibility</span>
                </p>
              </Link>
            </div>
            {/* location */}
            <div className="">
              <h3 className="text-xl font-bold text-textWhite">Location</h3>
              <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                55 Main Street, 2nd block <br className="md:block hidden" />
                Malborne, Australia
              </p>
              <h3 className="text-xl font-bold text-textWhite mt-5">Contact</h3>
              <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                support@gmail.com
              </p>
              <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                +880 (123) 456 88
              </p>
            </div>
          </div>
        </div>
        {/*right side content  mobile device responsive */}
        <div className=" relative md:hidden lg:hidden">
          {/*  */}
          <div className="relative">
            <button className="md:w-[500px] mt-5  w-full  h-[84px] absolute top-0 right-0  bg-[#151d1b]  rounded-full text-[16px] pl-12 font-bold text-textWhite">
              <p>
                for Any Enquiry{" "}
                <span className="text-yellowText link">
                  <Link>@WOWtheme.co</Link>
                </span>
              </p>
            </button>
            {/* motion */}
            <div
              className="bg-[#313836] 
        w-[68px] h-[68px] absolute left-3 top-[30px] rounded-full"
            ></div>
          </div>
          <div className="flex flex-col mt-[133px] items-center">
            {/* Services itmes content */}
            <div className="">
              <h3 className="text-xl font-bold text-textWhite">Services</h3>
              <Link>
                <p className="text-lowGray my-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Request A Quate</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray  flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Our Services</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray my-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Our What We Do</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Shipments</span>
                </p>
              </Link>
              <Link>
                <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                  <MdKeyboardDoubleArrowLeft className="group-hover:block hidden" />
                  <span>Pricing Flexibility</span>
                </p>
              </Link>
            </div>
            {/* location */}
            <div className="flex flex-col justify-center items-center mt-10">
              <h3 className="text-xl font-bold text-textWhite">Location</h3>
              <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                55 Main Street, 2nd block <br className="md:block hidden" />
                Malborne, Australia
              </p>
              <h3 className="text-xl font-bold text-textWhite mt-5">Contact</h3>
              <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                support@gmail.com
              </p>
              <p className="text-lowGray mt-2 flex gap-1 items-center hover:text-yellowText duration-500 group">
                +880 (123) 456 88
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="max-w-[1281px] border-t border-[#213431] py-5 mx-auto flex lg:flex-row flex-col text-center gap-5 lg:gap-0  items-center md:justify-between">
        <div className="flex items-center gap-1">
          <img className="w-7 h-7 mr-2" src={logoImg} alt="" />
          <h4 className="text-3xl font-bold text-textWhite">Charifund</h4>
        </div>
        <p className="font-bold text-textWhite">© 2024 <span className="text-yellowText">S7template</span> -Logistic Service. All rights reserved.</p>
        {/*  */}
        <div className="flex items-center gap-5">
          <p className="text-textWhite hover:link">Company</p>
          <p className="text-textWhite hover:link">Support</p>
          <p className="text-textWhite hover:link">Privacy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
