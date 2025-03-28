import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponent = () => {
  return (
    <section className="bg-richblack-800 mb-20 ">
      <div className=" p-10 w-11/12 max-w-maxContent  mx-auto">
        <div className="flex flex-wrap justify-center text-center gap-10">
          {Stats.map((data, index) => {
            return (
              <div key={index} className=" ">
                <h1 className="font-inter text-2xl font-semibold text-richblack-5">
                  {data.count}
                </h1>
                <h2 className="text-richblack-500 text-[16px] font-inter">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;
