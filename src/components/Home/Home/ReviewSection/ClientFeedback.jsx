
import { Rating } from "@smastrom/react-rating";
import clientImg from "../../../../assets/clientImg.png";
import HowImg from "../../../../assets/how.png";
import '@smastrom/react-rating/style.css'
const ClientFeedback = ({ client }) => {
  const { image, logo, name, testimonial, position, rating } = client;



  return (
    <div
      style={{ backgroundImage: `url(${clientImg})` }}
      className="bg-center bg-cover flex md:flex-row flex-col items-center gap-8 md:gap-16 mx-3 md:mr-5 lg:mx-0 lg:mr-0"
    >
      <div className="lg:w-[33%] w-full h-[300px] md:h-[450px] ">
        <img className="h-full object-cover w-full" src={image} alt="" />
      </div>
      <div className="lg:w-[50%] relative px-2 pb-4 md:px-0 md:pb-0">
        {/* logo img */}
        <div className="flex gap-4 items-center ">
          <figure>
            <img className="w-[60px] object-cover h-[60px] rounded-full" src={logo} alt="" />
          </figure>
          <div>
            <h3 className="text-[#121212] text-[18px] font-bold">{name}</h3>
            <p className="text-[#747474] text-sm">{position}</p>
          </div>
        </div>
        <p className="text-[#000000] max-w-[500px] mt-7">{testimonial}</p>
        <div className="absolute -bottom-5 right-28">
          <img className="w-[200px]" src={HowImg} alt="" />
        </div>
        {/* rating */}
        <div className="mt-5">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
