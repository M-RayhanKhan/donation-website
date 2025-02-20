import joinImg from "../../../../assets/home2/joinCommunity.png";
import heartGreen from "../../../../assets/heart (1) 1.png";
import Container from "../../../Container";
import loveImg from "../../../../assets/home2/love copy 2.png";
import errorImg from "../../../../assets/home2/Error.png";
import poorImg from "../../../../assets/home2/poorImg.png";
import poorLove from "../../../../assets/home2/poorLove.png";
import vector from "../../../../assets/home2/Vector.png";
import { useState } from "react";

import { RiArrowRightUpLine } from "react-icons/ri";

import Swal from "sweetalert2";

const JoinTheCommunity = () => {
  const [money, setMoney] = useState(0);

  const donateMoney = [
    { id: 1, money: 20 },
    { id: 2, money: 50 },
    { id: 3, money: 100 },
    { id: 4, money: 150 },
    { id: 5, money: "Coustom" },
  ];

  const handleMoney = (donateMoney) => {
    const donate = parseFloat(donateMoney);
    //  console.log(donate);
    if (isNaN(donate)) {
      alert("Coustom baby ekhon dan kora jave na.");
    } else {
      setMoney(donate);
    }
  };

  const JoinTheCommunity = {
    backgroundImage: `linear-gradient(-104.25deg, rgba(12, 26, 23, 0) 1.9%, rgba(9, 31, 27, 0.0754386) 15.92%, rgba(9, 31, 27, 0.172779) 24.99%, rgba(9, 31, 27, 0.372684) 29.75%, rgba(9, 31, 27, 0.671715) 56.36%, #091F1B 73.4%, #091F1B 95.2%, rgba(9, 31, 27, 0.905484) 103.44%), url(${joinImg})`,
  };

  const handleSuccess = (money, setMoney) => {
    if (money > 0) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "Do you want to donate?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Success",
              text: "Your donation is complete",
              icon: "success",
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "You didn't donate money",
              icon: "error",
            });
          }
          setMoney("");
        });
    } else {
      alert("please added money");
    }
  };

  return (
    <section className="relative">
      <div
        style={JoinTheCommunity}
        className="h-[600px] bg-cover bg-center bg-no-repeat "
      >
        <Container className="pt-20 flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src={heartGreen} alt="" />
              <p className="caveat font-medium text-yellowText text-xl">
                Start donating poor people
              </p>
            </div>
            <h1 className="text-textWhite mt-3  md:leading-[45px] font-bold text-4xl md:text-[48px]">
              Join The{" "}
              <span className="text-yellowText font-normal">Community</span> To
              Give <br className="hidden md:block" />
              Education For Children
            </h1>
          </div>
          {/* love image */}
          <div>
            <img className="w-[293px]" src={loveImg} alt="" />
          </div>
        </Container>
      </div>
      <Container className="lg:-mt-[350px] -mt-[290px]  mb-24 lg:h-[480px] ">
        {/* card container */}
        <div className="flex  flex-col lg:flex-row bg-[#ffffff]  rounded-3xl">
          {/* text content */}
          <div className="lg:w-[55%] space-y-4 py-5 md:px-10 px-2">
            <h1 className="text-[30px] font-bold text-title">
              This Poor it Important So Support
            </h1>
            <button className="bg-[#fdf8ea] relative w-full py-4 rounded-full text-start border px-16">
              <span className="text-title font-semibold ">Notice:</span>
              <span className="text-description">
                Test mode is enabled. While in test mode no live{" "}
                <br className="hidden md:block" />
                donations are processed.
              </span>
              <div className="bg-[#122F2A] w-[4px] h-[80px] absolute top-0 left-9"></div>
              <div className="w-[24px] h-[20px] absolute top-6 left-[25px] z-10">
                <img src={errorImg} alt="" />
              </div>
            </button>
            {/* donate poor people money */}
            <div className="">
              <label className="text-xl  font-bold text-title">
                Your Donation
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setMoney(parseFloat(e.target.value) || 0)}
                  value={`${money}`}
                  type="text"
                  className="w-full mt-2 py-3 pl-[56px] mb-5 rounded-full text-xl font-bold text-title outline-none bg-[#efefef]"
                />
                <button className="bg-[#122F2A] absolute top-3 left-1 px-4 py-2 rounded-full  text-textWhite font-bold text-xl">
                  $
                </button>
              </div>
              <div className="flex flex-wrap gap-5">
                {donateMoney.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => handleMoney(btn.money)}
                    className="font-bold rounded-3xl border w-[100px] h-[40px] hover:bg-greenBg hover:text-textWhite hover:border-[#122F2A] duration-500"
                  >
                    $ {btn.money}
                  </button>
                ))}
              </div>
              {/* donate online or offline  */}
              <div>
                <p className="text-[18px] mt-4 font-bold text-title">
                  Select Payment Method
                </p>
                {/* 1 */}
                <div className="flex gap-2 md:gap-0 mt-4">
                  <div className="inline-flex items-center  ">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full mr-2"
                      htmlFor="ripple-on"
                      data-ripple-dark="true"
                    >
                      <input
                        id="ripple-on"
                        type="checkbox"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer text-slate-600 text-sm"
                      htmlFor="ripple-on"
                    >
                      <p className="text-title font-bold">Test Donation</p>
                    </label>
                  </div>
                  {/* 2 */}
                  <div className="inline-flex items-center md:ml-3.5">
                    <label
                      className="flex items-center cursor-pointer relative"
                      htmlFor="ripple-off"
                    >
                      <input
                        type="checkbox"
                        className="peer  h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="ripple-off"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-3 text-slate-600 text-sm"
                      htmlFor="check-ripple-off"
                    >
                      <p className="text-title font-bold">Offline Donation</p>
                    </label>
                  </div>
                  {/* 3 */}
                  <div className="inline-flex items-center md:ml-3.5">
                    <label
                      className="flex items-center cursor-pointer relative"
                      htmlFor="ripple"
                    >
                      <input
                        type="checkbox"
                        className="peer  h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="ripple"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-3 text-slate-600 text-sm"
                      htmlFor="check-ripple-off"
                    >
                      <p className="text-title font-bold">Credit Card</p>
                    </label>
                  </div>
                </div>
                {/* donate button */}
                <div>
                  <button
                    onClick={() => handleSuccess(money, setMoney)}
                    className="bg-[#2c6b59] mt-6 text-textWhite md:px-10 w-full md:w-auto py-3 rounded-[30px] text-[14px] font-bold flex items-center justify-center"
                  >
                    <span>Donate Now</span>{" "}
                    <RiArrowRightUpLine className="text-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* image content */}
          <div className="lg:w-[45%] h-[480px]   flex justify-end ">
            <img
              className=" lg:w-[90%] h-full rounded-r-3xl object-cover"
              src={poorImg}
              alt=""
            />
          </div>
        </div>
      </Container>
      <div className="absolute  -bottom-16 left-0 -z-10 ">
        <img className="h-[200px]" src={vector} alt="" />
      </div>
    </section>
  );
};

export default JoinTheCommunity;
