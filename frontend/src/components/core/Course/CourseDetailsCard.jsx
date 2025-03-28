import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import copy from "copy-to-clipboard";
import { ACCOUNT_TYPE } from "../../../utils/constant";
import { addToCart } from "../../../slices/cartSlice";
import { BiSolidRightArrow } from "react-icons/bi";
import { LiaShareSquareSolid } from "react-icons/lia";
const CourseDetailsCard = ({
  course,
  setConfirmationModal,
  handleBuyCourse,
}) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor, You Can't buy a course");
      return;
    }

    if (token) {
      dispatch(addToCart(course));
      toast.success("add ho gaya");
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in",
      text2: "Please login to add to cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };
  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link to clipboard");
  };
  const { thumbnail: ThumbnailImage, price: CurrentPrice } = course;
  return (
    <div className=" lg:bg-richblack-700  rounded-lg  flex flex-col flex-grow font-inter md:p-2  ">
      <img
        src={ThumbnailImage}
        alt="thumbnail.image"
        className="max-h-[300px] min-h-[180px] w-[400px] hidden lg:block m-2  rounded-xl"
      />
      <div className="text-3xl font-bold text-richblack-50 lg:mt-2">
        Rs. {CurrentPrice}
      </div>
      <div>
        <button
          onClick={
            user && course?.studentEnrolled.includes(user?._id)
              ? () => navigate("/dashboard/enrolled-courses")
              : handleBuyCourse
          }
          className="text-2xl  text-richblack-900 hover:cursor-pointer bg-yellow-50 rounded-lg p-2 lg:p-1 text-center border w-full  mt-5"
        >
          {user && course?.studentEnrolled.includes(user?._id)
            ? "Go to Course"
            : "Buy Course"}
        </button>
        {!course?.studentEnrolled.includes(user?._id) && (
          <button
            onClick={handleAddToCart}
            className="hover:cursor-pointer text-center w-full md:bg-richblack-800 md:rounded-lg text-2xl  my-3   md:p-1 text-richblack-5"
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className="hidden lg:block  capitalize text-richblack-5  md:p-3">
        <p className="text-center text-md my-3 ">30-Day Money-Back Guarantee</p>
        <p className="text-xl font-bold">This Course includes : </p>

        <div className=" text-caribbeangreen-300 text-sm flex flex-col gap-y-3">
          {course?.instructions?.map((item, index) => (
            <p key={index} className="flex flex-row gap-2 items-center">
              <span>
                <BiSolidRightArrow />
              </span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
      <div>
        <button
          className="hover:cursor-pointer justify-center w-full text-xl md:p-6 text-yellow-50 flex gap-2 items-center"
          onClick={handleShare}
        >
          <span>
            <LiaShareSquareSolid />
          </span>
          Share
        </button>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
