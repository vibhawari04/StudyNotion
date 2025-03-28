import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighLightText from "./HighlightText";
import CTAbutton from "./Button";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

const InstructorSection = () => {
  return (
    <div>
      <div className="flex my-20 p-20  mx-auto   flex-col lg:flex-row gap-20  ">
        <div className="lg:w-[50%]">
          <img
            src={Instructor}
            alt=""
            className="shadow-white shadow-[-20px_-20px_0_0]"
          />
        </div>
        <div className="lg:w-[50%] flex gap-10 flex-col">
          <h1 className="lg:w-[50%] text-4xl font-semibold ">
            Become an
            <HighLightText text={" instructor"} />
          </h1>

          <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit ">
            <CTAbutton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Teaching Today
                <BiRightArrowAlt />
              </div>
            </CTAbutton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
