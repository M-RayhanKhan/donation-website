import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import PlusImg from '../../../../assets/+.png'
import { IoMdClose } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { RiBehanceLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import gradientImg from '../../../../assets/Planet.png'

const ClientCard = ({client}) => {
    const {image ,name , role} = client
    const [active , setActive] = useState(false);

    return (
        <div className="group relative">
            <div className="w-full h-[400px] md:h-[320px]  ">
                <img className="w-full rounded-t-xl h-full object-cover" src={image} alt={`${name}`} />
            </div>
            <div className="absolute hidden group-duration-500 transition-all group-hover:block bottom-[90px] lg:top-[126px]">
                <img src={gradientImg} alt="" />
            </div>
            <button className="group-hover:bg-[#122f2a] duration-[1500ms] bg-[#f1f0ee] group-hover:text-white text-title py-5 px-3 w-full group flex flex-col justify-center items-start">
                <span className="text-xl font-bold  ">{name}</span>  
               <span className="group-hover:text-yellowText font-medium">{role}</span>
            </button>
            {/* active button */}
            <div onClick={() => setActive(!active)} className="absolute right-4 bottom-[75px]">
               {
                active ? <button className="bg-[#122f2a] text-white duration-500 group-hover:bg-yellowBg group-hover:text-title  p-2 rounded-full"><IoMdClose className=""/></button>  :  <button className="bg-[#122f2a] text-white duration-500 group-hover:bg-yellowBg group-hover:text-title  p-2 rounded-full"><HiOutlinePlus /></button>
               }
            </div>
            {
                active ?  <div className="absolute flex flex-col gap-2 overflow-hidden bottom-28 right-[16px] duration-500">
                    {/* facebook icons */}
              <Link>  <button className="bg-[#ffffff] hover:text-white duration-500 hover:bg-yellowBg text-title  p-2 rounded-full"><RiFacebookFill className=""/></button></Link>
                    {/* twitter icons */}
              <Link>  <button className="bg-[#ffffff] hover:text-white duration-500 hover:bg-yellowBg text-title  p-2 rounded-full"><FaTwitter className=""/></button></Link>
                    {/* instagram icons */}
              <Link>  <button className="bg-[#ffffff] hover:text-white duration-500 hover:bg-yellowBg text-title  p-2 rounded-full"><IoLogoInstagram className=""/></button></Link>
                    {/* BehanceLine icons */}
              <Link>  <button className="bg-[#ffffff] hover:text-white duration-500 hover:bg-yellowBg text-title  p-2 rounded-full"><RiBehanceLine className=""/></button></Link>
               </div> : ''
            }
        
        </div>
    );
};

export default ClientCard;