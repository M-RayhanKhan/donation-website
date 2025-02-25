import React, { useState } from "react";
import Container from "../../../Container";
import { FaCalendarDays, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoSearchOutline, IoSendSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import recentImg1 from "../../../../assets/marquee/recent1.png";
import recentImg2 from "../../../../assets/marquee/recent2.png";
import recentImg3 from "../../../../assets/marquee/recent3.png";
import GlobalSection from "../GlobalSection/GlobalSection";
import evetDonateImg from "../../../../assets/marquee/eventDonate.png";
import loveImg from "../../../../assets/marquee/EventLove.png";
import errorImg from "../../../../assets/home2/Error.png";
import { RiArrowRightUpLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { HiOutlineMail } from "react-icons/hi";
import sidebarImg from "../../../../assets/marquee/sidebar-slogan-img 1.png";
import objectImg from "../../../../assets/marquee/OBJECTS.png";
import { Helmet } from "react-helmet-async";

const EventPage = () => {
  const [money, setMoney] = useState(0);

  const donateMoney = [
    { id: 1, money: 20 },
    { id: 2, money: 50 },
    { id: 3, money: 100 },
    { id: 4, money: 150 },
    { id: 5, money: "Coustom" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleMoney = (donateMoney) => {
    const donate = parseFloat(donateMoney);
    //  console.log(donate);
    if (isNaN(donate)) {
      alert("Coustom baby ekhon dan kora jave na.");
    } else {
      setMoney(donate);
    }
  };

  const handleSuccess = (money, setMoney) => {
    if (money > 0) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "Do you want to donate?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Success",
              text: "Your donation is complete",
              icon: "success",
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "You didn't donate money",
              icon: "error",
            });
          }
          setMoney("");
        });
    } else {
      alert("please added money");
    }
  };

  return (
    <section>
      <Helmet>
        <title>Donate | Event Page</title>
      </Helmet>
      <GlobalSection title="Event Page" />
      <Container className="grid md:gap-4 lg:gap-8 md:grid-cols-12 my-10">
        {/* donate details data */}
        <aside className="lg:col-span-8 md:col-span-7">
          <div className="space-y-3 relative">
            <img
              className="w-full  h-[430px] object-cover rounded-2xl"
              src={evetDonateImg}
              alt=""
            />
            <img
              className="absolute top-5 left-5 w-[69px] h-[82px]"
              src={loveImg}
              alt=""
            />
          </div>
          {/* donate and text content */}
          <div className="lg:px-8 py-10 px-2  lg:mx-9 mx-2 rounded-xl relative -top-16   bg-[#ffffff] patience-game">
            <p className="font-semibold">
              <span className="text-[#FF3C00]">$85,202</span> of{" "}
              <span className="text-[#FF3C00]">$20,000</span> raised
            </p>
            {/* title */}
            <h2 className="text-blackText text-3xl md:text-[42px] font-bold mt-4 mb-5">
              Help Children Rise out of Poverty
            </h2>
            <p className="text-description">
              Lorem Ipsum is simply dummy a of the printing and type setting
              industry Loreaim Ipsum has been the industry's standard dummy
            </p>
            {/* This Poor it Important So Support */}

            <h1 className="text-blackText mt-8 mb-4 text-3xl font-bold">
              This Poor it Important So Support
            </h1>
            {/* button */}
            <button className="bg-[#fdf8ea] relative w-full py-4 rounded-full text-start border lg:px-16 pr-4 pl-16 text-[15px] lg:text-[16px]">
              <span className="text-title font-semibold ">Notice:</span>
              <span className="text-description">
                Test mode is enabled. While in test mode no live{" "}
                <br className="hidden md:block" />
                donations are processed.
              </span>
              <div className="bg-[#122F2A] w-[4px] h-full lg:h-[80px] absolute top-0 left-9"></div>
              <div className="w-[24px] h-[20px] absolute top-1/3 md:top-6 left-[25px] z-10">
                <img src={errorImg} alt="" />
              </div>
            </button>
            {/* donate poor people money */}
            <div className="">
              <p className="text-xl mt-5 font-bold text-title">Your Donation</p>
              <div className="relative">
                <input
                  onChange={(e) => setMoney(parseFloat(e.target.value) || 0)}
                  value={`${money}`}
                  type="text"
                  className="w-full mt-2 py-3 pl-[56px] mb-5 rounded-full text-xl font-bold text-title outline-none bg-[#efefef]"
                />
                <button className="bg-[#FFC107] absolute top-3 left-[5px] px-4 py-2 rounded-full  text-textWhite font-bold text-xl">
                  $
                </button>
              </div>
              <div className="flex flex-wrap gap-5">
                {donateMoney.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => handleMoney(btn.money)}
                    className="font-bold rounded-3xl border w-[110px] h-[40px] hover:bg-greenBg hover:text-textWhite hover:border-[#122F2A] duration-500 text-[16px]"
                  >
                    $ {btn.money}
                  </button>
                ))}
              </div>
              {/* donate online or offline  */}
              <div>
                <p className="text-[18px] mt-4 font-bold text-title">
                  Select Payment Method
                </p>
                {/* 1 */}
                <div className="flex gap-2 md:gap-0 mt-4">
                  <div className="inline-flex items-center  ">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full mr-2"
                      htmlFor="ripple-on"
                      data-ripple-dark="true"
                    >
                      <input
                        id="ripple-on"
                        type="checkbox"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer text-slate-600 text-sm"
                      htmlFor="ripple-on"
                    >
                      <p className="text-title font-bold">Test Donation</p>
                    </label>
                  </div>
                  {/* 2 */}
                  <div className="inline-flex items-center md:ml-3.5">
                    <label
                      className="flex items-center cursor-pointer relative"
                      htmlFor="ripple-off"
                    >
                      <input
                        type="checkbox"
                        className="peer  h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="ripple-off"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-3 text-slate-600 text-sm"
                      htmlFor="check-ripple-off"
                    >
                      <p className="text-title font-bold">Offline Donation</p>
                    </label>
                  </div>
                  {/* 3 */}
                  <div className="inline-flex items-center md:ml-3.5">
                    <label
                      className="flex items-center cursor-pointer relative"
                      htmlFor="ripple"
                    >
                      <input
                        type="checkbox"
                        className="peer  h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="ripple"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-3 text-slate-600 text-sm"
                      htmlFor="check-ripple-off"
                    >
                      <p className="text-title font-bold">Credit Card</p>
                    </label>
                  </div>
                </div>
                {/* Details Information */}
                <div>
                  {/* from input  */}
                  <form
                    onSubmit={handleSubmit}
                    className="grid gap-[16px] grid-cols-2 mt-[20px]"
                  >
                    {/* email */}
                    <div className="relative w-full md:col-span-1  col-span-2">
                      <input
                        type="email"
                        required
                        className="w-full  h-[60px] px-4 bg-[#EFEFEF] rounded-xl outline-none border-[#327767] focus:border-[#327767] focus:ring-1 focus:ring-[#327767] text-[#327767]"
                        placeholder="your email..."
                      />
                      <IoSendSharp className="text-[#FFC107] absolute top-1/3 right-3 -rotate-[45deg]" />
                    </div>
                    {/* phone */}
                    <div className="relative w-full md:col-span-1  col-span-2">
                      <input
                        type="text"
                        required
                        className="w-full  h-[60px] px-4 bg-[#EFEFEF] rounded-xl outline-none border-[#327767] focus:border-[#327767] focus:ring-1 focus:ring-[#327767] text-[#327767]"
                        placeholder="your phone..."
                      />
                      <FaPhone className="text-[#FFC107] absolute top-1/3 right-3 " />
                    </div>
                    {/* address */}
                    <div className="relative w-full md:col-span-2  col-span-2">
                      <input
                        type="text"
                        required
                        className="w-full  h-[60px] px-4 bg-[#EFEFEF] rounded-xl outline-none border-[#327767] focus:border-[#327767] focus:ring-1 focus:ring-[#327767] text-[#327767]"
                        placeholder="your phone..."
                      />
                      <FaLocationDot className="text-[#FFC107] absolute top-1/3 right-3 " />
                    </div>
                    {/* write message */}
                    <div className="relative w-full md:col-span-2  col-span-2">
                      <textarea
                        type="text"
                        required
                        className="w-full h-[145px] py-5  px-4 bg-[#EFEFEF] rounded-xl outline-none border-[#327767] focus:border-[#327767] focus:ring-1 focus:ring-[#327767] text-[#327767]"
                        placeholder="your phone..."
                      />
                      <HiOutlineMail className="text-[#FFC107] absolute top-5 right-3 " />
                    </div>
                  </form>
                </div>
                {/* donate button */}
                <div>
                  <button
                    onClick={() => handleSuccess(money, setMoney)}
                    className="bg-[#FFC107] mt-6 text-blackText md:px-10 w-full md:w-auto py-3 rounded-[30px] text-[14px] font-bold flex items-center justify-center"
                  >
                    <span>Donate Now</span>{" "}
                    <RiArrowRightUpLine className="text-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* side bar */}
        <div className="lg:col-span-4 md:col-span-5">
          <div className="card bg-base-100 p-[30px] pb-[45px] shadow-lg">
            <h1 className="text-[#0B0D26] text-xl font-bold">Search</h1>
            <div className="mt-[30px] relative">
              <input
                type="text"
                placeholder="Search"
                className="text-[#4A3F35] border border-[#d0d0d0] focus:border focus:border-[#d0d0d0] focus:ring-1 focus:ring-[#d0d0d0] outline-none rounded-md px-5 w-full h-[56px]"
              />
              <IoSearchOutline className="text-3xl absolute right-4 top-[22%] text-[#0B0D26]" />
            </div>
          </div>
          {/* Recent Post */}
          <div className="card bg-base-100 mt-5 pt-[20px] p-[20px] patience-game">
            <h1 className="text-[#0B0D26] text-xl font-bold">Recent Post</h1>
            {/* img card 1 */}
            <div className="flex items-center mt-5 gap-4">
              <div>
                <img className="w-[122px]" src={recentImg1} alt="" />
              </div>
              <div>
                <p className="flex items-center gap-2 text-[#00715D]">
                  {" "}
                  <span>
                    <FaCalendarDays />
                  </span>{" "}
                  October 19, 2019
                </p>
                <h2 className="text-[18px] leading-6 text-title font-bold">
                  Where Innovation Meets Foundation
                </h2>
              </div>
            </div>
            {/* img card 2 */}
            <div className="flex items-center mt-5 gap-4">
              <div className="w-[122px]">
                <img className="w-full" src={recentImg2} alt="" />
              </div>
              <div>
                <p className="flex items-center gap-2 text-[#00715D]">
                  {" "}
                  <span>
                    <FaCalendarDays />
                  </span>{" "}
                  October 19, 2022
                </p>
                <h2 className="text-[18px] leading-6 text-title font-bold">
                  Quality Builds, Trusted Foundations
                </h2>
              </div>
            </div>
            {/* img card 3 */}
            <Link to="">
              <div className="flex items-center mt-5 gap-6">
                <div className="w-[140px]">
                  <img className="w-full shrink-0" src={recentImg3} alt="" />
                </div>
                <div>
                  <p className="flex items-center gap-2 text-[#00715D]">
                    {" "}
                    <span>
                      <FaCalendarDays />
                    </span>{" "}
                    October 19, 2022
                  </p>
                  <h2 className="text-[18px] leading-6 text-title font-bold">
                    Structures That Stand, Dreams That Soar
                  </h2>
                </div>
              </div>
            </Link>
          </div>

          {/* donate */}
          <div className="bg-base-100 rounded-xl mt-5 pt-[20px] p-[20px] pb-12 patience-game">
            <p className="text-xl mt-5 font-bold text-title">Your Donation</p>
            <div className="relative">
              <input
                onChange={(e) => setMoney(parseFloat(e.target.value) || 0)}
                value={`${money}`}
                type="text"
                className="w-full mt-2 py-3 pl-[56px] mb-5 rounded-full text-xl font-bold text-title outline-none bg-[#efefef]"
              />
              <button className="bg-[#FFC107] absolute top-3 left-[5px] px-4 py-2 rounded-full  text-textWhite font-bold text-xl">
                $
              </button>
            </div>
            <div className="flex flex-wrap gap-5">
              {donateMoney.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleMoney(btn.money)}
                  className="font-bold rounded-3xl border w-[110px] h-[40px] hover:bg-greenBg hover:text-textWhite hover:border-[#122F2A] duration-500 text-[16px]"
                >
                  $ {btn.money}
                </button>
              ))}
            </div>
            {/* select payment */}
            <div className="flex flex-wrap gap-4  md:gap-0 mt-7">
              <div className="inline-flex items-center  ">
                <label
                  className="relative flex cursor-pointer items-center rounded-full mr-2"
                  htmlFor="ripple-on"
                  data-ripple-dark="true"
                >
                  <input
                    id="ripple-on"
                    type="checkbox"
                    className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="cursor-pointer text-slate-600 text-sm"
                  htmlFor="ripple-on"
                >
                  <p className="text-title font-bold">Test Donation</p>
                </label>
              </div>
              {/* 2 */}
              <div className="inline-flex items-center md:ml-3.5">
                <label
                  className="flex items-center cursor-pointer relative"
                  htmlFor="ripple-off"
                >
                  <input
                    type="checkbox"
                    className="peer  h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                    id="ripple-off"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="cursor-pointer ml-3 text-slate-600 text-sm"
                  htmlFor="check-ripple-off"
                >
                  <p className="text-title font-bold">Offline Donation</p>
                </label>
              </div>
              {/* 3 */}
              <div className="inline-flex lg:mt-4">
                <label
                  className="flex items-center cursor-pointer relative"
                  htmlFor="ripple"
                >
                  <input
                    type="checkbox"
                    className="peer  h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                    id="ripple"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="cursor-pointer ml-3 text-slate-600 text-sm"
                  htmlFor="check-ripple-off"
                >
                  <p className="text-title font-bold">Credit Card</p>
                </label>
              </div>
            </div>
            {/* bonate now btn */}
            <button
              onClick={() => handleSuccess(money, setMoney)}
              className="bg-[#FFC107] mt-6 text-blackText md:px-10 w-full md:w-auto py-3 rounded-[30px] text-[14px] font-bold flex items-center justify-center"
            >
              <span>Donate Now</span>{" "}
              <RiArrowRightUpLine className="text-[18px]" />
            </button>
          </div>
          {/* Education health */}
          <div
            style={{ backgroundImage: `url(${sidebarImg})` }}
            className="bg-cover bg-center bg-no-repeat h-[500px] w-full mt-5 text-center px-10 flex flex-col justify-center items-center rounded-xl"
          >
            <img className="w-[70px] h-[79px] mb-5" src={objectImg} alt="" />
            <p className="text-textWhite">Small Donations Bigger Impact</p>
            <h2 className="text-textWhite leading-10 mt-2 text-[35px] font-bold">
              Education Health for Every Child
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventPage;
