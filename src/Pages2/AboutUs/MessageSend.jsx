import React from "react";
import messageImg from "../../assets/marquee/aboutUsbgImg.png";
import sideImg from "../../assets/marquee/sideImg.png";
import Container from "../../components/Container";
import heartYellow from "../../assets/heart (1) 1.png";
import { IoSendSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";


const MessageSend = () => {
  const sendMessage = {
    backgroundImage: `linear-gradient(-150.25deg, rgba(12, 26, 23, 0) 1.9%, rgba(9, 31, 27, 0.0754386) 37.31%, rgba(9, 31, 27, 0.172779) 40.18%, rgba(9, 31, 27, 0.372684) 47.05%, rgba(9, 31, 27, 0.671715) 56.36%, #091F1B 73.4%, #091F1B 95.2%, rgba(9, 31, 27, 0.905484) 103.44%),
        url(${messageImg})
`,
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  }

  return (
    <section
      style={sendMessage}
      className="md:h-[650px] w-full bg-cover  bg-no-repeat "
    >
      <Container className="flex h-full flex-col lg:flex-row">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2 h-full bg-[#2c6b59] md:pt-16 md:p-12 p-5">
          <div className="flex  items-center gap-2">
            <img className="w-5 h-5" src={heartYellow} alt="" />
            <p className="caveat font-medium text-yellowText text-xl">
              Start donating poor people
            </p>
          </div>
          <h1 className="md:text-[55px] mt-[10px] text-4xl font-bold text-textWhite leading-[55px]">Send Us message <br className="hidden md:flex" />
          For donate!</h1>
          {/* from input */}
         <form onSubmit={handleSubmit} className="grid gap-[16px] grid-cols-2 mt-[20px]">
          {/* email */}
          <div className="relative w-full md:col-span-1  col-span-2">
            <input type="email" required className="w-full  h-[60px] px-4 bg-[#046150] rounded-xl outline-none border-[#327767] focus:border-[#327767] focus:ring-1 focus:ring-[#327767] text-textWhite" placeholder="your email..." />
            <IoSendSharp className="text-[#FFC107] absolute top-1/3 right-3 -rotate-[45deg]"/>
          </div>
          {/* phone */}
          <div className="relative w-full md:col-span-1  col-span-2">
            <input type="text" required className="w-full  h-[60px] px-4 bg-[#046150] rounded-xl outline-none border-[#327767] focus:border-[#327767] focus:ring-1 focus:ring-[#327767] text-textWhite" placeholder="your phone..." />
            <FaPhone className="text-[#FFC107] absolute top-1/3 right-3 "/>
          </div>
          {/* address */}
          <div className="relative w-full md:col-span-2  col-span-2">
            <input type="text" required className="w-full  h-[60px] px-4 bg-[#046150] rounded-xl outline-none border-[#327767] focus:border-[#327767] focus:ring-1 focus:ring-[#327767] text-textWhite" placeholder="your phone..." />
            <FaLocationDot className="text-[#FFC107] absolute top-1/3 right-3 "/>
          </div>
          {/* write message */}
          <div className="relative w-full md:col-span-2  col-span-2">
            <textarea type="text" required className="w-full h-[145px] py-5  px-4 bg-[#046150] rounded-xl outline-none border-[#327767] focus:border-[#327767] focus:ring-1 focus:ring-[#327767] text-textWhite" placeholder="your phone..." />
            <HiOutlineMail className="text-[#FFC107] absolute top-5 right-3 "/>
          </div>
         {/* button */}
           <div className="col-span-2 md:col-span-1">
           <button type="submit" className="px-[60px] w-full text-[#122F2A] font-semibold py-[20px] bg-[#FFC107] rounded-full">Get A Quote</button>
           </div>
         </form>
        </div>
      </Container>
    </section>
  );
};

export default MessageSend;
