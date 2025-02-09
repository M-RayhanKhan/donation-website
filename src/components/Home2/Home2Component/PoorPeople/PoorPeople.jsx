import { FaCheck } from "react-icons/fa6";
import Container from "../../../Container";
import chilp from "../../../../assets/cllip.png";
import handLove from "../../../../assets/loveHellp.png";
import handBall from "../../../../assets/handBall.png";
import heartGreen from "../../../../assets/heartGreen.png";
import { FaPhone } from "react-icons/fa6";
import poorPeopleImg1 from '../../../../assets/home2/poorPeople1.png'
import poorPeopleImg2 from '../../../../assets/home2/poorPeople2.png'
import poorPeopleImg3 from '../../../../assets/home2/poorPeople3.png'
import { Link } from "react-router-dom";

const PoorPeople = () => {
  return (
    <section>
      <Container className="gap-10 mt-24 mb-5 flex flex-col lg:flex-row">
        {/* left side content */}
        <div className="lg:w-1/2 relative">
          {/* poor people img 1 */}
          <figure className="md:w-[440px] w-full h-[552px] mx-auto">
            <img src={poorPeopleImg1} alt="" />
          </figure>
          {/* poor people img 2 */}
          <figure className="md:w-[230px] w-[160px] absolute -top-10 left-0 h-[226px] mx-auto">
            <img src={poorPeopleImg2} alt="" />
          </figure>
          {/* poor people img 3 */}
          <figure className="w-[230px] absolute bottom-0 md:bottom-40 right-0 lg:bottom-0 lg:right-0 h-[226px] mx-auto">
            <img src={poorPeopleImg3} alt="" />
          </figure>
          {/* we give button */}
          <div className="bg-[#046A58] absolute top-[220px] md:top-auto lg:top-[300px] lg:-left-[133px] -left-[143px] text-white lg:bottom-auto md:bottom-5 md:left-48 lg:-rotate-90 -rotate-90 md:rotate-0 py-4 px-4 rounded-xl">
          <h1 className="text-[22px] font-medium">We Give <span className="text-yellowText font-bold">Donations</span> Poor People </h1>
          </div>
        </div>
        {/* right side content */}
        <div className="lg:w-1/2">
          {/* text content */}
          <div className="flex items-center gap-2">
            <img className="w-5 h-5" src={heartGreen} alt="" />
            <p className="caveat font-medium text-[#2c6b59] text-xl">
              Start donating poor people
            </p>
          </div>
          <h1 className="text-title mt-4 mb-6 md:leading-[45px] font-bold text-4xl md:text-[48px]">
            Helping each other can make{" "}
            <span className="text-yellowText font-normal">world</span> better
          </h1>
          <p className="text-description">
            Volunteering offers opportunities to develop new skills and gain
            valuable experience. This can include leadership, communication,
            project management, and teamwork skills.
          </p>
          {/* start helping them part */}
          <div className="flex flex-col md:flex-row my-8 gap-5 items-center">
            {/* 1 */}
            <div className="flex  gap-5">
              <figure className=" z-10 relative w-[90px] h-[70px]">
                <img className="w-full h-full" src={handBall} alt="" />
                <div className="p-5 absolute -z-10 -bottom-5 -right-2 rounded-full bg-yellowBg"></div>
              </figure>
              <div>
                <h4 className="text-xl font-bold text-title">
                  Start helping them
                </h4>
                <p className="text-description mt-2 leading-5 text-sm">
                  Raising awareness about the charity’s mission and cause.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex  gap-5">
              <figure className=" z-10 relative w-[90px] h-16">
                <img className="w-full h-full" src={handLove} alt="" />
                <div className="p-5 absolute -z-10 -bottom-2 -right-2 rounded-full bg-yellowBg"></div>
              </figure>
              <div>
                <h4 className="text-xl font-bold text-title">Make Donations</h4>
                <p className="text-description mt-2 leading-5 text-sm">
                  Raising awareness about the charity’s mission and cause.
                </p>
              </div>
            </div>
          </div>
          {/* icons */}
          <div className="flex mt-1 items-center gap-2">
            <button className="bg-greenBg text-white rounded-full p-0.5">
              <FaCheck />
            </button>
            <p className="text-title font-semibold">
              Helped fund 3,265 Project powerful corporate poor.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <button className="bg-greenBg text-white rounded-full p-0.5">
              <FaCheck />
            </button>
            <p className="text-title font-semibold">
              We give child a gift of a education
            </p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <button className="bg-greenBg text-white rounded-full p-0.5">
              <FaCheck />
            </button>
            <p className="text-title font-semibold">
              We help companies develop powerful corporate
              social Responsibility,
            </p>
          </div>
          {/* buttons  */}
          <div className="flex flex-wrap gap-3 items-center md:gap-10 mt-8">
            <Link>
            <button className="text-title font-semibold text-[14px] bg-yellowBg px-8 py-3 rounded-full">More About Us</button>
            </Link>
            <div className="flex items-center gap-4"> 
                <button className="text-xl text-red-600"><FaPhone/></button>
                <div>
                    <p className="text-description">Phone: </p>
                    <p className="text-blackText font-bold">+236 (456) 896 22</p>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PoorPeople;
