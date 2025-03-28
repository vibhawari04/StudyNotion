import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiNinjaStar } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from "../../../../slices/cartSlice";
import ReactStars from "react-rating-stars-component";

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("render  cart courses");
  return (
    <div className=" w-full flex flex-col gap-5">
      {cart.map((course, index) => (
        <div className="flex flex-col md:flex-row bg-richblack-800 rounded-md border border-richblack-500 justify-evenly gap-5 p-5">
          <div className="flex flex-col  md:flex-row  gap-5 w-3/4">
            <div className=" w-[250px]  rounded-lg">
              <img
                src={course?.thumbnail}
                className="w-[150px] mx-auto sm:w-[250px]"
              />
            </div>
            <div className=" w-full">
              <p className="text-lg text-richblack-5 font-bold font-inter capitalize ">
                {course?.courseName}
              </p>
              <p className="text-md text-richblack-500 font-inter capitalize">
                {course?.category?.name}
              </p>
              <div className="flex flex-row gap-2 items-center ">
                <span>4.8</span>
                <ReactStars
                  count={5}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emtpyIcon={<GiNinjaStar />}
                  fullIcon={<GiNinjaStar />}
                />

                <span>{course?.ratingAndReviews?.length} Ratings</span>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-2 ">
            <button
              onClick={() => dispatch(removeFromCart(course._id))}
              className="flex  flex-row gap-2 items-center font-inter text-md border border-richblack-400 p-2 bg-richblack-700 rounded-md text-pink-300"
            >
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>

            <p className="text-yellow-50 text-xl font-bold">
              Rs. {course?.price}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderCartCourses;
