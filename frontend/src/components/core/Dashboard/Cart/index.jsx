import { useSelector } from "react-redux";

import RenderCartCourses from "./RenderCartCourse";
import RenderTotalAmount from "./RenderTotalAmount";
import { BsEmojiSmile } from "react-icons/bs";

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.profile);

  console.log("total ", total);
  console.log("totalItem ", totalItems);

  return (
    <div>
      {" "}
      <div className="text-richblack-5  w-11/12 mx-auto max-w-maxContent ">
        <h1 className="text-2xl font-bold font-inter ">My Wishlist</h1>
        <p className="text-lg text-richblack-500  font-inter my-3">
          {totalItems} Courses in Cart
        </p>
        <div className="w-full border border-richblack-500"></div>

        {total > 0 ? (
          <div className=" w-full max-w-maxContent flex flex-col md:flex-row flex-wrap justify-between ">
            <div className=" w-full sm:w-3/4 p-5">
              <RenderCartCourses />
            </div>
            <div className=" w-full sm:w-1/4  p-5">
              {" "}
              <RenderTotalAmount />
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-2 items-center">
            {" "}
            <p className="text-xl my-5 font-bold font-inter ">
              Your Cart is Empty
            </p>
            <BsEmojiSmile className="text-xl font-bold" />
          </div>
        )}
      </div>
    </div>
  );
}
