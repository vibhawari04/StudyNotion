import React from "react";
import HighLightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../Homepage/Button";
const LearningLanguageSection = () => {
  return (
    <div className=" md:mt-[150px] max-w-maxContent">
      <div className="flex flex-col flex-wrap gap-5">
        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for
          <HighLightText text={" learning any language"} />
        </div>
        <div className="text-center font-inter text-xl text-richblack-600 mx-auto w-[60%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex   flex-col lg:flex-row items-center justify-center ">
          <img
            src={know_your_progress}
            alt="know-your-progress"
            className="object-contain relative sm:left-[8rem] "
          />
          <img
            src={compare_with_others}
            alt="compare_with_others"
            className="object-contain sm:relative  "
          />
          <img
            src={plan_your_lesson}
            alt="plan_your_lesson"
            className="object-contain relative  sm:right-[8rem]  "
          />
        </div>
        <div className="w-fit mx-auto py-[5rem]">
          <CTAButton active={true} linkto={"/login"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
