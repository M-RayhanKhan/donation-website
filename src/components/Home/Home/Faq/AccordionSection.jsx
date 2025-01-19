import heartGreen from "../../../../assets/heartGreen.png";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import africImg1 from '../../../../assets/afrika1.png'
import africImg2 from '../../../../assets/afrika2.png'
import cloumImg from '../../../../assets/cloum.png'

const AccordionSection = () => {
  const  Icon = ({ id, open }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180  text-white " : ""
        } h-5 w-5  transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="flex flex-col lg:flex-row  mb-10 max-w-7xl mx-auto gap-5   md:gap-16">
      <div className="lg:w-[50%] px-2 md:px-4 lg:px-0">
        <div>
          <div className="flex items-center gap-2">
            <img className="w-5 h-5" src={heartGreen} alt="" />
            <p className="caveat font-medium text-[#2c6b59] text-xl">
              Start donating poor people
            </p>
          </div>
          <h1 className="text-title mt-2 mb-6 md:leading-[40px] font-bold text-4xl md:text-[40px]">
            Frequently Asked <br />
            Questions
          </h1>
        </div>
        {/* accordion */}
        <div className="flex flex-col gap-6">
          {/*  accordion 1 */}
          <Accordion className={`${open === 1 ? " border rounded-3xl" : "bg-white  rounded-3xl "}`} open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className={`${open === 1 ? "bg-[#2f715e] text-white px-5 rounded-t-3xl" : "bg-white px-5 border rounded-full"}`} onClick={() => handleOpen(1)}>
           <span className="md:text-xl text-sm"> What kind of recipes can I find on your website?</span>
            </AccordionHeader>
            <AccordionBody className="px-5 text-justify">
            It is a long established fact that a reader will be distracted by the readable the a content of a page when looking at its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
            </AccordionBody>
          </Accordion>
          {/*  accordion 2 */}
          <Accordion className={`${open === 2 ? " border rounded-3xl" : "bg-white  rounded-3xl "}`} open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader className={`${open === 2 ? "bg-[#2f715e] text-white px-5 rounded-t-3xl" : "bg-white px-5 border rounded-full"}`} onClick={() => handleOpen(2)}>
           <span className="md:text-xl text-sm">Are the recipes suitable for beginners?</span>
            </AccordionHeader>
            <AccordionBody className="px-5 text-justify">
            It is a long established fact that a reader will be distracted by the readable the a content of a page when looking at its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
            </AccordionBody>
          </Accordion>
          {/*  accordion 3 */}
          <Accordion className={`${open === 3 ? " border rounded-3xl" : "bg-white  rounded-3xl "}`} open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader className={`${open === 3 ? "bg-[#2f715e] text-white px-5 rounded-t-3xl" : "bg-white px-5 border rounded-full"}`} onClick={() => handleOpen(3)}>
           <span className="md:text-xl text-sm">Do you offer cooking tips and techniques?</span>
            </AccordionHeader>
            <AccordionBody className="px-5 text-justify">
            It is a long established fact that a reader will be distracted by the readable the a content of a page when looking at its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
            </AccordionBody>
          </Accordion>
          {/*  accordion 4 */}
          <Accordion className={`${open === 4 ? " border rounded-3xl" : "bg-white  rounded-3xl "}`} open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader className={`${open === 4 ? "bg-[#2f715e] text-white px-5 rounded-t-3xl" : "bg-white px-5 border rounded-full"}`} onClick={() => handleOpen(4)}>
           <span className="md:text-xl text-sm">How frequently do you update your recipe collection?</span>
            </AccordionHeader>
            <AccordionBody className="px-5 text-justify">
            It is a long established fact that a reader will be distracted by the readable the a content of a page when looking at its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="lg:w-[50%]  relative flex justify-start items-center py-16 bg-[#2c6b59]">
            <div className="h-[430px] pl-10">
                <img className=" w-full h-full" src={africImg1} alt="" />
            </div>
            <div className="absolute top-28 lg:right-[180px] md:right-5 right-0 md:w-[300px] lg:w-[180px] w-[180px]">
                <img className="object-contain" src={africImg2} alt="" />
            </div>
            <div className="absolute lg:-left-5 md:right-[180px] h-[560px]">
                <img className="object-contain  h-full" src={cloumImg} alt="" />
            </div>
      </div>
    </section>
  );
};

export default AccordionSection;
