import React from "react";
import HighLightText from "./HighlightText";
import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseFilter from "../Homepage/CourseFilter";
import CourseCards from "../Homepage/CourseCards";

const ExploreMore = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("Free");
  const [currentTab, setCurrentTab] = useState("Free");
  console.log("setCategory ", category, currentTab);

  return (
    <div className="flex  flex-col justify-center gap-3 items-center">
      <div className="w-[350px] sm:w-full sm:text-center  text-4xl font-semibold ">
        Unlock the <HighLightText text={" Power of Code"} />
      </div>
      <p className="text-richblack-300 text-xl ">
        Learn to Build Anything You Can Imagine
      </p>
      <div className="hidden sm:block">
        <CourseFilter
          setCategory={setCategory}
          setCourses={setCourses}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          category={category}
        />
      </div>
      <div className=" z-10  ">
        <CourseCards
          category={category}
          courses={courses}
          setCategory={setCategory}
          currentTab={currentTab}
        />
      </div>
    </div>
  );
};

export default ExploreMore;
