import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../components/common/Footer";
import CourseReviewModal from "../components/core/VideoCourse/CourseReviewModal";
import VideoDetailsSidebar from "../components/core/VideoCourse/VideoDetailsSidebar";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";

export default function ViewCourse() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [reviewModal, setReviewModal] = useState(false);

  useEffect(() => {
    (async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token);
      // console.log("Course Data here... ", courseData.courseDetails)
      dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
      dispatch(setEntireCourseData(courseData.courseDetails));
      dispatch(setCompletedLectures(courseData.completedVideos));
      let lectures = 0;
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length;
      });
      dispatch(setTotalNoOfLectures(lectures));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="md:relative  ">
        {" "}
        <div className="relative  flex-col  min-h-[calc(100vh-3.5rem)]">
          <div className="flex flex-col sm:flex-row">
            <VideoDetailsSidebar setReviewModal={setReviewModal} />
            <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
              <div className="mx-6 mt-5">
                <Outlet />
              </div>
            </div>
          </div>
          <div className=" m-20 md:absolute md:top-20 md:left-[40%] ">
            {" "}
            {reviewModal && (
              <CourseReviewModal setReviewModal={setReviewModal} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
