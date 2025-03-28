import React from "react";
import { ImTree } from "react-icons/im";
import { HiMiniUsers } from "react-icons/hi2";

const Card = ({ heading, description, level, lesson, firstCard }) => {
  console.log(
    { heading },
    { description },
    { level },
    { lesson },
    { firstCard }
  );
  //rgba(250,350,-540,1)
  return (
    <div>
      <div
        className={`flex flex-col gap-3 ${
          firstCard === true
            ? "bg-white  shadow-[10px_10px_0px_0px_rgba(250,220,-540,1)] "
            : "bg-richblack-700 border-richblack-700"
        }  `}
      >
        <div
          className={`h-[244px]  flex flex-col gap-3 border-b-2 ${
            firstCard ? "border-richblack-50" : "border-richblack-600"
          } p-5 border-dashed`}
        >
          <p
            className={`text-xl font-semibold ${
              firstCard === true ? "text-richblack-800" : "text-richblack-25"
            }`}
          >
            {heading}
          </p>
          <p
            className={`${
              firstCard === true ? "text-richblack-500 " : "text-richblack-400"
            }  text-[16px] font-inter`}
          >
            {description}.
          </p>
        </div>
        <div
          className={`px-5 mb-2 flex flex-row  ${
            firstCard === true ? "text-blue-500" : "text-richblack-400"
          } justify-between items-center text-semibold `}
        >
          <div className="flex flex-row justify-between gap-3 items-center">
            <HiMiniUsers />
            <p>{level}</p>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center ">
            <ImTree />
            <p>{lesson}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
