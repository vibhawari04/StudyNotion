import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
//   <div className="h-[45px] w-0 border ml-5 my-2 border-dashed border-richblack-100"></div>
import ColorBlur from "../Homepage/ColorBlur";
const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company.",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority.",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skills.",
  },
  {
    Logo: Logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution.",
  },
];

const TimelineSection = () => {
  return (
    <div className=" flex flex-wrap flex-row justify-around   items-center  h-auto  ">
      <div className="flex flex-row flex-wrap   md:gap-5 justify-evenly items-center ">
        <div className="w-[410px] h-[432px]   flex flex-col justify-center  ">
          {timeline.map((element, index) => {
            return (
              <div className="flex flex-col gap-15  " key={index}>
                <div className="flex flex-row my-6 gap-5">
                  <div className="w-[52px] h-[52px] bg-white flex  items-center rounded-full justify-center">
                    <img src={element.Logo} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[18px]">
                      {element.heading}
                    </h2>
                    <p className="text-base">{element.Description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* left-[40%]  top-20 */}
      </div>
      <div className="z-[10] ">
        <div className="  w-[545px] h-[714px]  flex justify-center items-center   z-10 ">
          <div className="relative w-full">
            <div className=" shadow-[20px_20px_0px_0px_rgba(255,255,255,1)]">
              <img
                src={TimeLineImage}
                alt="timelineimage"
                className="shadow-white object-cover  w-fit z-10 h-full "
              />
            </div>
            <div className="sm:w-[511px] w-auto h-auto sm:h-[130px] bg-caribbeangreen-900 p-5 absolute  left-[2rem] bottom-10 sm:-bottom-[50px]">
              <div className="flex  flex-col sm:flex-row sm:gap-10 gap-5 ">
                <div className="flex  flex-row gap-5  items-center justify-center my-5">
                  <p className="font-inter text-white text-[50px] font-bold">
                    10
                  </p>
                  <p className="font-inter text-caribbeangreen-300 text-xl">
                    YEARS EXPERIENCE
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center justify-center my-5">
                  <p className="font-inter text-white text-[50px] font-bold">
                    250
                  </p>
                  <p className="font-inter text-caribbeangreen-300 text-xl">
                    TYPES OF COURSES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default TimelineSection;
