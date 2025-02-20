import React from "react";
import GlobalSection from "../GlobalSection/GlobalSection";
import Container from "../../../Container";
import { Link, useLoaderData } from "react-router-dom";
import { img } from "motion/react-client";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import recentImg1 from "../../../../assets/marquee/recent1.png";
import recentImg2 from "../../../../assets/marquee/recent2.png";
import recentImg3 from "../../../../assets/marquee/recent3.png";
import { FaCalendarDays } from "react-icons/fa6";
import sidebarImg from "../../../../assets/marquee/sidebar-slogan-img 1.png";
import objectImg from "../../../../assets/marquee/OBJECTS.png";
import { Helmet } from "react-helmet-async";

const DonateDetails = () => {
  const data = useLoaderData();
  const { img1, img2, img3, description2, title1, summary } = data;

  return (
    <section>
      <Helmet>
        <title>Donate | Donations Details</title>
      </Helmet>
      <GlobalSection title="Causee Details" />
      <Container className="grid md:gap-4 lg:gap-8 md:grid-cols-12 my-10">
        {/* donate details data */}
        <aside className="lg:col-span-8 md:col-span-7">
          <div className="space-y-3">
            <img
              className="w-full h-[430px] object-cover rounded-2xl"
              src={img1}
              alt=""
            />
            <h1 className="text-[32px] font-bold text-[#121212]">{title1}</h1>
            <p className="text-description">{description2}</p>
            <h1 className="text-[32px] font-bold text-[#121212]">Summary</h1>
            <p className="text-description">{summary}</p>
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
              <img className="w-full rounded-xl" src={img2} alt="" />
            </div>
            <div>
              <img className="w-full rounded-xl" src={img3} alt="" />
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

export default DonateDetails;
