import Marquee from "react-fast-marquee";
import marqueeImg1 from "../../../../assets/marquee/marquee1.png";
import marqueeImg2 from "../../../../assets/marquee/marquee2.png";
import marqueeImg3 from "../../../../assets/marquee/marquee3.png";
import marqueeImg4 from "../../../../assets/marquee/marquee4.png";
import marqueeImg5 from "../../../../assets/marquee/marquee5.png";
import marqueeImg6 from "../../../../assets/marquee/marquee6.png";

const MarqueeSection = () => {
  return (
    <div className="">
      <Marquee className="w-full">
        <div>
          <img
            className="object-contain  h-[250px]"
            src={marqueeImg1}
            alt=""
          />
        </div>
        <div>
          <img
            className="object-contain  h-[250px]"
            src={marqueeImg2}
            alt=""
          />
        </div>
        <div>
          <img
            className="object-contain  h-[250px]"
            src={marqueeImg3}
            alt=""
          />
        </div>
        <div>
          <img
            className="object-contain  h-[250px]"
            src={marqueeImg4}
            alt=""
          />
        </div>
        <div>
          <img
            className="object-contain  h-[250px]"
            src={marqueeImg5}
            alt=""
          />
        </div>
        <div>
          <img
            className="object-contain h-[250px]"
            src={marqueeImg6}
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
