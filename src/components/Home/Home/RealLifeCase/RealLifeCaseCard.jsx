import React from "react";
import { FaArrowRight, FaRegComments } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const RealLifeCaseCard = ({ life }) => {
  const { author, category, comments, image, title } = life;
  return (
    <div className="px-5 duration-1000 rounded-xl pt-3 bg-[#ffffff] border hover:border-none group hover:bg-[#2c6b59]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
            <span className="text-yellowText"><BiUserCircle/></span>
          <p className="text-[#666666] group-hover:text-[#9bc3bc]">{author}</p>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-yellowText"><FaRegComments/></span>
          <p className="text-[#666666] group-hover:text-[#9bc3bc]">comments {comments}</p>
        </div>
      </div>
      <h2 className="text-[19px] duration-1000 py-3 font-bold text-[#122f2a] group-hover:text-textWhite">{title}</h2>
      <div className="w-full h-[250px]">
        <img className="w-full h-full rounded-xl object-cover" src={image} alt="" />
      </div>
      <Link>
      <div className="py-6  flex items-center gap-2">
        <p className="group-hover:text-[#ffffff] duration-500 leading-3 text-[#122f2a] border-b-[0.1px] group-hover:border-[#FFFFFF] border-[#122f2a] font-bold">Read More</p>
       
        <button className="text-white duration-500 bg-[#2c6b59] group-hover:text-[#2c6b59] group-hover:bg-yellowBg p-[2px] text-[13px] rounded-full">
        <FaArrowRight/>
        </button>
      </div>
      </Link>
    </div>
  );
};

export default RealLifeCaseCard;
