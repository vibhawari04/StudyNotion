import React from "react";
import HighlightText from "../Homepage/HighlightText";

const Quote = () => {
  return (
    <div className=" lg:text-4xl font-bold lg:w-[1200px] mx-auto font-inter text-richblack-5  text-center sm:[300px]">
      " We are passionate about revolutionizing the way we learn. Our innovative
      platform
      <HighlightText text={" combines technology,"} />
      <span className="text-brown-500"> expertise</span>, and community to
      create an
      <span className="text-brown-500">
        {" "}
        unparalleled educational experience."
      </span>
    </div>
  );
};

export default Quote;
