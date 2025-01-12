import TitlePage from "../../../TitlePage/TitlePage";
import trouble1 from "../../../../assets/trouble1.png";
import trouble2 from "../../../../assets/trouble2.png";
import trouble3 from "../../../../assets/trouble3.png";
import trouble4 from "../../../../assets/trouble4.png";
import { FiArrowUpRight } from "react-icons/fi";
import troubleLove from '../../../../assets/troubleLove.png'

const ChildrenTrouble = () => {
  return (
    <section className="mt-5 z-10 relative">
      <TitlePage />
      <div className="grid mt-8 grid-cols-12 gap-4 max-w-5xl h-[673px] mx-auto px-2 lg:px-0">
        <div
          style={{ backgroundImage: `url(${trouble1})` }}
          className="h-ful md:col-span-8 group col-span-6 bg-cover transform relative bg-center bg-no-repeat rounded-lg"
        >
          <div className="">
            <div className="bg-[#00000093] backdrop-blur-md absolute md:bottom-5 md:left-5 bottom-0 flex items-center justify-between w-full md:w-[300px] rounded-xl text-white md:py-5 pt-5 pb-2  md:pl-4 md:pr-6">
              <div>
                <h1 className="md:text-xl text-textWhite font-medium">
                  Child trouble & care
                </h1>
                <p className="text-[#9d9d99] mt-0.2 text-sm">
                  Demostic & Transportation
                </p>
              </div>
              <button className="bg-yellowBg text-[#111] p-1 md:p-2 rounded-full">
                <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${trouble2})` }}
          className="h-ful md:col-span-4 group col-span-6 bg-cover bg-center bg-no-repeat group rounded-lg relative"
        >
          <div className="absolute group-hover:block hidden w-full bottom-0 bg-[#111111ca] backdrop-blur-md py-3 px-3">
            <div className="flex  w-full justify-between items-center">
              <div>
                <h1 className="md:text-xl text-textWhite font-medium">
                  Child trouble & care
                </h1>
                <p className="text-[#9d9d99] mt-0.2 text-sm">
                  Demostic & Transportation
                </p>
              </div>
              <button className="bg-yellowBg text-[#111] p-2 rounded-full">
                <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${trouble3})` }}
          className="h-ful md:col-span-5 col-span-12 bg-cover bg-center bg-no-repeat rounded-lg group relative"
        >
                <div className="absolute group-hover:block hidden w-full bottom-0 bg-[#111111ca] backdrop-blur-md py-4 px-3">
            <div className="flex  w-full justify-between items-center">
              <div>
                <h1 className="md:text-xl text-textWhite font-medium">
                  Child trouble & care
                </h1>
                <p className="text-[#9d9d99] mt-0.2 text-sm">
                  Demostic & Transportation
                </p>
              </div>
              <button className="bg-yellowBg text-[#111] p-2 rounded-full">
                <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${trouble4})` }}
          className="h-ful md:col-span-7 col-span-12 bg-cover bg-center bg-no-repeat rounded-lg group relative"
        >
     <div className="hidden group-hover:block">
            <div className="bg-[#00000093] backdrop-blur-md absolute bottom-5 left-5  flex items-center justify-between w-2/3 md:w-[300px] rounded-xl text-white md:py-5 py-5 md:pl-4 md:pr-6 pl-3 pr-3">
              <div>
                <h1 className="md:text-xl text-textWhite font-medium">
                  Child trouble & care
                </h1>
                <p className="text-[#9d9d99] mt-0.2 text-sm">
                  Demostic & Transportation
                </p>
              </div>
              <button className="bg-yellowBg text-[#111] p-1 md:p-2 rounded-full">
                <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
       <div className="absolute -z-10 top-1/3 left-[5%]">
        <img className="w-[41%]" src={troubleLove} alt="" />
       </div>
    </section>
  );
};

export default ChildrenTrouble;
