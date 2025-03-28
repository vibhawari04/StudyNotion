import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { resetPassword } from "../services/operations/authAPI";

const UpdatePassword = () => {
  console.log("update upload hi nhi hora hai ");

  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

  console.log("update pass wla page render hora hai");
  return (
    <div className=" text-white m-auto ">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="text-richblack-5 text-3xl">Choose new password</h1>
          <p className="my-2 text-richblack-100 w-[400px] text-xl">
            Almost done. Enter your new password and your all set.
          </p>
          <form onSubmit={handleOnSubmit}>
            <label>
              <p className="text-richblack-5 text-xl mb-2">
                New Password <sup className="text-[#FF0000]">*</sup>
              </p>
            </label>

            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleOnChange}
                className="text-richblack-5 bg-richblack-800 p-3 w-full rounded-md "
              />
              <span
                className="absolute right-10 top-3"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible fontSize={24} />
                ) : (
                  <AiFillEye fontSize={24} />
                )}
              </span>
            </div>

            <label>
              <p className="text-richblack-5 text-xl mt-3 mb-2 ">
                Confirm New Password <sup className="text-[#FF0000]">*</sup>
              </p>
            </label>
            <div className="relative">
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="confirm password"
                className="text-richblack-5 bg-richblack-800 p-3 w-full rounded-md "
              />
              <span
                className="absolute right-10 top-3"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <AiFillEyeInvisible fontSize={24} />
                ) : (
                  <AiFillEye fontSize={24} />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="w-full text-center bg-yellow-50 text-richblack-900 text-xl font-bold  p-2 rounded transition-all duration-200 my-5"
            >
              Reset Password{" "}
            </button>
          </form>
          <div>
            <Link to="/login" className="flex text-xl  gap-2 items-center">
              <AiOutlineArrowLeft />
              <p>Back To Login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
