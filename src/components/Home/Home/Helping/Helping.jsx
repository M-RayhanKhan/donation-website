import helpingImg1 from "../../../../assets/help1.png";
import helpingImg2 from "../../../../assets/hellp2.png";
import helpingImg3 from "../../../../assets/hellp3.png";
import helpingImg4 from "../../../../assets/hellp4.png";
import heartImg from "../../../../assets/heart (1) 1.png";
import handLove from '../../../../assets/loveHellp.png';
import handBall from '../../../../assets/handBall.png';
import chilp from '../../../../assets/cllip.png';
import { FaCheck } from "react-icons/fa6";
import CardHeart from "../../../../assets/cardHeart.png"
import { motion } from "motion/react"

const Helping = () => {
  return (
    <section className="max-w-7xl my-16 flex gap-12 lg:flex-row flex-col mx-auto px-2 lg:px-0">
      {/* image content */}
      <div className="lg:w-[43%] relative md:w-2/3 mx-auto">
       <div>
       <div className="flex gap-3 md:gap-5">
          <div className="flex justify-end items-end">
            <img className="rounded-r-xl" src={helpingImg1} alt="" />
          </div>
          <div>
            <img className="rounded-xl" src={helpingImg2} alt="" />
          </div>
        </div>
        <div className="pt-3 md:pt-5 pl-10 pr-6">
          <img className="rounded-xl" src={helpingImg3} alt="" />
        </div>
       </div>
       {/* blur card */}
       <motion.div
       animate={{x: [10 , 50 , 10]}}
       transition={{ease:"linear", duration: 5, repeat: Infinity}}
        className="flex absolute top-[40%] right-28 rounded-[20px] gap-4 backdrop-blur-2xl bg-white/30 justify-center  items-center w-[230px] h-[120px] md:w-[280px] md:h-[144px]">
        <figure>
            <img className="w-9 h-9" src={CardHeart} alt="" />
        </figure>
        <div>
            <h4 className="text-subDescription text-2xl md:text-4xl font-bold">250+</h4>
            <p className="text-description">Services we Provide</p>
        </div>
       </motion.div>
      </div>
      {/* text content */}
      <div className="lg:w-1/2 ">
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" src={heartImg} alt="" />
          <p className="caveat font-medium text-[#2c6b59] text-xl">
            Start donating poor people
          </p>
        </div>
        <h1 className="text-title mt-4 mb-6 md:leading-[45px] font-bold text-4xl md:text-[48px]">
        Helping each other can
        make <span className="text-yellowText font-normal">world</span>  better
        </h1>
        <p className="text-description">Volunteering offers opportunities to develop new skills and gain valuable
        experience. This can include leadership, communication, project</p>
        <div className="flex gap-5 md:flex-row flex-col mt-10">
            {/* Start helping them */}
            <div className="lg:w-1/2">
               <div className="flex border-b border-[#d9d9d9] pb-8 gap-4">
               <figure className="lg:w-28 z-10 relative h-16">
                    <img className="w-full h-full" src={handBall} alt="" />
                    <div className="p-5 absolute -z-10 -bottom-5 -right-2 rounded-full bg-yellowBg"></div>
                </figure>
                <div>
                    <h4 className="text-xl font-bold text-title">Start helping them</h4>
                    <p className="text-description mt-2 leading-5 text-sm">Raising awareness about the charity’s mission and cause.</p>
                </div>
               </div>
               <div className="flex mt-8 pb-8 gap-4">
               <figure className="lg:w-28 z-10 relative h-16">
                    <img className="w-full h-full" src={handLove} alt="" />
                    <div className="p-5 absolute -z-10 -bottom-2 -right-0 rounded-full bg-yellowBg"></div>
                </figure>
                <div>
                    <h4 className="text-xl font-bold text-title">Make Donations</h4>
                    <p className="text-description mt-2 leading-5 text-sm">Raising awareness about the charity’s mission and cause.</p>
                </div>
              
               </div>
               <div className="flex mt-1 items-center gap-2">
                <button className="bg-greenBg text-white rounded-full p-0.5"><FaCheck/></button>
                    <p className="text-title font-semibold">Helped fund 3,265 Project powerful</p>
                </div>
               <div className="flex items-center gap-2 mt-3">
                <button className="bg-greenBg text-white rounded-full p-0.5"><FaCheck/></button>
                    <p className="text-title font-semibold">We give child a gift of a education</p>
                </div>
            </div>
            <div className="md:w-1/2 pb-28 md:pb-0  md:mb-0 text-center relative md:pl-4 helpingCard shadow-3xl ">
                <div className="w-full absolute -z-10 md:h-full h-[300px]">
                  <img  src={chilp} alt="" />
                </div>
               <div className=" md:w-[130px] w-[150px] md:ml-16 ml-24 mt-10 md:mt-5">
               <img className="rounded-full" src={helpingImg4} alt="" />
               </div>
            <div className="md:mt-8 mt-12">
            <h3 className="text-[28px]  font-extrabold text-subDescription">35,734</h3>
               <h4 className="text-blackText my-1 font-bold text-[18px]">Helped Fund</h4>
               <p className="text-description text-[15px]">Quisque dignissim enim diam</p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Helping;
