import React from "react";
import GlobalSection from "../GlobalSection/GlobalSection";
import DonateDetails from "../DonateDetails/DonateDetails";
import { Link, useLoaderData } from "react-router-dom";
import sidebarImg from "../../../../assets/marquee/sidebar-slogan-img 1.png";
import Container from "../../../Container";
import { FaCalendarDays, FaRegCircleCheck } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import recentImg1 from "../../../../assets/marquee/recent1.png";
import recentImg2 from "../../../../assets/marquee/recent2.png";
import recentImg3 from "../../../../assets/marquee/recent3.png";
import objectImg from "../../../../assets/marquee/OBJECTS.png";
import { Helmet } from "react-helmet-async";
import { FaFacebookF as Facebook } from "react-icons/fa";
import { FaTwitter as Twitter } from "react-icons/fa";
import { FaPinterestSquare as Pinterest } from "react-icons/fa";
import { FaLinkedinIn as Linkedin } from "react-icons/fa";
import { FaStumbleupon as Tumblr } from "react-icons/fa";
import iconsBgImg from "../../../../assets/marquee/SocialMBGImg.png";
import googleLocationImg from "../../../../assets/marquee/googleLocation.png";
import { FaComment } from "react-icons/fa";


const EventDetails = () => {
  return (
    <section>
      <Helmet>
        <title>Donate | Event Deteails</title>
      </Helmet>
      {/* global sectin global */}
      <GlobalSection title="Event Details" />
      <Container className="grid md:gap-4 lg:gap-8 md:grid-cols-12 my-10">
        {/* donate details data */}
        <aside className="lg:col-span-8 md:col-span-7">
          <div className="space-y-3">
            <img
              className="w-full h-[430px] object-cover rounded-2xl"
              src="https://t4.ftcdn.net/jpg/08/98/05/81/240_F_898058162_uAfjCI3d1zEuZYUqUS4QKi1iZBwLh7LY.jpg"
              alt=""
            />
            <h1 className="text-[32px] font-bold text-[#121212]">
              Give African Children a Good Education
            </h1>
            <p className="text-description">
              Education is the key to unlocking the potential of African
              children. By providing access to quality schooling, we can empower
              them to break the cycle of poverty and build a brighter future.
            </p>
            <h1 className="text-[32px] font-bold text-[#121212]">Summary</h1>
            <p className="text-description">
              Education transforms lives. For African children, it is a pathway
              out of poverty and a tool for empowerment. Through charity and
              support, we can ensure that every child has the opportunity to
              learn, grow, and achieve their dreams.
            </p>
            <div className="lg:flex space-y-3  md:gap-20  items-center">
              {/* 1 */}
              <div>
                <div className="flex gap-2 items-center">
                  <FaRegCircleCheck className="text-[#166457]" />
                  <p className="text-[#121212]">Empower Through Charity</p>
                </div>
                <div className="flex gap-2 mt-1 items-center">
                  <FaRegCircleCheck className="text-[#166457]" />
                  <p className="text-[#121212]">Healing Communities</p>
                </div>
                <div className="flex gap-2 mt-1 items-center">
                  <FaRegCircleCheck className="text-[#166457]" />
                  <p className="text-[#121212]">Compassion in Action</p>
                </div>
              </div>
              {/* 2 */}
              <div>
                <div className="flex gap-2 items-center">
                  <FaRegCircleCheck className="text-[#166457]" />
                  <p className="text-[#121212]">Giving Hope, Changing Lives</p>
                </div>
                <div className="flex gap-2 mt-1 items-center">
                  <FaRegCircleCheck className="text-[#166457]" />
                  <p className="text-[#121212]">Together We Can</p>
                </div>
                <div className="flex gap-2 mt-1 items-center">
                  <FaRegCircleCheck className="text-[#166457]" />
                  <p className="text-[#121212]">Every Act Counts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-8 gap-5 items-center">
            <div>
              <img
                className="w-full rounded-xl"
                src="https://i.ibb.co.com/GYrC2hm/Dd2.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full rounded-xl"
                src="https://i.ibb.co.com/Hph1pbMq/Dd3.png"
                alt=""
              />
            </div>
          </div>
          {/* Share this event */}
          <h1 className="text-[35px] my-5 font-bold text-blackText">
            Share this event
          </h1>
          {/* social media icons */}
          <div className="flex flex-wrap gap-5 lg:grid lg:grid-cols-5">
            {/* facebook icon */}
            <Link>
              <button
                style={{ backgroundImage: `url(${iconsBgImg})` }}
                className="bg-cover bg-no-repeat bg-center bg-[#4c65a3] text-[#F8F8F8E5] flex flex-col items-center justify-center w-[152px] h-[120px]"
              >
                <Facebook size={36} />
                <p className="text-[20px] font-bold mt-2">Facebook</p>
              </button>
            </Link>
            {/* twitter icon */}
            <Link>
              <button
                style={{ backgroundImage: `url(${iconsBgImg})` }}
                className="bg-[#44aedf] bg-cover bg-no-repeat bg-center  text-[#F8F8F8E5] flex flex-col items-center justify-center w-[152px] h-[120px]"
              >
                <Twitter size={36} />
                <p className="text-[20px] font-bold mt-2">Twitter</p>
              </button>
            </Link>
            {/* pinterest icon */}
            <Link>
              <button
                style={{ backgroundImage: `url(${iconsBgImg})` }}
                className="bg-[#be2c31] bg-cover bg-no-repeat bg-center  text-[#F8F8F8E5] flex flex-col items-center justify-center w-[152px] h-[120px]"
              >
                <Pinterest size={36} />
                <p className="text-[20px] font-bold mt-2">Pinterest</p>
              </button>
            </Link>
            {/* Linkedin icon */}
            <Link>
              <button
                style={{ backgroundImage: `url(${iconsBgImg})` }}
                className="bg-[#2e81b8] bg-cover bg-no-repeat bg-center  text-[#F8F8F8E5] flex flex-col items-center justify-center w-[152px] h-[120px]"
              >
                <Linkedin size={36} />
                <p className="text-[20px] font-bold mt-2">Linkedin</p>
              </button>
            </Link>
            {/* Tumblr icon */}
            <Link>
              <button
                style={{ backgroundImage: `url(${iconsBgImg})` }}
                className="bg-[#e65738] bg-cover bg-no-repeat bg-center  text-[#F8F8F8E5] flex flex-col items-center justify-center w-[152px] h-[120px]"
              >
                <Tumblr size={36} />
                <p className="text-[20px] font-bold mt-2">Tumblr</p>
              </button>
            </Link>
          </div>
          {/* google location img */}
          <div className="my-5">
            <img src={googleLocationImg} alt="" />
            <p className="text-description mt-5">
              There are times when life is overwhelming, when all we have is
              questions. In those moments, hope can feel that it shifts our
              perspective toward the One who stands ready to listen. No matter
              what you’re facing, At Life. generosity.We're committed to
              equipping the "capital C” Church in every way we can. That's why
              the Church free of charge.A wonderful serenity has taken possssion
              of my entire souing like these sweet
            </p>
            <p className="text-description mt-3">
              mornng spring whch enjoy with my whole heart I am alone, and feel
              the charm of existenceths spot whch was create For the bliss of
              souls like mineing am so happy my dear frend so absori bed in the
              exquste sens.
            </p>
          </div>
          {/* from field */}
          <div className="bg-[#FFFFFF] p-8 patience-game">
            <h2 className="text-[28px] mb-4 font-bold text-blackText ">
              Post Commit
            </h2>
            <div className="relative">
              <textarea
                name=""
                id=""
                className="bg-[#F2F2F2] outline-none border border-[#F2F2F2] focus:border-[#F2F2F2] focus:ring-1 focus:ring-[#F2F2F2] w-full px-10 py-4"
                rows={5}
                placeholder="Write Commit"
              ></textarea>
              <FaComment className="absolute top-5 left-4 text-[#B8B7BE]"/>
            </div>
            {/* input name field */}
            <div>
            <div className="relative">
              <input
                name=""
                id=""
                className="bg-[#F2F2F2] outline-none border border-[#F2F2F2] focus:border-[#F2F2F2] focus:ring-1 focus:ring-[#F2F2F2] w-full px-10 py-4"
                placeholder="Your Name*"
              />
              <FaComment className="absolute top-5 left-4 text-[#B8B7BE]"/>
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
          {/* Tags */}
          <div className="card bg-base-100 mt-5 pt-[20px] p-[20px] patience-game">
            <h1 className="text-[#0B0D26] text-xl font-bold">Tags</h1>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link>
                <button className="bg-[#f0f0f0] text-blackText hover:bg-subGreen hover:text-textWhite duration-500 font-medium px-4 py-1.5 rounded-lg">
                  BuildWorks
                </button>
              </Link>
              <Link>
                <button className="bg-[#f0f0f0] hover:bg-subGreen hover:text-textWhite duration-500 text-blackText font-medium px-4 py-1.5 rounded-lg">
                  Precision Build
                </button>
              </Link>
              <Link>
                <button className="bg-[#f0f0f0] hover:bg-subGreen hover:text-textWhite duration-500  text-blackText font-medium px-4 py-1.5 rounded-lg">
                  Rite
                </button>
              </Link>
              <Link>
                <button className="bg-[#f0f0f0] hover:bg-subGreen hover:text-textWhite duration-500  text-blackText font-medium px-4 py-1.5 rounded-lg">
                  PrimeBuild
                </button>
              </Link>
              <Link>
                <button className="bg-[#f0f0f0] hover:bg-subGreen hover:text-textWhite duration-500  text-blackText font-medium px-4 py-1.5 rounded-lg">
                  ProBuilders
                </button>
              </Link>
              <Link>
                <button className="bg-[#f0f0f0] hover:bg-subGreen hover:text-textWhite duration-500  text-blackText font-medium px-4 py-1.5 rounded-lg">
                  Builders
                </button>
              </Link>
              <Link>
                <button className="bg-[#f0f0f0] hover:bg-subGreen hover:text-textWhite duration-500  text-blackText font-medium px-4 py-1.5 rounded-lg">
                  Construction
                </button>
              </Link>
              <Link>
                <button className="bg-[#f0f0f0] hover:bg-subGreen hover:text-textWhite duration-500  text-blackText font-medium px-4 py-1.5 rounded-lg">
                  Skyline
                </button>
              </Link>
              <Link>
                <button className="bg-[#f0f0f0] hover:bg-subGreen hover:text-textWhite duration-500  text-blackText font-medium px-4 py-1.5 rounded-lg">
                  Structures
                </button>
              </Link>
            </div>
          </div>
          {/*  */}
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

export default EventDetails;
