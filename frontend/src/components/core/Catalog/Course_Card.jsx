import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../common/RatingStars";
import { useState } from "react";
import { useEffect } from "react";
import GetAvgRating from "../../../utils/avgRating";

const Course_Card = ({ course, Height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <div>
      <Link to={`/courses/${course._id}`}>
        <div>
          <div>
            <img
              src={course?.thumbnail}
              alt="course-thumbnail"
              className={`${Height} w-full rounded-xl object-cover`}
            />
          </div>
          <div className="flex flex-col gap-2 text-lg capitalize p-3">
            <p className="text-2xl ">{course?.courseName}</p>
            <p>
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex flex-row gap-3">
              <span>{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-lg text-richblack-500">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>
            <p>RS. {course?.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Course_Card;
