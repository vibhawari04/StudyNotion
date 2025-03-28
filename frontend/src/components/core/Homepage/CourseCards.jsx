import React from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import Card from "../Homepage/Card";

const CourseCards = ({ category, courses, setCourses, currentTab }) => {
  console.log(HomePageExplore[1].tag, category);
  return (
    <div>
      <div className=" flex flex-wrap justify-center items-center flex-row gap-[36px] mt-10">
        {HomePageExplore.map((data, index) => {
          console.log(index, data.courses);
          if (data.tag === category) {
            return data.courses.map((course, index) => {
              if (index === 0) {
                return (
                  <div className=" w-[315px] h-[300px]  ">
                    <Card
                      heading={course.heading}
                      description={course.description}
                      level={course.level}
                      lesson={course.lessionNumber}
                      firstCard={true}
                    />
                  </div>
                );
              } else {
                return (
                  <div className=" w-[315px] h-[300px]  ">
                    <Card
                      heading={course.heading}
                      description={course.description}
                      level={course.level}
                      lesson={course.lessionNumber}
                      firstCard={false}
                    />
                  </div>
                );
              }
            });
          }
        })}
      </div>
    </div>
  );
};

export default CourseCards;

// return (
//   <div>
//     {getCourse().map((course) => {
//       return (
//         <div className="mt-20 w-[315px] h-[300px] border-1 border">
//           <Card
//             heading={course.heading}
//             description={course.description}
//             level={course.level}
//             lesson={course.lessionNumber}
//           />
//         </div>
//       );
//     })}
//   </div>
// );
// };

// {HomePageExplore.map((data) => {
//   console.log(category, data.tag);
//   if (data.tab === category) {
//     return data.courses.map((course) => {});
//   }
// return (
//   <div className=" w-[315px] h-[300px]  ">
//     <Card
//       heading={course.heading}
//       description={course.description}
//       level={course.level}
//       lesson={course.lessionNumber}
//     />
//   </div>
// );
