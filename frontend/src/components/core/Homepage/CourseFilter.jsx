import React from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import { useState } from "react";

const CourseFilter = ({
  setCategory,
  category,
  setCourses,
  currentTab,
  setCurrentTab,
}) => {
  function filterHandler(tag) {
    setCategory(tag);
    setCurrentTab(tag);
  }

  return (
    <div className=" border border-richblack-700 flex flex-row gap-3 justify-center p-1.5 w-fit mx-auto  bg-richblack-800 rounded-full">
      {HomePageExplore.map((data) => {
        return (
          <div>
            <div
              className={`text-[16px] font-inter font-medium text-richblack-5 rounded-full cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 
              transition-all duration-200 p-2 ${
                currentTab === data.tag
                  ? "bg-richblack-900 text-richblack-5 font medium"
                  : "text-richblack-200"
              }`}
              key={data.id}
              onClick={() => filterHandler(data.tag)}
            >
              {data.tag}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseFilter;
