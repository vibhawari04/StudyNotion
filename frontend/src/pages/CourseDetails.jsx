import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyCourse } from "../services/operations/studentFeaturesAPI";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import GetAvgRating from "../utils/avgRating";
import Error from "./Error";
import Footer from "../components/common/Footer";
import RatingStars from "../components/common/RatingStars";
import ConfirmationModal from "../components/common/ConfirmationModal";
import { formatDate } from "../services/formatDate";
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard";
import { FiGlobe } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar";
const CourseDetails = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const { loading } = useSelector((state) => state.profile);
  const { paymentLoading } = useSelector((state) => state.course);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  const [totalNoOfLectures, setTotalNoOFLectures] = useState(0);
  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    const getCourseFullDetails = async () => {
      try {
        const result = await fetchCourseDetails(courseId);
        setCourseData(result);
      } catch (error) {
        console.log("could not fetch course details");
      }
    };
    getCourseFullDetails();
  }, [courseId]);

  useEffect(() => {
    const count = GetAvgRating(
      courseData?.data?.courseDetails.ratingAndReviews
    );

    setAvgReviewCount(count);
  }, [courseData]);

  console.log(courseData);
  useState(() => {
    let lectures = 0;
    courseData?.data?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0;
    });
    setTotalNoOFLectures(lectures);
  }, [courseData]);

  const [isActive, setIsActive] = useState(Array(0));
  const handleActive = (id) => {
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat(id)
        : isActive.filter((e) => e != id)
    );
  };
  //  handle by course
  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "You are not Looged in",
      text2: "Please login to purchase the course",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (loading || !courseData) {
    return <div>Loading... </div>;
  }

  if (!courseData.success) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  console.log("courseData ", courseData);
  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentEnrolled,
    createdAt,
  } = courseData.data?.courseDetails;

  console.log(createdAt);
  return (
    <>
      <div className="flex flex-col flex-grow text-white flex-wrap font-inter ">
        <div className="gap-5 flex-wrap flex  flex-col   text-white">
          <div className="bg-richblack-800 py-20 px-20  flex flex-col w-full">
            <div className=" md:relative flex flex-col gap-5  py-10 w-11/12 max-w-maxContent  mx-auto   ">
              <img
                src={thumbnail}
                alt="thumbnail.image"
                className="max-h-[300px] min-h-[180px] w-[400px]   mx-auto rounded-xl lg:hidden block"
              />
              <p className="text-richblack-5  capitalize text-5xl font-bold ">
                {courseName}
              </p>
              <p className="text-richblack-300 capitalize text-xl">
                {courseDescription}
              </p>
              <div className="flex gap-3 flex-wrap text-richblack-5 text-lg">
                <span>
                  <p className="text-yellow-50 text-xl">{avgReviewCount}</p>
                </span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${ratingAndReviews.length} review)`}</span>
                <span>{studentEnrolled.length} Students Enrolled.</span>
              </div>
              <div className="flex flex-wrap">
                <p className="text-richblack-5 text-lg capitalize">
                  <span>Created By</span>{" "}
                  {`${instructor.firstName} ${instructor.lastName}`}
                </p>
              </div>
              <div className="flex text-richblack-5 text-lg flex-wrap flex-row gap-5 items-center">
                <div className="flex gap-2 items-center flex-wrap flex-row">
                  <MdErrorOutline />
                  <p>Created At</p> {formatDate(createdAt)}
                </div>
                <div className="flex gap-2 flex-row items-center">
                  {" "}
                  <FiGlobe />
                  <p> English</p>
                </div>
              </div>
              <div className="w-full h-0 border my-3 border-richblack-500 lg:hidden block"></div>
              <div className="lg:absolute sm:right-0  top-0 sm:p-5 ">
                <CourseDetailsCard
                  course={courseData?.data?.courseDetails}
                  setConfirmationModal={setConfirmationModal}
                  handleBuyCourse={handleBuyCourse}
                />
              </div>
              <div className="w-full h-0 border my-3 border-richblack-500 lg:hidden block"></div>
            </div>
          </div>
          <div className="w-11/12 max-w-maxContent mx-auto mt-5      ">
            <div className=" w-[60%] md:w-[30%] lg:w-[60%] max-w-maxContent  border-richblack-500 border-1 flex-wrap flex flex-col gap-5 mb-10">
              {" "}
              <div className="border border-richblack-500 flex flex-col gap-3  w-full  mx-auto  flex-wrap px-5 py-10  ">
                <p className="text-richblack-5 font-bold text-3xl  ">
                  {" "}
                  What You'll learn
                </p>
                <div className="text-richblack-5 text-xl ">
                  {whatYouWillLearn}
                </div>
              </div>
            </div>

            <div className="w-full max-w-maxContent ">
              <div className="text-3xl my-5 font-bold">
                <p>Course Content:</p>
              </div>

              <div className=" w-[60%] max-w-maxContent flex  flex-col flex-wrap md:flex-row gap-x-3 justify-between items-center">
                <div className="text-xl my-5 ">
                  <span>{courseContent.length} section(s) </span>
                  <span>{totalNoOfLectures} lectures </span>
                  <span>{courseData.data?.totalDuration} total length</span>
                </div>

                <div className="text-xl text-yellow-50">
                  <button onClick={() => setIsActive([])}>
                    Collapse all Sections
                  </button>
                </div>
              </div>
            </div>

            {/*  course details section */}
            <div className="py-4 max-w-maxContent w-[60%] md:w-[30%] lg:w-[60%]">
              {courseContent?.map((course, index) => {
                return (
                  <CourseAccordionBar
                    course={course}
                    key={index}
                    isActive={isActive}
                    handleActive={handleActive}
                  />
                );
              })}
            </div>
            {/* author details */}
            <div className="flex flex-col gap-5 capitalize  flex-wrap">
              <p className="text-richblack-5 text-2xl font-bold">Author</p>

              <div className=" flex flex-row gap-5  flex-wrap items-center">
                <img
                  src={
                    instructor.image
                      ? instructor.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                  }
                  alt="Author"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="text-2xl text-richblack-5">{`${instructor.firstName} ${instructor.lastName}`}</p>
              </div>
              <p className="text-richblack-50 text-xl ">
                {instructor?.additionalDetails?.about}
              </p>
            </div>
          </div>
        </div>

        {confirmationModal && (
          <ConfirmationModal modalData={confirmationModal} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
