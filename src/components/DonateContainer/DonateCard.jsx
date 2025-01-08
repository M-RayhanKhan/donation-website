import { Link } from "react-router-dom";

const DonateCard = ({ items }) => {
  const { title, category, description, progress, image } = items;
  return (
    <div className="rounded-[14px] group relative px-2.5 pt-2.5 bg-base-100 ">
      <figure className="w-full h-[212px]">
        <img className="w-full h-full object-cover rounded-[14px]" src={image} alt="Not found image" />
      </figure>
      <div className="py-2">
        <h2 className="text-title text-[22px] font-bold">{title}</h2>
        <p className="text-description mt-1 mb-3 leading-5">{description}</p>
        <div className="bg-[#f5f5f3] flex flex-col rounded-lg px-4 py-3">
          <div className="flex justify-between">
            <h6 className="font-bold text-title">Donate</h6>
            <p className="font-bold text-title">{progress.percent}% </p>
          </div>
          {/* progress */}
          <progress
            className="progress progress-warning w-full"
            value={`${progress.percent}`}
            max="100"
          ></progress>
          <div className="flex mt-1 justify-between">
            <h6 className="font-bold text-title">
              {" "}
              <span>Raised: ${progress.raised}</span>{" "}
            </h6>
            <h6 className="font-bold text-title">
              Goal:{" "}
              <span className="text-yellowText inter font-medium">
                ${progress.goal}
              </span>{" "}
            </h6>
          </div>
          <Link>
            <button className="hover:bg-greenBg duration-1000  mt-2 px-7 text-[14px] font-bold py-[10px] rounded-full border border-[#122f2a] text-[#122f2a] hover:text-textWhite box-border  ">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute top-4 left-5"> 
      <Link>
            <button className="group-hover:bg-greenBg duration-1000 mt-2 px-6 text-[14px] font-bold py-1 bg-yellowBg rounded-2xl text-[#122f2a] group-hover:text-textWhite box-border  ">
              {category}
            </button>
          </Link>
      </div>
    </div>
  );
};

export default DonateCard;
