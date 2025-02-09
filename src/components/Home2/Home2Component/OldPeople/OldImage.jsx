import React from 'react';
import { HiArrowUpRight } from "react-icons/hi2";
const OldImage = ({items}) => {
    const {image} = items;
    return (
        <div className="relative lg:w-[440px] h-[400px] group">
        <img
          className="w-full rounded-none h-full object-cover"
          src={image}
          alt=""
        />
        <button className="bg-subGreen hidden group-hover:block absolute top-[145px] right-[42%] text-textWhite text-xl p-5 rounded-full">
          <HiArrowUpRight />
        </button>
      </div>
    );
};

export default OldImage;