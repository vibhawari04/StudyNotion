import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getPasswordResetToken } from "../services/operations/authAPI";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ForgotPassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    console.log("e hu me ", e.target.value);
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="mx-auto my-auto">
      <div className="text-white flex justify-center items-center">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1 className="flex text-3xl text-richblack-5 mb-5">
              {!emailSent ? "Reset your Password" : "Check Your Email"}
            </h1>
            <p className="w-[400px] text-richblack-100 text-lg mb-10">
              {!emailSent
                ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                : `We have sent the reset email to ${email}`}
            </p>
            <form onSubmit={handleOnSubmit}>
              {!emailSent && (
                <label>
                  <p className="text-richblack-5 text-lg">
                    Email Address<sup className="text-[#FF0000]"> *</sup>{" "}
                  </p>
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    className=" text-richblack-100 bg-richblack-800 mt-2 border-b border-richblack-100 p-3 rounded-md w-full"
                  />
                </label>
              )}
              <button
                type="submit"
                className="w-full text-center bg-yellow-50 text-richblack-900 text-xl font-bold  p-2 rounded transition-all duration-200 my-5"
              >
                {!emailSent ? "Reset Password" : "Resend Email"}
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
    </div>
  );
};

export default ForgotPassword;
