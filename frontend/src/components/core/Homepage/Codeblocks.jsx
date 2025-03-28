import React from "react";
import CTAbutton from "./Button";
import HighLightText from "./HighlightText";
import { BiRightArrowAlt } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

const Codeblocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  BackgroundGradient,
  codeColor,
}) => {
  return (
    <div
      className={`flex ${position} flex-col sm:flex-row my-20 justify-between gap-10 `}
    >
      {/*  section 1  */}
      <div className="w-full sm:w-[50%] flex flex-col gap-8 ">
        {heading}
        <div className="text-richblack-300 font-bold">{subheading}</div>
        <div className="flex gap-7 mt-7 w-fit">
          {" "}
          <CTAbutton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText} <BiRightArrowAlt />
            </div>
          </CTAbutton>
          <CTAbutton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            <div className="flex gap-2 items-center">{ctabtn2.btnText}</div>
          </CTAbutton>
        </div>
      </div>

      {/*  section 2 */}
      <div
        className=" relative h-fit flex flex-row text-[10px] w-[100%] py-4 lg:w-[450px] 
       bg-gradient-to-br from-[#0E1A2D3D] from-24% to-[#111E3261] to-38%   border-t border-l    "
      >
        {/* hw -> bg grqadent */}

        {/* <div
          className={`absolute bottom-2 left-10 h-[300px] w-[300px] bg-gradient-to-r from-${BackgroundGradient.color1} from-100% via-${BackgroundGradient.color2} to-${BackgroundGradient.color3} to-100% rounded-full filter opacity-[40%] blur-3xl`}
        ></div> */}

        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
        <div
          className={`w-[90%] flex flex-col grap-2 font-bold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Codeblocks;
