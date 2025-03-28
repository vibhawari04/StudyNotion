import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../../common/IconBtn";
import { useNavigate } from "react-router-dom";
import { buyCourse } from "../../../../services/operations/studentFeaturesAPI";
const RenderTotalAmount = () => {
  const { total, cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id);
    console.log("Bought these course:", courses);
    //TODO: API integrate -> payment gateway tak leke jaegi
    buyCourse(token, courses, user, navigate, dispatch);
  };
  return (
    <div className="bg-richblack-700 border border-richblack-500 p-5 rounded space-y-2">
      <p className="text-xl text-richblack-5 font-bold">Total :</p>
      <p className="text-xl text-yellow-50 font-bold ">Rs. {total} </p>

      <IconBtn
        text="Buy Now"
        onClick={handleBuyCourse}
        customClasses={"w-full justify-center"}
      />
    </div>
  );
};

export default RenderTotalAmount;
