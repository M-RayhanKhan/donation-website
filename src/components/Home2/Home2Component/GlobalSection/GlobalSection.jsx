import React from "react";
import golobarImg from "../../../../assets/marquee/golobalImg.png";
import heartYellow from "../../../../assets/heart (1) 1.png";

const GlobalSection = ({title}) => {
  const linerGradientImg = {
    backgroundImage: `linear-gradient(-104.25deg, rgba(12, 26, 23, 0) 1.9%, rgba(9, 31, 27, 0.0754386) 37.31%, rgba(9, 31, 27, 0.172779) 40.18%, rgba(9, 31, 27, 0.372684) 47.05%, rgba(9, 31, 27, 0.671715) 56.36%, #091F1B 73.4%, #091F1B 95.2%, rgba(9, 31, 27, 0.905484) 103.44%), url(${golobarImg})
`,
  };

  return (
    <section
      style={linerGradientImg}
      className="h-[450px] border-2 bg-center bg-cover flex flex-col justify-center items-center bg-no-repeat"
    >
      <div className="flex justify-center items-center gap-2">
        <img className="w-5 h-5" src={heartYellow} alt="" />
        <p className="caveat font-medium text-yellowText text-xl">
          Start donating poor people
        </p>
      </div>
      <h1 className="md:text-[70px] text-5xl font-bold text-textWhite">{title}</h1>
    </section>
  );
};

export default GlobalSection;
